# source: https://library.keqingmains.com/combat-mechanics/snapshot-and-dynamic

![KeqingMains Logo](/img/logo.webp)
![KeqingMains Logo](/img/logo.webp)

# Snapshot & Dynamic

## Snapshot & Dynamic[​](#snapshot--dynamic-1 "Direct link to Snapshot & Dynamic")

**Snapshot** and **Dynamic** are properties assigned to Elemental Skills and Bursts that last over time. Talents that **snapshot** use the character's stats when cast, and will continue to use those stats regardless of buffs gained or lost in that timeframe after it is cast.

**Dynamic** talents continuously update their damage calculations based on the character's stats in real time.

Healing effects also snapshot based on the user's stats at the time of activation.

In general, stats that are **not** in a character's "Details" page **do not snapshot**. However, the exception is that "Increases All DMG" effects do snapshot, except for the exceptions to this exception: Alley Hunter, Fading Twilight, and Geo Resonance don't snapshot their "Increases All DMG".

Another exception is that Ganyu's A1 "snapshots", because the Frostflake Arrow generated when A1 is active is a completely different internal object than the Frostflake Arrow generated when A1 is inactive. (Additionally, it's not just CA CRIT Rate, because her uncharged CAs don't get the 20% CR buff).

## Buffs[​](#buffs "Direct link to Buffs")

**Static Buffs** either do not scale off any attribute or snapshots the attribute the buff scales off at cast time.

**Dynamic Buffs** update according to the attribute the buff scales off.

**Direct Buffs** do not change the stats of the character, and instead directly affect the damage output of the character after a snapshotting Skill/Burst is cast. These buffs include:

Raiden

Shenhe

