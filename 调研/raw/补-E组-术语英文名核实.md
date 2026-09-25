# 补-E 组：概念名词表术语英文名核实

- 核实日期：2026-09-22
- 核实目标：《元素反应机制详解（7.0版）》§八「概念名词表」21 项术语的官方／权威英文名，用于统一「中文（English）」格式
- 硬性约束：只写**真正抓取到原文**的英文名并给出 URL；抓不到就写「未找到官方英文名」，**不自行翻译**
- 来源类别标记：
  - **【官方英文本地化】**＝ HoYoverse 官方英文版本更新说明，或游戏内英文本地化文本（天赋／命之座／术语词典原文）
  - **【社区英文】**＝ T1 英文理论站（KeqingMains / KQM TCL）使用的英文名
  - **【数据库镜像】**＝ 第三方游戏数据库转录的**游戏内英文本**（文本本身来自官方本地化，站点为第三方）

---

## 0. 本轮抓取方式与信源可用性

| 信源 | 方式 | 状态 |
| --- | --- | --- |
| `genshin.hoyoverse.com/en/news/detail/<id>` | 纯 HTTP 抓取 | ✗ 只返回 JS 外壳（标题） |
| `genshin.hoyoverse.com/en/news/detail/<id>` | **headless Edge + CDP 渲染**（本目录 `_edge_cdp3.mjs`） | ✔ 成功，全文落地 |
| `gi.yatta.moe`（Project Amber 游戏数据库 API） | PowerShell `Invoke-WebRequest` | ✔ 成功，**含中英双语逐条对照** |
| `keqingmains.com` | 本目录既有留档（`补-keqingmains-月曜反应LunarReactions.md`、`补-keqingmains-星之楔StellarLinchpin.md`） | ✔ 已有全文 |
| `raw.githubusercontent.com/KQM-git/TCL` | 直连 SSL 失败 → 改走 **GitHub Contents API**（base64 解码） | ✔ 成功 |
| `genshin.gg`（角色页） | headless Edge + CDP 渲染 | ✔ 成功 |
| `genshin-impact.fandom.com` | 纯 HTTP／headless Edge 均失败 | ✗ `ERR_CONNECTION_REFUSED`（网络层不可达） |
| `wiki.hoyolab.com`（官方图鉴） | 纯 HTTP | ✗ HTTP 403「本地区不可用」 |
| `gensh.honeyhunterworld.com` | headless Edge + CDP | ✗ Cloudflare 安全验证拦截（仅得 128 字节挑战页） |
| `game8.co` / `prydwen.gg` / `sportskeeda` / `dtgre.com` | 纯 HTTP | ✗ Cloudflare／CloudFront 403 |
| `www.icy-veins.com` / `mobalytics.gg` / `eurogamer.net` | headless Edge + CDP | ✗ 正文为空或 JS 异常 |

> **关键方法说明（可信度最高的证据）**：Project Amber 的 API 对**同一条术语条目使用同一个内部 ID**（如 `N11190007`）。因此可以按 ID 把 **英文条目**与**中文条目**逐条配对，得到「中文名 ↔ 英文名」的**游戏内一一对应**，而不是靠翻译推断。本轮全部核心术语均以此法闭合，URL 形如
> `https://gi.yatta.moe/api/v2/en/avatar/<角色ID>` 与 `https://gi.yatta.moe/api/v2/chs/avatar/<角色ID>`。

---

## 1. 月兆

- **英文名**：`Moonsign`
- **来源类别**：【官方英文本地化】
- **URL**：https://genshin.hoyoverse.com/en/news/detail/159349（月之一／6.0 官方英文更新说明）
- **原文逐字摘录**：
  > Adding Moonsign characters to the party increases the Moonsign Level. Including one/two Moonsign characters in your party will grant Nascent Gleam / Ascendant Gleam, respectively.
  >
  > When the party's Moonsign Level reaches Moonsign: Ascendant Gleam, Moonsign characters will be enhanced, and non-Moonsign characters can increase the Lunar Reaction DMG dealt by all nearby characters for a period of time after using their Elemental Skill or Elemental Burst.
- **抓取状态**：✔ 成功（headless Edge 渲染）

### 附带确认：初辉／满辉

| 中文 | 英文 | 原文 |
| --- | --- | --- |
| 月兆·初辉 | `Nascent Gleam`（全称 `Moonsign: Nascent Gleam`） | 同上官方英文更新说明 |
| 月兆·满辉 | `Ascendant Gleam`（全称 `Moonsign: Ascendant Gleam`） | 同上 |

> 游戏内英文本逐字：`◇ Moonsign: Ascendant Gleam:`（Luna IV 官方英文更新说明，https://genshin.hoyoverse.com/en/news/detail/162159 ）

---

