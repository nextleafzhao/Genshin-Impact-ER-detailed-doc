[Skip to content](#content "Skip to content")


[![KQM](https://kqm-uploads.keqingmains.com/wp-content/uploads/2021/10/kqm-logo-full-e1633177025729.png "KQM")](https://keqingmains.com/ "KQM")

  Please link this guide if you use it as a reference for your own content. Unofficial translations must also link to the original. 

# Lunar Reaction Guide

*Updated for Version “Luna VI”*

Lunar Reactions are a new set of reactions that are enabled when characters with certain Moonsign Benediction Passive Talents are in the party. At the time of writing, the only characters with such passives are limited 5-star characters. These passives convert pre-existing reactions into their Lunar variants. These new reactions bring their own new mechanics and damage formulas, which this guide aims to explain and better aid in character and team building.  
  
Definitions:  
Aura – The element that is currently on the target.  
Trigger – The application of an element onto an existing aura, which triggers a reaction.  
Gauge – The amount of an element (Typically applied in units of 1U, 2U, or 4U).

Table of Contents

# Moonsign

## Moonsign Level

Version *Luna I* introduced a unique party mechanic called Moonsign. Those with Moonsign Benediction Passive Talents will increase the party’s Moonsign Level by 1, and in the case of Moon Wheel users, enable Lunar Reactions. Not all characters with a Moonsign Passive can enable Lunar Reactions. As previously stated, currently, the only characters who can enable Lunar Reactions are 5-star limited characters.

There are two Moonsign levels:

* Moonsign level 1: Nascent Gleam
* Moonsign level 2: Ascendant Gleam

Each Moonsign Level gives different effects to certain character talents and equipment. Despite the in-game description stating both Nascent Gleam and Ascendant Gleam effects can be stacked unless otherwise stated, all instances thus far have in fact been stated otherwise, effectively meaning they do not stack.

Examples of the effects of Moonsign Level:

* Aino’s Elemental Burst will have increased AoE and attack frequency when the party’s Moonsign Level is Ascendant Gleam.
* The 4pc effects of the artifact sets Night of the Sky’s Unveiling and Silken Moon’s Serenade change based on the party’s Moonsign Level.
* Enemies from the Wild Hunt have special HP bars that can be more quickly dealt with by abilities enhanced by Ascendant Gleam.

## Moonsign Team Bonus

When the party’s Moonsign level is Ascendant Gleam, non-Moonsign party members can provide Lunar Reaction DMG Bonus to the whole party upon casting their Skill or Burst. The maximum bonus that can be gained in this way is 36%.

Note: This buff cannot stack and is refreshed based on the most recent cast of a Skill or Burst of a non-Moonsign character.

The bonus given is based on the corresponding personal stats of their element:

* Pyro, Electro, or Cryo characters – 0.9% Bonus for every 100 ATK
  + Caps at 4,000 ATK
* Hydro characters – 0.6% Bonus for every 1,000 max HP
  + Caps at 60,000 HP
* Geo characters – 1% Bonus for every 100 DEF
  + Caps at 3,600 DEF
* Anemo or Dendro characters – 2.25% Bonus for every 100 EM
  + Caps at 1,600 EM

# Lunar-Charged

When Electro is applied onto an enemy with Hydro aura, or vice versa, Lunar-Charged (LC) is triggered. After triggering LC, a thundercloud will appear nearby that continuously deals LC damage to opponents affected by both Hydro and Electro. The damage dealt is based on all characters who applied Hydro or Electro.

This reaction is currently only enabled by the following characters:

* **[Ineffa](https://keqingmains.com/q/ineffa-quickguide/)**
* [**Flins**](https://keqingmains.com/q/flins-quickguide/)
* **[Columbina](https://keqingmains.com/q/columbina-quickguide/)**

## Additional Information

* Thunderclouds exist for ~6s.
* LC ticks every ~2s.
  + Ticks can be extended to 2.1s to 2.3s by hitlag caused by on-fielders.
* LC **does not** snapshot character stats like EM and CRIT (unlike Electro-Charged).

# Lunar-Bloom

When Hydro is applied onto an enemy with Dendro, or vice versa Lunar-Bloom (LB) is triggered. Upon triggering, the reaction will spawn a Dendro Core or Bountiful Core, and after 2.5s, it will grant the party 1 Verdant Dew (VD). The generated cores behave identically to those of regular Bloom, and the reaction does not deal damage on its own. Instead, this reaction serves to accumulate VD for characters that can consume it in their kits. Currently, the only way to deal LB damage is through character combat abilities.

This reaction is currently only enabled by the following characters:

* **[Lauma](https://keqingmains.com/q/lauma-quickguide/)**
* **[Nefer](https://keqingmains.com/q/nefer-quickguide/)**
* **[Columbina](https://keqingmains.com/q/columbina-quickguide/)**

## Additional Information

* VD can be carried over into the next chamber in Abyss.
* VD generation is slightly worse at higher FPS.
  + At 60 FPS, one LB reaction generates one VD.
  + At 120 FPS, one LB reaction generates ~97% of a VD stack.
  + Lower FPS values (like 30) don’t appear to impact how many stacks are gained.
* Triggering a LB reaction on multiple enemies with a single attack only generates one VD.
* Triggering two LB reactions, with the second one being triggered less than 2.5s after the first, will result in the second VD not being filled all the way until 5s has passed.
  + For example, if you trigger LB at 0s, then trigger it again 2s later, the first VD will begin filling at 0s, and will finish filling at 2.5s. The second VD will begin filling at 2s and finish at 4.5s. Since it has not been 5s yet, you only have 1.8 VD, despite triggering two reactions. Only after 5s will you have two VDs.

# Lunar-Crystallize

When Geo is applied onto an enemy with Hydro aura, Lunar-Crystallize (LCrys) is triggered. Upon triggering this reaction, three Moondrifts will appear. After triggering LCrys three times, each Moondrift will deal LCrys damage once. The damage dealt is based on all characters who applied Hydro, and all Geo characters that triggered the reaction.

This reaction is currently only enabled by the following characters:

* **[Zibai](https://keqingmains.com/q/zibai-quickguide/)**
* **[Columbina](https://keqingmains.com/q/columbina-quickguide/)**
* **[Linnea](https://keqingmains.com/q/linnea-quickguide/)**

## Additional Information

* Moondrifts count as a single Geo Construct, but each Moondrift can resonate with other Geo Constructs individually.
* LCrys **does not** have a global ICD (unlike Crystallize).
  + Due to this detail, it is possible to double Crystallize on Electro-Charged (EC)/LC aura (see Gauge Mechanics section for a more in-depth explanation).
  + Because of the above interaction, if a Geo character is holding 4pc Scroll, the reaction will cause the buff to proc on all three Elements, giving all three Geo, Hydro, and Electro DMG Bonus simultaneously (as opposed to just Geo and Electro with regular Crystallize). While these bonuses do not buff Lunar-Reaction damage, it can still be relevant for those that have significant Talent damage in Lunar teams, like Neuvillette.
* As of Version *Luna IV*, Geo Resonance has been updated to include LCrys, allowing for the Common DMG Bonus and Geo RES Shred to be accessible without needing to have a shield.
* Mechanics requiring regular Crystallize (such as Navia’s Shrapnel) can also be procced by LCrys.
* You can still obtain Elemental Shields by picking up Elemental Shards produced by the regular Crystallize reaction (excluding Hydro).

# Damage Formulas

## Level Multiplier

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Level** | **10** | **20** | **30** | **40** | **50** | **60** | **70** | **80** | **90** | **95** | **100** |
| **Multiplier** | 34.14 | 80.58 | 136.29 | 207.38 | 323.60 | 492.88 | 765.64 | 1077.44 | 1446.85 | 1561.47 | 1674.81 |

## Lunar-Charged

Two different types of LC damage exist: Reaction LC damage and Direct LC damage. Reaction LC damage is dealt by the thunderclouds summoned by triggering an LC reaction. Direct LC damage is dealt directly by a character through their talents without triggering a reaction. This is noted in Character Talent descriptions, such as Ineffa’s A1 Passive Talent, or Columbina’s Gravity Interface.

For Reaction LC damage, the damage calculation is done in two steps. First, an individual calculation is performed for all characters who have contributed to the reaction by applying either Hydro or Electro. The formula for this individual calculation is as follows:

Second, the individual damage is ranked from highest to lowest and summed into the final value as follows:

We can see in this formula that the highest individual damage is most significant, and the following contributors get their damage reduced by 1/2 and 1/12, respectively. This means that while everyone does contribute, only the highest and second-highest contributors’ damage really matters for the final result. This punishes players less for running support characters that are not built for LC damage, as their damage contribution is already insignificant.  
  
Direct LC damage is calculated as follows:

## Lunar-Bloom

As previously stated, currently the only way to deal LB damage is through character abilities. The damage for Direct LB damage is as follows:

## Lunar-Crystallize

Similar to LC, LCrys also has Reaction and Direct types. It is calculated the same way as LC damage, with the only differences being that both Reaction and Direct LCrys DMG have multipliers of 1.6 instead of 3.

Individual calculation:

Final damage:

Like Reaction LC, reaction LCrys also follows the preservation of the contributor with the highest contribution, allowing for less punishment with support characters.

**Direct Damage:**

## Additional Information

* The %EM Bonus for the three reactions uses the same formula as shown below:

* Lunar Reaction Base DMG Bonus is not to be confused with ordinary Reaction Bonus. It is currently only provided by characters with certain Moonsign Benediction Passive Talents.
  + Reaction Bonuses can be obtained through character kits or equipment. Some examples of this would be Ineffa’s C1, the passive effect of Blackmarrow Lantern, or the Moonsign Team Bonus.

* Lunar Reaction Elevation is currently only obtainable through Constellations of 5-star units.

* These reactions, as shown in the formulas above, are affected by Electro, Dendro, and Geo RES, respectively.
  + They are **not** affected by enemy DEF (nor DEF Shred).

* Elemental CRIT Bonuses also apply to the respective Lunar Reaction damage (e.g. Sara’s C6, Gorou’s C6).

* For reaction LC and LCrys damage, whether the final damage is considered a CRIT is determined by whether the highest individual damage was CRIT.

* These reactions **are not** affected by regular Elemental DMG Bonus nor Common DMG Bonus (e.g. Elemental Goblets, Furina’s DMG Bonus)

* Direct Lunar damage **does not** scale with level.

* At the time of writing, there are very limited sources of Additive Base DMG Bonus for Lunar Reactions. The current sources are as follows:
  + Columbina’s C4 (All types, self buff only)
  + Lauma’s Pale Hymn stacks (LB only)
  + Illuga’s Nightingale Song stacks (Direct LCrys only)
  + Zibai’s A1 Passive (self buff only)
  + Linnea’s C1 (applies to both Reaction and Direct LCrys)

# Gauge Mechanics

Though there were several new reactions added, the scope of Elemental Gauge Theory is largely unchanged. While the Lunar counterparts of the base reactions follow the same gauge mechanics, there are some characteristics unique to the Lunar variants that change how they interact.

While both EC and LC deplete 0.4U of aura per tick, EC ticks about every 1s and LC ticks roughly every 2s. This results in less aura depletion, which allows the aura to last longer. This can be useful for allowing Vaporize, or easier double Swirl for 4pc VV.

As previously mentioned, LCrys does not have a global ICD as regular Crystallize does, and because of this, it is possible to double Crystallize on EC/LC aura. This can happen in two ways:

* Geo can consume both Electro and Hydro aura to trigger both LCrys and Electro Crystallize simultaneously. Note that the Geo trigger must apply enough Units of Geo to fully consume the Electro aura before reacting with Hydro.
* If Geo cannot clear the Electro aura, if Electro Crystallize is on cooldown (1s), then additional Geo application can directly trigger LCrys.

The gauge mechanics for LB follow the same pattern as its non-Lunar counterpart.

# Credits

**Writer(s):** ren718.exe  
****Contributors:**** acerbus114, lesterberne, antiguaa, pulsar79., maelstromica

[^](#)

© 2026 KQM [Website built by ~ Yami](https://ko-fi.com/yami)  Other things I built :)    

[Yuri Translations](https://lightnovelsai.com/) [Best Poker Deals](https://cryptopokerdb.com) [Asian Novel Translation Tool](https://webnovelsai.com/) [ChatGPT AI tool](https://doanythingai.com/) [Novel Recommendations](https://novelrecommendations.com/) [AI SEO Content Writer](https://kensakuai.com/)

Guides and content - KQM contributors and staff

Website Feedback on KQM Discord- [Click Here](https://discord.com/channels/763583452762734592/953216453077794857) || [Cookie Policy](https://keqingmains.com/cookie-policy/)

© All rights reserved by HoYoverse. Other properties belong to their respective owners.

 