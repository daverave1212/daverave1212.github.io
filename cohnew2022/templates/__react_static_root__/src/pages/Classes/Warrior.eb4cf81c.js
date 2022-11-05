(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{199:function(e){e.exports=JSON.parse('{"Class":"Warrior","Description":"Warriors are highly trained combat experts","Base Health":7,"Language":"A true warrior speaks only the language of battle!\\n(Being a warrior does not grant you other languages, except the ones you already speak.)\\n","Armor Training":"Heavy Armor","Level Up":{"Every Level":{"Health":6,"Spells":"1 known Advanced Spell","Charges":"1 Charge"},"Level Bonuses":{"1":"Choose your Specialization","2":"Talent from your Specialization (Tier 1)","3":"You gain +1 in any Stat of choice.\\nYou gain +1 Training Point.\\nYou gain 1 Feat.\\n","4":"Talent from your Specialization (Tier 2)","5":{"~Action Surge~":{"A":"0 Actions","Cooldown":"Long Rest","Effect":"Gain 0.5 Actions this turn.","Name":"~Action Surge~"}},"6":"Talent from your Specialization (Tier 3)","7":"You gain +1 in any Stat of choice.\\nYou gain +1 Training Point.\\nYou gain 1 Feat.\\n","8":"Talent from your Specialization (Tier 4)","9":"Pick one more Talent from your Specialization, from any Tier from Tier 1 to Tier 3.","10":"Talent from your Specialization (Tier 5)"}},"Spellcasting":{"Type":"Charge-based","Description":"Warrior Abilities are Charge-based.\\nAs a Warrior, you have a number of Charges.\\nTo cast any Advanced Spell from your known spells, you must expend 1 Charge.\\nYou don\'t have restrictions for how many times you can cast a spell per Long Rest, but you have restrictions on your Charges.\\nAdvanced Abilities are all Abilities from the Spell Lists listed as Advanced.\\nIf an Ability is not listed as Advanced, you can use it as many times as you like.\\n","Main Stat":"Choose permanently - Wisdom or Charisma","Spell DC":"6 + (Main Stat)","Charges":{"Amount":3,"Regain":"You regain all Charges back when you Long Rest."},"Change":"You can change your known Spells (not Talents) when taking a Long Rest.","Other":"All Warrior-specific abilities are considered Maneuvers (unless stated otherwise).","Known Spells":"1 + Your Intelligence + Your Level","Spell Lists":["Maneuvers"]},"Starting Abilities":{"~Advanced Flank~":{"A":"Reaction or 0 Actions","Cooldown":"2 uses / Round, only 1 use / Turn","Effect":"When you flank-attack an enemy, or an ally flank-attacks an enemy with you, the flank damage bonus is +1d4 instead of +1.","Name":"~Advanced Flank~"}},"Starting Abilities Description":[{"Advanced Flank":"Note the Action cost and Cooldown of Advanced Flank.\\nYou can use Advanced Flank once on your turn, and once outside of your turn, on an Ally\'s attack.\\nRemember that you have only 1 Reaction per Round!\\nIf you choose to use Advanced Flank on an ally\'s attack, you forego your other Reaction options, like making Opportunity Attacks.\\n"}],"Specializations":{"Description":"At Level 1, you can choose your specialization. Every Warrior can choose from the following Warrior specializations","Choices":["Fighter, a person specialized in weapon fighting and body-to-body combat","Battlemaster, a heavily trained and armed warrior; master yourself - master the enemy","Barbarian, a crude and battle thirsty warrior, who seeks to shed blood and lives for the fight","Marksman, a precise and mechanical soldier, always finding the best tactic and position; the Marksman wins the battle before it begins"]},"Specs":{"Fighter":{"Description":"Lorem!","Starting Abilities":{"~Overpower~":{"A":"0 Actions","Cost":"1 (or 2 Charges)","Cooldown":"Once per turn","Effect":"Gain 0.5 Actions (or 1 Action) more this turn.\\nYou can do this once per turn.\\n","Notes":"If you use 1 Charge, you gain 0.5 Actions. If you use 2 Charges, you gain 1 Action.","Name":"~Overpower~"},"~Upper Hand~":{"A":"Passive","Effect":"Your first attack you make before you move in a turn counts as if it is Flanking.\\nIf you are wielding a 1-Handed weapon, when you make an attack of opportunity, you can make 2 attacks of opportunity instead (with that weapon).\\n","Name":"~Upper Hand~"}},"Talents":{"Level 2":{"<Might Over Magic>":{"A":"Passive","Effect":"Choose an Advanced spell from the Elemental spell list that deals damage.\\nYou can cast that spell once per Long Rest.\\nThat spell becomes a physical version of itself.\\nInstead of using magic to cast that spell, you use your body/weapons/tools.\\nCome up with a description of how it works (see notes).\\nThe damage of that spell becomes Slash, Smash or Pierce, whichever makes sense.\\nIt counts as a Maneuver.\\n","Notes":"E.g. Scorching Rays - you shoot 3 arrows with your bow (Pierce damage).\\nE.g. Frost Nova - you smash the ground with such force that it damages and slows units around you (Smash damage).\\nBe creative!\\n","Name":"<Might Over Magic>"},"<Weaponmaster>":{"A":"Passive","Effect":"When you get this, choose one weapon type.\\nYou have that weapon effect too, no matter what weapon you are using.\\nYou can the weapon type you always know on a Long Rest.\\n","Name":"<Weaponmaster>"}},"Level 4":{"<Into the Fray>":{"A":"Passive","Effect":"When combat starts, determine which side is your Allied Side and which is the Enemy Side of the battlefield. Each side has a direction (Allied Direction and Enemy Direction).\\nIf you end your turn more to the Allied Direction than you started, you gain 4 Shielding until the start of your next turn.\\nIf you end your turn more to the Enemy Direction than you started, your first attack next turn deals 1d6 extra damage.\\n","Name":"<Into the Fray>"},"<Glory Run>":{"A":"Passive","Effect":"When combat starts, a Glory Point appears behind the furthermost Enemy from you that you can see.\\nIf you touch the Glory Point, heal for 20% of your total Health and all Enemies you can see must pass a Charisma Check or be Crippled.\\nThe Glory Point then disappears.\\n","Notes":"The Glory Point is not a physical thing. It\'s merely a concept (a point).","Name":"<Glory Run>"}}}},"Battlemaster":{"Description":"Lorem? Ipsum!","Starting Abilities":{"~Solid Defense~":{"A":"Passive","Effect":"Whenever you are attacked (after damage), your Defense is reduced by 1.\\nEvery Long Rest, your Defense resets to its base value and is increased by +1 on top of it.\\n","Name":"~Solid Defense~"},"~Defense Up~":{"A":"0 Actions","Cost":"1 Charge.","Effect":"Increase your Defense by 2.","Name":"~Defense Up~"},"~Obliterate~":{"A":"0 Actions","Cost":"1 Charge","Cooldown":"Once per turn","Effect":"Deal bonus damage on top of an attack equal to your current Defense (minimum 0).\\nReset your Defense.\\n","Name":"~Obliterate~"}},"Talents":{"Level 2":{"<Protect the Meek>":{"A":"Reaction","Cooldown":"2 times / Encounter","Effect":"When an ally within 3 meters of you is targeted by a ranged attack, you become its target instead.","Name":"<Protect the Meek>"},"<Bashing Charge>":{"A":"1 Action","Cooldown":"Long Rest","Effect":"Move 3 meters in a straight line, then choose a target near you.\\nThat target takes 1d8 damage and try to Stun the target (Might Check).\\n","Name":"<Bashing Charge>"},"<Weaponmaster>":{"A":"Passive","Effect":"When you get this, choose one weapon type.\\nYou have that weapon effect too, no matter what weapon you are using.\\nYou can the weapon type you always know on a Long Rest.\\n","Name":"<Weaponmaster>"}},"Level 4":{"<Glory Run>":{"A":"Passive","Effect":"When combat starts, a Glory Point appears behind the furthermost Enemy from you that you can see.\\nIf you touch the Glory Point, heal for 20% of your total Health and all Enemies you can see must pass a Charisma Check or be Crippled.\\nThe Glory Point then disappears.\\n","Notes":"The Glory Point is not a physical thing. It\'s merely a concept (a point).","Name":"<Glory Run>"}}}},"Barbarian":{"Description":"AAAAAAAAAAAA LOREMM!!","Starting Abilities":{"~Onslaught~":{"A":"Passive","Effect":"Whenever YOU kill a worthy enemy, heal for 1d6.","Name":"~Onslaught~"},"~Reckless Attack~":{"A":"0 Actions","Cost":"1 Charge.","Effect":"After you land an attack, you can deal 2d6 damage to you and also add that damage to the attack.","Name":"~Reckless Attack~"},"~Undying Rage~":{"A":"Reaction","Cost":"1 Charge","Effect":"Taking damage that would kill you leaves you at 1 Health instead.","Name":"~Undying Rage~"},"~Blood Boil~":{"A":"0 Actions","Cost":"1 Charge.","Effect":"Heal for 2d6 health.","Name":"~Blood Boil~"}},"Talents":{"Level 2":{"<Heartbeat Trance>":{"A":"0 Actions or Reaction","Cooldown":"Long Rest","Effect":"Take 1d6 damage.\\nEnter a Heart Trance for 1 minute.\\nWhile in Heart Trance, you take 50% less damage from all non-Physical combat damage (except from your own abilities).\\nWhen Heart Trance ends, heal for 2d6.\\n","Notes":"You can activate this as a Reaction when you would take damage.","Name":"<Heartbeat Trance>"},"<Rage Trance>":{"A":"0 Actions or Reaction","Cooldown":"Long rest","Effect":"Take 1d6 damage.\\nUntil the end of your next turn, you are immune to Stuns, Slows, Snares, Cripples and being knocked Prone.\\nYour attacks while in Rage Trance have an extra +1 damage to all attacks.\\nWhen Rage Trance ends, heal for 2d6.\\n","Notes":"You can activate this as a Reaction when you would be Crowd Controlled.","Name":"<Rage Trance>"},"<Battle Trance>":{"A":"0 Actions or Reaction","Cooldown":"Long Rest","Effect":"Take 1d6 damage.\\nEnter a Battle Trance that lasts until the end of your next turn.\\nYou gain a protective shield around you which absorbs up to Your Might + Your Level physical damage.\\nWhen Battle Trance ends, heal for 3d6, and the shield fades.\\n","Notes":"You can activate this as a Reaction when you would take damage.","Name":"<Battle Trance>"}},"Level 4":{"<Death Mark>":{"A":"0 Actions","Cooldown":"Long Rest","Effect":"Mark a Unit you can see.\\nWhenever YOU deal damage to it until your next turn, remember the damage done.\\nAt the start of your next turn, the mark bursts and the Unit takes directly 50% of the damage it has taken in this time period.\\n","Name":"<Death Mark>"},"<Glory Run>":{"A":"Passive","Effect":"When combat starts, a Glory Point appears behind the furthermost Enemy from you that you can see.\\nIf you touch the Glory Point, heal for 20% of your total Health and all Enemies you can see must pass a Charisma Check or be Crippled.\\nThe Glory Point then disappears.\\n","Notes":"The Glory Point is not a physical thing. It\'s merely a concept (a point).","Name":"<Glory Run>"}}}},"Marksman":{"Description":"Lorem ipsum dolor sit amet.","Starting Abilities":{"~Marksmanship~":{"A":"Passive","Effect":"YOU can flank a target from up to 6 meters away (if you, the target and the ally are on the same line).","Notes":"As usual, that ally helping with your flank must right behind the target (meaning allies can\'t flank an enemy with you being 6 meters away).","Name":"~Marksmanship~"},"~Reload~":{"A":"Passive","Effect":"Once per turn, you get some damage modifiers to your first attack, depending on the current round:\\nYour first regular weapon attack in an encounter deals +1 damage.\\nYour second regular weapon attack in the encounter deals +1d6 damage.\\nYour third regular weapon attack and all upcoming ones in the encounter deal -5 damage.\\nYou can spend 1 Charge and 0 Actions to \'reset\' this Ability to its original state.\\n","Name":"~Reload~"},"~Point Mark~":{"A":"0 Actions","Cooldown":"Once / Encounter","Range":"15 meters","Effect":"Mark a point on the ground.\\nAllies and you can use the mark to flank targets.\\nThose attacks do benefit from Advanced Flank.\\n","Name":"~Point Mark~"}},"Talents":{"Level 2":{"<Recoil Shot>":{"A":"0 Actions","Cooldown":"2 times / Long Rest","Range":"2 meters","Effect":"Dash up to 2 meters away from the target.\\nPush the target 2 meters away. It takes 1d8 Damage if it collides with something.\\n","Notes":"This does not trigger attacks of oportunity.","Name":"<Recoil Shot>"},"<Harpoon>":{"A":"1 Action","Cooldown":"Long Rest","Range":"6 meters","Effect":"Make a ranged attack that deals 2d12 + Main Stat damage (against Defense).\\nThe target makes a Dexterity save.\\nIf it fails, it is pulled to you.\\nOtherwise, you are pulled to it.\\n","Notes":"Requires a Harpoon, which can be bought for 50 Gold.","Name":"<Harpoon>"},"<Precise Weapon>":{"A":"1 hour","Effect":"Choose any weapon and make it Precise.\\nThe weapon\'s scaling becomes +4 instead of scaling with a Stat.\\nThe wielder of the weapon is also immune to Cripple and has +1 Movement Speed.\\nMaking another weapon Precise makes the previous back to how it was.\\n","Name":"<Precise Weapon>"}},"Level 4":{"<Ground Aim Lock>":{"A":"Passive","Effect":"Your first attack every turn while Prone deals +1d6 damage.\\nYou can go prone for 0 Actions on your turn.\\n","Name":"<Ground Aim Lock>"},"<Scatterblast>":{"A":"1 Action","Range":"20 meters","Cooldown":"Long Rest","Effect":"Make an attack on a target for 3d8 + Main Stat Smash damage.\\nThe impact is so powerful that all units within 3 meters of the target take the final damage taken by the target directly (not against Defense).\\nThis attack is affected by your Reload state.\\n","Name":"<Scatterblast>"},"<Crosshair Shot>":{"A":"1 Action","Range":"16 meters","Cooldown":"Long Rest","Effect":"Make an attack on a target.\\nFor each meter to the target, the attack deals 1d6 Pierce damage, up to 8 meters.\\nFor each meter to the target over 8 meters, deal one less d6.\\n","Notes":"At exactly 8 meters range, the attack deals 8d6 damage. At 7 and 9 meters, it deals 7d6. At 6 and 10 meters, 6d6. And so on.","Name":"<Crosshair Shot>"}}}}}}')},68:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return d}));var n=t(0),o=t.n(n),s=(t(169),t(160),t(54)),i=t(53),r=(t(171),t(172),t(173),t(166)),l=(t(168),t(163)),c=t(164),u=(t(165),t(167),t(174),t(175),t(199)),h=t(176);function d(){return o.a.createElement("div",null,o.a.createElement("div",{className:"page"},o.a.createElement(s.a,null,u.Class),o.a.createElement("br",null),o.a.createElement(l.a,null,o.a.createElement(c.a,null,u.Class," Abilities are Exhaust-based. As a ",u.Class,", you know a certain number of Advanced Abilities. You can cast each Advanced Ability you know ONCE, then it becomes unusable (Exhausted) until your next Long Rest. Advanced Abilities are all Abilities from the Spell Lists listed as Advanced. If an Ability is not listed as Advanced, you can use it as many times as you like.",o.a.createElement(r.a,null),u.Class," Abilities are Exhaust-based. As a ",u.Class,", you know a certain number of Advanced Abilities. You can cast each Advanced Ability you know ONCE, then it becomes unusable (Exhausted) until your next Long Rest. Advanced Abilities are all Abilities from the Spell Lists listed as Advanced. If an Ability is not listed as Advanced, you can use it as many times as you like.",o.a.createElement(r.a,null),u.Class," Abilities are Exhaust-based. As a ",u.Class,", you know a certain number of Advanced Abilities. You can cast each Advanced Ability you know ONCE, then it becomes unusable (Exhausted) until your next Long Rest. Advanced Abilities are all Abilities from the Spell Lists listed as Advanced. If an Ability is not listed as Advanced, you can use it as many times as you like. As a ",u.Class,", you know a certain number of Advanced Abilities. You can cast each Advanced Ability you know ONCE, then it becomes unusable (Exhausted) until your next Long Rest. Advanced Abilities are all Abilities from the Spell Lists listed as Advanced."),o.a.createElement(c.a,null,o.a.createElement("img",{style:{marginLeft:"-35px",marginTop:"-25px"},className:"class-image",src:"/Classes/".concat(u.Class,".png")}))),o.a.createElement(h.a,{theClass:u}),o.a.createElement(h.b,{theClass:u}),o.a.createElement(h.e,{theClass:u}),o.a.createElement(h.f,{spellsObject:u["Starting Abilities"],description:u["Starting Abilities Description"]}),o.a.createElement(i.a,null,"Specialzations"),o.a.createElement("p",null,"The first time you choose a cleric domain (specialization), you must choose between two abilities. For example, for Battle Cleric, you have to choose either March Ahead or Piety. Choose wisely...")),Object.keys(u.Specs).map((function(e){var a=u.Specs[e];return o.a.createElement(h.c,{name:e,spec:a},o.a.createElement(h.d,{spec:a}))})))}}}]);