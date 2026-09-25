# 原文留档：KQM TCL《Transformative Reactions》—— 计次器（伤害冷却）、水扩散、绽放消耗比

- URL：https://library.keqingmains.com/combat-mechanics/elemental-effects/transformative-reactions
- 抓取日期：2026-09-23（web_fetch，HTTP 200）
- 等级判定：**T1（KeqingMains Theorycrafting Library）**
- 本次核实用途（第十六轮补充）：
  1. 支撑正文 §7.1 通则第 4 条「伤害冷却」的逐项数值与「按触发角色＋受击目标独立计算」；
  2. 「水扩散的范围扩散伤害为 0」；
  3. 「结晶为**全局** ICD（任何角色的结晶都会互相顶掉），其余按角色＋目标独立」这一对照；
  4. 补上原绽放消耗比的逐字依据（表4 的「原绽放 1:2（草:水）」）。

---

## 逐字转录（相关节）

### Overloaded（超载）

> Overloaded has a reaction-specific ICD of 0.5 seconds, where enemies Overloaded or hit by the AoE caused by an Overload triggered by **one character** are then immune to the damage caused by Overload triggered by **that character** for 0.5 seconds. They still suffer gauge reduction and stagger, even without taking damage.

### Superconduct（超导）

> Superconduct **reduces an enemy's Physical RES by 40% by 12 seconds**. Triggering Superconduct in an AoE will result in two instances of Superconduct DMG on each enemy. It has an ICD of 0.5s, where **the same enemy** will take no more than **2 instances** of Superconduct DMG within 0.5s.

### Electro-Charged（感电）

> Electro-Charged has a cooldown. **An enemy can only take one instance of Electro-Charged DMG every ~0.5s.**
> （同页另注：EC 每 1 秒跳一次，直到水／雷附着各剩 0.5 秒为止；EC 的 AoE 跳也会开始/重置该冷却。）

### Shattered（碎冰）

> Shattered, or Shatter, is a second-stage Transformative Reaction triggered by using Blunt Attacks on a Frozen enemy and deals Physical DMG. It has an ICD of **2 damage instances every 0.5 seconds on the same enemy**.

### Swirl（扩散）

> Triggering Swirl in an AoE can cause up to **two instances of Swirl DMG per Element for each enemy** in the AoE. … Swirl has an ICD of **2 damage instances every 0.5s on each target**.
> * In the special case of **Hydro**, only the target afflicted with the Hydro initially will take damage as **the dispersion of Hydro will not harm enemies**.
> * Swirl is a separate effect from **Elemental Absorption**.

### Crystallize（结晶）—— 对照项：全局 ICD

> Crystallize has a **global** reaction-specific ICD of exactly 1 second, where any specific enemy Crystallized by **any character** is then immune to Crystallize by **any character** for 1 second. This cooldown prevents further shards to appear and any gauge consumption that would otherwise occur.

### Bloom（绽放）

> All Bloom reactions that deal damage (Bloom Explosion, Hyperbloom, and Burgeon) **share an ICD of 2 damage instances every 0.5s (on each enemy)**, and although they deal Dendro DMG, none of them applies Dendro. **It is possible to bypass this ICD by using different sources** of Dendro/Hydro/Electro/Pyro to trigger the reactions.
> Like Amplifying Reactions, Bloom (the generation of a Dendro Core) **consumes a different amount of gauge depending on which Element is the trigger, with the ratio being a 2:1 (Hydro:Dendro)**, thus Hydro is the "weak" Element in Bloom.

### Frozen（冻结）—— 双扩条件

> It is possible to simultaneously trigger two Swirls on one target from the same Anemo hit if the target has two Swirl-applicable auras, such as an Electro-Charged enemy or a Frozen enemy with an underlying Hydro aura. This **double Swirl** can only occur when the gauge reduction from the Anemo hit is greater than the Electro gauge (in the case of Electro-Charged) or the Hydro gauge (in Frozen/Hydro). **If this condition is not met, the Anemo attack will only Swirl Electro (for Electro-Charged) or Hydro (for Freeze/Hydro).**

---

## 本次核实相关的逐字引文（便于检索）

1. 「Overloaded has a reaction-specific ICD of 0.5 seconds, where enemies Overloaded or hit by the AoE caused by an Overload triggered by one character are then immune to the damage caused by Overload triggered by that character for 0.5 seconds.」
2. 「It has an ICD of 0.5s, where the same enemy will take no more than 2 instances of Superconduct DMG within 0.5s.」
3. 「An enemy can only take one instance of Electro-Charged DMG every ~0.5s.」
4. 「It has an ICD of 2 damage instances every 0.5 seconds on the same enemy.」（碎冰）
5. 「Swirl has an ICD of 2 damage instances every 0.5s on each target.」
6. 「In the special case of Hydro, only the target afflicted with the Hydro initially will take damage as the dispersion of Hydro will not harm enemies.」
7. 「Crystallize has a global reaction-specific ICD of exactly 1 second, where any specific enemy Crystallized by any character is then immune to Crystallize by any character for 1 second.」
8. 「All Bloom reactions that deal damage (Bloom Explosion, Hyperbloom, and Burgeon) share an ICD of 2 damage instances every 0.5s (on each enemy) … It is possible to bypass this ICD by using different sources of Dendro/Hydro/Electro/Pyro to trigger the reactions.」
9. 「…with the ratio being a 2:1 (Hydro:Dendro), thus Hydro is the "weak" Element in Bloom.」
10. 「This double Swirl can only occur when the gauge reduction from the Anemo hit is greater than the Electro gauge (in the case of Electro-Charged) or the Hydro gauge (in Frozen/Hydro). If this condition is not met, the Anemo attack will only Swirl Electro (for Electro-Charged) or Hydro (for Freeze/Hydro).」

## 中文对译

1. 超载：反应专属 ICD 0.5 秒——**同一角色**触发的超载（含其 AoE）在 0.5 秒内对该敌人不再造成伤害（仍吃减元素量与削韧）。
2. 超导：降低物理抗性 40%、持续 12 秒；AoE 触发时每个敌人吃 2 段；**同一敌人** 0.5 秒内至多 2 段。
3. 感电：**同一敌人**约每 0.5 秒只能吃 1 段。
4. 碎冰：**同一敌人** 0.5 秒内 2 段。
5. 扩散：每个目标 0.5 秒内 2 段（每种元素各计）。
6. **水扩散特例：只有最初被附着水的那个目标会受伤——水的扩散不会伤害其他敌人（范围扩散伤害为 0）。**
7. 结晶是**全局** ICD 1 秒：**任何角色**造成的结晶都会让该敌人 1 秒内免疫**任何角色**的结晶。
8. 绽放三兄弟（原绽放爆炸／超绽放／烈绽放）**共用一个** 0.5 秒 2 段的 ICD（按每个敌人）；**换不同来源（不同角色）可以绕过**该 ICD。
9. 绽放的消耗比是 **2:1（水:草）**（水为「弱」元素）。
10. 双扩条件：风元素减少量必须大于雷（感电）或水（冻结+水）的附着量；否则只扩雷／只扩水。