## 2. 月兆祝赐

- **英文名**：`Moonsign Benediction`（格式为 `Moonsign Benediction: <天赋名>`）
- **来源类别**：【官方英文本地化】＋【社区英文】双证
- **URL**：
  - 游戏内英文本（Project Amber 双语逐条对照）：https://gi.yatta.moe/api/v2/en/avatar/10000119 （Lauma＝10000119）与 https://gi.yatta.moe/api/v2/chs/avatar/10000119
  - T1 社区：https://keqingmains.com/misc/lunar ；https://raw.githubusercontent.com/KQM-git/TCL/master/docs/characters/dendro/lauma.md
- **原文逐字摘录（英中对照，同一内部条目 ID）**：

  | 角色 | 中文天赋名 | 英文天赋名 |
  | --- | --- | --- |
  | 菈乌玛 Lauma | 月兆祝赐·千籁恩宠 | `Moonsign Benediction: Nature's Chorus` |
  | 奈芙尔 Nefer | 月兆祝赐·廊下暮影 | `Moonsign Benediction: Dusklit Eaves` |
  | 爱诺 Aino | 月兆祝赐·力极演算 | `Moonsign Benediction: Force Limit Analysis` |
  | 哥伦比娅 Columbina | 月兆祝赐·借汝月光 | `Moonsign Benediction: Moonlight, Lent Unto You` |
  | 兹白 Zibai | 月兆祝赐·浮明若流 | `Moonsign Benediction: The Coursing Sun and Moon` |
  | 伊鲁伽 Illuga | 月兆祝赐·凌冬不凋 | `Moonsign Benediction: Unwithering in Winter` |
  | 莉奈娅 Linnea | 月兆祝赐·栖地考察 | `Moonsign Benediction: Habitat Survey` |
  | 伊涅芙 Ineffa | 月兆祝赐·象拟中继 | `Moonsign Benediction: Assemblage Hub` |
  | 菲林斯 Flins | 月兆祝赐·旧世潜藏 | `Moonsign Benediction: Old World Secrets` |

  逐字对照样例行（Ineffa／爱诺）：
  > CHS：爱诺在队伍中时，队伍的月兆将会上升一级。
  > EN ：When Aino is in the party, the party's Moonsign will increase by 1 level.

  T1 社区用法：
  > Lunar Reactions are a new set of reactions that are enabled when characters with certain **Moonsign Benediction** Passive Talents are in the party.（KQM《Lunar Reaction Guide》）
  > `<TabItem value='moonsign' label='Moonsign Benediction'>`（KQM TCL `docs/characters/dendro/lauma.md`）

- **抓取状态**：✔ 成功（官方英文本地化名，由游戏内条目 ID 中英配对确认）

---

## 3. 月之轮

- **英文名**：`Moon Wheel`
- **来源类别**：【官方英文本地化】
- **URL**：https://genshin.hoyoverse.com/en/news/detail/159349 （月之一官方英文更新说明）；https://genshin.hoyoverse.com/en/news/detail/162159 （月之四官方英文更新说明）
- **原文逐字摘录**：
  > ◇ **Moon Wheel**: Dendro　　　（菈乌玛 Lauma 属性栏）
  > ◇ **Moon Wheel**: Electro　　　（菲林斯 Flins 属性栏）
  > ◇ **Moon Wheel**: Geo　　　　（兹白 Zibai 属性栏）
- **对照**：同位置的老角色写作 `◇ Vision: Electro`（神之眼），可见 `Moon Wheel` 是官方对「月之轮」这一属性栏条目的英文本地化名。
- **抓取状态**：✔ 成功

---

## 4. 草露

- **英文名**：`Verdant Dew`　（**确认**，此前推测正确）
- **来源类别**：【官方英文本地化】
- **URL**：
  - 官方更新说明：https://genshin.hoyoverse.com/en/news/detail/159349
  - 游戏内英文本（术语词典条目 `N11190008`，中英同 ID 对照）：https://gi.yatta.moe/api/v2/en/avatar/10000116
- **原文逐字摘录**：
  > When Dendro meets Hydro, and certain other conditions are met, a special Lunar-Bloom reaction occurs. In addition to the standard Bloom reaction effects, this also provides the party with valuable "**Verdant Dew**."（月之一官方英文更新说明）
  >
  > When Lauma's Elemental Skill … When **Verdant Dew** is available, holding the Elemental Skill triggers Lunar-Bloom DMG.（同上）
  >
  > **N11190008**　EN: `Verdant Dew` ／ CHS: `草露`
  > "When party members trigger Lunar-Bloom reactions, the party will receive such a resource. Your party will receive 1 **Verdant Dew** every 2.5s for 2.5s after triggering a Lunar-Bloom reaction. Your party can have up to 3 **Verdant Dew**. If you trigger another Lunar-Bloom reaction during this time, the duration of this effect will be reset."（游戏内术语词典原文）
