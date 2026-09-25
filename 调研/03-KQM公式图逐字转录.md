# KeqingMains《Lunar Reaction Guide》公式图 —— 逐字转录

来源：<https://keqingmains.com/misc/lunar/>（正文里的公式是**图片**，纯文本抽取会丢失，本文由程序下载原图后用视觉逐字判读）
原图直链（kqm-uploads.keqingmains.com）：
- 月感电·反应型单角色：`2026/05/image2-new.webp`
- 月感电·最终加权：`2026/05/image6-new.webp`
- 直伤月感电：`2026/01/Direct-LC.webp`
- 月结晶·反应型单角色：`2026/05/image5-new.webp`
- 月结晶·最终加权：`2026/05/image12-new.webp`
- 直伤月结晶：`2026/01/Direct-LCr.webp`

本地留存：本目录下 `kqm_公式_*.png`（由 webp 去透明转 png 得到）

---

## 1. 月感电 · 反应型（单角色，第 n 位贡献者）

```
DMG_Lunar-Charged Individual = ( 3 × Level Multiplier_Contributor
                               × (1 + %Lunar-Charged Base DMG Bonus)
                               × (1 + %EM Bonus_Lunar-Charged + %Reaction Bonus)
                               + Additive Base DMG Bonus )
                               × CRIT Multiplier_Contributor
                               × RES Multiplier_Target
                               × Elevation_Lunar-Charged
```

## 2. 直伤月感电

```
DMG_Direct Lunar-Charged = ( 3 × Stat_Attacker × Multiplier
                           × (1 + %Lunar-Charged Base DMG Bonus)
                           × (1 + %EM Bonus_Lunar-Charged + %Reaction Bonus)
                           + Additive Base DMG Bonus )
                           × CRIT Multiplier_Attacker
                           × RES Multiplier_Target
                           × Elevation_Lunar-Charged
```

## 3. 月感电 · 最终加权

```
DMG_Lunar-Charged Final = Highest Individual DMG × 0.6
                        + 2nd Highest Individual DMG × 0.3
                        + 3rd Highest Individual DMG × 0.05
                        + 4th Highest Individual DMG × 0.05
```

## 4. 月结晶 · 反应型（单角色）

```
DMG_Lunar-Crystallize Individual = ( 1.6 × Level Multiplier_Contributor
                                   × (1 + %Lunar-Crystallize Base DMG Bonus)
                                   × (1 + %EM Bonus_Lunar-Crystallize + %Reaction Bonus)
                                   + Additive Base DMG Bonus )
                                   × CRIT Multiplier_Contributor
                                   × RES Multiplier_Target
                                   × Elevation_Lunar-Crystallize
```

## 5. 直伤月结晶

```
DMG_Direct Lunar-Crystallize = ( 1.6 × Stat_Attacker × Multiplier
                               × (1 + %Lunar-Crystallize Base DMG Bonus)
                               × (1 + %EM Bonus_Lunar-Crystallize + %Reaction Bonus)
                               + Additive Base DMG Bonus )
                               × CRIT Multiplier_Attacker
                               × RES Multiplier_Target
                               × Elevation_Lunar-Crystallize
```

## 6. 月结晶 · 最终加权

```
DMG_Lunar-Crystallize Final = Highest Individual DMG × 0.6
                            + 2nd Highest Individual DMG × 0.3
                            + 3rd Highest Individual DMG × 0.05
                            + 4th Highest Individual DMG × 0.05
```

---

## 由这六张图直接得出的结论

1. **月感电与月结晶共用同一个"系数"槽位**：月感电 3、月结晶 1.6；该系数在**反应型**里乘「等级系数」，在**直伤型**里乘「面板属性 × 技能倍率」。
2. `React LCrys = 1.6 × 等级系数` 与中文来源的"反应月结晶起始系数 0.96"**不是互斥的两种机制**：
   $1.6 \times 0.6 = 0.96$，而 0.6 正是**最终加权里最高贡献者的权重**。
3. 同一套算法在月感电上给出 $3 \times 0.6 = 1.8$，与幕陵（游民星空）逐乘区拟合出的 1.8、17173 写明的"反应月感电反应倍率 1.8"**完全一致**——这是对 2 的独立验证。
4. 因此社区/攻略中两套口径应这样对应：
   - **单角色系数**（KQM 口径，乘在等级系数上）：月感电 3、月结晶 1.6
   - **加权后等效系数**（中文攻略常用口径）：月感电 1.8、月结晶 0.96
   - **权重**：0.6 / 0.3 / 0.05 / 0.05（和为 1）；"1、1/2、1/12"是未归一化的相对比例。
5. Bwiki《元素反应》倍率表列出的"月感电 3、月结晶 1.6"与此处的**单角色系数**一致（该表列的并非加权后数值）。

> 附注：B 站《【纠错】一直以来的反应月结晶伤害公式是错的？》(BV1JDDJBmEZQ) 的简介与置顶评论提到"这个权重和不为 1 是有问题的"——所指正是把"1、1/2、1/12"直接当权重用的旧口径。
