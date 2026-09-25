# -*- coding: utf-8 -*-
"""在已抓取的官方公告归档中检索关键词。"""
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROWS = json.load(open(os.path.join(HERE, "官方公告归档.json"), encoding="utf-8"))


def search(patterns, must_all=None, out=None):
    res = []
    for r in ROWS:
        for ln in r["text"].split("\n"):
            s = ln.strip()
            if not s:
                continue
            if any(re.search(p, s) for p in patterns):
                if must_all and not all(re.search(p, s) for p in must_all):
                    continue
                res.append((r["dtCreateTime"], r["sTitle"], r["iInfoId"], s))
    print("### patterns=%s  hits=%d" % (patterns, len(res)))
    for dt, t, iid, s in res:
        print("[%s] %s (iInfoId=%s)\n    %s" % (dt, t, iid, s))
    print()
    return res


if __name__ == "__main__":
    print("总条目:", len(ROWS))
    print()
    search([r"打断"])
    search([r"硬直|僵直|踉跄"])
    search([r"碎冰"])
    search([r"感电"], must_all=[r"调整|修改|修复了感电反应|不再"])
