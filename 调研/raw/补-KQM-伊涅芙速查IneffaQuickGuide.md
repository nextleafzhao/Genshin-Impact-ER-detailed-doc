# 原文留档：KQM《Ineffa Quick Guide》— Lunar-Charged 节

- URL：https://keqingmains.com/q/ineffa-quickguide/
- 抓取日期：2026-09-22（web_fetch，HTTP 200）
- 页面标注版本：*Updated for Version "Luna V"*
- 等级判定：**T1（KeqingMains）**
- 本次核实用途：**Q2 的关键第二信源** —— 雷暴云雷击造成的伤害**不施加雷/水附着**（与 T2 幕陵的「此次雷击被视为雷元素伤害但没有元素附着」独立互证）；同时给出「每约 2 秒攻击一次」「视为雷元素伤害」。

---

## 逐字转录（仅 Lunar-Charged 节）

## Lunar-Charged

Lunar-Charged (LC) is a unique Electro–Hydro reaction that replaces Electro-Charged (EC) when Ineffa, Flins or Columbina is on the team. More intensive testing is being conducted, but for now, here is our current understanding of this special reaction:

- When the enemy has both Electro and Hydro auras, LC is triggered. Much like EC, LC does not exhaust both reacting auras instantly; Electro and Hydro auras can coexist with each other while LC is ongoing. These double auras behave similarly to normal EC's double auras when reacting with incoming Elemental Application (further information about Reaction Priority can be found here).
- **When LC is triggered, a thundercloud visual will appear. Around every 2s, the thundercloud attacks all enemies affected by both Electro and Hydro auras, dealing LC reaction damage, which is considered Electro damage. Note that the damage dealt by the reaction does not apply Electro or Hydro.**
- All conditions that require triggering EC or enemies taking EC damage (e.g. Neuvillette's A1 Passive, Ororon's A1 Passive) have also been updated to work with LC.

### Lunar-Charged Reaction Damage

Here is the list of what can affect the damage of LC:

- A fixed reaction multiplier
- Character level
- Characters' EM
- Characters' Reaction Base DMG buff (Ineffa's and Flins's Moonsign Benediction passive)
- Characters' Reaction DMG Bonus (e.g. 4pc TF, 4pc SMS, Aino's C6, Mona's C1)
- Characters' CRIT Rate and CRIT DMG
- Enemies' Electro RES
- But **not** enemies' DEF (to any significant degree)

What makes LC special is that its damage calculation formula uses the attributes of more than one character at a time. While old EC only cares about the EM stat of the most recent Electro / Hydro applier, LC takes into account all the Hydro and Electro characters (or Anemo characters, via Electro / Hydro Swirl) that apply Elements onto the target. …

Notably, while every participant deals their own LC damage, there is a penalty for every extra LC trigger that joins in the damage formula. When recording each character's LC damage, the game keeps the highest individual LC damage intact, while halving the damage dealt by the second, and further reducing the damage from the third or fourth unit (to a twelfth of it). …

## 本次核实相关的逐字引文（英文原文）

1. "Around every 2s, the thundercloud attacks all enemies affected by **both** Electro and Hydro auras, dealing LC reaction damage, which is considered Electro damage."
2. "**Note that the damage dealt by the reaction does not apply Electro or Hydro.**"

## 中文对译

1. 「雷暴云约每 2 秒攻击一次所有同时带有雷、水附着的敌人，造成月感电反应伤害，该伤害被视为雷元素伤害。」
2. 「注意：该反应造成的伤害**不会施加雷元素或水元素附着**。」

## 说明

- KQM 该页**未**出现 "global ICD"（全局内置冷却）相关表述；全站关于月曜反应"全局 ICD"的唯一表述在《Lunar Reaction Guide》的**月结晶**条目（"LCrys does not have a global ICD (unlike Crystallize)"）。
