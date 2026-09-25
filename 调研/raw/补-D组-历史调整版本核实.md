# 补-D组：元素反应「历史调整」版本核实

- 核实对象：《元素反应机制详解》时间线表首行「未知版本」＋三项调整（感电不再打断攻击／修复燃烧反应精通收益错误／碎冰反应机制修改）
- 核实人：D 组资料核实员（子代理）
- 抓取日期：2026-09-22
- 原则：只写真正抓到原文并可给出 URL 的结论；查不到写「未查到」，不推测。

---

## 0. 结论速览

| 项目 | 版本号 | 信源等级 | URL | 逐字关键句 |
|---|---|---|---|---|
| 修复燃烧反应精通收益错误 | **2.1**（2021-08-31） | **T0** 官方更新说明 | https://ys.mihoyo.com/main/news/detail/118817 | 「16.修复了角色身上由非角色（包括怪物、环境等）触发的燃烧反应，会异常受到角色元素精通影响的问题；」 |
| 感电不再打断攻击 | **未查到** | —（仅有 T3 社群 wiki 的「未知版本」说法） | https://wiki.biligame.com/ys/元素反应 | bwiki 原文仅记「修改了感电反应的打断系数，使其不再会打断角色攻击。」并归入「未知版本」；官方公告归档（2020-02～2026-09，1193 篇）内**无**任何「感电打断角色攻击」的条目 |
| 碎冰反应机制修改 | **未查到**（官方公告中不存在与「固定伤害→受物理抗性影响」或「附着规则变化」对应的『机制修改』条目） | T0（仅能给出相邻的官方**修复**条目） | https://ys.mihoyo.com/main/news/detail/118783 | 最接近者为 1.1：「修复了碎冰伤害有小概率无法正确触发的问题；」（是**修复**，不是机制改动） |

> 关键发现：bwiki《元素反应》的「历史记录」小节**整段跳过了 2.1 版本**（其版本序列为 未知版本 → 1.1 → 1.6 → 3.0 → 5.2 …），因此它把 2.1 的燃烧精通修复误记为「未知版本」。这同时解释了本表首行「未知版本」的来源。

---

## 1. 项目一：感电不再打断攻击 → **未查到**

### 结论（版本号）
**未查到。** 在可抓取的官方公告全量归档中，不存在「感电反应会打断角色攻击」或其被修改/移除的任何条目，因此本条**无法给出任何版本号**。

### 信源等级
- 唯一记载本条的来源是 **T3**（社群 wiki）：bwiki《元素反应》「历史记录 → 未知版本」。
- 反证来源为 **T0**：官方简中公告全量归档 + 官方全球（日/英）公告归档。

### URL
- T3（bwiki，wikitext 原始文本）：https://wiki.biligame.com/ys/index.php?title=元素反应&action=raw
- T0（1.1 版本更新说明，用于列举官方实际写了什么）：https://ys.mihoyo.com/main/news/detail/118783
- T0（1.2 版本更新说明，唯一「反应伤害不再打断角色」条目，但对象是「阴燃之火」而非感电）：https://ys.mihoyo.com/main/news/detail/118796
- T0（1.2 开发组说明，逐字解释该打断效果被移除）：https://ys.mihoyo.com/main/news/detail/118797

### 原文摘录（逐字）
bwiki《元素反应》「历史记录」小节（T3，抓自 action=raw；原文中“自身元素精通”四字带 wikitext 粗体标记 `'''`）：

```
==历史记录==
===未知版本===
*修改了感电反应的打断系数，使其不再会打断角色攻击。
*修复了燃烧反应会错误的吃到'''自身元素精通'''的问题，使其角色易溶于燃烧。
*修改了{{效果|碎冰|20px}}。
===1.1版本===
*修改了大世界反应强度，当世界等级超过4级时，由环境给予元素反应伤害会被固定在世界等级4。
```

官方公告中与「打断」相关的**全部**条目（T0，无一条涉及感电反应本身）：

- 1.1 版本更新说明：
  「修复了以特定顺序施加元素附着并触发感电反应后，后续感电反应伤害有概率无法正常生效的问题；」
  「修复了行秋…生成雨帘剑后，切换角色会有小概率导致雨帘剑触发的感电反应伤害异常的问题；」
