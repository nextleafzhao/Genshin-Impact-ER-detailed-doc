# 原文留档：KQM《Lunar Reaction Guide》— Lunar-Charged 与 Gauge Mechanics 节

- URL：https://keqingmains.com/misc/lunar
- 抓取日期：2026-09-22（本地既有缓存文件 `keqingmains.com-d288cecd51973a16.cache.md`，抓取时间戳 1789998130 ≈ 2026 年；本次核实以缓存正文为准，未再重抓）
- 页面标注版本：*Updated for Version "Luna VI"*
- 等级判定：**T1（KeqingMains / KQM Theorycrafting Library 团队，成体系模型、被广泛引用）**
- 本次核实用途：
  1. Q1 —— 「月感电每跳与常规感电同值 0.4U」的 **T1 明示等价句**（即"沿用常规感电"的 T1 说法）；
  2. Q3 —— 雷暴云存续 ~6s、雷击间隔 ~2s、卡肉可延至 2.1–2.3s；
  3. Q2 —— 反证：KQM 的"全局 ICD"讨论只在**月结晶**条目出现，月感电一侧**没有**对应表述。

---

## 逐字转录（仅相关节）

### Lunar-Charged

When Electro is applied onto an enemy with Hydro aura, or vice versa, Lunar-Charged (LC) is triggered. After triggering LC, a thundercloud will appear nearby that continuously deals LC damage to opponents affected by both Hydro and Electro. The damage dealt is based on all characters who applied Hydro or Electro.

This reaction is currently only enabled by the following characters:

* **Ineffa**
* **Flins**
* **Columbina**

#### Additional Information

* Thunderclouds exist for ~6s.
* LC ticks every ~2s.
  + Ticks can be extended to 2.1s to 2.3s by hitlag caused by on-fielders.
* LC **does not** snapshot character stats like EM and CRIT (unlike Electro-Charged).

### Lunar-Crystallize（对照用：KQM 只对月结晶说了"全局 ICD"）

#### Additional Information

* Moondrifts count as a single Geo Construct, but each Moondrift can resonate with other Geo Constructs individually.
* LCrys **does not** have a global ICD (unlike Crystallize).
  + Due to this detail, it is possible to double Crystallize on Electro-Charged (EC)/LC aura (see Gauge Mechanics section for a more in-depth explanation).
  + …

### Damage Formulas → Lunar-Charged

Two different types of LC damage exist: Reaction LC damage and Direct LC damage. Reaction LC damage is dealt by the thunderclouds summoned by triggering an LC reaction. Direct LC damage is dealt directly by a character through their talents without triggering a reaction. …

Second, the individual damage is ranked from highest to lowest and summed into the final value as follows:

We can see in this formula that the highest individual damage is most significant, and the following contributors get their damage reduced by 1/2 and 1/12, respectively. …

### Gauge Mechanics

Though there were several new reactions added, the scope of Elemental Gauge Theory is largely unchanged. While the Lunar counterparts of the base reactions follow the same gauge mechanics, there are some characteristics unique to the Lunar variants that change how they interact.

**While both EC and LC deplete 0.4U of aura per tick, EC ticks about every 1s and LC ticks roughly every 2s. This results in less aura depletion, which allows the aura to last longer. This can be useful for allowing Vaporize, or easier double Swirl for 4pc VV.**

As previously mentioned, LCrys does not have a global ICD as regular Crystallize does, and because of this, it is possible to double Crystallize on EC/LC aura. This can happen in two ways:

* Geo can consume both Electro and Hydro aura to trigger both LCrys and Electro Crystallize simultaneously. …
* If Geo cannot clear the Electro aura, if Electro Crystallize is on cooldown (1s), then additional Geo application can directly trigger LCrys.

The gauge mechanics for LB follow the same pattern as its non-Lunar counterpart.

### Credits

**Writer(s):** ren718.exe
**Contributors:** acerbus114, lesterberne, antiguaa, pulsar79., maelstromica

---

## 本次核实相关的逐字引文（英文原文）

1. "While both EC and LC deplete 0.4U of aura per tick, EC ticks about every 1s and LC ticks roughly every 2s."
2. "Thunderclouds exist for ~6s."
3. "LC ticks every ~2s. ／ + Ticks can be extended to 2.1s to 2.3s by hitlag caused by on-fielders."
4. "LC **does not** snapshot character stats like EM and CRIT (unlike Electro-Charged)."
5. "LCrys **does not** have a global ICD (unlike Crystallize)."（注意：主语是月结晶，**不是**月感电）

## 中文对译（供正文引用时使用）

1. 「常规感电与月感电每跳均消耗 0.4U 附着量，但常规感电约每 1 秒跳一次，月感电约每 2 秒跳一次。因此月感电的附着消耗更慢、附着存活更久。」
2. 「雷暴云存续约 6 秒。」
3. 「月感电约每 2 秒跳一次；受场上角色造成的卡肉（hitlag）影响，间隔可被拉长到 2.1～2.3 秒。」