- **抓取状态**：✔ 成功（官方＋游戏内词典双证）

---

## 5. 诳言之核

- **英文名**：`Seeds of Deceit`
- **来源类别**：【官方英文本地化】（游戏内英文本，经数据库镜像转录）＋ 中英同 ID 逐字对照
- **URL**：
  - 中英对照：https://gi.yatta.moe/api/v2/en/avatar/10000122 ／ https://gi.yatta.moe/api/v2/chs/avatar/10000122 （Nefer＝10000122）
  - 第三方镜像全文：https://genshin.gg/characters/nefer/
- **原文逐字摘录（突破天赋「月下的豪赌」／`A Wager of Moonlight`，中英同一条目）**：
  > CHS：月兆·满辉：施放元素战技弈术·千夜一舞时，将使当前场上的**草原核**转化为「**诳言之核**」，且附近所有角色在接下来的15秒内触发月绽放反应时，将取代**草原核**与**丰穰之核**产生**诳言之核**。
  >
  > EN ：Moonsign: Ascendant Gleam: When she unleashes her Elemental Skill Senet Strategy: Dance of a Thousand Nights, any **Dendro Cores** on the field will be converted to **Seeds of Deceit**, and any Lunar-Bloom reactions triggered by nearby characters in the following 15s that would create **Dendro Cores** or **Bountiful Cores** will instead create **Seeds of Deceit**. **Seeds of Deceit** cannot trigger Hyperbloom or Burgeon reactions and will not burst.
- **抓取状态**：✔ 成功

---

## 6. 伪秘之帷

- **英文名**：`Veil of Falsehood`
- **来源类别**：【官方英文本地化】（游戏内术语词典条目，中英同 ID 对照）
- **URL**：https://gi.yatta.moe/api/v2/en/avatar/10000122 ／ https://gi.yatta.moe/api/v2/chs/avatar/10000122
- **原文逐字摘录**：
  > **N11220003**　EN: `Veil of Falsehood` ／ CHS: `伪秘之帷`
  > "After absorbing **Seeds of Deceit** via the Ascension Talent A Wager of Moonlight, Nefer gains this effect, thereby increasing the DMG dealt by her Phantasm Performance. Each stack of **Veil of Falsehood** increases the DMG dealt by Nefer's Phantasm Performance by {…}%. The initial maximum number of stacks is {…}, with each stack lasting for {…}s (each stack's duration is counted independently)."
- **镜像全文佐证**（https://genshin.gg/characters/nefer/ ）：
  > Nefer will consume all **Veils of Falsehood** to increase the DMG dealt by the current Elemental Burst.
  > …gaining 1 stack of **Veil of Falsehood** for every seed absorbed.
- **附带确认**：`幻戏` = `Phantasm Performance`（同一词典条目 `N11220002`，中英同 ID 对照）
- **抓取状态**：✔ 成功

---

## 7. 雷暴云

- **英文名**：`Thundercloud`（泛指时游戏内作小写 `thundercloud`／`thunderclouds`；特指该实体时首字母大写 `the Thundercloud`）
- **来源类别**：【官方英文本地化】
- **URL**：
  - 官方更新说明（5.8，月感电首次公开）：https://genshin.hoyoverse.com/en/news/detail/158026
  - 游戏内英文本（哥伦比娅天赋「新月自己的法则」／`Law of the New Moon`，中英同一条目）：https://gi.yatta.moe/api/v2/en/avatar/10000125 ／ https://gi.yatta.moe/api/v2/chs/avatar/10000125
- **原文逐字摘录**：
  > When Electro meets Hydro, and certain other conditions are met, a special Lunar-Charged reaction occurs, and a **thundercloud** forms. This **thundercloud** will continuously release bursts of lightning at nearby targets who are affected by both Electro and Hydro, dealing Electro DMG.（5.8 官方英文更新说明）
  >
  > CHS：·月感电反应：**雷暴云**对符合条件的目标进行雷击时，有33%概率额外进行一次雷击；
  > EN ：· Lunar-Charged: When the **Thundercloud** performs lightning strike(s) against a valid target, it has a 33% chance to perform an additional lightning strike.（哥伦比娅·新月自己的法则，中英同一条目）
  >
  > CHS：伊涅芙处于「载流复合」效果影响下时，附近的**雷暴云**对敌人进行雷击后……
  > EN ：When Ineffa is affected by the Carrier Flow Composite effect, … after nearby **thunderclouds** release bursts of lightning at opponents.（伊涅芙 5 命，中英同一条目）