4-Piece [Blizzard Strayer](/equipment/artifacts#blizzard-strayer) passive - CRIT Rate

Cryo Elemental Resonance (Shattering Ice) - CRIT Rate

## Snapshot Timing Sheet[​](#snapshot-timing-sheet "Direct link to Snapshot Timing Sheet")

[View spreadsheet](https://docs.google.com/spreadsheets/d/1M2nTLogzYd2o4ZLkYEkzfovwiTznQOB5ujWuMlQbE0k)

## Dynamic Transformative Reactions[​](#dynamic-transformative-reactions "Direct link to Dynamic Transformative Reactions")

[Transformative Reactions](/combat-mechanics/elemental-effects/transformative-reactions) do not snapshot EM as of patch 1.4. Even if a Skill snapshots, their EM will update real time.  
Transformative Reactions include: [Overload](/combat-mechanics/elemental-effects/transformative-reactions#overloaded), [Superconduct](/combat-mechanics/elemental-effects/transformative-reactions#superconduct), [Electro-Charged](/combat-mechanics/elemental-effects/transformative-reactions#electro-charged), [Shatter](/combat-mechanics/elemental-effects/transformative-reactions#shatter), [Swirl](/combat-mechanics/elemental-effects/transformative-reactions#swirl), and [Crystallize](/combat-mechanics/elemental-effects/transformative-reactions#crystallize).

Fischl summons Oz outside of Bennett's Burst. Oz deals 920 Electro damage and 1870 on Overloads. Sucrose shares EM with Fischl and Fischl steps into Bennett's Burst. Oz **still** deals 920 Electro damage, but **Overload damage has been increased** to 1900.

## Talents[​](#talents "Direct link to Talents")

### Snapshotting Talents[​](#snapshotting-talents "Direct link to Snapshotting Talents")

| Character | Ability | Notes |
| --- | --- | --- |
| [Albedo](/characters/geo/albedo) | Elemental Skill: Abiogenesis: Solar Isotoma | Transient Blossom DMG |
| [Amber](/characters/pyro/amber) | Elemental Skill: Explosive Puppet | Explosion DMG |
|  | Elemental Burst: Fiery Rain | Fiery Rain DMG Per Wave |
| [Kamisato Ayaka](/characters/cryo/kamisato-ayaka) | Elemental Burst: Kamisato Art: Soumetsu | Cutting DMG and Bloom DMG |
| [Kamisato Ayato](/characters/hydro/kamisato-ayato) | Elemental Skill: Kamisato Art: Kyouka | Water Illusion DMG |
|  | Elemental Burst: Kamisato Art: Suiyuu | Bloomwater DMG |
| [Beidou](/characters/electro/beidou) | Elemental Burst: Stormbreaker | Lightning DMG |
| [Diluc](/characters/pyro/diluc) | Elemental Burst: Dawn | DoT and Explosion DMG |
| [Diona](/characters/cryo/diona) | Elemental Burst: Signature Mix | Continuous Field DMG |
| [Fischl](/characters/electro/fischl) | Elemental Skill: Nightrider | Oz's ATK DMG |
| [Ganyu](/characters/cryo/ganyu) | Elemental Skill: Trail of the Qilin | Skill DMG |
|  | Elemental Burst: Celestial Shower | Ice Shard DMG |
| [Shikanoin Heizou](/characters/anemo/shikanoin-heizou) | Elemental Burst: Windmuster Kick | Fudou Style Vacuum Slugger and Windmuster Iris DMG |
| [Jean](/characters/anemo/jean) | Elemental Burst: Dandelion Breeze | Field Entering/Exiting DMG |
| [Kaeya](/characters/cryo/kaeya) | Elemental Burst: Glacial Waltz | Skill DMG |
| [Kaedehara Kazuha](/characters/anemo/kaedehara-kazuha) | Elemental Burst: Kazuha Slash | DoT and Additional Elemental DMG |
| [Klee](/characters/pyro/klee) | Elemental Skill: Jumpty Dumpty | Mine DMG |
| [Sangonomiya Kokomi](/characters/hydro/sangonomiya-kokomi) | Elemental Skill: Kurage's Oath | Regeneration and Ripple DMG |
| [Lisa](/characters/electro/lisa) | Elemental Skill: Violet Arc | Skill DMG |
|  | Elemental Burst: Lightning Rose | Discharge DMG |
| [Mona](/characters/hydro/mona) | Elemental Skill: Mirror Reflection of Doom | Damage over Time and Explosion Damage |
| [Qiqi](/characters/cryo/qiqi) | Elemental Skill: Adeptus Art: Herald of Frost | Herald of Frost DMG and Healing over time and on-hit |
| [Rosaria](/characters/cryo/rosaria) | Elemental Burst: Rites of Termination | Ice Lance DoT |
| [Sayu](/characters/anemo/sayu) | Elemental Burst: Yoohoo Art: Mujina Flurry | DMG and Healing |
| [Kuki Shinobu](/characters/electro/kuki-shinobu) | Elemental Burst: Gyoei Narukami Kariyama Rite | DMG |
| [Sucrose](/characters/anemo/sucrose) | Elemental Burst: Forbidden Creation - Isomer 75 / Type II | DoT and Additional Elemental DMG |
| [Venti](/characters/anemo/venti) | Elemental Burst: Wind's Grand Ode | Damage over Time and Additional Elemental DMG |
| [Xiangling](/characters/pyro/xiangling) | Elemental Skill: Guoba Attack | DMG |
|  | Elemental Burst: Pyronado | Pyronade DMG |
| [Zhongli](/characters/geo/zhongli) | Elemental Skill: Dominus Lapidis | Stone Stele Resonance DMG |

![](/img/characters/icon/Albedo.png)
![](/img/characters/icon/Amber.png)
![](/img/characters/icon/Kamisato_Ayaka.png)
![](/img/characters/icon/Kamisato_Ayato.png)
![](/img/characters/icon/Beidou.png)
![](/img/characters/icon/Diluc.png)
![](/img/characters/icon/Diona.png)
![](/img/characters/icon/Fischl.png)
![](/img/characters/icon/Ganyu.png)
![](/img/characters/icon/Shikanoin_Heizou.png)
![](/img/characters/icon/Jean.png)
![](/img/characters/icon/Kaeya.png)

[... middle omitted — see footer ...]

|  | Elemental Skill: Transcendence: Baleful Omen | Coordinated DMG |
| [Razor](/characters/electro/razor) | Elemental Burst: Lightning Fang | Soul Companion DMG |
| [Kuki Shinobu](/characters/electro/kuki-shinobu) | Elemental Skill: Sanctifying Ring | Grass Ring of Sanctification DMG |
| [Tartaglia](/characters/hydro/tartaglia) | Normal Attack Skill: Cutting Torrent | Riptide Flash DMG and Riptide Burst DMG |
|  | Elemental Skill: Foul Legacy: Raging Tide | Riptide Slash DMG |
|  | Elemental Burst: Havoc: Obliteration | Riptide Blast DMG |
| [Thoma](/characters/pyro/thoma) | Elemental Burst: Crimson Ooyoroi | Fiery Collapse DMG |
| [Xiangling](/characters/pyro/xiangling) | C2: Oil Meets Fire | DMG |
| [Xingqiu](/characters/hydro/xingqiu) | Elemental Burst: Guhua Sword: Raincutter | Rain Sword DMG |
| [Xinyan](/characters/pyro/xinyan) | Elemental Skill: Sweeping Fervor | Shield's DoT |
|  | Elemental Burst: Riff Revolution | Pyro DoT |
| [Yae Miko](/characters/electro/yae-miko) | Elemental Skill: Yakan Evocation: Sesshou Sakura | Sesshou Sakura DMG |
|  | Elemental Burst: Great Secret Art: Tenko Kenshin | Tenko Thunderbolt DMG |
| [Yelan](/characters/hydro/yelan) | Elemental Burst: Depth-Clarion Dice | Exquisite Throw DMG |
| [Yoimiya](/characters/pyro/yoimiya) | Elemental Burst: Ryuukin Saxifrage | Aurous Blaze Explosion DMG |

![](/img/characters/icon/Arlecchino.png)
![](/img/characters/icon/Eula.png)
![](/img/characters/icon/Fischl.png)
![](/img/characters/icon/Hu_Tao.png)
![](/img/characters/icon/Keqing.png)
![](/img/characters/icon/Mona.png)
![](/img/characters/icon/Qiqi.png)
![](/img/characters/icon/Raiden_Shogun.png)
![](/img/characters/icon/Razor.png)
![](/img/characters/icon/Kuki_Shinobu.png)
![](/img/characters/icon/Tartaglia.png)
![](/img/characters/icon/Thoma.png)
![](/img/characters/icon/Xiangling.png)
![](/img/characters/icon/Xingqiu.png)
![](/img/characters/icon/Xinyan.png)
![](/img/characters/icon/Yae_Miko.png)
![](/img/characters/icon/Yelan.png)
![](/img/characters/icon/Yoimiya.png)

## Evidence Vault[​](#evidence-vault "Direct link to Evidence Vault")

## 📄️Snapshot and Dynamic

Main Page:

──────── [TRUNCATED] ────────
Showing 6,703 chars (head) + 2,144 chars (tail) of 10,283 total clean characters.
─────────────────────────────