- 1.2 版本更新说明（**唯一**「反应伤害不再打断角色」的官方条目，来源是「阴燃之火」的火元素持续伤害）：
  「12、修复了「阴燃之火」的火元素持续伤害会对角色造成打断效果的问题；」
- 1.2《关于1.2版本更新部分问题的说明小贴士》（开发组逐字解释）：
  「2.修复了「阴燃之火」的火元素持续伤害会对角色造成打断效果的问题。
  这一打断效果给大家带来了不好的体验，也不符合开发组的设计预期。我们在1.2版本中进行了修复，目前已经将该打断效果移除。」

### 检索方法与检索范围（可复核）
1. 通过官方内容 API 拉取官网简中**全部**公告频道（iChanId=717/720/721/722/723），共 **1193 篇**，时间跨度 2020-02-28 ～ 2026-09-21：
   `https://act-api-takumi-static.mihoyo.com/content_v2_user/app/16471662a82d418a/getContentList?iAppId=43&iChanId=721&iPageSize=50&iPage=1&sLangKey=zh-cn`
   落盘：`调研\raw\官方公告归档.json`、`调研\raw\官方公告归档_检索.txt`
2. 对全部正文逐行正则检索：`打断`（45 处命中）、`硬直|僵直|踉跄`（0 处）、`感电`、`碎冰`、`燃烧`。**无任何一条把「打断」与「感电」并列。**
3. 另行抓取 HoYoverse 全球官网（日文 264 篇／英文 185 篇）公告：同样无此条目。
   `https://sg-public-api-static.hoyoverse.com/content_v2_user/app/a1b1f9d3315447cc/getContentList?iAppId=32&iChanId=397&iPageSize=50&iPage=1&sLangKey=ja-jp`
   落盘：`调研\raw\全球官网归档_ja-jp.json`、`调研\raw\全球官网归档_en-us.json`
4. 也逐一读了 1.0 时代的小版本更新说明（9/28、10/22 两次停服维护说明等）：内容仅涉任务、元素共鸣「粉碎之冰」、灌木掉落等，无元素反应机制改动。
   落盘：`调研\raw\官方_早期小版本更新说明.txt`

### 抓取状态
| 站点 | 状态 |
|---|---|
| ys.mihoyo.com（官方简中） | ✅ 正常。页面为 JS 渲染，须用 headless Edge（CDP）渲染；其内容 API 可直接 HTTP 抓取 |
| act-api-takumi-static.mihoyo.com（官方内容 API） | ✅ 正常（HTTP 200，JSON） |
| sg-public-api-static.hoyoverse.com（全球官方 API） | ✅ 正常（HTTP 200，JSON） |
| genshin-impact.fandom.com（含 `Electro-Charged/Change History`） | ❌ **不可达**：`ERR_CONNECTION_TIMED_OUT` / `ERR_CONNECTION_REFUSED`（本网络无法访问，**不是**登录问题） |
| breezewiki.com / antifandom.com（Fandom 镜像） | ⚠️ HTTP 200 但正文为空（breezewiki 出现「Checking you're not a bot」人机验证；antifandom 仅返回空壳） |
| zhuanlan.zhihu.com/p/493027773（“感电反应被暗改”一文） | ❌ HTTP 403（反爬） |
| tieba.baidu.com/p/6974644204（破冰伤害是否固定伤害） | ❌ HTTP 403（百度安全验证） |
| wikiwiki.jp（日文社群 wiki《元素反応について》） | ❌ HTTP 403（站点「アクセス確認中」验证页） |
| pttweb.cc（讨论「碎冰反應被排擠多久了？」） | ❌ fetch failed |

**无任何一处出现「需要登录才能看全文」的情形**；失败原因均为网络不可达或反爬验证。

---

## 2. 项目二：修复燃烧反应精通收益错误 → **2.1 版本**

### 结论（版本号）
**2.1 版本**（《原神》「韶光抚月，天下人间」2.1 版本更新说明；公告页标注「发布时间 2021/09/01」，官方 API 记录的创建时间为 2021-08-31 20:19:12，两者为同一篇，差异系时区/发布时刻所致）。

### 信源等级
**T0**（官方更新说明原文，官网公告归档）。

