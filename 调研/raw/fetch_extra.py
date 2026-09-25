# -*- coding: utf-8 -*-
"""补充抓取其他公告频道(717/718)，并打印指定 iInfoId 的公告全文。"""
import json
import os
import time
import urllib.parse
import urllib.request

API = "https://act-api-takumi-static.mihoyo.com/content_v2_user/app/16471662a82d418a"
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0 Safari/537.36")
HERE = os.path.dirname(os.path.abspath(__file__))


def get(path, **params):
    params.setdefault("iAppId", "43")
    params.setdefault("sLangKey", "zh-cn")
    url = API + "/" + path + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Referer": "https://ys.mihoyo.com/"})
    with urllib.request.urlopen(req, timeout=45) as r:
        return json.loads(r.read().decode("utf-8", "replace"))


def fetch_channel(cid):
    items, page = [], 1
    while True:
        js = get("getContentList", iChanId=cid, iPageSize=50, iPage=page)
        d = js.get("data") or {}
        lst = d.get("list") or []
        items.extend(lst)
        if not lst or len(items) >= (d.get("iTotal") or 0) or page > 30:
            break
        page += 1
        time.sleep(0.3)
    return items


import re


def strip_html(s):
    s = re.sub(r"<br\s*/?>", "\n", s or "")
    s = re.sub(r"</(p|li|div|h[1-6]|tr)>", "\n", s)
    s = re.sub(r"<li>", "・", s)
    s = re.sub(r"<[^>]+>", "", s)
    for a, b in [("&nbsp;", " "), ("&mdash;", "—"), ("&middot;", "·"), ("&hellip;", "…"),
                 ("&ldquo;", "“"), ("&rdquo;", "”"), ("&amp;", "&"), ("&bull;", "•"),
                 ("&gt;", ">"), ("&lt;", "<")]:
        s = s.replace(a, b)
    return re.sub(r"\n{3,}", "\n\n", s).strip()


if __name__ == "__main__":
    extra = []
    for cid in (717, 718):
        try:
            its = fetch_channel(cid)
            print("chan %s -> %d" % (cid, len(its)))
            extra.extend(its)
        except Exception as e:  # noqa: BLE001
            print("chan %s err %s" % (cid, e))
    path = os.path.join(HERE, "官方公告归档_补充频道.json")
    json.dump([{"iInfoId": i.get("iInfoId"), "sTitle": i.get("sTitle"),
                "dtCreateTime": i.get("dtCreateTime"), "text": strip_html(i.get("sContent", ""))}
               for i in extra], open(path, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("WROTE", path, len(extra))

    # 打印早期小版本更新说明全文
    want = [118769, 118775, 118779, 118780, 118787, 118797]
    out = []
    for iid in want:
        try:
            js = get("getContent", iInfoId=iid)
            d = js.get("data") or {}
            out.append("=" * 70)
            out.append("iInfoId=%s  %s  %s" % (iid, d.get("sTitle"), d.get("dtCreateTime")))
            out.append("URL: https://ys.mihoyo.com/main/news/detail/%s" % iid)
            out.append("-" * 70)
            out.append(strip_html(d.get("sContent", "")))
        except Exception as e:  # noqa: BLE001
            out.append("iInfoId=%s ERR %s" % (iid, e))
        time.sleep(0.3)
    txt = "\n".join(out)
    open(os.path.join(HERE, "官方_早期小版本更新说明.txt"), "w", encoding="utf-8").write(txt)
    print("len(early notes) =", len(txt))
