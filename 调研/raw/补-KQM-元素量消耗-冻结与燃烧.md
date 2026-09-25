# 原文留档：KQM TCL《Elemental Gauge Theory》与《Transformative Reactions》—— 冻结／燃烧的消耗机制与「扩散 0.5 倍」

- URL ①：https://library.keqingmains.com/combat-mechanics/elemental-effects/elemental-gauge-theory
- URL ②：https://library.keqingmains.com/combat-mechanics/elemental-effects/transformative-reactions
- 抓取日期：2026-09-24（web_fetch，均 HTTP 200）
- 等级判定：**T1（KeqingMains Theorycrafting Library）**
- 本次核实用途（第十八轮补充，落实第十六轮「留档无据」遗留项）：
  1. 定表4 中**扩散的消耗比取值**（Anemo/Geo 触发方 **0.5×** 单位修正；表4 现作「风 : 目标元素 = 2 : 1」）；
  2. 判定**表4 不应把「冻结」列入「1:1 互耗」**（冻元素量是独立公式，且中文社群与 KQM 两说互异）；
  3. 判定**表4 不应把「燃烧」列入「1:1 互耗」**（燃烧行是持续施加火附着的状态，非两侧等量互耗）；
  4. 补上「超载·超导 1× 单位修正（＝等量消耗）」的逐字依据。

---

## 逐字转录

### A. 《Elemental Gauge Theory》—— Overloaded and Superconduct（超载·超导：1× 修正＝等量消耗）

> These Transformative Reactions have a **1x unit modifier (effectively removing the same amount of units)**.
>
> When an Elemental trigger is applied, it subtracts the corresponding number of Elemental units from the enemy's existing gauge.
>
> > Kaeya's E applies 1.6U Cryo aura followed by Fischl's Aimed Shot immediately, which applies 1U Electro. Superconduct occurs, 0.6U Cryo aura remains.

### B. 同页 —— Melt and Vaporize（增幅：强触发 2×／弱触发 0.5×）

> Weak Amplifying Reaction triggers have a **0.5x unit modifier**.
>
> Strong Amplifying Reaction triggers have a **2x unit modifier**.
>
> > An enemy affected by Kaeya's E has 1.6U Cryo with D(2) decay rate. Using Diluc's E (1U) removes 2U worth of Cyro aura because strong Melt occurs when the trigger is Pyro. (原文 "Cyro" 为源页拼写，照录)

### C. 同页 —— Crystallize and Swirl（扩散：风/岩触发方 0.5× 单位修正）

> Geo and Anemo can only be used as the trigger for Crystallize and Swirl reactions respectively. **All Geo/Anemo triggers have a 0.5x unit modifier.**

| Elemental Gauge of Source | After Unit Modifier |
| :--- | :--- |
| 1U | 0.5U |
| 2U | 1U |
| 4U | 2U |

> Using a 1U Geo trigger on a 0.8U Electro aura will result in Crystallize, subtracting 0.5U and leaving 0.3U of Electro aura.

**判定**：风元素量 1U 只消耗对方元素 **0.5U**（1U→0.5U、2U→1U、4U→2U），故表4 作「**风 : 目标元素 = 2 : 1**」（2 份风消耗 1 份对方元素）。

### D. 同页 —— Electro-Charged（感电：每跳两侧各 0.4U）

> Each tick of Electro-Charged **consumes 0.4U from both gauges**.

### E. 同页 —— Frozen（冻结：冻元素量＝独立公式，不是"各扣 1 份"）

> Once Frozen is triggered, an enemy will be afflicted by a **Frozen aura**. Reactions with Frozen are equivalent to those with Cryo, though the gauge of a Frozen aura is often significantly higher. In addition, Cryo and Hydro may exist alongside the Frozen aura.

### F. 《Transformative Reactions》—— Frozen（冻元素量的两个公式）

