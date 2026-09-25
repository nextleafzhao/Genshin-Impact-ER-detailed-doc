# -*- coding: utf-8 -*-
"""抓取 HoYoverse 全球官网新闻/公告归档（日文 + 英文），检索元素反应相关修正。"""
import json
import os
import re
import time
import urllib.parse
import urllib.request

BASE = "https://sg-public-api-static.hoyoverse.com/content_v2_user/app/a1b1f9d3315447cc"
APP = "32"
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0 Safari/537.36")
HERE = os.path.dirname(os.path.abspath(__file__))


def get(path, **params):
    params.setdefault("iAppId", APP)
    url = BASE + "/" + path + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA,
                                              "Referer": "https://genshin.hoyoverse.com/"})
    with urllib.request.urlopen(req, timeout=45) as r:
        return json.loads(r.read().decode("utf-8", "replace"))


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


def fetch_channel(cid, lang):
    items, page = [], 1
    while True:
        js = get("getContentList", iChanId=cid, iPageSize=50, iPage=page, sLangKey=lang)
        d = js.get("data") or {}
        lst = d.get("list") or []
        items.extend(lst)
        if not lst or len(items) >= (d.get("iTotal") or 0) or page > 40:
            break
        page += 1
        time.sleep(0.25)
    return items


KEY_JA = ["感電", "燃焼", "粉砕", "破砕", "中断", "ひるみ", "元素熟知", "元素反応"]
KEY_EN = ["Electro-Charged", "Burning", "Shatter", "interrupt", "Elemental Mastery",
          "transformative", "Elemental Reaction"]

if __name__ == "__main__":
    for lang in ("ja-jp", "en-us"):
        try:
            tree = get("getChildTree", iChanId=395, sLangKey=lang)
            print("TREE", lang, json.dumps(tree, ensure_ascii=False)[:1200])
        except Exception as e:  # noqa: BLE001
            print("tree err", lang, e)
        keys = KEY_JA if lang == "ja-jp" else KEY_EN
        allrows = {}
        for cid in (397,):
            try:
                its = fetch_channel(cid, lang)
            except Exception as e:  # noqa: BLE001
                print("  chan", cid, "err", e)
                continue
            print("  chan %s -> %d" % (cid, len(its)))
            for it in its:
                allrows[it.get("iInfoId")] = it
        rows = sorted(({"iInfoId": i, "sTitle": v.get("sTitle", ""),
                        "dtCreateTime": v.get("dtCreateTime", ""),
                        "text": strip_html(v.get("sContent", ""))} for i, v in allrows.items()),
                      key=lambda r: r["dtCreateTime"])
        out = os.path.join(HERE, "全球官网归档_%s.json" % lang)
        json.dump(rows, open(out, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
        print("WROTE", out, len(rows))
        hits = []
        for r in rows:
            for ln in r["text"].split("\n"):
                s = ln.strip()
                if s and any(k.lower() in s.lower() for k in keys):
                    hits.append("[%s] %s (iInfoId=%s)\n    %s" % (r["dtCreateTime"], r["sTitle"], r["iInfoId"], s))
        open(os.path.join(HERE, "全球官网检索_%s.txt" % lang), "w", encoding="utf-8").write("\n".join(hits))
        print("hits", len(hits))