- **说明**：官方英文**没有**把「雷暴云」大写为固定专有名词条（不像 `Moondrift`／`Polestar Field` 那样在术语词典里独立立项）；仅在哥伦比娅文本中作 `the Thundercloud`。若文档要统一格式，建议写 `Thundercloud`。
- **抓取状态**：✔ 成功

---

## 8. 月笼

- **英文名**：`Moondrift`　（**确认**，此前推测正确）
- **来源类别**：【官方英文本地化】
- **URL**：
  - 官方更新说明：https://genshin.hoyoverse.com/en/news/detail/162159（月之四／6.3）
  - 游戏内英文本（莉奈娅元素战技，中英同一条目）：https://gi.yatta.moe/api/v2/en/avatar/10000130 ／ https://gi.yatta.moe/api/v2/chs/avatar/10000130
- **原文逐字摘录**：
  > When Geo meets Hydro, and certain other conditions are met, a special Lunar-Crystallize reaction occurs, and three **Moondrifts** will form near the target.（月之四官方英文更新说明）
  >
  > CHS：·月结晶反应：触发月笼谐奏时，每枚**月笼**有33%概率额外进行一次攻击。
  > EN ：· Lunar-Crystallize: When Moondrift Harmony is triggered, every **Moondrift** has a 33% chance to inflict an extra attack.（哥伦比娅·新月自己的法则）
  >
  > CHS：若附近存在**月笼**，露米还会对附近的敌人造成视为月结晶反应伤害的岩元素范围伤害。
  > EN ：If there are **Moondrifts** nearby, Lumi will also deal AoE Geo DMG to nearby enemies, which will be considered Lunar-Crystallize Reaction DMG.（莉奈娅元素战技）
- **抓取状态**：✔ 成功

---

## 9. 月笼谐奏

- **英文名**：`Moondrift Harmony`
- **来源类别**：【官方英文本地化】
- **URL**：https://genshin.hoyoverse.com/en/news/detail/162159 ；https://gi.yatta.moe/api/v2/en/avatar/10000125 ／ https://gi.yatta.moe/api/v2/chs/avatar/10000125
- **原文逐字摘录**：
  > Triggering the Lunar-Crystallize reaction three times will initiate **Moondrift Harmony**, which deals Geo DMG to nearby opponents. This DMG can trigger CRIT Hits, and the DMG dealt is based on all characters who have applied elements during the reaction.（月之四官方英文更新说明）
  >
  > CHS：触发**月笼谐奏**后的8秒内，队伍中所有元素类型为水元素与岩元素的角色的暴击伤害提升40%……
  > EN ：Within 8s after triggering **Moondrift Harmony**, all Hydro and Geo party members have their CRIT DMG increased by 40%.（莉奈娅命之座「喜或悲的谕告」，中英同一条目）
- **抓取状态**：✔ 成功

---

## 10. 星之楔

- **英文名**：`Stellar Linchpin`　（**确认**，此前推测正确）
- **来源类别**：【官方英文本地化】
- **URL**：https://genshin.hoyoverse.com/en/news/detail/165655（7.0 官方英文更新说明）；https://genshin.hoyoverse.com/en/news/detail/165076（月之八／6.7）
- **原文逐字摘录**：
  > ◇ **Stellar Linchpin**: Cryo　　　（奥黛塔 Odette 属性栏，7.0；桑多涅 Sandrone 属性栏，月之八）
- **对照**：同位置写作 `◇ Vision: Electro`（神之眼）／`◇ Moon Wheel: Geo`（月之轮），可确认 `Stellar Linchpin` 是官方对「星之楔」属性栏条目的英文本地化名。
- **抓取状态**：✔ 成功

---

## 11. 星辉棱晶

- **英文名**：`Starlight Prism`
- **来源类别**：【官方英文本地化】
- **URL**：https://genshin.hoyoverse.com/en/news/detail/165076 ；https://genshin.hoyoverse.com/en/news/detail/165655
- **原文逐字摘录**：
  > When certain conditions are met, Cryo and Electro can trigger Stellar-Conduct. A **Starlight Prism** will appear on the field, turning the surrounding area into a Polestar Field for a short period of time.（月之八官方英文更新说明）
  >
  > Stellar-Conduct: "**Starlight Prism**" — Open-World Interaction Update
  > In certain places in Snezhnaya, a **Starlight Prism** will also generate a Prism Mirage that lasts for a short time at the same location when it vanishes.（7.0 官方英文更新说明）
- **附带确认**：`棱晶虚影` = `Prism Mirage`（同上 7.0 原文）
- **抓取状态**：✔ 成功

---

## 12. 极星辉域

