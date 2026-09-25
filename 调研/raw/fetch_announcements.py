# -*- coding: utf-8 -*-
"""抓取《原神》官网（简中）公告归档，检索元素反应相关历史调整。
用法: python fetch_announcements.py
输出: 调研/raw/官方公告归档.json  +  调研/raw/官方公告归档_检索.txt
"""
import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request

API = "https://act-api-takumi-static.mihoyo.com/content_v2_user/app/16471662a82d418a"
APP = "43"
LANG = "zh-cn"
OUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)))
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0 Safari/537.36")


def get(path, **params):
    params.setdefault("iAppId", APP)
    params.setdefault("sLangKey", LANG)
    url = API + "/" + path + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Referer": "https://ys.mihoyo.com/"})
    with urllib.request.urlopen(req, timeout=45) as r:
        raw = r.read().decode("utf-8", "replace")
    return url, json.loads(raw)


def fetch_channel(chan_id):
    items = []
    page = 1
    while True:
        url, js = get("getContentList", iChanId=chan_id, iPageSize=50, iPage=page)
        data = js.get("data") or {}
        lst = data.get("list") or []
        total = data.get("iTotal") or 0
        items.extend(lst)
        if not lst or len(items) >= total or page > 20:
            break
        page += 1
        time.sleep(0.4)
    return items


def strip_html(s):
    s = re.sub(r"<br\s*/?>", "\n", s or "")
    s = re.sub(r"</(p|li|div|h[1-6]|tr)>", "\n", s)
    s = re.sub(r"<li>", "・", s)
    s = re.sub(r"<[^>]+>", "", s)
    s = s.replace("&nbsp;", " ").replace("&mdash;", "—").replace("&middot;", "·")
    s = s.replace("&hellip;", "…").replace("&ldquo;", "“").replace("&rdquo;", "”")
    s = s.replace("&amp;", "&").replace("&bull;", "•").replace("&gt;", ">").replace("&lt;", "<")
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def main():
    chan_ids = [721, 722, 723, 720]
    try:
        _, tree = get("getChildTree", iChanId=717)
        print("childtree(717):", json.dumps(tree, ensure_ascii=False)[:800])
    except Exception as e:  # noqa: BLE001
        print("childtree err", e)

    all_items = {}
    for cid in chan_ids:
        try:
            items = fetch_channel(cid)
        except Exception as e:  # noqa: BLE001
            print("chan %s err %s" % (cid, e))
            continue
        print("chan %s -> %d items" % (cid, len(items)))
        for it in items:
            all_items[it.get("iInfoId")] = it
        time.sleep(0.4)

    rows = []
    for info_id, it in all_items.items():
        rows.append({
            "iInfoId": info_id,
            "sTitle": it.get("sTitle", ""),
            "dtCreateTime": it.get("dtCreateTime", ""),
            "sChanId": it.get("sChanId", []),
            "text": strip_html(it.get("sContent", "")),
        })
    rows.sort(key=lambda r: r["dtCreateTime"])

    with open(os.path.join(OUT_DIR, "官方公告归档.json"), "w", encoding="utf-8") as f:
        json.dump(rows, f, ensure_ascii=False, indent=1)

    kws = ["感电", "燃烧", "碎冰", "打断系数", "元素反应", "超载", "超导", "扩散", "结晶", "冻结"]
    lines = []
    lines.append("# 官方公告归档检索（简中，ys.mihoyo.com 公告频道）")
    lines.append("共 %d 篇；抓取时间：2026-09-22" % len(rows))
    lines.append("")
    lines.append("## 一、含「元素反应类」关键词的公告条目（逐条命中行）")
    for r in rows:
        hits = []
        for ln in r["text"].split("\n"):
            if any(k in ln for k in kws):
                hits.append(ln.strip())
        if hits:
            lines.append("")
            lines.append("### [%s] %s  (iInfoId=%s)" % (r["dtCreateTime"], r["sTitle"], r["iInfoId"]))
            for h in hits:
                lines.append("- " + h)
    lines.append("")
    lines.append("## 二、全部公告标题清单（按时间）")
    for r in rows:
        lines.append("%s | %s | iInfoId=%s | chan=%s" % (r["dtCreateTime"], r["sTitle"], r["iInfoId"], r["sChanId"]))
    with open(os.path.join(OUT_DIR, "官方公告归档_检索.txt"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print("WROTE", len(rows), "rows")


if __name__ == "__main__":
    main()
