(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{196:function(e){e.exports=JSON.parse('{"Class":"Rogue","Description":"Rogues are masters of stealth and deception.","Base Health":3,"Armor Training":"Medium Armor","Language":"If your Inteligence is at least 1, you know Thieves\' Cant.\\nThieves\' Cant is not a spoken language, but rather a set of symbols, sign language and code names for various objects, places or people.\\nUse Thieves\' Cant wisely!\\n","Level Up":{"Every Level":{"Health":4,"Spells":"1 known Ability","Charges":"1 Charge"},"Level Bonuses":{"1":"Choose your Specialization","2":"Talent from your Specialization (Tier 1)","3":"You gain +1 in any Stat of choice.\\nYou gain +1 Training Point.\\nYou gain 1 Feat.\\n","4":"Talent from your Specialization (Tier 2)","5":{"~Action Surge~":{"A":"0 Actions","Cooldown":"Long Rest","Effect":"Gain 0.5 Actions this turn.","Name":"~Action Surge~"}},"6":"Talent from your Specialization (Tier 3)","7":"You gain +1 in any Stat of choice.\\nYou gain +1 Training Point.\\nYou gain 1 Feat.\\n","8":"Talent from your Specialization (Tier 4)","9":"Pick one more Talent from your Specialization, from any Tier from Tier 1 to Tier 3.","10":"Talent from your Specialization (Tier 5)"}},"Spellcasting":{"Type":"Charge-based","Description":"Rogue Abilities are Charge-based.\\nAs a Rogue, you have a number of Charges.\\nTo cast any Advanced Spell from your known spells, you must expend 1 Charge.\\nYou don\'t have restrictions for how many times you can cast a spell per Long Rest, but you have restrictions on your Charges.\\nAdvanced Abilities are all Abilities from the Spell Lists listed as Advanced.\\nIf an Ability is not listed as Advanced, you can use it as many times as you like.\\n","Main Stat":"Intelligence","Spell DC":"6 + (Main Stat)","Charges":{"Amount":2,"Regain":"You regain all Charges back when you Long Rest."},"Change":"You can change your known Spells (not Talents) when taking a Long Rest.","Other":"All Rogue-specific abilities are considered Maneuvers (unless stated otherwise).","Known Spells":"1 + Your Intelligence + Your Level","Spell Lists":["Maneuvers"]},"Starting Abilities Description":[{"Ambush":"Ambush can normally happen only once per turn, and you can charge it up to deal more damage!\\nHowever, your Rogue Specialization will give you extra ways to Ambush target!\\n"},{"Hide":"Essentially, you can interrupt another Unit\'s turn, put that unit on pause, and start your turn. When your turn ends, the Unit resumes its turn.\\nBefore you attack an enemy group, you can tell your DM where you are sitting, so that you benefit from cover.\\n"},{"Rogue Feats":"Nothing is stopping you from using a 2-Handed weapon instead of 1-Handed ones.\\nThere should be no downside to that.\\nHowever, given that 1-Handed weapons are weaker than 2-Handed weapons, either one of the 2 feats will make wielding 1-Handed or 2-Handed weapons equally strong.\\n"}],"Starting Abilities":{"~Ambush~":{"A":"Passive","Effect":"If you start your turn Hidden, your first attack deals 1d6 + 1 extra damage.\\nWhen Ambushing, you can also spend as many Charges as you want.\\nThat attack gains 1d6 + 1 damage more for each Charge spent.\\nAmbush can only happen once per turn.\\n","Notes":"Your Specialization will give you extra ways to Ambush.\\nYou can\'t stack 2 Ambushes at the same time, obviously.\\n","Name":"~Ambush~"},"~Hide~":{"AlignOnWebsite":"Right","A":"Special","Cooldown":"Once per encounter","Effect":"When combat starts, if you have Cover from all enemies, you start as Hidden.\\nWhile Hidden, you can skip your turn.\\nThen, you can unhide and start your turn whenever you like (even during enemies\' turns).\\nIf you did this, when your turn ends, you are no longer hidden.\\n","Notes":"Attacking or using Abilities or moving out of cover in relation to any enemy makes you unhides you.\\nIf you don\'t start your turn this round, you essentially lose your turn. You don\'t take 2 turns next round.\\nIf you want to start during an enemy\'s turn, you do so when they declare they want to do something or after they finish doing something.\\nIn special circumstances, the DM might ask you to make a Dexterity Check to remain Hidden.\\nYou can\'t become Hidden through non-Ability means.\\n","Name":"~Hide~"},"~Rogue Feats~":{"A":"Passive","Effect":"When creating your character, pick one of the following Feats to get for free.","Name":"~Rogue Feats~"},"~Dual Wielding~":{"A":"Passive","Requirement":"Trained in 1-Handed melee or ranged weapons","Effect":"If you have a different type of 1-Handed Weapon equipped in each hand, your 1-Handed attacks deal +1 Damage.\\nEvery turn, you must alternate attacks between each hand\'s weapon to get the +1.\\n","Notes":"For example, you must do one attack with your main hand weapon, one with the off-hand, one with main hand, one with off hand, etc"},"~Duelist Technique~":{"A":"Passive","Requirement":"Trained in 1-Handed melee weapons","Effect":"If you are wielding a 1-Handed weapon and nothing in the other hand, your attacks with that weapon do +1 Damage.\\n"}},"Specializations":{"Description":"At Level 1, you can choose your specialization.\\nEvery Rogue can choose from the following Rogue specializations\\n","Choices":["Thief, an agile-handed individual, crafty and stealthy, dexterous and silent","Assassin, a person specialized in taking targets out one-on-one, through whatever means","Skirmisher, an outlaw who is not afraid to engage in direct combat and apply whatever tricks necessary to get the job done"]},"Specs":{"Thief":{"Description":"...lorem... ipsum...","Starting Abilities":{"~Backstab~":{"A":"Passive","Effect":"When you Flank an enemy, Ambush is applied.","Name":"~Backstab~"},"~Agile Hand~":{"A":"Passive","Effect":"Your movement does not trigger Opportunity Attacks.","Name":"~Agile Hand~"},"~Fool\'s Coin~":{"A":"Passive","Effect":"Whenever you spend Charges on Ambush, choose one of the rolled dice of the attack. Gain that many Gold Tokens.\\nGold Tokens are an imaginary currency.\\nWhen in a town or city, you convert all Gold Tokens to actual gold coins (1 Gold Token for 10 Gold) (this is done on a Long Rest).\\n","Notes":"Lore-wise, as a Thief you steal successfully in a city when converting tokens, while preparing and gaining momentum for it in combat.\\n","Name":"~Fool\'s Coin~"}},"Talents":{"Level 2":{"<Payback Shot>":{"A":"0 Actions","Cost":"All Gold Tokens (at least 1)","Effect":"A Unit within 2 meters must pass a Dexterity Check or be Stunned.\\nFor every 2 Gold Tokens you spent, increase the DC of this by 1.\\n","Name":"<Payback Shot>"},"<Arcane Trickster>":{"A":"Passive","Effect":"You can now cast spells!\\nYou permanently know 3 Spells from the Arcane and Conjuration Spell Lists.\\nFool\'s Coin now also applies when spending Charges on an Advanced Spell.\\nYou can change these Spells when you Long Rest.\\nYou learn 1 additional ability at Levels 3, 5, 7 and 9.\\n","Name":"<Arcane Trickster>"},"<Way of Fooling>":{"A":"Passive","Effect":"Your Charisma is increased by 2, (up to a maximum of 4).","Name":"<Way of Fooling>"},"<Whiplash>":{"A":"0 Actions","Cooldown":"Long Rest, otherwise it costs 1 Charge","Effect":"Throw a whiplash at a grabbable point within 6 meters.\\nPull yourself to a target point.\\n","Notes":"Requires a Whiplash item, which can be bought for 100 gold.","Name":"<Whiplash>"}},"Level 4":{"<Thief Shock Wire>":{"A":"0 Actions","Cost":"2 Gold Tokens","Range":"6 meters to end in line of sight","Effect":"Deploy a Shock Tripwire of up to 5 meters long between 2 obstacles.\\nWhen a Unit passes through the tripwire, it takes 1d8 Shock Damage and must pass a Dexterity Check with -3 or be Snared.\\nA Unit can see the tripwire only if it has 3 or more Wisdom.\\n","Notes":"Each end of the wire must be attached to something solid and static.\\nYou can make use of walls, obstacles, etc.\\nRequires a Special Tripwire Set which can be bought for 200 gold.\\n","Name":"<Thief Shock Wire>"},"<Blade Tempest>":{"A":"1 Action","Cooldown":"Long Rest","Effect":"You throw out 8 boomerang blades: one towards each direction (up, up-right, right, etc).\\nEach blade travels 4 meters and stops in that space (can occupy the same space as another Unit).\\nEach blade deals 2d6 direct Slash damage (not against Defense) to all Units it passes through.\\nAt the end of your next turn, the blades return to you.\\nThen, again, each blade deals 2d6 direct Slash damage (not against Defense) to all Units it passes through.\\n","Notes":"Requires 8 special blades, which can be bought for a total of 240 gold.","Name":"<Blade Tempest>"},"<Poisoned Weapons>":{"A":"10 minutes","Cooldown":"8 hours","Effect":"You coat up to 2 weapons in different poisons that last for 8 hours.\\nChoose 2 weapons, and choose a different poison to apply for each:\\n- Deathly Venom: Deals 1d12 extra Poison damage to targets with more than 50% Health; then the target becomes immune to this poison for 1 minute.\\n- Necrotic Toxin: The attack\'s target becomes Slowed and can\'t regain Health for 1 minute\\n- Phosphorus Mix: The target can\'t benefit from Cover for 1 minute (and this attack ignores Cover)\\n- Weakening Poison: The target can only do 1 Attack on their next turn\\n","Notes":"Remember to specify which weapon you are attacking to.\\nRequires a Poisoner\'s Kit which can be bought for 200 gold on the black market. If you\'re in a tight scenario, the DM might let you use monster blood or gather herbs for a 1-time use of this Ability.\\n","Name":"<Poisoned Weapons>"}}}},"Assassin":{"Description":"...LOREMIPSUM! <you died>","Starting Abilities":{"~Isolated~":{"A":"Passive","Effect":"When you attack a Unit, and there is no other Unit adjacent to you or to that enemy (except you), the attack gains Ambush.\\nIf you are already Ambushing the target, the attack gains an additional 1d6 + 1 damage.\\n","Name":"~Isolated~"},"~Planned Assassination~":{"A":"1 minute","Cost":"1 Charge","Cooldown":"Long Rest","Effect":"You plan an attack for 1 minute.\\nYour next attack on that target deals 2d6 + 2 Poison damage.\\nPlanned Assassination fails if your Line of Sight to the target is broken until you attack it.\\n","Notes":"The Charge is spent the moment you declare Planned Assassination.","Name":"~Planned Assassination~"}},"Talents":{"Level 2":{"<Take Out>":{"A":"0.5 Actions","Cost":"1 Charge","Effect":"A Unit within 1 meter must pass a Dexterity Check or be put to Sleep for 1 minute.\\nIf it fails, you gain the Action back.\\n","Downside":"You must be hiding to use Take Out, and the target must be Isolated.\\nThis ability unhides you!\\n","Name":"<Take Out>"},"<Poison Master>":{"A":"1 hour","Cost":"1 Charge","Effect":"Using ingredients costing 35 Gold, you are able to create a few drops of Drinkable Poison.\\nSomeone ingesting them takes 1d12 Poison damage instantly.\\nCombining multiple instances of Drinkable Poison increases its damage by 1d12 for each Drinkable Poison combined.\\nThe poison loses its effect after 72 hours.\\n","Name":"<Poison Master>"},"<Shadowstep>":{"A":"0.5 Actions","Cooldown":"Long Rest","Effect":"If you are covered in shadow, choose another point covered in shadow up to 6 meters away.\\nInstantly teleport to that place.\\n","Notes":"This is considered a Spell.","Name":"<Shadowstep>"}},"Level 4":{"<Blade Tempest>":{"A":"1 Action","Cooldown":"Long Rest","Effect":"You throw out 8 boomerang blades: one towards each direction (up, up-right, right, etc).\\nEach blade travels 4 meters and stops in that space (can occupy the same space as another Unit).\\nEach blade deals 2d6 direct Slash damage (not against Defense) to all Units it passes through.\\nAt the end of your next turn, the blades return to you.\\nThen, again, each blade deals 2d6 direct Slash damage (not against Defense) to all Units it passes through.\\n","Notes":"Requires 8 special blades, which can be bought for a total of 240 gold.","Name":"<Blade Tempest>"},"<Death Mark>":{"A":"0 Actions","Cooldown":"Long Rest","Effect":"Mark a Unit you can see.\\nWhenever YOU deal damage to it until your next turn, remember the damage done.\\nAt the start of your next turn, the mark bursts and the Unit takes directly 50% of the damage you dealt to it in this time period.\\n","Name":"<Death Mark>"},"<Poisoned Weapons>":{"A":"10 minutes","Cooldown":"8 hours","Effect":"You coat up to 2 weapons in different poisons that last for 8 hours.\\nChoose 2 weapons, and choose a different poison to apply for each:\\n- Deathly Venom: Deals 1d12 extra Poison damage to targets with more than 50% Health; then the target becomes immune to this poison for 1 minute.\\n- Necrotic Toxin: The attack\'s target becomes Slowed and can\'t regain Health for 1 minute\\n- Phosphorus: The target can\'t benefit from Cover for 1 minute (and this attack ignores Cover)\\n- Weakening Poison: The target can only do 1 Attack on their next turn\\n","Notes":"Remember to specify which weapon you are attacking to.\\nRequires a Poisoner\'s Kit which can be bought for 200 gold on the black market. If you\'re in a tight scenario, the DM might let you use monster blood or gather herbs for a 1-time use of this Ability.\\n","Name":"<Poisoned Weapons>"}}}},"Skirmisher":{"Description":"Loreeeem!!!","Starting Abilities":{"~Savagery~":{"A":"Passive","Effect":"Attacks on Units that have 50% or less health gain Ambush.","Name":"~Savagery~"},"~Parry~":{"A":"Reaction","Cooldown":"Long Rest","Effect":"Halve the damage of a weapon attack you receive (after the roll, before subtracting Defense).","Name":"~Parry~"}},"Talents":{"Level 2":{"<10% Luck>":{"A":"Passive","Effect":"Once per turn, when you roll a 1 on an attack die, you can reroll that die.","Name":"<10% Luck>"},"<Cheap Tricks>":{"A":"0 Actions","Cost":"2 Charges","Range":"3 meters","Effect":"A Unit within 3 meters must pass a Dexterity Check or be Blinded for 2 turns.","Name":"<Cheap Tricks>"},"<Whiplash>":{"A":"0 Actions","Cooldown":"Long Rest, otherwise it costs 1 Charge","Effect":"Throw a whiplash at a grabbable point within 6 meters.\\nPull yourself to a target point.\\n","Notes":"Requires a Whiplash item, which can be bought for 100 gold.","Name":"<Whiplash>"},"<Quickfire>":{"A":"0 Actions","Cost":"1 Charge","Cooldown":"1 use / Turn","Effect":"Perform an attack with a 1-Handed Ranged weapon.\\nThis attack ignores Cover and has no penalty if you\'re Blinded.\\nThis attack does not trigger attacks of oportunity and can be used in melee range without penalty.\\n","Name":"<Quickfire>"}},"Level 4":{"<Combat Shock Wire>":{"A":"Passive","Range":"6 meters to end in line of sight","Effect":"Whenever you spend one or more Charges, freely deploy a Shock Tripwire of up to 5 meters long between 2 obstacles.\\nWhen a Unit passes through the tripwire, it takes 1d8 Shock Damage and must pass a Dexterity Check with -3 or be Snared.\\nA Unit can see the tripwire only if it has 3 or more Wisdom.\\n","Notes":"Each end of the wire must be attached to something solid and static.\\nYou can make use of walls, obstacles, etc.\\nRequires a Special Tripwire Set which can be bought for 200 gold.\\n","Name":"<Combat Shock Wire>"},"<Poisoned Weapons>":{"A":"10 minutes","Cooldown":"8 hours","Effect":"You coat up to 2 weapons in different poisons that last for 8 hours.\\nChoose 2 weapons, and choose a different poison to apply for each:\\n- Deathly Venom: Deals 1d10 extra Poison damage to targets with more than 50% Health; then the target becomes immune to this poison for 1 minute.\\n- Necrotic Toxin: The attack\'s target becomes Slowed and can\'t regain Health for 1 minute\\n- Phosphorus: The target can\'t benefit from Cover for 1 minute (and this attack ignores Cover)\\n- Weakening Poison: The target can only do 1 Attack on their next turn\\n","Notes":"Remember to specify which weapon you are attacking to.\\nRequires a Poisoner\'s Kit which can be bought for 200 gold on the black market. If you\'re in a tight scenario, the DM might let you use monster blood or gather herbs for a 1-time use of this Ability.\\n","Name":"<Poisoned Weapons>"},"<Swing Thing>":{"A":"Reaction","Effect":"Use when a Unit within 6 meters becomes Snared, Stunned or knocked Prone (you must have line of sight to it).\\nDeal 1d8 Pierce damage to it and push it up to 3 meters in any direction.\\n","Notes":"Requires a Whiplash item for pushing towards you or to a side, which can be bought for 100 gold.\\nFor pushing away from you, requires a gun or crossbow of any type.\\n","Name":"<Swing Thing>"}}}}}}')},65:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(0),o=a.n(n),i=(a(169),a(160),a(54)),s=a(53),r=(a(171),a(172),a(173),a(166)),l=(a(168),a(163)),h=a(164),c=(a(165),a(167),a(174),a(175),a(196)),u=a(176);function d(){return o.a.createElement("div",null,o.a.createElement("div",{className:"page"},o.a.createElement(i.a,null,c.Class),o.a.createElement("br",null),o.a.createElement(l.a,null,o.a.createElement(h.a,null,c.Class," Abilities are Exhaust-based. As a ",c.Class,", you know a certain number of Advanced Abilities. You can cast each Advanced Ability you know ONCE, then it becomes unusable (Exhausted) until your next Long Rest. Advanced Abilities are all Abilities from the Spell Lists listed as Advanced. If an Ability is not listed as Advanced, you can use it as many times as you like.",o.a.createElement(r.a,null),c.Class," Abilities are Exhaust-based. As a ",c.Class,", you know a certain number of Advanced Abilities. You can cast each Advanced Ability you know ONCE, then it becomes unusable (Exhausted) until your next Long Rest. Advanced Abilities are all Abilities from the Spell Lists listed as Advanced. If an Ability is not listed as Advanced, you can use it as many times as you like.",o.a.createElement(r.a,null),c.Class," Abilities are Exhaust-based. As a ",c.Class,", you know a certain number of Advanced Abilities. You can cast each Advanced Ability you know ONCE, then it becomes unusable (Exhausted) until your next Long Rest. Advanced Abilities are all Abilities from the Spell Lists listed as Advanced. If an Ability is not listed as Advanced, you can use it as many times as you like. As a ",c.Class,", you know a certain number of Advanced Abilities. You can cast each Advanced Ability you know ONCE, then it becomes unusable (Exhausted) until your next Long Rest. Advanced Abilities are all Abilities from the Spell Lists listed as Advanced."),o.a.createElement(h.a,null,o.a.createElement("img",{style:{marginLeft:"55px",marginTop:"-25px"},className:"class-image",src:"/Classes/".concat(c.Class,".png")}))),o.a.createElement(u.a,{theClass:c}),o.a.createElement(u.b,{theClass:c}),o.a.createElement(u.e,{theClass:c}),o.a.createElement(u.f,{spellsObject:c["Starting Abilities"],description:c["Starting Abilities Description"]}),o.a.createElement(s.a,null,"Specialzations"),o.a.createElement("p",null,"The first time you choose a cleric domain (specialization), you must choose between two abilities. For example, for Battle Cleric, you have to choose either March Ahead or Piety. Choose wisely...")),Object.keys(c.Specs).map((function(e){var t=c.Specs[e];return o.a.createElement(u.c,{name:e,spec:t},o.a.createElement(u.d,{spec:t}))})))}}}]);