### URL
- 官方公告（简中，官网页面）：https://ys.mihoyo.com/main/news/detail/118817
- 同一内容的官方内容 API（稳定 JSON，可直接抓取）：https://act-api-takumi-static.mihoyo.com/content_v2_user/app/16471662a82d418a/getContent?iAppId=43&iInfoId=118817&sLangKey=zh-cn
- T3 对照（bwiki 的「未知版本」表述，即文档现行写法的来源）：https://wiki.biligame.com/ys/index.php?title=元素反应&action=raw

### 原文摘录（逐字）
官方 2.1 版本更新说明「问题修复」章节第 16 条（T0）：

```
16.修复了角色身上由非角色（包括怪物、环境等）触发的燃烧反应，会异常受到角色元素精通影响的问题；
```

bwiki 对应条目（T3，措辞不同、且未标版本）：

```
*修复了燃烧反应会错误的吃到'''自身元素精通'''的问题，使其角色易溶于燃烧。
```

> 对照要点：官方说的是「**角色身上、由非角色（怪物/环境）触发的**燃烧反应」错误地吃了**角色自身**的元素精通；bwiki 简写成「燃烧反应会错误地吃到自身元素精通」。二者指同一件事，而 bwiki 未记录版本，故被本文档继承为「未知版本」。

### 抓取状态
| 站点 | 状态 |
|---|---|
| ys.mihoyo.com（官方简中，118817） | ✅ 正常（改用 headless Edge 渲染后完整取到正文；已逐字比对标题「《原神》「韶光抚月，天下人间」2.1版本更新说明」与第 6、16 条全文，落盘 `调研\raw\_t_cn_118817_verify.txt`） |
| act-api-takumi-static.mihoyo.com（官方 API，iInfoId=118817） | ✅ 正常（HTTP 200，JSON 全文，无需登录） |
| wiki.biligame.com（action=raw） | ✅ 正常（HTTP 200，wikitext） |

---

## 3. 项目三：碎冰反应机制修改 → **未查到**

### 结论（版本号）
**未查到。** 官方公告归档（简中全覆盖 + 全球日/英）中**没有**任何一条把「碎冰」描述为「机制修改／改动」的条目，尤其**没有**「碎冰由固定伤害改为受物理抗性影响」或「碎冰附着规则变化」这类表述。bwiki 的对应原文只有一句无版本、无细节的「修改了碎冰。」，无法据以定版本。

以下为官方公告中**全部**与碎冰相关的条目（可作为“官方究竟写了什么”的完整清单）：

| 版本 | 条目性质 | 逐字关键句 | URL（T0） |
|---|---|---|---|
| 1.1（2020-11-11） | 修复 | 「修复了碎冰伤害有小概率无法正确触发的问题；」 | https://ys.mihoyo.com/main/news/detail/118783 |
| 1.6（2021-06-08） | 数值提升 | 「2. 提升了角色等级60级以后，由角色触发的剧变反应（感电、超导、超载、扩散、碎冰）基础伤害；」 | https://ys.mihoyo.com/main/news/detail/118811 |
| 2.1（2021-08-31） | 修复 | 「6.修复了碎冰反应会对怪物大型冰史莱姆和丘丘霜铠王的冰元素护盾，以及怪物冰盾丘丘暴徒和冰盾丘丘人的盾牌异常造成高额伤害的问题；修复后其伤害值与1.5及以前版本一致；」 | https://ys.mihoyo.com/main/news/detail/118817 |
| 3.6（2023-04-11） | 修复 | 「1. 修复了在「深境螺旋」第2层，以及「祝圣秘境：寒霜 I」中，碎冰反应不会解除敌人的冻结状态的问题；」 | https://ys.mihoyo.com/main/news/detail/118137 |
| 5.2（2024-11-19） | 数值提升 | 「4. 提高了超载、超导、感电、碎冰反应的基础伤害；」 | https://ys.mihoyo.com/main/news/detail/127036 |
| 5.6（2025-05-07） | 修复 | 「1. 修复了部分"触发元素反应后"生效的效果，在触发碎冰反应时，无法正常生效的问题；」 | https://ys.mihoyo.com/main/news/detail/155809 |
| 2.8（2022-07-12，仅见全球日文公告） | 修复 | 「3. キャラクターが敵からの氷砕きを受けた後、キャラクターを切り替えたりダッシュしたりすると、一定の確率で氷砕きのエフェクトが繰り返される不具合を修正しました。」 | https://genshin.hoyoverse.com/ja/news/detail/104306 |

