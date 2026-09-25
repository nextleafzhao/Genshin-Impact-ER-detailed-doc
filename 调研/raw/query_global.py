# -*- coding: utf-8 -*-
"""针对全球官网归档做定向检索。"""
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))

for lang, pats in (("ja-jp", [r"熟知.*燃焼", r"燃焼.*熟知", r"氷砕き", r"中断"]),
                   ("en-us", [r"Burning.*Elemental Mastery", r"Shatter", r"interrupt"])):
    rows = json.load(open(os.path.join(HERE, "全球官网归档_%s.json" % lang), encoding="utf-8"))
    print("=== %s  rows=%d  earliest=%s ===" % (lang, len(rows), rows[0]["dtCreateTime"] if rows else "?"))
    for p in pats:
        print("--- pattern:", p)
        n = 0
        for r in rows:
            for ln in r["text"].split("\n"):
                s = ln.strip()
                if s and re.search(p, s, re.I):
                    print("  [%s] %s (iInfoId=%s)" % (r["dtCreateTime"], r["sTitle"], r["iInfoId"]))
                    print("     ", s[:400])
                    n += 1
        print("   hits:", n)
    print()