- **英文名**：`Polestar Field`
- **来源类别**：【官方英文本地化】（含游戏内术语词典独立条目）
- **URL**：https://genshin.hoyoverse.com/en/news/detail/165076 ；https://gi.yatta.moe/api/v2/en/avatar/10000133 ／ https://gi.yatta.moe/api/v2/chs/avatar/10000133
- **原文逐字摘录**：
  > A Starlight Prism will appear on the field, turning the surrounding area into a **Polestar Field** for a short period of time.
  > While within a **Polestar Field**: All characters receive a Cryo and Electro DMG Bonus, and when opponents are hit by Cryo or Electro attacks, the field will store the dissipating elemental energies and then completely release them every 4s.…（月之八官方英文更新说明）
  >
  > **N11330003**　EN: `Polestar Field` ／ CHS: `极星辉域`
  > "When Stellar-Conduct is triggered, the surrounding area will transform into a **Polestar Field** for a short period of time, and when inside a **Polestar Field**, certain characters will enter the Radiance: Stellar-Conduct state, which grants various skill buffs."（游戏内术语词典原文）
- **抓取状态**：✔ 成功

---

## 13. 星辉风旋

- **英文名**：`Stellar Vortex`
- **来源类别**：【官方英文本地化】
- **URL**：https://genshin.hoyoverse.com/en/news/detail/165655
- **原文逐字摘录**：
  > Under certain conditions, Anemo and Cryo can trigger Stellar Swirl, dealing one instance of Anemo DMG to the target and creating a **Stellar Vortex**. Only one **Stellar Vortex** can exist within the same area at a time.
  >
  > A **Stellar Vortex** detonates after a short delay, dealing AoE Cryo DMG. Triggering Stellar Swirl nearby a certain number of times increases the vortex's level, expanding its blast radius and increasing its DMG.…（7.0 官方英文更新说明）
- **抓取状态**：✔ 成功

---

## 14. 辉映

- **英文名**：`Radiance`；完整形式 `Radiance: Stellar-Conduct`（辉映·星超导）、`Radiance: Stellar Swirl`（辉映·星扩散）；**总称** `Radiance: Stellar Glimmer`（辉映·星烁）
- **来源类别**：【官方英文本地化】（含游戏内术语词典独立条目）
- **URL**：
  - 官方更新说明：https://genshin.hoyoverse.com/en/news/detail/165076 ；https://genshin.hoyoverse.com/en/news/detail/165655
  - 游戏内术语词典（中英同 ID `N11500004`）：https://gi.yatta.moe/api/v2/en/avatar/10000150 ／ https://gi.yatta.moe/api/v2/chs/avatar/10000150
- **原文逐字摘录**：
  > Certain characters gain additional effects of "**Radiance: Stellar-Conduct**" while within the Polestar Field, enhancing certain Talents and skill effects.（月之八官方英文更新说明）
  >
  > Additionally, triggering Stellar Swirl grants certain nearby characters the "**Radiance: Stellar Swirl**" effect, enhancing some of their Talents and skill effects.（7.0 官方英文更新说明）
  >
  > **N11500004**　EN: `Radiance: Stellar Glimmer` ／ CHS: `辉映·星烁`
  > "**Radiance: Stellar-Conduct** and **Radiance: Stellar Swirl** are both considered **Radiance: Stellar Glimmer** states. Characters can only be affected by one **Radiance** state at any one time, and where more than one state can be triggered, **Radiance: Stellar-Conduct** shall apply first."（游戏内术语词典原文）
- **额外收获**：末句**同时官方坐实**了文档 §5.2「多种辉映可同时成立，但辉映·星超导优先」的写法。
- **抓取状态**：✔ 成功

---

## 15. 擢升

- **英文名**：`Elevation`　（**确认**，此前推测正确）
  - 名词形（游戏内术语词典独立条目）：`Elevation`
  - 游戏内天赋／命之座文案的动词形：`elevated by X%`
- **来源类别**：【官方英文本地化】（游戏内术语词典条目 `N11190007`，中英同 ID 对照）
- **URL**：https://gi.yatta.moe/api/v2/en/avatar/10000122 ／ https://gi.yatta.moe/api/v2/chs/avatar/10000122 （及 10000133 桑多涅、10000125 哥伦比娅、10000130 莉奈娅）
- **原文逐字摘录**：
  > **N11190007**　EN: `Elevation` ／ CHS: `擢升`
  > "Special DMG Boost effect. It is calculated independently of other DMG Boost effects."（游戏内术语词典原文）

  动词形对照（中英同一条目）：
  > CHS：月兆·满辉：队伍中附近的角色造成的月结晶反应伤害**擢升**25%。
  > EN ：Moonsign: Ascendant Gleam: Lunar-Crystallize Reaction DMG dealt by nearby party members is **elevated** by 25%.（莉奈娅 6 命「黄金猎犬之梦」）
  >
  > CHS：此外，桑多涅造成的所有星烁反应伤害**擢升**20%。
  > EN ：Additionally, all Stellar Glimmer reaction DMG dealt by Sandrone is **elevated** by 20%.（桑多涅 6 命）
  >
  > CHS：月兆·满辉　奈芙尔造成的月绽放反应伤害**擢升**15%。
  > EN ：Moonsign: Ascendant Gleam　Nefer's Lunar-Bloom DMG is **elevated** by 15%.（奈芙尔 6 命）

  T1 社区英文（名词形，与官方词典一致）：
  > Lunar Reaction **Elevation** is currently only obtainable through Constellations of 5-star units.（KQM《Lunar Reaction Guide》）
  > Stellar Glimmer Reaction **Elevation** is currently only obtainable through Constellations of limited 5-star units.（KQM《Stellar Glimmer Reaction Guide》）
