# 元素反应机制详解（7.0 版）

《原神》元素反应机制的系统性整理文档，使用 XeLaTeX + ctexart 排版。本 README 面向参与开发的贡献者。

## 环境要求

- **TeX Live 2026+**
- Windows 下需保证 `FangSong` / `SimHei` / `KaiTi` 等中文字体可用，preamble 中通过 `fontset=windows` 调用
- 编辑器建议 VS Code + LaTeX Workshop，或 TeXstudio, 轻量级编辑器Notepad4亦可


## 目录结构

```
.
├── 元素反应机制详解-7.0版初稿.tex   # 主文件
├── preamble.tex                     # 宏包、字体、颜色、自定义命令
├── figures.tex                      # 通用图形宏，反应示意、公式框等
├── part1.tex … part6.tex            # 正文六个章节，按主题拆分
├── icons/                           # 七元素图标 png
└── 调研/                            # 资料来源与机制笔记, 不参与编译
    ├── 00-信源台账.md
    ├── 01-已确认知识清单.md
    ├── 02-机制与公式笔记.md
    ├── 03-KQM公式图逐字转录.md
    ├── 04-交接状态.md
    └── raw/                         # 原始截图与转录素材
```

## 编译

在项目根目录至少执行两次 `xelatex`：

```bash
xelatex 元素反应机制详解-7.0版初稿.tex
xelatex 元素反应机制详解-7.0版初稿.tex
```

产物：`元素反应机制详解-7.0版初稿.pdf`。

> 无 `\bibliography`，因此不需要 biber / bibtex；如需清理中间文件，删除 `*.aux / *.out / *.toc / *.log` 即可。

## 章节分工

主文件按顺序 `\input` 六个 part，逻辑上构成"总—分—合"三段：

| 文件 | 内容概要 |
| --- | --- |
| `part1.tex` | 文档版本信息、阅读约定、元素反应概述 |
| `part2.tex` | 反应计算公式、反应强度公式、反应机制详解 |
| `part3.tex` | 激化反应、结晶反应、月曜反应 |
| `part4.tex` | 星烁反应
| `part5.tex` | 队伍系统、月兆与星之楔、元素反应通性、历史调整 |
| `part6.tex` | 概念名词表、参考资料与信源分级 |

> 注：`part3.tex` / `part4.tex` 内部使用 `\subsection`，是延续 `part2.tex` 中 `\section{反应机制详解}` 的子章节，改动时注意层级不要跳级。


## 贡献约定

1. **样式与宏命令**统一放 `preamble.tex`；图形复用宏放 `figures.tex`。正文里使用既有宏：
   - 元素名着色：`\elname{水}`、带方括号 `\element{火}`
   - 元素图标：`\icon{雷}`，自动映射到 `icons/electro.png`
   - 反应名着色：`\rxAmp{蒸发}`、`\rxTrans{超载}`、`\rxCryst{结晶}`、`\rxCata{激化}`、`\rxLunar{月曜反应}`、`\rxStellar{星烁反应}`
   - 概念名词：`\term{...}`；引注：`\src{...}`；来源脚注：`\srcfoot{...}`
2. **图标**放 `icons/`，命名与 `preamble.tex` 中 `iconf@X` 映射一致（`fire/water/ice/electro/anemo/geo/dendro.png`）。新增元素需在 preamble 补一条 `\expandafter\def\csname iconf@X\endcsname{icons/x.png}`。
3. **公式**优先使用 `amsmath` 环境，行内公式套 `\(...\)`；数值参数保留三位有效数字，并通过 `\src{...}` 或 `\srcfoot{...}` 标注信源，信源对应 `调研/00-信源台账.md` 编号。
4. **引用与考据**：所有非常识性结论必须能在 `调研/` 目录下找到出处；无出处的猜测请用注释 `% TODO: 待考证` 标出，不要直接下结论。
5. **提交信息**建议使用中文，格式 `partN: 简述`，例如 `part4: 补充星烁反应加权公式推导`。
6. 若使用git管理，**不要提交** `*.aux / *.out / *.toc / *.log / *.synctex.gz`；建议在仓库根加 `.gitignore`。

## 常见问题

- **编译报字体缺失**：确认 preamble 中 `fontset` 与操作系统匹配。
- **目录页码错位**：只跑了一次 xelatex，再跑一次即可。

## 版权与致谢

- 数据基准：《原神》7.0 版本「无神怜爱的雪国」（2026-08-12 上线）
- 整理：**梅普露**（UID: 163618746）｜ 编排：**娜洛**
- 公式素材参考 KQM（KeqingMains）理论组公开图表，已在 `调研/03-KQM公式图逐字转录.md` 逐字转录并注明出处
- 本项目仅作学习交流使用，游戏内容版权归原作者及米哈游所有