### 信源等级
- 「未查到」这一判定基于 **T0**（官方公告全量归档检索）。
- 若要把某一条写进文档，最贴近 bwiki「修改了碎冰」的候选是 **1.1**（T0，属**修复**性质）。

### URL（本轮实际抓取到的原文出处）
- https://ys.mihoyo.com/main/news/detail/118783 ／ `https://act-api-takumi-static.mihoyo.com/content_v2_user/app/16471662a82d418a/getContent?iAppId=43&iInfoId=118783&sLangKey=zh-cn`
- https://ys.mihoyo.com/main/news/detail/118817
- https://wiki.biligame.com/ys/index.php?title=元素反应&action=raw（T3）

### 原文摘录（逐字）
bwiki（T3）：

```
*修改了{{效果|碎冰|20px}}。
```

现行机制的 T1 参考（**仅说明现状，未给版本归属**）——KQM《Transformative Reactions》正文：

```
Shattered, or Shatter, is a second-stage Transformative Reaction triggered by using Blunt Attacks on a Frozen enemy and deals Physical DMG. It has an ICD of 2 damage instances every 0.5 seconds on the same enemy.
```

URL：https://raw.githubusercontent.com/KQM-git/TCL/master/docs/combat-mechanics/elemental-effects/transformative-reactions.md
（该页与其 Evidence Vault 中均**没有**「碎冰在某版本由固定伤害改为受物理抗性影响」的版本记录；只有「Shatter snapshots reaction damage bonuses」等机制结论。）

另：bwiki《元素反应》正文对碎冰的描述同样没有版本标注：

```
===碎冰===
敌人在冻结状态下受到猛烈攻击时，会解除冻结状态，但会受到“大量”物理伤害。
*猛烈攻击：钝击伤害、岩元素伤害
*反应倍率：3
```

### 抓取状态
同第 1 节表格（ys.mihoyo.com ✅；官方 API ✅；bwiki ✅；Fandom ❌ 不可达；镜像站 ⚠️ 空正文；知乎/贴吧/wikiwiki ✗ 403）。

---

## 4. 对文档时间线首行的处置建议

1. **拆分「未知版本」行**：
   - 「修复燃烧反应精通收益错误」→ 移入/新增 **2.1** 行（T0 原文可引）。
   - 「感电不再打断攻击」→ 删除，或明确降级标注为「社群说法，未查到官方版本」（T3，仅 bwiki「未知版本」）。
   - 「碎冰反应机制修改」→ 删除，或改写为「1.1 修复碎冰伤害有概率无法正确触发」（T0，且注明是**修复**而非机制改动）。
2. 若保留 bwiki 作为来源，请把信源等级标为 **T3**，并注明「bwiki 该小节整段缺失 2.1，存在版本误记」。

---

## 5. 本轮生成的留档文件（均可复核）

| 文件 | 内容 |
|---|---|
| `调研\raw\官方公告归档.json` | 官方简中公告 1193 篇（含正文纯文本、iInfoId、发布时间、频道） |
| `调研\raw\官方公告归档_检索.txt` | 上述归档的关键词命中行 + 全部公告标题清单 |
| `调研\raw\官方公告归档_补充频道.json` | 频道 717 的 1550 篇（补充覆盖） |
| `调研\raw\官方_早期小版本更新说明.txt` | 1.0 时代小版本维护说明全文（9/28、10/18、10/22、10/26、12/1 及 1.2 开发组说明） |
| `调研\raw\全球官网归档_ja-jp.json` / `_en-us.json` | HoYoverse 全球官网公告（日 264 篇／英 185 篇） |
| `调研\raw\全球官网检索_ja-jp.txt` / `_en-us.txt` | 上述归档的关键词命中行 |
| `调研\raw\fetch_announcements.py` / `fetch_extra.py` / `fetch_global.py` / `query_global.py` / `search_announcements.py` | 抓取与检索脚本（Python，无 shell 管道） |
| `调研\raw\_edge_dump.mjs` / `_edge_links.mjs` / `_edge_net.mjs` | headless Edge（CDP）渲染、链接导出、网络请求捕获脚本 |
| `调研\raw\_t_cn_118783.txt` 等 `_t_*.txt` | 官网页面经 headless Edge 渲染后的逐字文本留档 |
