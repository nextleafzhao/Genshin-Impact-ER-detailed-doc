# 星扩散元素范围核实

> 核实日期：2026-09-22　｜　适用版本：7.0（至冬／星烁体系）
> 项目内既有留档（`调研\raw\`）与新抓取留档均已落盘，见文末清单。
> 说明：本文仅做信源核实，不改动 `tex7` 下任何 `.tex`，不做编译。

---

## 结论（一句话判定 + 置信度）

**Q1：是——在 7.0 中「星扩散」只有「风元素 × 冰元素」这一组触发配对，不存在「风 + 水／火／雷 也能触发、只是产物不同」的第二形态；置信度：高（T0 官方 + T1 KQM + T3 bwiki + T2 4399「只能」穷举句，四源同向、无反例）。**

**Q2：星扩散唯一转化自旧反应中的「（风+冰的）冰扩散」；风+水／火／雷的扩散完全不受影响，7.0 之后仍触发普通扩散（岩结晶、以及水/火/雷/冰四种普通扩散照旧）；置信度：高。**

**Q3：星辉风旋爆炸施加 1U（弱冰）附着、且星扩散不向周围传播冰元素——均成立；反应星扩散固定分「风段／冰段」两段，元素类型按段固定（风段＝风元素伤害、冰段＝冰元素伤害），可由伤害数字颜色判别。置信度：高（两段与元素判定）／ 中高（不传播，主要依赖 T1 KQM 单源强表述）。**

---

## Q1 触发条件（风+冰 是否唯一）

### Q1-①　结论

**是唯一的。** 7.0 的「星扩散」在元素配对维度上**只有「风 × 冰」一组**：

- 触发形态只有一种：**风元素作用于「已附着冰元素」的目标** → 触发星扩散；
- 并未出现「风+水／火／雷＝另一种星扩散（产物不同）」的任何记载；四类独立信源均以**穷举式**措辞把范围锁死在冰上。

### Q1-②　逐条信源与原文引用

#### （1）T0｜官方 7.0 更新说明（繁體）

- URL：https://genshin.hoyoverse.com/zh-tw/news/detail/165655 （發表 2026/08/12）｜等级：**T0**
- 原文留档：`补-官方7.0更新说明-星扩散条目.md`（正文亦在既有留档 `genshin.hoyoverse.com-af77d3aee2f64c55.cache.md` 第 232~245 行）
- 原文（逐字）：

> 五、元素反應
> 全新星爍反應——星擴散
> **風冰元素可在特定條件下觸發「星擴散」反應**，對目標造成一次風元素傷害並創造「星輝風旋」。一定範圍內至多存在一個「星輝風旋」。

- 同一份官方说明在 9 月 16 日深渊条目中把「**擴散**反應造成的傷害提升200%」与「**星擴散**傷害提升75%」**分列**：

> 上半：角色的**擴散**反應造成的傷害提升200%，角色造成的**星擴散**傷害提升75%。

- 判读：官方文案体系里「扩散」与「星扩散」是**两个并列的反应名**；星扩散的官方定义句只写「風冰元素」。且「五、元素反應」整节**未对既有扩散（含水/火/雷/冰）作任何改动说明**。

#### （2）T1｜KeqingMains《Stellar Glimmer Reaction Guide》（7.0）

- URL：https://keqingmains.com/misc/stellar ｜等级：**T1**
- 原文留档：`补-KQM星辉反应指南-星扩散条.md`（既有留档 `补_星扩散KQM_stellar.md`）
- 原文（逐字）：

> When Anemo is applied to an enemy with **Cryo aura**, Stellar Swirl (SSW) is triggered.
> …
> This reaction is currently only enabled by the following characters: Sandrone / Odette / Cryo MC

- 判读：触发判定写死为「向**冰附着（Cryo aura）**目标施加**风元素**」；对照其星超导写法「Electro … with Cryo aura, **or vice versa**」可见 KQM 会主动标注可交换方向，而星扩散处**没有任何第二组元素**。

#### （3）T1｜KeqingMains 7.0 版本综述（Version Guide）

- URL：https://keqingmains.com/version/7-0/ ｜等级：**T1**
- 原文留档：`补-KQM7.0综述-星扩散取代冰扩散.md`（既有留档 `keqingmains.com-923f1315df.md`、`keqingmains.com-5d2e8593af05804b.cache.md`）
- 原文（逐字）：

> Stellar Swirl (SSW) is the special **Anemo–Cryo** reaction that replaces the normal Cryo Swirl reaction when certain Snezhnaya characters (Sandrone, Odette, and Cryo Traveler as of 7.0) are in the team.
> …
> The effect can **only** be triggered if the wearer is an **Anemo** character, as triggering SSW **only counts as applying Anemo on existing Cryo aura**.

- 判读：「only counts as applying Anemo on existing **Cryo** aura」——若其他附着也能触发，此处不可能只写 Cryo aura 而不加说明。

#### （4）T3｜bwiki《元素反应》页面（含 7.0 历史记录）

- URL：https://wiki.biligame.com/ys/元素反应 ｜等级：**T3**
- 原文留档：`补-bwiki-元素反应页面星扩散条目.md`（既有留档 `wiki.biligame.com-f7b609bc58.md` 第 335 行、`wiki.biligame.com-29658be8d2ad6b68.cache.md`）
- 原文（逐字）：

> **星扩散反应不能直接触发，需要经过奥黛塔、桑多涅、旅行者(冰主)的星烁天赋，将常规的冰扩散反应转为星扩散反应。**
> 风元素触及冰元素时，若满足特定条件（即队伍中存在特定角色），会引发特殊的星扩散反应……
> ……
> ===7.0版本===
> \* 增加**冰扩散**的星烁反应——星扩散。

- 判读：bwiki 把星扩散登记为「**冰扩散**的星烁亚种」，并在倍率表中对应「元素反应-扩散-冰」图标；全表**没有**任何「星扩散-水／火／雷」条目。

#### （5）T2｜4399《【V7.0】「奥黛塔」全面解析》（带实测举证）

- URL：https://www.4399.com/pcgame/topic/53901995.html ｜等级：**T2**
- 原文留档：`补-4399奥黛塔解析-星扩散机制节.md`（既有留档 `www.4399.com-0ff0966162a83b35.cache.md` 第 541~577 行）
- 原文（逐字，穷举句）：

> ① **除梦见月外，其他风元素角色只能通过冰风反应打出星扩散伤害。**
> ① 因冰、风元素特性，由元素触发的星扩散反应**必定是风元素角色触发**……
> ② **与传统冰扩散不同**，触发星扩散后先立刻造成一次星扩散风伤、生成一个星辉风旋。

- 判读：「**只能通过冰风反应**」是对 Q1 的穷举式断言——它直接排除了「风+水／火／雷 也能打出星扩散（产物不同）」的假设。若存在第二种配对，这句必不成立。

#### （6）T2/T3｜九游两篇独立稿件（口径与官方一致）

- URL：https://www.9game.cn/yuanshen/12015605.html （2026-08-10）｜等级：**T2/T3**｜留档：`补-9game-星扩散触发方式.md`
  > **星扩散反应的触发方式，其实不难理解，就是冰元素跟风元素接触的时候，原本会产生冰扩散，现在在特定条件下，就会变成星扩散。**
- URL：https://www.9game.cn/yuanshen/12035467.html （2026-08-20）｜等级：**T2/T3**｜留档：`补-9game-星扩散替代冰扩散.md`
  > **星扩散反应由冰元素与风元素在特定场域下碰撞产生，替代原有冰扩散机制。**

#### （7）T2｜電撃オンライン 转述 HoYoLAB 官方文章（日文）

- URL：https://dengekionline.com/article/202608/83480 （2026-08-04，引官方 X @Genshin_7 同日推文）｜等级：**T2（转述 T0）**
- 原文留档：`补-电击Online-星扩散日文官方转述.md`
- 原文（逐字）：

> 星電導と同じく、特定キャラクターを編成した時のみ発生する特殊な元素反応で、**星拡散は氷元素と風元素で元素反応を起こした時に発生するものになります。**
> ……
> さらにサンドローネは、チーム内に存在することによって**星拡散の発動条件を満たしつつ**、星拡散反応の基礎ダメージをアップさせることも可能になるようです。

- 判读：日文官方口径同样只有「氷元素と風元素」；并明确「星拡散の発動条件」由特定角色满足。

#### （8）T3｜kamigame《星反応の効果と対象キャラ一覧》（2026/09/13 更新）

- URL：https://kamigame.jp/genshin/page/427109142029717357.html ｜等级：**T3**
- 原文留档：`补-kamigame-星反应发生条件.md`
- 原文（逐字，配对表）：

> | 氷 × 風　**星拡散** | 風元素ダメージ+「星の嵐」を生成・時間経過で爆発し、氷範囲ダメージ |
> | 氷 × 雷　**星電導** | 「極星フィールド」を展開しバフを付与…… |

- 判读：把星反应的「元素配对」作为表的**主键**列出，星扩散唯一配对 = 氷×風；表中没有第三种配对。

#### （9）T3｜GameMarket.gg《Genshin Stellar Reactions Explained》（2026-08-11）

- URL：https://gamemarket.gg/news/genshin-impact/genshin-stellar-reactions-explained-conduct-swirl-and-atk ｜等级：**T3**
- 原文留档：`补-GameMarket-星反应配对.md`
- 原文（逐字）：

> There are two variants, and they require different elemental pairings:
> - **Stellar-Conduct** — needs **Cryo and Electro**
> - **Stellar-Swirl** — needs **Anemo** alongside **Cryo**

- 判读：同样以「elemental pairings」列表穷举，星扩散只有 Anemo+Cryo 一项。

#### 小结：Q1 的「排除‘风+其他元素也能触发、只是产物不同’」

| 排查角度 | 覆盖信源 | 结果 |
| --- | --- | --- |
| 官方定义句是否只写「风+冰」 | T0、T2(电击转述官方) | 是，只有「風冰元素」／「氷元素と風元素」 |
| 是否列出了第二组元素配对 | T1(KQM 两篇)、T3(kamigame)、T3(GameMarket) | 无任何第二组配对 |
| 是否有「只能/only」类穷举断言 | T2(4399)、T1(KQM "only counts as") | 有，「只能通过冰风反应」「only counts as applying Anemo on existing Cryo aura」 |
| 是否存在「星扩散·水/火/雷」名目 | T0/T1/T2/T3 全量检索 | 无；只有「反应星扩散·风」「反应星扩散·冰」两段 |
| 官方更新说明是否改动其他扩散 | T0（7.0 更新说明「五、元素反應」） | 未作任何改动说明 |

→ **Q1 判定：风+冰是唯一触发配对。置信度：高。**

---

## Q2 转化对象（取代哪种旧反应；其余扩散是否照旧）

### Q2-①　结论

1. **星扩散唯一转化自旧反应中的「风+冰 → 冰扩散」**这一种形态；它是冰扩散的「星烁亚种」。
2. **风+水／火／雷 的扩散（以及风+冰在未启用星扩散的队伍中的扩散）完全不受影响，7.0 之后仍触发普通扩散，倍率仍为 0.6。**
3. 岩+水/火/雷/冰 的**结晶**反应照旧（未列入星烁体系）。

### Q2-②　决定性证据：翠绿之影 4 件套正式文本

**这是 Q2 最强的一条证据链**：7.0 给「翠绿之影」加星扩散条目时，**保留了「根据扩散的元素类型…降低对应元素抗性」这句话**——若 7.0 之后水/火/雷扩散被星扩散吞掉，这句话将无从成立（且「对应元素抗性」在只剩冰的情况下应当只剩冰抗）。

- 正式服文本（T3 bwiki 现行文本，2026-09-06 更新；`wiki.biligame.com-f461797026.md` 第 47 行）：

> 4件套：**扩散反应造成的伤害提升60%，星扩散反应造成的伤害提升20%。根据扩散的元素类型，降低受到影响的敌人40%的对应元素抗性，持续10秒。对敌人触发星扩散反应时，也会降低其40%的冰元素抗性。同元素类型的抗性降低效果无法叠加。**

- T4 解包站 gachabase（v7.0.54，旁证）：同文本逐字一致 → 留档 `补-gachabase-翠绿之影正式文本.md`
- 解包期（2026-07-01）搬运帖 NGA tid=47086461 当时文本为「扩散、星扩散反应造成的伤害提升60%。根据扩散的元素类型，降低……40% 的对应元素抗性」→ 留档 `补-NGA-风套调整与星扩散并列.md`

**判读**：7.0 相对旧文本的**增量只有两条**——「星扩散 +20%」与「触发星扩散时额外降 40% 冰抗」；原有的「扩散 +60%」与「按扩散元素类型减对应抗性」**一字未删**。这从**功能性**上证明：7.0 后「扩散」仍是一个可按水/火/雷/冰分类的、独立于星扩散的反应。

### Q2-③　其他逐条信源与原文引用

#### （1）T0｜官方 7.0 更新说明

- 留档：`补-官方7.0更新说明-星扩散条目.md`
- 「五、元素反應」整节**只新增星扩散**，未提任何扩散规则的变更；且 9 月 16 日深渊把「**擴散**反應 +200%」与「**星擴散** +75%」分列加成 → 星扩散 ≠ 扩散，扩散照旧存在。

#### （2）T1｜KQM 两篇

- 留档：`补-KQM7.0综述-星扩散取代冰扩散.md`、`补-KQM星辉反应指南-星扩散条.md`
- 原文（逐字）：

> Stellar Swirl is a special reaction enhanced by Sandrone, Odette and Cryo Traveler **from the normal Cryo Swirl reaction**.
> Stellar Swirl (SSW) is the special Anemo–Cryo reaction that **replaces the normal Cryo Swirl reaction** …

- 判读：取代对象精确到「normal **Cryo** Swirl」（普通**冰**扩散）；对照同章星超导「replaces Superconduct」，句式对称 → 一个取代超导、一个取代**冰**扩散，**均未涉及**水/火/雷扩散。

#### （3）T1｜meropide（梅信心）星烁反应参考

- 留档：`补-meropide-反应星扩散元素类型.md`（既有留档 `补_meropide星烁反应参考.md` 第 71 行）
- 原文（逐字）：

> **部分角色入队后可以将队伍中的冰风扩散反应转化为星扩散反应。**

- 判读：转化来源 =「**冰风扩散**」，唯一。

#### （4）T3｜bwiki「扩散」条仍完整保留四元素

- 留档：`补-bwiki-元素反应页面星扩散条目.md`
- 原文（逐字）：

> 扩散：风 + 火水雷冰
> 「风元素」触及火、水、雷、冰元素时引发「扩散」。扩散能造成**对应元素的伤害**……
> \* 反应倍率：0.6
> \* 伤害范围：6米

- 且倍率表把「扩散 0.6」与「星扩散 0.75」**分列为两行**（星扩散归入「星烁反应」，扩散归入「剧变反应」）。
- 判读：7.0 后普通扩散**仍是风×（水/火/雷/冰）四种**，倍率 **0.6 未变**；星扩散是**第 5 个独立条目**（对应冰，倍率 0.75 + 风旋 2/3）。

#### （5）T2/T3｜九游两篇

- 留档：`补-9game-星扩散触发方式.md`、`补-9game-星扩散替代冰扩散.md`
- 原文（逐字）：

> ……同时提高**冰扩散和星扩散这两类反应**的伤害。
> 另有辅助角色提供全队增益，同步提升**冰/星扩散反应**的最终伤害倍率。

- 判读：「冰扩散」与「星扩散」在官方级文案（迪奥娜/七七的全队「冰扩散、星扩散伤害提升」）里是**并列的两个加成对象**，说明「冰扩散」这一名目并未从系统中消失，只是被星扩散**条件性取代**。

#### （6）T2｜4399

- 留档：`补-4399奥黛塔解析-星扩散机制节.md`
- 原文（逐字）：

> ② **与传统冰扩散不同**，触发星扩散后先立刻造成一次星扩散风伤、生成一个星辉风旋。

- 判读：对照物写作「传统**冰**扩散」，未出现任何「与传统水/火/雷扩散不同」的表述。

### Q2-④　「7.0 之后风元素打水/火/雷附着敌人」的判定

| 敌方附着 | 队伍未启用星扩散 | 队伍启用星扩散（带星之楔角色） |
| --- | --- | --- |
| 水 | 普通扩散（水），倍率 0.6，向周围传播水附着 | **同上，不变** |
| 火 | 普通扩散（火），倍率 0.6 | **同上，不变** |
| 雷 | 普通扩散（雷），倍率 0.6 | **同上，不变** |
| 冰 | 普通扩散（冰），倍率 0.6，向周围传播冰附着 | **转为星扩散**：0.75 风段 + 星辉风旋（冰段 2/3），不传播冰 |
| 岩（结晶） | 结晶，无伤害，生成晶片 | **同上，不变**（岩不参与星烁体系） |

→ **Q2 判定：星扩散唯一转化「风+冰（冰扩散）」；其余扩散照旧。置信度：高。**

---

## Q3 附带确认（1U 冰附着 / 不传播 / 伤害元素判定）

### Q3-①　星辉风旋爆炸施加 1U 冰附着

| 信源 | 等级 | 原文（逐字） |
| --- | --- | --- |
| KQM《Stellar Glimmer Reaction Guide》Gauge Mechanics | T1 | "**triggering SSW does not spread Cryo onto nearby opponents. Instead, the Vortex applies 1U of Cryo upon explosion** (as previously stated). This means you will have more Cryo application in single-target." |
| KQM 同文 Additional Information | T1 | "The initial Anemo hit **does not apply an element** while the Cryo explosion **applies 1U of Cryo**." |
| meropide 星烁反应参考 | T1 | "**风旋**最晚在 3 秒后爆炸，造成**反应星扩散·冰**伤害，**并附着 1U 冰元素**。" |
| 4399《奥黛塔全面解析》实测 | T2 | "风旋持续时间结束会爆炸，**造成一次范围星扩散 冰伤、施加一次弱冰附着**。" |
| bwiki《元素反应》 | T3 | "……引爆，对附近的敌人造成**冰元素范围伤害（弱冰）**。" |

**结论：成立。** 且该 1U 冰附着**可以继续引发二次反应**（meropide：「反应星扩散·冰本身可以附着 1U 冰元素，进而可以打出融化反应」「遇到雷，当队伍能触发星超导时，会被判定为该伤害源角色触发了星超导反应」）。

### Q3-②　星扩散不向周围传播冰元素

- **T1 决定性单源**（KQM Gauge Mechanics，逐字）：

> there is one unique characteristic to Stellar Swirl: **triggering SSW does not spread Cryo onto nearby opponents.** Instead, the Vortex applies 1U of Cryo upon explosion.

- **对照物**：4399 明确写出传统冰扩散与星扩散的差异在同一方向（「与传统冰扩散不同，触发星扩散后**先立刻造成一次星扩散风伤、生成一个星辉风旋**」），即：传统冰扩散的产物是「范围冰伤 + 向周围传播冰附着」，星扩散把这一产物**改成了「定点风段 + 3 秒后单点爆炸 1U 冰」**。
- **T1 meropide 的间接互证**：meropide 全文只描述「对范围内的敌人造成一段反应星扩散·冰伤害」+「爆炸附着 1U 冰元素」，**没有任何**「向周围敌人传播/扩散冰附着」的条目；其对群限制反而写作「与普通扩散反应不同，单个敌人在极短时间内只能受到一次反应星扩散·风伤害」。
- **T2 4399 的间接互证**：「星辉风旋爆炸后6秒内，给予场上角色一次跳跃提升效果」等条目中同样没有传播描述；并且给出「对群时，多名敌人被触发星扩散能记录多次」，说明对群记录是按**各自触发**而非按传播。

**结论：成立（不传播冰元素），但独立信源目前主要落在 T1 KQM 一处强表述 + 两处结构性互证，等级为「中高」。**

### Q3-③　伤害元素类型的判定依据

**判定规则：星扩散反应伤害固定分为两段，元素类型按「段」固定，与队伍元素构成本身无关。**

| 段位 | 元素类型 | 基础倍率 | 附着 | 信源 |
| --- | --- | --- | --- | --- |
| 触发瞬间（反应星扩散·**风**） | **风元素伤害** | **0.75**（固定） | **不附着** | T1 meropide「反应星扩散·风属于风元素伤害」；T1 KQM「Reaction Multiplier is always 0.75」「initial Anemo hit does not apply an element」；T2 4399「冰风接触立刻打出的星扩散风伤固定0.75基础倍率」 |
| 星辉风旋爆炸（反应星扩散·**冰**） | **冰元素伤害** | **2**（一级风旋）/ **3**（二级风旋） | **1U 弱冰** | T1 meropide「反应星扩散·冰属于冰元素伤害」；T1 KQM「level 1 → 2 / level 2 → 3」；T2 4399「小风旋为2、大风旋为3」 |
| 直伤星扩散（角色天赋直接打出） | 按技能标注（可风可冰） | **1**（固定） | — | T1 meropide「星烁基础系数（直伤星扩散）固定为 1」；T2 4399「基础反应系数固定为1」 |

**乘区归属（决定「吃哪种抗性/何种加成」）：**

- **抗性区按段的元素走**：风段吃**风元素减抗**，冰段吃**冰元素减抗**。
  - T2 NGA tid=47366657 实测（留档 `补-NGA-星扩散两段伤害与颜色.md`）：
    > 星扩散风伤吃减风抗，**星扩散冰伤不吃**（风减抗）
    > 吃减抗和爆伤 不吃风伤（徽章：助手）
- **元素伤害加成不吃、元素暴击伤害加成吃**（因为属剧变型/星烁型结算）：
  - T1 KQM：SSW「are **not** affected by regular Elemental DMG Bonus nor Common DMG Bonus」，但「Elemental **CRIT** Bonuses also apply」；
  - T2 NGA tid=47366657：#9「吃减抗和爆伤 不吃风伤」；#14「字体颜色是渐变风绿，**吃风减抗和双爆**」；
  - T2 4399 结算式：`等级系数×基础倍率×（1+奥黛塔天赋3）×（1+精通提升+星扩散增伤）×双暴区×抗性区×擢升`（**无**元素伤害杯/普攻战技爆发增伤乘区）。
- **颜色判别（实操判定法）**：
  - T1 KQM：「SSW damage can be either Cryo or Anemo type damage (**indicated by text color**).」
  - T2 NGA tid=47366657 #14：**渐变冰蓝 = 冰伤星扩散；渐变风绿 = 风伤星扩散**。
  - T3 bwiki 倍率表亦以渐变色渲染「星扩散」图标（上白下青）。

**结论：Q3-③ 成立，置信度：高。**

**另附（顺带核实到的两点，不与本轮结论冲突）：**
- 反应星扩散的**触发者唯一为风元素角色**（T2 4399 两处「必定是风元素角色触发」；T1 meropide「反应星扩散·风的触发者是风元素角色」「风旋爆炸冲击波没有反应触发者」；T1 KQM「only counts as applying Anemo on existing Cryo aura」）。
- **例外情形**：面对**风元素自附着**的敌人时，冰元素攻击也能主动触发星扩散，此时冰元素攻击者可被判定为触发者（T1 meropide 第「风自附着」节：「面对风元素自附着的敌人时，冰元素攻击可以主动触发反应星扩散·风。与一般情况下由风元素攻击触发反应不同，此时冰元素攻击者可以被视为反应星扩散·风的触发者。」）——这是**顺序反转**，不构成「风+其他元素」的第二种配对。

---

## 矛盾点与不确定项

1. **【已排除·曾疑似矛盾】GameMarket.gg 对「触发者」的描述与 T1/T2 相反。**
   - GameMarket.gg（T3）："in Stellar-Swirl teams, **your Cryo enabler has to carry the reaction herself** — in practice, Odette"。
   - T2 4399：「反应星扩散**必定是风元素角色触发**」；T1 KQM「triggering SSW only counts as applying Anemo on existing Cryo aura」；T1 meropide「反应星扩散·风的触发者是风元素角色」。
   - 判定：GameMarket 把「能**启用**星扩散的搭档」误写成「**触发**反应的人」。以 T1+T2 三源一致为准，**不采信 GameMarket 的触发者归属**。该文对**元素配对**的穷举仍有效，故 Q1 仍可引用其配对表。

2. **【已标注·数值不可靠】搜狐号《看懂星扩散机制》给出「10 级星扩散倍率 242.25%」。**
   - 与 T1/T2 的（0.75 / 2 / 3 / 直伤 1）口径**不一致**，且该文为无实测引用的自媒体稿。仅取其定性句（「风角色正常扩散**冰元素**，会转化为专属星扩散伤害」），**数值不采信**。

3. **【不确定项·时间线】9game「无需特定角色配置要求」的说法与其余全部信源冲突。**
   - 9game 12015605 / 12035467 声称「触发条件需玩家抵达至冬区域，与七天神像元素共鸣解锁冰元素权能，即可完整激活所有星烁类反应效果，**无需特定角色配置要求**」。
   - 而 T0（奥黛塔/旅行者(冰) 条目）、T1 KQM（"only enabled by the following characters: Sandrone / Odette / Cryo MC"）、T3 kamigame（"特定のキャラを編成した時のみ起こせる"）、T2 电击转述官方（"特定キャラクターを編成した時のみ発生する"）**一致要求编入特定角色**。
   - 判定：9game 的「无需特定角色」应是把「旅行者(冰) 只需与神像共鸣即可获得」误推为「任何人都能触发」。**以 T0/T1/T3 为准：需编入星之楔/星烁启用角色（7.0：桑多涅、奥黛塔、旅行者(冰)）。**此项不影响 Q1/Q2 结论（两条路径都只允许冰+风）。

4. **【不确定项·单一强源】「不向周围传播冰元素」目前主要落在 T1 KQM 一处强表述。**
   - 未找到 T2 级逐层实测（NGA 相关帖 `tid=47438072`、`tid=47437691`、`tid=47101268` 等在本机**需登录**，403「访客不能直接访问」，未能取得正文）。
   - 建议：文档若要把「不传播」写成硬机制，宜标注为 T1 KQM 口径，或补一条游戏内实测（对群时观察邻怪是否获得冰附着）。

5. **【已解决·非真矛盾】翠绿之影 4 件套两版文本差异。**
   - 解包期搬运（2026-07-01）：「扩散、星扩散反应造成的伤害提升60%」；
   - 正式服（2026-09-06 现行）：「扩散 +60%、星扩散 +20%……触发星扩散时额外降 40% 冰抗」。
   - 属**版本内文本修正**，不构成机制矛盾；但两版**都保留**了「根据扩散的元素类型……降低对应元素抗性」，反而**双向加固**了 Q2 的结论。

6. **【未取得·留待补源】以下站点在本机不可抓取（403 / 需登录 / 区域限制），未采信其内容，也未编造：**
   - `game8.co`（CloudFront 403）、`vgtimes.com`（Cloudflare 挑战）、`icy-veins.com`（Cloudflare 挑战）、`rpgstash.com`（Cloudflare 拦截）、`baike.baidu.com`（百度安全验证）、`wiki.hoyolab.com` 与 `hoyolab.com`（"not available in your country or region"）、`topuplist.com`（区域不可用）、`genshin-impact.fandom.com`（连接失败）、`wikiwiki.jp`（机器人校验）、`bbs.nga.cn` / `ngabbs.com`（访客 403，需登录）。
   - 其中 `game8.co/games/Genshin-Impact/archives/605498`（Stellar-Swirl Reaction Guide）与 `bbs.nga.cn/read.php?tid=47438072`（[抛砖引玉] 可观测宇宙内最详细的星扩散机制解析）**最值得补抓**——前者是英文攻略站独立条目，后者是 T2 级深度实测帖，若能取得正文可把 Q1/Q3 的置信度进一步推高。

---

## 原文留档清单（文件名 ↔ URL）

> 全部位于 `调研\raw\`。
> 「新」= 本次核实新建；「既有」= 项目内原已留档，本次作为交叉源引用。

### 本轮新建留档

| 文件名 | 站点／等级 | URL | 访问日期 |
| --- | --- | --- | --- |
| `补-官方7.0更新说明-星扩散条目.md` | genshin.hoyoverse.com／**T0** | https://genshin.hoyoverse.com/zh-tw/news/detail/165655 | 2026-09-22 |
| `补-KQM星辉反应指南-星扩散条.md` | keqingmains.com／**T1** | https://keqingmains.com/misc/stellar | 2026-09-22 |
| `补-KQM7.0综述-星扩散取代冰扩散.md` | keqingmains.com／**T1** | https://keqingmains.com/version/7-0/ | 2026-09-22 |
| `补-meropide-反应星扩散元素类型.md` | meropide（梅信心）／**T1** | 项目留档 `补_meropide星烁反应参考.md`、`补_meropide伤害公式速查.md`（站点 /chs/reference/星烁反应） | 2026-09-22 |
| `补-bwiki-元素反应页面星扩散条目.md` | wiki.biligame.com／**T3** | https://wiki.biligame.com/ys/元素反应 | 2026-09-22 |
| `补-4399奥黛塔解析-星扩散机制节.md` | 4399／**T2** | https://www.4399.com/pcgame/topic/53901995.html | 2026-09-22 |
| `补-NGA-星扩散两段伤害与颜色.md` | NGA（bbs.nga.cn）／**T2** | https://bbs.nga.cn/read.php?tid=47366657 | 2026-09-22 |
| `补-NGA-风套调整与星扩散并列.md` | NGA（bbs.nga.cn）／**T2** | https://bbs.nga.cn/read.php?tid=47086461 | 2026-09-22 |
| `补-9game-星扩散触发方式.md` | 9game.cn／**T2/T3** | https://www.9game.cn/yuanshen/12015605.html | 2026-09-22 |
| `补-9game-星扩散替代冰扩散.md` | 9game.cn／**T2/T3** | https://www.9game.cn/yuanshen/12035467.html | 2026-09-22 |
| `补-电击Online-星扩散日文官方转述.md` | dengekionline.com（转述 HoYoLAB 官方）／**T2** | https://dengekionline.com/article/202608/83480 | 2026-09-22 |
| `补-kamigame-星反应发生条件.md` | kamigame.jp／**T3** | https://kamigame.jp/genshin/page/427109142029717357.html | 2026-09-22 |
| `补-GameMarket-星反应配对.md` | gamemarket.gg／**T3** | https://gamemarket.gg/news/genshin-impact/genshin-stellar-reactions-explained-conduct-swirl-and-atk | 2026-09-22 |
| `补-gachabase-翠绿之影正式文本.md` | gi.gachabase.net／**T4（旁证）** | https://gi.gachabase.net/artifacts/15002/viridescent-venerer?lang=chs | 2026-09-22 |
| `补-搜狐-星扩散核心机制.md` | sohu.com 搜狐号／**T3（数值不采信）** | https://www.sohu.com/a/1049813337_122640328 | 2026-09-22 |

### 本轮引用的既有留档（原文留档）

| 文件名 | 站点／等级 | URL | 访问日期 |
| --- | --- | --- | --- |
| `genshin.hoyoverse.com-af77d3aee2f64c55.cache.md` | 官方 7.0 更新说明（繁中正文，第 232~245 行）／**T0** | https://genshin.hoyoverse.com/zh-tw/news/detail/165655 | 2026-09-22（复核） |
| `补_星扩散KQM_stellar.md` | keqingmains.com Stellar Glimmer Reaction Guide／**T1** | https://keqingmains.com/misc/stellar | 2026-09-22（复核） |
| `keqingmains.com-923f1315df.md` | keqingmains.com 7.0 Version Guide／**T1** | https://keqingmains.com/version/7-0/ | 2026-09-22（复核） |
| `keqingmains.com-5d2e8593af05804b.cache.md` | 同上（副本）／**T1** | 同上 | 2026-09-22（复核） |
| `补_meropide星烁反应参考.md` | meropide 星烁反应参考／**T1** | /chs/reference/星烁反应 | 2026-09-22（复核） |
| `补_meropide伤害公式速查.md` | meropide 伤害公式速查／**T1** | /chs/reference/伤害公式 | 2026-09-22（复核） |
| `wiki.biligame.com-f7b609bc58.md` | bwiki《元素反应》（第 335 行星扩散条）／**T3** | https://wiki.biligame.com/ys/元素反应 | 2026-09-22（复核） |
| `wiki.biligame.com-29658be8d2ad6b68.cache.md` | 同上（副本）／**T3** | 同上 | 2026-09-22（复核） |
| `wiki.biligame.com-f461797026.md` | bwiki《翠绿之影》现行文本（第 47 行）／**T3** | https://wiki.biligame.com/ys/翠绿之影 | 2026-09-22（复核） |
| `wiki.biligame.com-c82cd0aa58e09992.cache.md` | 同上（副本）／**T3** | 同上 | 2026-09-22（复核） |
| `www.4399.com-0ff0966162a83b35.cache.md` | 4399《【V7.0】奥黛塔全面解析》／**T2** | https://www.4399.com/pcgame/topic/53901995.html | 2026-09-22（复核） |
| `nga_47366657_星扩散数字颜色.txt` | NGA 星扩散两段伤害/颜色实测帖／**T2** | https://bbs.nga.cn/read.php?tid=47366657 | 2026-09-22（复核） |
| `nga_47086461_风套调整星扩散.txt` | NGA 风套调整搬运帖／**T2** | https://bbs.nga.cn/read.php?tid=47086461 | 2026-09-22（复核） |

### 本轮尝试但未取得的站点（403／需登录／区域限制，未采信、未编造）

`game8.co`（CloudFront 403）、`vgtimes.com`（Cloudflare）、`icy-veins.com`（Cloudflare）、`rpgstash.com`（Cloudflare 拦截）、`baike.baidu.com`（安全验证）、`hoyolab.com` / `wiki.hoyolab.com`（区域不可用）、`topuplist.com`（区域不可用）、`genshin-impact.fandom.com`（连接失败）、`wikiwiki.jp`（机器人校验）、`bbs.nga.cn` / `ngabbs.com` 未登录访客（ERROR:15 需登录；本次引用的两条 NGA 帖为项目内既有登录后留档）。