- **抓取状态**：✔ 成功（官方游戏内词典直接给出 `Elevation` ↔ `擢升` 的一一对应）

---

## 16. 魔女的谕示

- **英文名**：`Witch's Revelation`
- **来源类别**：【官方英文本地化】
- **URL**：https://genshin.hoyoverse.com/en/news/detail/165076（月之八／6.7 官方英文更新说明）
- **原文逐字摘录**：
  > "**Witch's Revelation**"
  > Complete the Hexenzirkel guidance quest "Revelations by Chance" to obtain the **Witch's Revelation** Case. Unveil the revelations inside to unlock **Lucid Revelations** for the corresponding characters and grant them additional buffs.
- **附带确认**：`魔女的谕示` 系统内为对应角色解锁的单角色条目称 `Lucid Revelation(s)`。
- **抓取状态**：✔ 成功

---

## 17. 新月之拥

- **英文名**：`New Moon's Embrace`
- **来源类别**：【官方英文本地化】
- **URL**：https://genshin.hoyoverse.com/en/news/detail/159349（月之一／6.0 官方英文更新说明）
- **原文逐字摘录**：
  > For a certain time after completing the quest, your party will gain the **New Moon's Embrace** effect: When in Nod-Krai, your party's Moonsign Level will always be Ascendant Gleam. Additionally, after completing a certain number of quests, you can claim a variety of other rewards, such as furniture, namecards, and a wind glider.
- **抓取状态**：✔ 成功

---

## 18. 激元素

- **英文名（官方英文本地化）**：`Quicken`；受该状态影响的目标官方表述为 `Quickened`（**官方英文没有为「激元素」单独立一个「元素」名词**）
- **英文名（社区／数据库）**：`Quicken aura`
- **来源类别**：【官方英文本地化】＋【数据库镜像】＋【社区英文】
- **URL**：
  - 官方英文更新说明（3.0，草元素反应首次公开）：https://genshin.hoyoverse.com/en/news/detail/104354
  - 数据库镜像：https://genshin.gg/elements/
  - T1 社区：https://raw.githubusercontent.com/KQM-git/TCL/master/docs/combat-mechanics/elemental-effects/additive-reactions.md
- **原文逐字摘录**：
  > 1. Catalyze
  > When creatures are affected by Electro and Dendro, the **Quicken** reaction will occur, which will render them **Quickened**.
  > When a **Quickened entity** is attacked by Electro or Dendro, they will trigger Aggravate and Spread respectively, which will increase DMG taken.（3.0 官方英文更新说明）
  >
  > **Quicken** — Applies a **Quicken aura**.（genshin.gg 元素反应表）
  > Aggravate — Triggered when applying Electro to an entity with the **Quicken aura**.
  > Spread — Triggered when applying Dendro to an entity with the **Quicken aura**.（同上）
  >
  > **Quicken** is a non-damaging Additive Reaction triggered by applying Dendro on a target already afflicted with Electro or vice versa. The first-stage reaction does not deal any damage, it instead leaves a **Quicken aura** on the target for the next Dendro or Electro attack to trigger Spread or Aggravate respectively.（KQM TCL《Additive Reactions》）
- **说明（重要）**：中文「激元素」是一个**独立名词**（bwiki 引游戏文本：「施加『激元素』附着」）；英文官方文本**没有**对应的独立名词，只有动词化的 `render them Quickened` 与状态名 `Quicken`。若文档要标英文，建议写 `Quicken`（官方）或 `Quicken aura`（社区通行），并注明英文侧无「元素」这一名词层级。
- **抓取状态**：✔ 成功（官方＋社区双证）

---

## 19. 丰穰之核

- **英文名**：`Bountiful Core`
- **来源类别**：【官方英文本地化】（游戏内英文本，中英同一条目对照）
- **URL**：
  - 中英对照（妮露）：https://gi.yatta.moe/api/v2/en/avatar/10000070 ／ https://gi.yatta.moe/api/v2/chs/avatar/10000070
  - 中英对照（奈芙尔）：https://gi.yatta.moe/api/v2/en/avatar/10000122 ／ https://gi.yatta.moe/api/v2/chs/avatar/10000122