> If the Frozen aura expires or is Shattered, any underlying Hydro or Cryo aura will persist, note that **the Cryo or Hydro application to trigger Frozen will consume the appropriate amount of aura**.
>
> `Frozen Aura Gauge = 2 * min(Origin Aura Gauge when Frozen, Trigger Element Gauge)`
>
> `Freeze Duration = 2 * sqrt(5 * Frozen Aura Gauge + 4) - 4`

| Reaction | Freeze Aura | Underlying Cryo | Underlying Hydro |
| :--- | :---: | :---: | :---: |
| Melt | ✔️ | ✔️ | ❌ |
| Superconduct | ✔️ | ✔️ | ❌ |
| Shatter | ✔️ | ❌ | ❌ |
| Swirl | ✔️ | ✔️ | ✔️ |
| Crystallize | Shatter | ✔️ | ✔️ |

**判定**：KQM 的「冻元素量 = 2 × min(双方元素量)」与留档 bwiki 的「对敌人施加**反应元素总和**的冻结元素量」（`调研\raw\补-bwiki-元素反应-月曜反应节.md:140`）**是两种不同算法**，且都不是「双方各消耗 1 份」。故表4 的「冻结 1:1」判为**无据**。

### G. 《Transformative Reactions》—— Burning（燃烧：持续施加火附着的状态）

> Burning is a Transformative Reaction triggered by applying Dendro on a target already afflicted by a Pyro aura or vice versa, dealing Pyro DMG that does not stagger. **It ticks once every 0.25s and applies 1U Pyro sometime between 0.25s and 0.42s after the "Burning" text first appears, then once every 2s** (assuming enough Dendro and Pyro are applied to the target).
>
> The Burning aura looks similar to the Pyro aura, except it has animated fire above. **It acts as a Pyro aura when being reacted with and can be extinguished, leaving the underlying Dendro (and very infrequently, Pyro) aura.** The attack that extinguishes Burning can react "through" the Burning aura, allowing a single attack to extinguish the Burning _and_ react with the underlying aura(s).
>
> Whichever character or enemy last refreshes the Burning aura with Dendro or Pyro will take "ownership" of the aura; the damage dealt by Burning depends on the stats of the aura owner.
>
> **Pre-3.0 Findings**：Burning used to apply 2U Pyro in a small AoE around the Burning object or character every 0.25s … This effectively means that Burning was self-sustaining as long as enough Dendro aura is supplied. Additionally, the decay rate of the Dendro aura while Burning was the sum of the natural decay rate of the Pyro aura and Dendro aura.

**判定**：KQM 全页**没有**「燃烧两侧 1:1 互耗」之说；其描述是"持续施加 1U 火附着、可被扑灭、熄灭后余下草（偶尔火）附着"，与「1:1 互耗」不是同一件事。**故表4 的「燃烧 1:1」判为无据。**

### H. 《Transformative Reactions》—— Bloom（绽放，供对照）

> Like Amplifying Reactions, Bloom (the generation of a Dendro Core) consumes a different amount of gauge depending on which Element is the trigger, with **the ratio being a 2:1 (Hydro:Dendro)**, thus Hydro is the "weak" Element in Bloom.

---

## 一处需要更正的旧引文（无留档）

`调研\raw\核查-第十六轮-汇总.md:65` 与 `调研\raw\核查-旧反应数值簇.md:107` 曾引 KQM 原句 **「Burning … Does not consume Pyro」**。本次逐页复核：

- 该句在这两个 KQM 页面（Elemental Gauge Theory／Transformative Reactions）**均未出现**；
- `调研\raw\` 全目录检索 `Does not consume`／`consume Pyro`／`不消耗火`：**0 命中**（仅上述两份报告自身提到它）；
- 结论：**该引文属"抓过、读过但未落盘"**（违反口径「引用必须当场落盘」），本轮不再作为依据使用。表4 的修改改以本文件 A–G 的逐字引文 + bwiki 留档为依据。
