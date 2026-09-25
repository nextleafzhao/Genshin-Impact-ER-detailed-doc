# 原文留档：KQM TCL《Elemental Gauge Theory》— 附着税、衰减速率、感电（EC）基线

- URL：https://library.keqingmains.com/combat-mechanics/elemental-effects/elemental-gauge-theory
- 抓取日期：2026-09-22（web_fetch，HTTP 200）
- 等级判定：**T1（KeqingMains Theorycrafting Library）**
- 本次核实用途：
  1. **常规感电基线**：每跳从**两条**元素量上各消耗 0.4U（"consumes 0.4U from both gauges"）——这是理解月感电"沿用常规感电"的基准句；
  2. **解释「0.8U」的口径**：1U 元素源经 **0.8× 附着税（Aura Tax）** 后为 0.8U 附着，故幕陵帖的「0.8U 的水/雷附着」＝**弱水 + 弱雷**；
  3. **衰减速率**：1U 附着的衰减速率为 11.875 秒/单位（≈0.084 U/s），可用来核算幕陵帖「推进 5 秒 ≈ 0.4U 自衰减」（0.084×5≈0.42U，吻合）。
- 注意：本页**未**收录月曜反应（月感电/月绽放/月结晶）条目，页内不存在 Lunar-Charged 段落；月感电的计量学表述只在 KQM 的《Lunar Reaction Guide》。

---

## 逐字转录（相关节）

### Notation

When an Elemental source is used to apply an Element, it applies a number of **Gauge Units** onto the enemy. …

Units (U) are reported as the amount of aura they apply, when extending auras with stronger attacks with higher U or consuming auras via Elemental reactions, **the resulting auras are not simply an addition of the unit**.

| Notation | Decay Rate |
| :--- | :--- |
| 1U  | 11.875s per unit |
| 1.5U | 8.9583s per unit |
| 2U  | 7.5s per unit |
| 4U  | 5.3125s per unit |
| 8U  | 4.21875s per unit |

### Aura Application

Aura application has a 0.8x modifier. This is also referred to as **Aura Tax**.

| Elemental Gauge of Source | After Aura Tax |
| :--- | :--- |
| 1U  | 0.8U |
| 1.5U | 1.2U |
| 2U  | 1.6U |
| 4U  | 3.2U |
| 8U  | 6.4U |

**Example of Aura Application:**

> Kaeya's E applies 2U \* 0.8 = 1.6U Cryo aura and the decay rate is 7.5s per unit.

In addition, neither Anemo nor Geo may be applied as an aura.

### Decay Rate

Decay rate is determined by the **first aura** applied. This decay rate is always in effect, until the aura is fully consumed/decayed. …

Something to note is that without extending auras, the total duration of an aura applied to the enemy is equivalent to 2.5 times the gauge of the Elemental source in GU plus 7 seconds. …

### Electro-Charged

Electro-Charged (EC) is unique to all previously covered reactions. The current theory is that in Electro-Charged, both Hydro and Electro simultaneously function and coexist as both the aura and trigger.

EC is triggered when an enemy with a Hydro or Electro aura has the other aura applied to it. EC will tick once per second so long as enough Electro and Hydro gauge remain, except in the following case:

> When either the Electro or Hydro gauge completely decays, the next Electro-Charged tick will prematurely occur at the moment when the gauge is completely decayed. However, if one of the gauges empties within 0.5s of the last Electro-Charged tick, there will not be another tick of Electro-Charged.

**Each tick of Electro-Charged consumes 0.4U from both gauges.** Once a gauge is empty, the Element will disappear from the enemy's status, but the other Element will remain available to further reactions.

AoE ticks of Electro-Charged have zero gauge.

---

## 本次核实相关的逐字引文（英文原文）

1. "**Each tick of Electro-Charged consumes 0.4U from both gauges.**"
2. "Aura application has a 0.8x modifier. This is also referred to as **Aura Tax**." / table: "1U → 0.8U"
3. "| 1U | 11.875s per unit |"

## 中文对译

1. 「常规感电的每一跳，从**两条**元素量上各消耗 0.4U。」
2. 「附着施加存在 0.8 倍修正，即"附着税"：1U 的元素源在目标身上形成 0.8U 的附着。」
3. 「1U 附着的衰减速率为 11.875 秒/单位（≈0.084 U/s）。」