- **原文逐字摘录（妮露固有天赋「折旋落英之庭」／`Court of Dancing Petals`，中英同一条目）**：
  > CHS：此外，触发绽放或月绽放反应时，将取代**草原核**产生「**丰穰之核**」。
  > EN ：Also, triggering the Bloom or Lunar-Bloom reaction will create **Bountiful Cores** instead of **Dendro Cores**.
  >
  > CHS：**丰穰之核**无法触发超绽放与烈绽放反应，与**草原核**共享数量上限。
  > EN ：**Bountiful Cores** cannot trigger Hyperbloom or Burgeon, and they share an upper numerical limit with **Dendro Cores**.
  >
  > CHS：**丰穰之核**的攻击视为绽放反应的**草原核**的攻击。
  > EN ：**Bountiful Core** DMG is considered DMG dealt by **Dendro Cores** produced by Bloom.
- **附带确认**：`草原核` = `Dendro Core`（同上，另见奈芙尔「月下的豪赌」中英对照）
- **抓取状态**：✔ 成功

---

## 20. 月感电／月绽放／月结晶／星超导／星扩散

**结论：文档现用的 `Lunar-Charged／Lunar-Bloom／Lunar-Crystallize／Stellar-Conduct／Stellar Swirl` 全部为官方英文名，无需修改。**

**来源类别**：【官方英文本地化】

| 中文 | 官方英文名 | 官方 URL |
| --- | --- | --- |
| 月感电 | `Lunar-Charged` | https://genshin.hoyoverse.com/en/news/detail/158026 |
| 月绽放 | `Lunar-Bloom` | https://genshin.hoyoverse.com/en/news/detail/159349 |
| 月结晶 | `Lunar-Crystallize` | https://genshin.hoyoverse.com/en/news/detail/162159 |
| 星超导 | `Stellar-Conduct` | https://genshin.hoyoverse.com/en/news/detail/165076 |
| 星扩散 | `Stellar Swirl` | https://genshin.hoyoverse.com/en/news/detail/165655 |

**原文逐字摘录**：
> **Lunar-Charged**
> When Electro meets Hydro, and certain other conditions are met, a special **Lunar-Charged** reaction occurs, and a thundercloud forms.…（5.8 官方英文更新说明）
>
> **Lunar Reaction: Lunar-Bloom**
> When Dendro meets Hydro, and certain other conditions are met, a special **Lunar-Bloom** reaction occurs.…（月之一官方英文更新说明）
>
> **Lunar Reaction: Lunar-Crystallize**
> When Geo meets Hydro, and certain other conditions are met, a special **Lunar-Crystallize** reaction occurs, and three Moondrifts will form near the target.…（月之四官方英文更新说明）
>
> **Stellar-Conduct Reaction**
> When certain conditions are met, Cryo and Electro can trigger **Stellar-Conduct**. A Starlight Prism will appear on the field.…（月之八官方英文更新说明）
>
> **New Stellar Glimmer Reaction: Stellar Swirl**
> Under certain conditions, Anemo and Cryo can trigger **Stellar Swirl**, dealing one instance of Anemo DMG to the target and creating a Stellar Vortex.…（7.0 官方英文更新说明）

**附带确认（文档也用到，建议一并统一）**：

| 中文 | 官方英文名 | 依据 |
| --- | --- | --- |
| 月曜反应 | `Lunar Reaction` | 官方英文更新说明小节标题 `Lunar Reaction: Lunar-Bloom` |
| 星烁反应 | `Stellar Glimmer` | 7.0 官方英文更新说明：`New Stellar Glimmer Reaction: Stellar Swirl`、`Stellar Glimmer DMG (Stellar-Conduct/Stellar Swirl)` |
| 原激化 | `Quicken`（反应）／`Catalyze`（大类） | 3.0 官方英文更新说明：`1. Catalyze` |
| 超激化／蔓激化 | `Aggravate`／`Spread` | 3.0 官方英文更新说明 |
| 草原核 | `Dendro Core` | 3.0 官方英文更新说明：`generating a Dendro Core` |

**抓取状态**：✔ 成功

---

## 21. 直伤型／反应型

**结论：这两个词是文档自己的分类词，英文侧没有对应的官方名词。不应给它们硬配官方英文名。**

