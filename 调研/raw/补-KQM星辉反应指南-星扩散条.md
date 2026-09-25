SOURCE: https://keqingmains.com/misc/stellar（项目内已留档：`调研\raw\补_星扩散KQM_stellar.md`；另有 `keqingmains.com-b7c64f99cda60080.cache.md` 同文副本）
TITLE: Stellar Glimmer Reaction Guide - KQM（*Updated for Version 7.0*）
SITE: keqingmains.com（T1 理论站）
Writer(s): ren718.exe　Contributors: acerbus114, idkanonymized
ACCESSED: 2026-09-22

---

〔逐字抄录 Stellar Swirl 章〕

# Stellar Swirl

When Anemo is applied to an enemy with Cryo aura, Stellar Swirl (SSW) is triggered. Upon triggering this reaction, one instance of Stellar Anemo damage is dealt, and a level 1 Stellar Vortex is created. After 3s, the Vortex explodes, dealing one instance of Stellar AoE Cryo damage. After a Stellar Vortex is created, triggering SSW two or more times causes the Vortex to grow into a level 2 Vortex, which causes the explosion to deal increased damage across a larger AoE.

The damage dealt is based on all characters who applied Cryo and all Anemo characters that triggered the reaction. Triggering SSW will grant party members the Radiance: Stellar Swirl state, enhancing certain characters' Talents.

Only one Stellar Vortex can exist within a certain area at a time. Five additional triggers cause the Vortex to detonate prematurely and further increases the AoE (with no change in damage).

For 5s after a Stellar Vortex explodes, it grants characters the ability to perform a high jump. This can only be performed once per Vortex explosion.

This reaction is currently only enabled by the following characters:

* Sandrone
* Odette
* Cryo MC

## Additional Information

* SSW damage can be either Cryo or Anemo type damage (indicated by text color).
* The initial Anemo hit **does not apply an element** while the Cryo explosion **applies 1U of Cryo**.
* If there is no Stellar Vortex present, triggering multiple Swirls in AoE from a single attack will only spawn a level 1 Vortex.
* Each individual SSW in AoE adds to the Vortex.

〔逐字抄录 Damage Formulas → Stellar Swirl 节〕

Two different types of SSW damage exist: Reaction and Direct SSW damage. Reaction SSW damage is dealt by both the single Anemo damage instance and the Stellar Vortex explosion. Direct SSW damage is dealt directly by a character through their Talents without triggering a reaction.

…

The Reaction Multiplier is different for the Anemo and Cryo hits:

* For the initial Anemo hit, the Reaction Multiplier is always **0.75**.
* For the Cryo explosion hit, the Reaction Multiplier changes based on the level of the Stellar Vortex.
  + For a level 1 Stellar Vortex, the Reaction Multiplier is **2**.
  + For a level 2 Stellar Vortex, the Reaction multiplier is **3**.

〔逐字抄录 Gauge Mechanics 章〕

# Gauge Mechanics

Though more reactions have been added, the scope of Elemental Gauge Theory remains largely unchanged. The gauge mechanics for both Stellar Reactions follow the same pattern as their non-Stellar counterparts; however, there is one unique characteristic to Stellar Swirl: **triggering SSW does not spread Cryo onto nearby opponents. Instead, the Vortex applies 1U of Cryo upon explosion (as previously stated).** This means you will have more Cryo application in single-target.

〔逐字抄录 Definitions 章（用于确认 Stellar Glimmer 的构成）〕

Stellar Glimmer – Stellar-Conduct and/or Stellar Swirl
Aura – The element that is currently on the target.
Trigger – The application of an element onto an existing aura, which triggers a reaction.

〔逐字抄录 星超导章中与「元素配对唯一性」相关的句式，作对照〕

# Stellar-Conduct
When Electro is applied onto an enemy with Cryo aura, or vice versa, Stellar-Conduct (SSC, abbreviation of Stellar Superconduct) is triggered.

---

（核实要点——逐字关键句）

1. **「When Anemo is applied to an enemy with Cryo aura, Stellar Swirl (SSW) is triggered.」**
   → 触发条件 = 风元素作用于**冰附着（Cryo aura）**。KQM 对星超导写的是「Electro … with Cryo aura, **or vice versa**」，而星扩散**没有 or vice versa**（因为风无附着方向可言）；两句均只给出一组元素，没有第二组。

2. **「This reaction is currently only enabled by the following characters: Sandrone / Odette / Cryo MC」**（启用者清单）

3. **「The initial Anemo hit does not apply an element while the Cryo explosion applies 1U of Cryo.」**
   → 风段不附着；冰段（风旋爆炸）附着 **1U 冰**。

4. **「triggering SSW does not spread Cryo onto nearby opponents」**
   → 明确：星扩散**不向周围传播冰元素**（与传统冰扩散最大的计量学差异）。

5. **「SSW damage can be either Cryo or Anemo type damage (indicated by text color).」**
   → 星扩散伤害的元素类型**只有冰或风两种**，且可由**伤害数字颜色**判别（与 NGA tid=47366657 实测一致）。
