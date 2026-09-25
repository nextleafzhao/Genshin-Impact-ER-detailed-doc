SOURCE: https://wiki.biligame.com/ys/index.php?title=模板:角色&action=raw
TITLE: 模板:角色
FETCHED: 2026-09-22

<includeonly>{{#set:
|名称={{{名称|}}}
|英文名称={{{英文名称|}}}
|称号={{{称号|}}}
|所属={{{所属|}}}
|出身={{{出身|}}}
|种族={{{种族|}}}
|介绍={{{介绍|}}}
|性别={{{性别|}}}
|羁绊属性={{{羁绊属性|}}}
|限定={{#switch:{{{限定|}}}|是=限定UP|否=常驻|#default=未知}}
|元素属性={{{元素属性|}}}
|武器类型={{{武器类型|}}}
|始基力={{{始基力|无}}}|+sep=、
|稀有度={{{稀有度|}}}
|实装日期={{{实装日期|}}}
|实装版本={{#switch:{{{实装版本|}}}|月之一=6.0|月之二=6.1|月之三=6.2|月之四=6.3|月之五=6.4|月之六=6.5|月之七=6.6|月之八=6.7|#default={{{实装版本|}}}}}
|祈愿类型={{{祈愿类型|}}}
}}{{#ifeq:{{{名称|}}}|||[[分类:角色]]{{卡池间隔计时器|{{{名称|}}}|角色|{{{稀有度|}}}}}}}{{#switch:{{FULLPAGENAME}}|流浪者={{隐藏评论}}|#default=}}<bstyle>.mw-parser-output>.row {margin: 0 -5px;}.mw-parser-output>.row>* {padding: 0 5px;}</bstyle>
=={{{名称|}}}==
<div class="poke-bg">
{| class="wikitable" style="margin-top: 0px;width: 100%;"
|-
! style="width: 20%;" | 称号
| {{{称号|}}}
|-
! 全名/本名
| {{{全名|}}}{{#if:{{{英文名称|}}}|（<span lang="en">{{{英文名称|}}}）</span>|}}
|-
! 所属地区
| {{#switch:{{{所属|}}}|其他={{{所属|}}}|{{图标|{{{所属|}}}}}}}
|-style="{{#if:{{{出身|}}}||display:none;}}"
! 出身地区
| {{#switch:{{{出身}}}|蒙德|璃月|稻妻|须弥|枫丹|纳塔|挪德卡莱|至冬={{图标|{{{出身|}}}}}|{{{出身|}}}}}
|-style="{{#if:{{{种族|}}}||display:none;}}"
! 种族
| {{{种族|}}}
|-
! 性别
| {{{性别|}}}
|-
! 稀有度
| [[file:{{{稀有度|}}}.png|link=|x14px]]
|-
! 常驻/限定
| {{#switch:{{{限定|}}}|是=限定UP|未知=未知|否=常驻|常驻}}
|-
! {{#if:{{{神之眼描述|}}}|{{{神之眼描述|}}}|神之眼}}
| {{{元素属性|}}}{{#info:[[元素]]|info}}
|-
! 武器类型
| {{{武器类型|}}}{{#info:[[武器介绍#武器使用|武器使用]]|info}}
|-style="{{#if:{{{始基力|}}}||display:none;}}"
! 始基力
| {{{始基力|}}}
|-style="{{#if:{{{羁绊属性|}}}||display:none;}}"
! 羁绊属性
| {{{羁绊属性|}}}
|-
! 命之座
| {{{命之座|}}}
|-style="{{#ifeq:{{#show:{{PAGENAME}}|?角色页面}}|旅行者|display:none;}}"
! 特殊料理{{#vardefine:特殊料理|{{#ask:[[分类:食物]][[食物类型::特殊料理]][[食物特殊料理角色::{{{名称|}}}]]|format=array|link=none}}}}
| {{#switch:{{{名称}}}|空/荧=|雷电将军=该角色无法参与料理{{#set:|特殊料理=/}}|#default={{#if:{{#var:特殊料理}}|{{图标|{{#var:特殊料理}}}}{{#set:|特殊料理={{#var:特殊料理}}}}|}}}}
|-
! 实装日期
| {{{实装日期|}}}{{#ifeq:{{{实装日期|}}}|未实装||（{{{实装版本|}}}版本）}}
|-
! TAG
| {{#arraymap:{{{TAG|}}}|、|@|@{{#set:TAG=@}}|、}}
|-
! 介绍
| style="text-align: left;" colspan=4 | <p class=wiki-bot>{{{介绍|}}}</p>
|}</div></includeonly><noinclude>
<templatedata>
{
	"params": {
		"名称": {
			"description": "角色的名字",
			"example": "可莉",
			"type": "line",
			"required": true
		},
		"称号": {
			"description": "角色的称号",
			"example": "奔跑的太阳",
			"type": "line"
		},
		"所属": {
			"description": "所属的国家",
			"type": "line"
		},
		"介绍": {
			"description": "角色介绍文本",
			"type": "content"
		},
		"性别": {},
		"限定": {
			"description": "是否是限定up的角色",
			"example": "是或为空"
		},
		"武器类型": {},
		"稀有度": {
			"example": "5星"
		},
		"实装日期": {
			"type": "date",
			"example": "2020年10月20日"
		},
		"全名": {},
		"元素属性": {},
		"命之座": {},
		"特殊料理": {},
		"TAG": {
			"description": "角色的一些代表性标签，例如减防，特产探索等，多个tag请用顿号、来分割",
			"example": "减防、能量回复、伤害提升、特产探索"
		}
	},
	"description": "用于填充角色的基础信息"
}
</templatedata>
</noinclude>