- **官方英文文本里没有「直伤型／反应型」这一对分类名词。** 官方与游戏内文本采用的是**句子式表述**，不存在名词化标签：
  > Zibai is a Geo DPS character who can trigger Lunar-Crystallize reactions for the team and also **directly deal Lunar-Crystallize DMG** with her skills.（月之四官方英文更新说明，兹白）
  > This DMG is **considered Lunar-Crystallize Reaction DMG**.（游戏内英文本，兹白；莉奈娅）
  > This DMG is **considered Stellar-Conduct DMG**.（游戏内英文本，奥黛塔／桑多涅）
  > …the second Prism Shot will instead deal Cryo DMG that is **considered Stellar-Conduct DMG**.（游戏内英文本，桑多涅）
- **【社区英文】T1 KQM 使用 `Direct` / `Reaction` 作对立标签**，可作社区英文译名参考：
  > Two different types of LC damage exist: **Reaction** LC damage and **Direct** LC damage. … **Direct LC damage is dealt directly by a character through their talents without triggering a reaction.**（KQM《Lunar Reaction Guide》，https://keqingmains.com/misc/lunar ）
  >
  > Two different types of SSW damage exist: **Reaction and Direct** SSW damage. **Reaction SSW damage** is dealt by both the single Anemo damage instance and the Stellar Vortex explosion. **Direct SSW damage** is dealt directly by a character through their Talents without triggering a reaction.（KQM《Stellar Glimmer Reaction Guide》，https://keqingmains.com/misc/stellar ）
  >
  > …currently the only way to deal SSC damage is through character abilities. **Direct SSC damage** is calculated as follows…（同上）
  >
  > For **Reaction LC damage**, the damage calculation is done in two steps. …（KQM《Lunar Reaction Guide》）
- **建议写法**：若要给英文，标注为社区分类词而非官方名，例如
  `直伤型（Direct，社区分类词，非官方英文名）` ／ `反应型（Reaction，社区分类词，非官方英文名）`
  或干脆按用户要求写「未找到官方英文名」。
- **抓取状态**：✔ 已核实「官方无此名词」（反证成立：官方英文更新说明与游戏内英文本均只有句子式表述）；社区侧 KQM 原文已抓取

---

## 附：本轮新落地留档清单（均在 `调研/raw/`）

| 文件 | 内容 |
| --- | --- |
| `en-7.0.md` | 7.0 官方**英文**更新说明全文（165655） |
| `en-luna8.md` | 月之八官方**英文**更新说明全文（165076） |
| `en-luna4.md` | 月之四官方**英文**更新说明全文（162159） |
| `en-luna1.md` | 月之一官方**英文**更新说明全文（159349） |
| `en-5.8.md` | 5.8 官方**英文**更新说明全文（158026） |
| `en-3.0.md` | 3.0 官方**英文**更新说明全文（104354，激化／绽放条文） |
| `yatta/{en,chs}-<角色>.json` | Project Amber 中英双语角色数据（12 角色，含术语词典 `effectsInfo`） |
| `_yatta_bilingual.txt` | 中英术语词典**按内部 ID 配对**结果 |
| `_yatta_pairs.txt` | 中英天赋／命之座正文**按条目配对**结果 |
| `_final_quotes.txt` | 擢升／雷暴云／月笼谐奏等关键条的最终中英对照引文 |
| `tcl-*.md` | KQM TCL 英文机制与角色文档（10 件，含 Additive Reactions＝激化） |
| `gg-*.md` | genshin.gg 英文本地化全文镜像（Nefer／Lauma／Sandrone／Columbina／Odette／Zibai／Ineffa／Aino／elements） |
| `_edge_batch.mjs`、`_edge_cdp3.mjs` | headless Edge CDP 抓取脚本（本轮新增 `_edge_batch.mjs`） |
| `_yatta_*.py`、`_final_quotes.py`、`_moondrift.py` | 双语配对与提取脚本 |

## 附：未闭合／受阻项（据实记录，未作推测）

1. **`genshin-impact.fandom.com`** 网络层不可达（`ERR_CONNECTION_REFUSED`），英文 wiki 正文**未能抓取**。搜索引擎索引显示其存在 `Moonsign_Benediction_Passive`、`Stellar-Conduct`、`Lunar-Bloom` 等页面，但**本轮未取得正文**，故未作为依据引用。
2. **`wiki.hoyolab.com`（官方 HoYoWiki）** HTTP 403「本地区不可用」，英文图鉴正文未能调取。
3. **`gensh.honeyhunterworld.com`** 被 Cloudflare 安全验证拦截；其索引页标题（如 `Moonsign Benediction: Nature's Chorus`）与第 2 项结论一致，但**正文未抓到**，仅作旁证未引为独立依据。
4. **「激元素」的官方英文名词层级**：官方英文只有 `Quicken`／`Quickened`，**没有**「Quicken element」这样的名词。若必须译为名词，属社区口径（`Quicken aura`），已在第 18 项标明。
5. **「直伤型／反应型」官方英文名**：确认**不存在**（见第 21 项反证）。
