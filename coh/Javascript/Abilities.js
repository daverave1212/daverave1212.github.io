
	var defaultIconPath = "Images/Icons/";
	function iconNameToFullPath(name){ return defaultIconPath + talentNameToImagePath(name) + ".png"; }

	var Abilities = {};
	var AbilityIcons = {};
	
	function Ability(NameAndActions, Desc, Path){
		this.tag = talentNameToImagePath(NameAndActions);
		Abilities[this.tag] = this;
		this.name = NameAndActions;
		this.desc = Desc;
		this.iconPath = "No icon path set";
		if(Path == undefined) this.iconPath = iconNameToFullPath(NameAndActions);
		else this.iconPath = Path;}
	
	// If created without a Path, it will take it from the vanilla folder
	// Otherwise, it will take the path given
	// This is to 'distinguish' abilities made with the mod maker (abiities from a mod)
	//   from vanilla abilities
	// Vanilla abilities automatically take the path from the icons fodler
	// Mod abilities require a given path

	/* Creates a div structuredlike this:
		Wrapper >
			Left > Icon
			Right > Text
	   The div has 100% width, flexible height and small margins.
	   The function returns the Wrapper element */
	function createAbilityElement(ability){
		var abilityWrapper = createElement("div");
		abilityWrapper.setAttribute("class", "AbilityWrapper");
		var abilityWrapperLeft = createElement("div");
		abilityWrapperLeft.setAttribute("class", "AbilityWrapperLeft");
		var abilityIcon = createImage(ability.iconPath);
		abilityIcon.setAttribute("class", "AbilityIcon");
		abilityWrapperLeft.appendChild(abilityIcon);
		var abilityWrapperRight = createElement("div"); abilityWrapperRight.setAttribute("class", "AbilityWrapperRight");
		abilityWrapperRight.innerHTML = ability.name + "<br><br>" + ability.desc;
		abilityWrapper.appendChild(abilityWrapperLeft);
		abilityWrapper.appendChild(abilityWrapperRight);
		return abilityWrapper;}
	
	
	function wrapAbilityNameTextInSpan(name){ return "<span class='AbilityNameText'>" + name + "</span>";}
	
	/* Creates and returns a hoverable img element */
	function createAbilityElementForBundle(ability){
		print("Creating: " + ability.name);
		var image = createImage(ability.iconPath);
		image.setAttribute("class", "Icon");
		image.setAttribute("name", ability.tag);
		image.onmouseover = function(){
			Scripts.showHelpBox(true);	// isAbility = true
			var thisAbility = Abilities[this.getAttribute("name")];
			Scripts.setHelpText(wrapAbilityNameTextInSpan(thisAbility.name) + "<br><br>" + thisAbility.desc);};
		image.onmouseout = function(){Scripts.hideHelpBox();};
		return image;}
	

	
	new Ability("Magic : Passive", "You gain proficiency with Magic Weapons.<br>You also gain Mage Power.<br>You also gain a Spell Book.<br>In this Spell Book, you can have up to 3 Basic Spells prepared at a time.<br>You can change the Basic Spells you have prepared at any rest.<br>All of your attacks with spells gain +3 to Hit (d20) if you don't already have this from another Root Talent.");
	new Ability("Conceal Magic : 0 Actions", "For (Intelligence) minutes, your magic becomes undetectable my magic.");
	new Ability("Translation : Passive", "You are able to (only) understand (only) common languages when spoken to.");
	new Ability("Ignite : 0 Actions", "Deal (Your Level) Fire damage to a target (instantly).");
	new Ability("Blink : 0.5 Actions - 30 ft", "Quickly teleport to a nearby spot. The spell leaves behind a magical trail that can be seen. If you have 2 charges of this spell ready, you can use 2 at once (0.5 action total) to leave no trail.");
	new Ability("Distort Vision : 1 Action - 30 ft", "This incantation distorts the space a few feet around you. The more intelligence you have, the more it is distorted.<br>While keeping the distorsion, you must maintain concentration.<br>You lose concentration if you take damage.<br>The higher your level, the stronger illusion you will also be able to make.");
	new Ability("Elemental Blast : 1 Action", "When you get this ability, choose from:<br>Fire, Water (cold), Frost, Sand (physical) and Thunder.<br>Throw an elemental attack.<br>This attack deals (Your Level) bonus damage, all of your chosen element.<br>Thrown.");
	new Ability("Hand Sign : 0 Actions", "Your next spell that requires a 1 action will only require a 0.5 action.");
	new Ability("Control Element : Depends 30 ft", "You can manipulate one of the elements: fire, water, earth, air You can use this quickly, but it still spends 1 action from your next turn if in combat. When you gain this ability, you gain control over only 1 of those elements. Your control and the strength of this ability scales with your Intelligence. You can get this ability again for just 1 Skill Point.");
	new Ability("Fire Enchantment : Only while resting", "Use a Fire Rune : 20 gold to imbue a weapon until your next rest.<br>This covers the weapon in small flames.<br>That weapon deals +1d4 Fire damage.<br>If any water-like liquid touches the weapon, the enchant falters.");
	new Ability("Frost Enchantment : Only while resting", "Use a Frost Rune : 20 gold to imbue a weapon until your next rest.<br>The weapon now emmits cold.<br>On every attack, the weapon deals +1d6 damage if the target is below 50% health.<br>If any heat touches the weapon, the enchant falters.");
	new Ability("Mage Armor : 0 Actions", "Put a protective shield around an ally.<br>That ally has +2 AC against spells.<br>Lasts until your next rest.");
	new Ability("Mimick : 0.5 Actions - 30 ft", "The next time an enemy casts a spell, you can cast a version of that spell once in your next turn");
	new Ability("Fake Sound : 0.5", "You create a sound out of thin air. You roll a Deception check to see how close to perfection the result is.");
	new Ability("Explosion Rune : 1 Action", "Casts a rune on a solid surface (2.5 ft radius). Any physical contact with it detonates it. Whatever stepped in it takes Staff Power fire damage and is attempted a snare on.");
	new Ability("Prison Rune : 1 Action", "Cast a rune on the ground (on a solid surface).<br>A creature stepping on it is now marked.<br>The next attack against that creature has Advantage.<br>On detonation, that creature is also attempted a snare.");
	new Ability("Telekinesis : Depends", "You may levitate and control objects around you. The weight and the precision of your control scales with your Intelligence. Concentrated.");
	new Ability("Mage Hand : 0 Actions", "Conjure a magical hand, up to 30 feet away.<br>You can spend 0.5 Actions each turn to move the hand.<br>The hand can't attack.<br>Lasts up to 1 minute.");
	new Ability("Conjuration : 1", "You can conjure an object made of arcane energy. The object is always of only a color of your choice, can be solid or not and is transparent or translucent. Lasts from a few seconds to a few minutes and the size scales with your Intelligence.");
	new Ability("Deathfire Bolt : 1 Action", "Throw a spell attack on a target.<br>This attack deals (Your Level) bonus damage.<br>Deals all Necrotic damage.<br>Unholy creatures are healed instead, and has no effect on other non-living creatures.");
	new Ability("Detect Magic : 0 Actions", "You can either sense if an object is magical and how much power it has, or sense if there is magic within (Your Level) * 10 feet of you.<br>If you choose the second option, you also know which direction it is coming from.");
	new Ability("Focus : Passive", "You have +1 to hit with all spell attacks.");
	new Ability("Invisibility : 1 Action, Channeled, while moving", "Turn invisible. While invisible, you can only move at half speed. Getting too close to an enemy may break invisibility.");
	new Ability("Advanced Enchantments : Passive", "Increases the damage of Fire Enchantment to 1d6.<br>Increases the damage of Frost Enchantment to 1d8.<br>Enchantments no longer require materials.");
	new Ability("Battlecast : Passive", "If you're wearing heavy armor, after you land an attack with a melee weapon and you apply any Status Efect to the target, you get a bonus 0.5 action. It can only be used to cast a spell.");
	new Ability("Spark : 1 Action", "Throw a spell attack.<br>This attack deals (Your Level + 1d4) bonus damage, all Thunder damage.<br>The spell has Disadvantage against targets that don't properly conduct electricity.");
	new Ability("Rain of Ice : 0.5 Actions Each turn", "When first cast, target a 10x10 area.<br>While channeling, throw an attack with disadvantage on each unit in the zone.<br>This attack deals all Frost damage.");
	new Ability("Flame Strike : 1 Action", "Target a 20x20 area to light it in flames.<br>At the end of each of your turns, all creatures inside take (Your Level / 2) Fire damage (roll only once).<br>Lasts 1 minute.");
	new Ability("Magic Missile : 1 Action", "Throw 3 attacks at a target.<br>These attacks deal (Your Level) damage.");
	new Ability("Waterball : 1 Action", "Shoot a water bolt.<br>This bolt bounces off walls and solid surfaces up to 2 times.<br>This bolt deals weapon damage, but gains (Your Level) damage for each bounce.<br>Roll for hit if it hits a target (thrown).<br>Travels up to 100 ft total.");
	new Ability("Portal : 1 Action", "Conjure a portal where you are. You can cast it again in another place. You and allies can freely move between the 2 portals. Lasts 7 days. 1 use / week");
	new Ability("Fog Cloud : 1 Action", "You can conjure a cloud of fog in a targeted 25x25 feet are.<br>The fog spreads around corners, but not through walls.<br>You choose how dense the fog can be and you can choose its color.");
	new Ability("Create Magic Item : 7 Days", "After working every day for 7 days, you manage to create a magical item.<br>This includes items with special effects, bonuses to stats or abilities you would not normally be able to cast.<br>You must talk to your DM about this.<br>After you do this once, you lose the spell.");
	new Ability("Magic Prison : 5 minutes", "You create a 20x20x20 foot cube.<br>Choose a creature inside the cube.<br>It makes a save with triple disadvantage.<br>If it fails, it can not exit the cube for 24 hours.<br>It can make this save to try to escape every 24 hours.<br>Lasts up to 7 days.<br>You can cast this once per day per charge.");
	new Ability("Wild Magic : 1 Action", "Roll 1d100. A random effect from below happens, according to the first and second digit:, 0 All allies around	/ Take your weapon damage<br>1 All enemies around / Healed for your weapon damage<br>2 A random enemy / Polymorphed into a critter<br>3 A random ally / Stunned<br>4 All creatures around / Gain +2 AC for 1 minute<br>5 All creatures around you except you / Silenced<br>6 All creatures around a chosen target / Pulled to you<br>7 A chosen target / Take (Your Level) damage<br>8 Nobody / Gain Advantage on the next attack<br>9 You / Explodes for (Your Level) damage in 5 ft radius");
	new Ability("Create Scroll of Summoning : 5 minutes", "Using someting to write and a Blank Scroll, you can create a Scroll of Summoning and bind it to an at most Large item or ally.<br>This scroll can be used at any time to immediately summon that item or ally to the scroll's location, from the scroll.<br>You can do this once per day.");
	new Ability("Force Zone : 1 Action", "Channeled, While moving<br>You maintain a 15 ft zone of force around you. It blocks ranged physical attacks. Can be maintained until you are attacked.");
	new Ability("Antimagic Rune : 1 Action", "Place a rune on the ground.<br>You can activate it at any time and from any distance.<br>When you activate it, the rune creates a 25x25 feet zone.<br>ALL units inside are attempted a silence and take (Your Level) Arcane damage on detonation.");
	new Ability("Castermaster : Passive Universal", "Your attacks with Magic Weapons deal +1d4 damage.");
	new Ability("Flame Ray : 1 Action", "Shoot a Fire ray in a 40x5 ft line.<br>Throw a single attack.<br>This attack can hit all targets inside the ray.<br>Deals weapon damage + (Your Level) Fire damage.");
	new Ability("Soul Enchantment : Only while resting", "Use a Captured Soul to imbue a weapon until your next rest.<br>The weapon now deals +1d8 true damage regardless if it hits or not.<br>Attacks hit with that weapon also ignore resistances.");
	new Ability("Mage Enchantment : Only while resting", "Use a Power Crystal to imbue a weapon until your next rest.<br>The wielder's spell attacks have +2 to hit and deal +1d4 damage.");
	new Ability("Master Enchantment : Only while resting", "Permanently imbue a non-magic and non-magical weapon.<br>You can only do this once every 10 years per charge.<br>That weapon gains +6 to hit and +1d6 Thunder damage.<br>That weapon can't be enchanted again.");
	new Ability("Fireball : 1 Action", "Declare a 15x15 area.<br>All targets inside make a save.<br>If they fail they take (Weapon Damage * 2) Fire damage.<br>Otherwise, they take half of that damage.");
	new Ability("Frost Nova : 1 Action", "All creatures in a 15 feet radius around you are attempted a Stun.<br>If the Stun succeeds, they take (Your Level) damage.");
	new Ability("Summon Elemental : 1 Action", "Choose between Fire, Water, Earth and Air.<br>You are able to summon an elemental from that plane.<br>The elementals have half of your maximum health and can attack every turn (+3 to hit), dealing (Total Weapon Damage / 2) damage.<br>Fire: It explodes when it dies for (Total Weapon Damage) Fire damage in a 10 feet radius.<br>Water: Its attacks attempt stuns.<br>Earth: It has twice that much health and base damage.<br>Air: Its attacks attempt a 20 feet push and it can fly.");
	new Ability("Untapped Power : Passive", "You can dual wield Magic Items.<br>If you do, your 2-Handed damage bonus from your race only applies once per attack.<br>(For example, if both magic weapons deal 1d12 damage and you have +1d8 from your race bonus, your total weapon damage will be 2d12 + 1d8)");
	new Ability("Slice and Dice : Passive", "You gain proficiency with Finesse Weapons, such as Daggers, Whips, etc.<br>You also gain proficiency with 1-Handed melee weapons, and you can dual wield them.");
	new Ability("Throwing Master : 0 Actions", "The next melee one-handed weapon attack has 25 ft maximum range.<br>When you perform this attack, you throw your weapon and you must retrieve it before using it again.");
	new Ability("Sneak Attack : Passive", "Your attacks that break stealth deal (Your Level) bouns damage.");
	new Ability("Delayed Bleed : 0 Actions", "Attack a target with Advantage with a melee weapon.<br>If it hits, deals 0 damage.<br>At the start of your next turn, that target takes (Your Level + 1d4) Bleed damage.<br>You get the charge back if you miss.");
	new Ability("Backstab : Depends on weapon", "Perform a melee attack on a target.<br>This attack deals (Both Weapons Damage) bonus damage.<br>You can only do this if you are stealthed, or if there is another ally near that target.<br>You do not get a charge back if you miss.");
	new Ability("Duelist Hand : Passive", "If you are only wielding a weapon in one hand, you can attack twice with that weapon in one turn.");
	new Ability("Pick Lock : 1 Action", "You now know how to pick locks. You have +2 on lock picking rolls.<br>Requires Lock Pick or Thieves' Tools.");
	new Ability("Danger From Above : Passive", "If you fell over a target (and it was an attack that didn't miss) from a 'platform' (something you can stand on) that is at least 10 feet high, your attack deals (Main Hand Weapon Damage) bonus damage and attempts to Stun the target.");
	new Ability("Disguise : Depends", "You can disguise yourself much better as other people.<br>You can mimick voice, accents and gestures much more easily.");
	new Ability("Dodge : 0.5 Actions", "The next physically dodge-able attack you receive is automatically a miss and you can move 5ft in any direction after that attack.");
	new Ability("Kick : 0.5 Actions", "Attempt a stun on a target.<br>If the stun succeeds, deal (Your Level) damage.");
	new Ability("Riposte : Reaction", "When you are attacked (before the roll), roll an attack against the target. If your attack roll is higher, the enemy attack is canceled and you continue the attack.");
	new Ability("Snuff Box : 0 Actions", "Cure a poison or combat disease from a target.<br>The target is also healed by 1d4.");
	new Ability("Shadow Walk : 0 Actions", "If you are in a shadow, you can teleport up to 30 feet away into another shadow.<br>Does not trigger attacks of oportunity.");
	new Ability("Quickthrow : 0 Actions", "Perform an attack with a 1-Handed Ranged Weapon.");
	new Ability("Dexterous : Passive", "You gain Advantage on all jumping rolls.<br>Your damage from falling is reduced by 50%.<br>You gain +1 Armor if you are not wearing heavy armor.");
	new Ability("React : 0 Actions", "When you would take damage, instantly negate it and teleport to the attacker if you know who that is and ifyou can see it.<br>You can then take a 0.5 Action.");
	new Ability("Fencer : Passive", "You gain +1 accuracy with one-handed melee weapons and gain +5 movement speed.");
	new Ability("Ambush : 0 Actions", "Your next two 1-Handed melle attacks this turn have Advantage if you attack the target from behind.");
	new Ability("Agile : Passive", "You gain +2 on attack rolls with One Handed Melee Weapons once per turn.");
	new Ability("Duelist Advance : 0.5 Actions", "Make an attack on a target.<br>If you hit, this attack deals (Your Level) damage and you can cast this again on another target for 0 Actions.<br>You can do this over and over, but not twice on the same target.");
	new Ability("Invisibility : 1 Action, Channeled, while moving", "Turn invisible. While invisible, you can only move at half speed. Getting too close to an enemy may break invisibility.<br><i>(Despite being the same as the Magic tree Ability, it does not link to it).<br>(Instead, Mage Hand does)</i>");
	new Ability("Fast Hands : 0.5", "Next turn, you gain an extra 1 Action.<br>This effect is cancelled if you take damage until then.");
	new Ability("Isolation : Passive", "Once per turn, when you deal damage to an enemy and there are no other enemies within 15 feet from it, deal 1d8 bonus damage.");
	new Ability("Swiping Cut : 0.5 Action", "All creatures in a 10 feet radius from you take (Main Hand Weapon Damage) Bleed damage.<br>Requires a 1-Handed weapon.");
	new Ability("Stalker : 1 Action", "Pick a target within 30 feet. The target does not detect if you are stealthed.<br>Next turn, if you attack the target and it doesn't die when you end your turn, you gain another free turn.<br>In this turn, that target is the only thing you can attack.");
	new Ability("The Art of War : Passive", "All active Abilities that require a 1-Handed weapon can now be done with a 2-Handed weapon.<br>You gain Proficiency in 2-Handed melee weapons.");
	new Ability("Sandling : 0 Actions", "Teleport to the same place you were at the start of your turn.<br>Heal to the health you had at the start of the turn.<br>All abilities you used this turn reset.<br>You reset your action and movement.<br>(Effectively, take your turn again!)<br>(This counts as a new turn)");
	new Ability("Range : Passive", "You gain proficiency with 2-Handed and 1-Handed ranged weapons.<br>All your ranged attacks gain +1 to hit.");
	new Ability("Alarm : 10 minutes", "You can surround a 25x25x25 with an alarm setting.<br>A creature entering or exiting must make a save or trigger the alarm.<br>This emmits a loud noise.");
	new Ability("Bandage : 1 Action", "Use a Bandage to heal a target for 1d6.<br>Remove all damage over time bleed effects from it.");
	new Ability("Art of Trap Making : Passive", "All non-ability traps that you make have increased efficiency.");
	new Ability("Hunt Or Be Hunted : Passive", "When you get this Ability, choose a type of enemy:<br>Beast, Fey, Humanoid, Undead, Demon, Giant<br>Once per turn, you can add 1d6 to any damage roll against such a creature.<br>Also, you save with Advantage against that type of creature.<br>You can't change your type of enemy, so choose wisely!");
	new Ability("Lock and Load : Depends", "Make 2 1-Handed Ranged attacks or 1 2-Handed Ranged attack.<br>This attack(s) have Advantage on the damage roll(s).");
	new Ability("Explosion Rune : 1 Action", "Casts a rune on a solid surface (2.5 ft radius). Any physical contact with it detonates it. Whatever stepped in it takes Staff Power fire damage and is attempted a snare on.");
	new Ability("Find Traps : 1 Action", "You sense traps in a 60 feet radius around you.<br>You learn how many traps there are, but not their location.<br><i>If you go into Explosion Rune, you need a Magic Weapon</i>");
	new Ability("Quickshot : Passive", "Your attacks against creatures that haven't moved this combat deal +1d4 damage with 1-Handed weapons or +1d10 damage for 2-Handed weapons.");
	new Ability("Upper Hand : Passive", "If you are hiding and land a surprise attack, you gain maximum initiative for this encounter.<br>You can also more easily detect and disarm traps and gain 1 Arcane Point.<br>From now on, you can spend arcane points to reroll weapon damage rolls.");
	new Ability("Point Blank Shot : 0 Actions", "Your next ranged attack has 5 feet range and attempts a Stun if it hits.<br>If it misses, the target is attempted a Knockback for 15 feet and you can leap back up to 15 feet.");
	new Ability("Sense Creature : 1 Action", "Choose one of these enemy types:<br>- Beast<br>- Undead<br>- Dragon<br>- Fey<br>- Giant<br>You learn how many of them there are around in a 120 feet radius and how far away, but not the direction.<br><i>This will lead to an Ability that lets you tame animals</i>");
	new Ability("Eyes of the Beast : 1 Action, channeled", "Pick a beast you can see.<br>You are able to see through its eyes for a few minutes.");
	new Ability("Speak with Animals : Channeled", "Attempt to communicate with an animal.<br>The target makes a save. If it fails, you can talk to it.<br>Lasts up to (Your Charisma) minutes.");
	new Ability("Animal Messenger : 1 Action", "You can attract small, inoffensive critters.<br>You can choose one that will transport a message to a reachable destination.");
	new Ability("Explorer : Passive", "When you get this Ability, choose a favorite type of terrain:<br>Plains, Forest, Jungle, Mountains, Tundra, Desert<br>You gain the following bonuses when in that terrain:<br>o Difficult terrain doesn't slow down your party.<br>o You can't become lost by non-magical means<br>o You have Advantage on rolls for finding food<br>o You have +1 to Stealth and +1 to Perception<br>o You have +1 to Save Power and Save Resistance");
	new Ability("Calm Beast : 1 Action", "Make a persuasion check on a target animal-like being.<br>If you succeed, the target may calm down and not attack your party or just leave.");
	new Ability("Dark Vision : Passive", "You can see in darkness, up to 30 feet away clearly, and up to 60 feet away dim.");
	new Ability("Giant Slayer : Passive", "All your attacks against Large or bigger creatures gain +2 to hit.");
	new Ability("Camouflage : 1 Action, Channeled", "If you are out of combat, you become stealthed close to a state of invisibility if you are standing still.<br>Lasts up to (Dexterity * 10) minutes.");
	new Ability("Tell : 0 Actions", "Instantly tell, the type of a non-humanoid creature.<br>You may also learn how much health it has, how dangerous it is and other things you can ask.");
	new Ability("Feign Death : 1 Action", "Make a Deception roll with Advantage.<br>If you succeed, you now count as Stealthed.");
	new Ability("Born Infantry : Passive", "You can now also use a Shield while wielding a 2-Handed Ranged Weapon.<br>If you are using a Shield like this, your attacks have only 15 feet range and no melee penalty for attacking with ranged weapons.");
	new Ability("Ranger Mark : 1 Action", "Place an invisible mark on a target up to 60 feet away.<br>All your attacks gain Advantage on that target for 10 minutes.<br>The target can't turn invisible and you can always sense");
	new Ability("Explosive Shot : 0 Action", "Your next attack will have the following effect:<br>- If it hits, deal (Your Level * 2) bonus Fire damage to the target.<br>- If it misses, deal (Your Level) damage 5 feet around the target, excluding the target.");
	new Ability("Bola Strike : 1 Action", "Shoot a ranged attack at a target.<br>If it hits, deals (Your Level) damage.<br>If the target is within 10 feet of another target, both targets are attempted a Snare.");
	new Ability("Poison Sting : 0 Action", "Choose one when you cast this:<br>1. Your next landed attack attempts a slow and blind<br>2. Your next landed attack attempts a Paralyze");
	new Ability("Buckshot : 1 Action", "Target a 45 degree, 15 foot long cone from your position.<br>Roll (Both Weapons Damage), then roll an attack for each target.<br>Each hit target takes damage equal to what you rolled.");
	new Ability("Gunsling : 0.5 Action", "Perform an attack with a 1-Handed ranged weapon.<br>If it hits, you can cast this again for free.<br>You can do this until you miss.");
	new Ability("Split Shot : 1 Action", "Shoot a target.<br>This attack deals (Both Weapons Damage) if it hits.<br>The attack then splits into 2 different attacks at 90 degrees, one to the left and one to the right.<br>If these attacks collide with a target, roll for hit.<br>If they hit, they deal (Both Weapons Damage).");
	new Ability("Steady Aim : 1 Action", "Next turn, you gain 2 Actions more and all of your attacks will have +1 to hit.");
	new Ability("Quick Draw : 1 Action", "Shoot a total of 6 ranged attacks.<br>They deal (Your Level) damage each if they hit.");
	new Ability("Tame Beast : Multiple Minutes", "Choose an animal you can see.<br>Roll 3 Survival checks.<br>If all 3 succeed, that animal becomes your pet.<br>Otherwise, it will either attack you or run away and you can't do this again on that animal.<br>Your pet has (Your Health / 2) total health and deals (Your Level) damage per attack.<br>Your pet inherits all other stats from you.<br>Your pet may also have various other abilities. Ask the DM for this.<br>Your pet takes its turn right after you and can attack once per turn.");
	new Ability("Tame Beast : Multiple Minutes", "Choose an animal you can see.<br>Roll 3 Survival checks.<br>If all 3 succeed, that animal becomes your pet.<br>Otherwise, it will either attack you or run away and you can't do this again on that animal.<br>Your pet has (Your Health / 2) total health and deals (Your Level) damage per attack.<br>Your pet inherits all other stats from you.<br>Your pet may also have various other abilities. Ask the DM for this.<br>Your pet takes its turn right after you and can attack once per turn.");
	new Ability("Flank Attack : Passive", "You gain proficiency with 1-Handed and 2-Handed melee weapons.<br>Whenever you or an ally flanks an enemy and attacks, that attack gains +2 to hit.");
	new Ability("Raging Blow : 0 Actions", "Take 2d6 damage.<br>Your next attack deals (Total Weapon Damage) bonus damage.");
	new Ability("Shield Bash : 0.5 Actions", "Attack an enemy with your shield, but as if you are attacking with your main weapon.<br>If you hit, the target is attempted a stun.");
	new Ability("Defense Breaker : 0.5 Actions", "Perform an attack with a 1-Handed weapon.<br>If it hits, reduce the target's Armor by 1.");
	new Ability("Disarm : 0.5 Actions", "Perform an attack with a 1-Handed weapon.<br>If it hits, the target is attempted a Disarm.");
	new Ability("Flying Shield : 0.5 Actions", "Throw your shield at a target.<br>Perform an attack with your shield on a target up to 30 feet away, but as if you are attacking with your main weapon.<br>If you hit, you deal (Your Level) bonus damage and the shield jumps back to you.<br>Otherwise the shield stays where it lands.");
	new Ability("Blood Surge : 0 Actions", "Heal yourself for 2d8.");
	new Ability("Onslaught : Passive", "Landing the killing blow on a worthy enemy heals you for 1d8.");
	new Ability("Never Ending Stampede : Passive", "Whenever you or a nearby party member kills a worthy enemy, gain 1 counter on this.<br>At 5 counters, you gain +1 maximum health and reset the counter.");
	new Ability("Inspiring Cry : Passive", "Every time you or an ally uses an Ability in combat, add a counter.<br>At 8 counters, heal all allies within 30 feet of you (including yourself) for 1d4 (roll once).");
	new Ability("Towering Presence : Passive", "All allies within 30 feet of you have +1 Armor (except you).");
	new Ability("Taunt : 1 Action", "Create a 25x25 foot zone around you.<br>Any creature trying to pass through a wall of the zone makes a save.<br>If it fails, it can't pass through the zone until its next turn.<br>Lasts 1 minute.");
	new Ability("Coordination : Passive", "Every landed 4th 1-Handed attack or 2nd 2-Handed attack deals (Your Level) bonus damage.");
	new Ability("Execution : 1 Action", "Perform an attack on a target.<br>This attack deals (Total Weapon Damage + Your Level) damage.<br>If this attack kills an enemy, you get this charge back.");
	new Ability("Wrecking Blow : 0 Actions", "Your next landed attack reduces the Armor of the target by 2 and deals (Your Level) bonus damage.");
	new Ability("Groundbreaking Force : 1 Action", "Perform an attack on a target with Disadvantage.<br>If this attack hits, it deals (Total Weapon Damage) * 2 damage.");
	new Ability("Bulwark : 1 Action", "Your shield magically expands to be 15 feet wide and 10 feet high.<br>While expanded, you can't move, attack and you can't move the shield.<br>This acts as line of sight blocker and obstacle.");
	new Ability("Cutting Edge : 1 Action", "Roll an attack.<br>That attack can hit all creatures within 10 and 15 feet from you.");
	new Ability("Human Bunker : Passive", "You can now duel wield shields.<br>If you do, you gain +2 Armor from the other shield as you would normally do.<br>You can attack with the main-hand Shield for 0.5 Actions as if you were using a 1-Handed Melee Weapon that deals 1d6 base damage.");
	new Ability("Vicious Charge : 1 Action", "Charge in a straight line to an ally within 30 feet.<br>You can pass 'through' enemies.<br>Each enemy you pass through takes (Total Weapon Damage).");
	new Ability("Backlash Blow : 0 Actions", "Your next attack will deal (Total Weapon Damage) bonus damage.<br>If the target is affected by any Crowd Control, you prolong that Crowd Control, increasing its duration by 1 turn.");
	new Ability("War Stomp : 1 Action", "All creatures around you are attempted a Stun.");
	new Ability("Berserk : 0 Actions", "Either you or all other allies within 30 feet take 2d8 damage and gain Advantage on all attacks in their turn.");
	new Ability("Battle Rage : 0.5 Actions", "You have 50% resistance to pierce, slash and smash damage until the end of your next turn.<br>Until then, your 1-Handed attacks deal +1d4 bonus damage and your 2-Handed attacks deal +1d8 bonus damage.");
	new Ability("Second Wind : Reaction", "When an attack would kill you, you remain at 1 Health instead.<br>After activation, your next 2-Handed Melee attack or next two 1-Handed Melee attacks will crit if they hit.");
	new Ability("Titan Strength : Passive", "You can now dual wield 2-Handed Melee Weapons, one in each hand.<br>You can attack normally with both for 0.5 Actions.<br>If you do, you can't apply any modifiers to the hit roll.<br>You can also wield one 2-Handed Melee Weapon and a shield.<br>If you do, you can apply the hit modifiers as normal.");
	new Ability("One Mind One Body : Passive", "You gain proficiency in unarmed and also in another weapon type of choice.<br>Your constitution increases by +1, up to a maximum of +5.");
	new Ability("Target Energy : 0 Actions", "Your next landed attack attempts a Silence on the target.");
	new Ability("Feint : Reaction", "You can use this if you are between 2 enemies and one of them attacks you with a melee attack.<br>You step aside to an adjacent space.<br>That attack is instead redirected to the other enemy.");
	new Ability("Grab : 1 Action", "An adjacent enemy makes a save.<br>If it fails, you can move it to another place adjacent to you and it is stunned.<br>The moving doesn't work on Large or larger creatures.");
	new Ability("Delay Damage : 0 Actions", "When you take combat damage, you can postpone that damage taken until the end of the encounter.");
	new Ability("Vibrating Palm : 1 Action", "Perform an attack on a target.<br>If it hits and the target is at most Large in size and below 50% health, the target dies instantly.<br>Some creatures may be immune to this effect.");
	new Ability("Mind and Body : Passive", "If you are wearing no armor, you have +1 Armor and +1 Save Resistance.");
	new Ability("Mindful Meditation : While resting", "When resting, you can instead remove all Poison from yourself and gain resistance to Poison damage until your next rest.<br>You don't heal if you do this this rest.");
	new Ability("Way of the Monk : Passive", "Rain, snow and wind can ignore you.<br>Small fires don't burn you.<br>You can survive thrice as long without food and water.<br>You have no penalty for moving on difficult terrain.<br>You have +5 movement speed.");
	new Ability("Lightfooted : 0 Actions", "For (Dexterity) minutes, you can walk on water and smooth surfaces up to 90 degrees in angle.<br>You also gain +5 movement speed while active.");
	new Ability("Flying Kick : 0 Actions", "Dash to a target and deal (Your Level) damage to it.<br>Does not trigger attacks of oportunity.<br>20 feet range.");
	new Ability("Jab : 0 Actions", "Attack a target.<br>(If you are wielding a 2-Handed weapon, this costs 0.5 Actions)");
	new Ability("Stancedance : Passive", "After you used 2 abilities in a turn (includes proccing passive abilities), you gain 0.5 Actions.");
	new Ability("Rising Kick : 1 Action", "Attack a target. This attack deals (Total Weapon Damage).<br>If you hit, the target is attempted a 20 feet knockback.<br>If the knockback succeeds, every time the target collides with another creature, they both take (Your Level) damage.<br>Every time a collision happens, the the new target makes a save.<br>If it fails, it continues to be pushed with the main target along the pushed path. Otherwise, they both stop.<br>Medium or smaller creatures automatically fail all saves.");
	new Ability("Redirect : Reaction", "When you would take damage from a ranged physical attack, roll (Total Weapon Damage).<br>You negate that much of the damage you would take.<br>If what you rolled exceeds the damage you would take, the difference is dealt back to the attacker.");
	new Ability("Call of Nature : Passive", "When you get this ability, you gain proficiency in any weapon type of choice.<br>You also permanently gain 2 Basic Abilities of chioce.");
	new Ability("Flow of Life : Passive", "You age twice as slowly as you normally would.<br>When you get this Ability, choose 1 langauge from: Sylvan, Druidic, Astral.");
	new Ability("Druidcraft : Depends", "You can create small sensory effects.<br>You can blow small gusts of wind.<br>You can tell what the weather will be like in the next 24 hours.<br>You can meditate for 4 hours instead of sleeping on long rests.<br>You can mend plants and make them grow slightly faster while you are channeling.<br>You can cleanse patches of grass of corruption.");
	new Ability("Spider Climb : 0 Actions", "Your hand and feet can now stick to surfaces.<br>You can walk accross solid surfaces at normal speed for (Dexterity) minutes.");
	new Ability("Treesposition : 0 Actions", "Touch a Medium or Larger object or surface made of wood.<br>Choose a Medium or Larger object or surface made of wood within 30 feet.<br>You can instantly teleport near it.");
	new Ability("Poison Spray : 1 Action", "Throw a spell attack against an enemy.<br>This attack deals (Your Level) bonus damage, all poison.<br>If it hits, the target can't heal for 1 minute.");
	new Ability("Thorns : 0 Actions", "Buff an ally.<br>Until your next rest, all melee attacks attempted on the ally deal 1d4 damage to te attacker.");
	new Ability("Spirit Bond : 0 Actions", "Choose an ally.<br>Whenever you or that ally makes a skill check, use the highest skill bonus of you and your ally for that skill check.");
	new Ability("Protection from Element : Only while resting", "Touch an ally and declare an element.<br>It will have 50% resistance to the declared element until the next rest.");
	new Ability("Innervate : 1 Action", "An ally gains 1 Action more on its next turn.");
	new Ability("Surge : 0 Actions", "Heal an ally for 1d8 health.");
	new Ability("Soothe Pain : 0 Action", "Touch an ally.<br>Reduce the physical pain of that ally.<br>This also removes/prevents an infection if it is used on a wound.<br>If used in combat, this removes a crowd control effect from that ally.");
	new Ability("Inner Roar : Reaction", "Choose an ally within 30 feet before it rolls a save.<br>It has triple Advantage on that save.");
	new Ability("Mold Earth : 1 Action", "Choose a 5x5x5 foot cube of dirt, sand or movable stone.<br>You can move up to 5 feet from its position or shape it as you like.<br>Shaping it requires a Nature check.");
	new Ability("Wild Vegetation : 1 Action", "Choose a 10x10 patch of fertile soil within 30 feet.<br>You can create bushes, tall grass or any such vegetation instantly over that zone.");
	new Ability("Webblast : 1 Action", "Shoot a web in a 30 feet line.<br>If it hits a creature, it is attempted a stun.<br>If it hits a wall perpendicularily, it expands into a 20x20 feet zone.<br>All creatures inside must succeed a save before they move, or they can't move that turn.");
	new Ability("Swarm : 0 Actions", "The target makes a save.<br>If it fails, deals (Total Weapon Damage) and slows the target by 50%.");
	new Ability("Fairy Fire : 1 Action", "Target a 15 feet cube within 30 feet of you.<br>All creatures inside must Save or be affected by Fairy Fire.<br>All attacks done against affected creatures have +2 to hit.<br>Affected targets can't turn invisible.");
	new Ability("Nature Protection : 0 Actions", "Touch two allies. They gain (Your Level) maximum health until your next rest.");
	new Ability("Barkskin : 0 Actions", "A target ally within 30 feet gains +2 Armor for 1 minute.<br>While affected, the ally becomes rooted and can't move from its place.<br>The effect can't be cancelled.");
	new Ability("Control Weather : 5 minutes", "Channel for 5 minutes.<br>You can conjure any type of weather within a 5 mile radius from your position.<br>This has a weak effect or none at all for non-biome-specific weathers (ex: snowstorm in the desert).<br>Lasts (Wisdom) hours.");
	new Ability("Primordial Flow : 1 Action", "Heal all other allies within 10 feet of you for 1d12.");
	new Ability("Soul of the Forest : 1 Action", "Choose an ally within 30 feet.<br>You gain the form of a soul and enter that ally's body.<br>While inside, you can't use normal attacks, but you can use abilities.<br>You can't be targeted by attacks.<br>Whenever that ally takes damage, roll a save.<br>If you fail, you also take that damage.");
	new Ability("Wild Roots : 1 Action", "Grow roots from your position in a 30x5 feet line.<br>The roots stay in place for 1 minute.<br>All creature touching the roots takes (Your Level) damage and is attempted a Snare.<br>A creatuer can't be affected by the same roots twice.<br>The roots can travel over walls and surfaces.");
	new Ability("Lightning Storm : 1 Action", "Choose a 25x25 feet area.<br>All creatures inside make a save.<br>If they fail, they take (Total Weapon Damage) Thunder damage.");
	new Ability("Shapeshift : 1 Action", "You instantly take the form of an animal of choice.<br>The animal can't be larger than Large.<br>You can gain up to the following when shapeshifting:<br>+2 Armor<br>+25% Health<br>+1d8 on attack rolls or damage rolls<br>+10 feet speed<br>+2 in any skill<br>You may also gain other abilities, ask the DM.<br>You take any items you had with you.<br>When you Shapeshift, you remove all Snares, Slows and Polymorphs from yourself.<br>You can't choose animals that breathe under water or fly.<br>You can only use Abilities that make sense.");
	new Ability("Feral Shapeshift : Passive", "You can now Shapeshift into flying and swimming animals.<br>You no longer have a size restriction.<br>You can gain twice as many bonuses for shapeshifting.<br>Shapeshift now takes 0 Actions instead of 1 Action.");
	new Ability("Guardian of the Forest : 1 Action", "Choose a tree. That tree becomes your ally for up to 1 hour.<br>It can't move from its place, but it can attack once per turn.<br>It deals (Total Weapon Damage) damage and attacks with +3 to hit.");
	new Ability("Tornado : 1 Action", "Conjure a tornado at a location within 30 feet.<br>The tornado is 10x10 feet and very high.<br>Any creature touching the tornado the is attempted a stun.<br>That creature can't be attempted a stun again until the start of your next turn.<br>At the start of your turn, you can freely move the Tornado up to 10 feet.<br>Lasts 1 minute.");
	new Ability("Spirit Animal : Passive", "When you get this Ability, choose any two of the following traits:<br>- Strength (+1d4 damage once per turn to an attack)<br>- Dexterity (+1 To hit with all non-spell attacks)<br>- Constitution (+1 Armor)<br>- Intelligence (+1 To hit with all spell attacks)<br>- Wisdom (+2 to Save Resistance)<br>- Charisma (Action Surge now gives you 1.5 Actions)<br>Choose an animal that possesses the two attributes you chose.<br>You gain those bonuses permanently.<br>Animals the same as your spirit animal are naturally friendlier to you.<br>You can flash a vision of your spirit animal to any creature that can see you, as a very minor illusion.");
	new Ability("Raise Wall : 1 Action", "A 15 foot wide, 10 foot tall, 2 foot thick wall raises from the ground.<br>Creatures hit by the wall are pushed to its sides and take (Your Level) damage.<br>The wall can be made of wood, stone, sand or water.<br>The material of the wall must be location-specific (ask the DM).");
	new Ability("Wild Growth : 1 Action", "A creature you touch makes a save.<br>If it fails, you can choose to reduce its size down to 50% or increase its size up to 200%.<br>Large or larger creatures save with Advantage.");
	new Ability("Dark Call : Passive", "You gain proficiency in magical weapons and another weapon type of choice.<br>You also permanently learn 3 Basic Spells of choice.");
	new Ability("Summon Familiar : 1 minute", "You summon a familiar to aid you in combat.<br>Requires Chalk, Skull, 0.5 Liters of Blood, 10 Candles.<br>All materials are consumed upon use.<br>The demon will exist in this plane as long as it is alive.<br>When it dies, it returns to the world it came from.<br>You can always summon your demon back, but you need the materials again.<br>The demon is bound to serve you and do your bidding.<br>You can choose the appearance of your demon, but not it's personality and name.<br>The familiar has half of your total health and inherits all other stats from you.<br>In combat, the familiar always travels right next to you and moves together with you.<br>When you get this ability, you also gain 2 charges of Havoc and 1 charge of Burst.<br>You familiar's attacks do 1d4 damage if it attacks.<br>During your turn, you can use abilities that activate your familiar.<br>Your familiar does not get a turn of its own. You control it with spells.");
	new Ability("Havoc : 0.5 Actions", "Your familiar will throw an attack on the closest enemy from it, up to 15 feet away.<br>You choose between slashing, smashing or fire damage.<br>The attack deals (Your Total Magic Weapon Damage) damage if it hits.");
	new Ability("Burst : 0.5 Actions", "All creatures within 15 feet of the familiar take (Your Level) Fire damage.<br>This includes you and your familiar.");
	new Ability("Charm : 1 Action", "Order your familiar to attempt a stun on an enemy.<br>If it succeeds, your familiar is also stunned.<br>This lasts until you cancel it or the target escapes.<br>On at the start of its every turn, the target can attempt to escape by rolling the save again.<br>You can't use other abilities that use your familiar while it's channeling.");
	new Ability("Mass Camouflage : 0.5 Actions", "All allies within 15 feet of your familiar have +3 on Stealth rolls.<br>Lasts (Charisma) minutes.");
	new Ability("Meat Shield : 0 Actions", "Your familiar will jump to in front of an ally (or you).<br>They both gain +3 Armor until the start of your next turn.<br>The familiar will stay there until you wish for it to move with you again.");
	new Ability("Larger Familiar : Passive", "Your familiar increases its size by 1 unit (ex: from small to medium, form medium to large, etc).<br>It increases it's health by half of your total health.");
	new Ability("Rapid Aging : 1 Action", "The target makes a save.<br>If it fails, it ages up to 1d8 + (Your Wisdom) years (or less).<br>Whenever you use this, you start appearing 1 year older (only affects appearance).");
	new Ability("Essence Transfer : 0 Actions", "Heal a target (not yourself) for (Your Level) * 2 Health.<br>Every time you use this ability, you permanently lose 1 Health.");
	new Ability("Shadow Trickery : 0 Actions", "You leave behind your shadow where you are (you no longer shed shadows for the duration).<br>The shadow continues to move as you move, but stays in its place.");
	new Ability("Curse of Weakness : 1 Action", "The target must succeed a save or every time it attacks, it subtracts 1d4 from that attack's damage.<br>Lasts 1 minute.");
	new Ability("Bane : 1 Action", "The target makes a save.<br>If it fails, it will take (Your Level) damage at the end of each of your turns for 3 turns (including this one).");
	new Ability("Darkness : 1 Action", "You conjure magical darkness in a 25x25 feet area.<br>The darkness spreads around corners, but not through walls.<br>You can see inside magical darkness.");
	new Ability("Raise Undead : 0 Actions", "Raise an undead creature from one or more corpses nearby.<br>The creature deals (Your Level) damage per attack with no hit bonus.<br>The creature has half of your health, 10 Armor and inherits all other stats from you.<br>It has minimum initiative, 15 feet speed and you can control it.<br>It can't fly or swim.");
	new Ability("Improved Necromancy : Passive", "Your undead minions can now fly and swim.<br>They can also move up to 30 feet per round.<br>They now have the same initiative as you.");
	new Ability("Void Hole : 0 Actions", "Create a 10 feet radius Void Hole on a position.<br>All creatures in the zone must succeed a save or be pulled to its center.");
	new Ability("Void Hole Warp : Passive", "Improves Void Hole:<br>When you cast Void Hole, choose an Exit Hole, same size as the Void Hole.<br>When creatures are drawin in, they are spat out through the Exit Hole.");
	new Ability("Soul Harvest : Passive", "Whenever you kill a worthy enemy, you can store its soul.<br>You can release all souls for 0.5 Actions.<br>If you do, deal 1 damage for each soul released to all enemies within 30 feet or heal an ally for twice that amount.");
	new Ability("Deathfire Bolt : 1 Action", "Throw a spell attack on a target.<br>This attack deals (Your Level) bonus damage.<br>Deals all Necrotic damage.<br>Unholy creatures are healed instead, and has no effect on other non-living creatures.");
	new Ability("Explode Corpse : 0 Actions", "Destory a corpse or allied undead.<br>Deal (Your Level) damage around it.");
	new Ability("Lash of Spite : 0 Actions", "An enemy makes a save.<br>If it fails, it is pulled near your location, avoiding obstacles along the way and takes (Your Level) necrotic damage.");
	new Ability("Conjure Weapon : Passive", "You become immune to disarms.<br>You can change the damage of a spell or attack to Piercing at will.<br>For 0 Actions, you can always conjure a weapon.<br>This acts like a normal weapon.<br>The conjured weapon disintegrates after a few hours.<br>You can only have 1 weapon conjured like this at a time.<br>To conjure another weapon, you must wait for it to disintegrate first.");
	new Ability("Banish : 0.5 Actions", "The target makes a save.<br>Banish a creature into a different plane until the start of your next turn.<br>The target can't move or attack with weapons and can't be attacked with weapons and can only be attacked by spells.<br>30 feet range.");
	new Ability("Deep Sleep : 0.5 Actions", "A target you can see is attempted a Sleep.<br>If this succeeds, Deep Sleep is cast again (freely and automatically) on the closest creature within 60 feet.");
	new Ability("Reap : 0 Actions", "Your next attack deals (Your Level) bonus Necrotic damage if it hits and heals you for (Your Level) damage if it hits.");
	new Ability("Telepathy : Channeled", "Choose an ally at any distance or an enemy you can see within 30 feet.<br>If it is an enemy, if must fail a save to continue.<br>You have (Your Intelligence) * 10 seconds to communicate with it.<br>This doesn't read minds.");
	new Ability("Alter Thoughts : 1 Action", "A target you can see within 30 feet rolls a save.<br>If it fails, you can alter it's memories or inflict thoughs.<br>You can use this to also alter a target's dreams.<br>Lasts (Your Charisma) hours.");
	new Ability("Sense Life : 0 Actions", "You sense how many alive creatures there are around in a 120 feet radius.<br>You can also sense how close they are.");
	new Ability("Watcher Eye : 0.5 Actions", "You can quickly place a small eye as a camera. The eye can twitch slightly in any direction, uncontrolably.<br>The eye visually records everything it can see and its sight is as good as its 'previous owner'.<br>You must retrieve the eye to see what it recorded.<br>Requires Humanoid Eye.");
	new Ability("Fiery Soul : Passive", "You can always add +1 to the hit and damage of an attack or ability.<br>If you do, you take 1 damage.");
	new Ability("Dark Wings : 0 Actions", "You can glide for up to (Charisma) minutes (not fly).<br>When you cast this, choose up to 3 creatures you can see.<br>They are attempted a Fear.");
	new Ability("Decaying Armor : 0.5 Actions", "Gain +2 Armor until you get hit.<br>When you get hit, you gain a charge of this Ability back.");
	new Ability("Spell Focus : Passive", "Gain +1 to hit with all magic attacks.");
	new Ability("Weapon Focus : Passive", "Gain +1 to hit with all non-magic attacks.");
	new Ability("Unholy Frenzy : 0.5", "All allies within 30 feet of you (except you) gain 0.5 actions.");
	new Ability("Wraithwalk : 0 Actions", "You become spectral for 10 seconds.<br>While spectral, you can move through walls and obstacles.");
	new Ability("Holy Light : Passive", "When you get this ability, you gain:<br>a) Proficiency in any 2 weapon types<br>b) Permanently learn 1 Basic Spell<br>c) Permanently learn 2 of the 4 Special Holy Spells");
	new Ability("Radiance : Passive", "At the start of your turn, all enemies around you take 1d4 true damage.");
	new Ability("Divine Sense : 0 Actions", "You can detect the presence of Unholy creatures, places or objects within 120 feet.<br>You can also tell how close they are and if their type (Demon, Undead, etc).");
	new Ability("Bless Water : Passive", "You can bless a small amout of water at a time and make it Holy Water.<br>Holy Water can cleanse corruptions, prevent wound infections, soothe pain and it can be used as deodorant.");
	new Ability("Exorcism : 1 Action", "Heal a target for (Your Level) * 2 health, or deal (Your Level) * 2 True damage to an Unholy target.");
	new Ability("Magic Word Seal : 1 Action", "Put a magical seal on a door or openable object and say a password.<br>To open that object, one must say the password.<br>The object can still be broken.");
	new Ability("Protection from Evil : 0 Actions", "Touch an ally.<br>That ally gains +1 Armor against Evil creatures.");
	new Ability("Bless : 0 Actions", "Bless 2 allies within 30 feet.<br>Their attacks can deal +1d4 True damage once per turn.<br>Lasts until your next rest.");
	new Ability("Divine Smite : 0 Actions", "Add 2d8 to the damage of an attack.<br>This makes all damage done by that attack be True damage.");
	new Ability("Radiant Smite : 0 Actions", "After you land an attack, deal 1d12 True damage to the target and all enemies within 5 feet of it.<br>This makes all damage done by that attack be True damage.");
	new Ability("Cleansing Smite : 0 Actions", "After you land an attack, deal 1d12 bonus damage to the target and heal yourself for 1d12.<br>This makes all damage done by that attack be True damage.");
	new Ability("Righteous Smite : 0 Actions", "After you land an attack, if you rolled an even number, deal 2d8 bonus True damage.<br>Otherwise, heal yourself for 2d8.<br>This also makes all damage done by that attack be True damage.");
	new Ability("Revive : 1 Action", "Bring a dead creature back to life, to 1 Health.<br>The creature must have died recently.");
	new Ability("Blinding Light : 1 Action", "All creatuers in a 45*, 15 feet long cone from your position make a save.<br>If they fail, they become Blinded (they attack with Disadvantage).<br>They all take (Your Level) damage regardless if they saved.");
	new Ability("Grip of Faith : 0 Actions", "Instantly pull an ally near you, avoiding objects and oportunity attacks along the way.<br>You can also use this as a reaction before an enemy<br>45 feet range.");
	new Ability("Purging Flames", "Throw 4 attacks.<br>If it hits, each attack damages enemies for (Your Level) damage or heals allies for 1d8 health.");
	new Ability("Flash Heal : 1 Action", "Heal an ally for 1d8.");
	new Ability("Lay on Hands : 0 Actions", "Instantly heal an ally for 50% of their maximum health.<br>Can not be used on Evil characters.<br>30 feet range.");
	new Ability("Inquisition : 0 Actions", "Your next attack gains the following effect:<br>The attack gains +2 to hit.<br>If it kills a worthy enemy, all allies adjacent to that enemy are healed for 1d8.");
	new Ability("Sacred Circle : 1 Action", "Conjure a circle on the ground (20 feet radius).<br>The circle triggers the next time you land a damaging attack.<br>When the circle triggers, all allies inside (including you) are healed for 2d6.");
	new Ability("Righteous Reach : 0 Actions", "Your melee attacks gain 20 feet range for 1 minute.<br>While active, you can freely change the damage type of those attacks to Fire.");
	new Ability("Archon Wings : 0.5 Actions", "You unleash radiant, angelic wings from your back.<br>You can fly for up to (Charisma) minutes, with your normal walking speed.<br>When you cast this, all creatures in a 10 feet radius around you gain 1 Action more on their turn and they are healed for 2d8.");
	new Ability("Divine Shield : Reaction", "Choose an ally within 30 feet.<br>That ally becomes immune to all damage types except True until the end if its (next/current) turn.<br>You can use this at any time, including when an ally takes damage to block it.");
	new Ability("Mending : 0 Actions", "You can instantly repair a small tear in a small object.<br>If a piece of armor or weapon was heavily damaged, you can't mend it.");
	new Ability("Turn : 0.5 Action", "Attempt a Fear on a target.<br>If the target was Unholy, attempt a Fear (roll again once) on all other Unholy creatures within 30 feet of your primary target.");
	new Ability("Magical Journey : 1 Action", "Teleport all allies (and yourself) within 10 feet of you up to 45 feet away.<br>You need line of sight to the target location.");
	new Ability("Random Notes : 0 Actions", "Roll 1d4. The effect depends on your roll:<br> 1. Attempt a stun on a target<br> 2. Attempt a sleep on a target<br> 3. Deal (Your Level) damage to a target<br> 4. Heal a targt for 1d10");
	new Ability("Vicious Mockery : 1 Action", "A target makes a save.<br>If it fails, it attacks with Disadvantage until it lands an attack.");
	new Ability("Boring Melody : 1 Action", "The target is attempted a sleep.<br>If it succeeds, recast Boring Melody on the closest creature and repeat.");
	new Ability("Mind Control Tune : 1 Action", "Attempt a slow on a creature.<br>If you succeed, you gain control of that creature until you (the PC) take damage.<br>While controlling the unit, you can do simple actions like moving and attacking, but you can't cast more complex spells (ask the DM) or make it speak, read its mind, etc.");
	new Ability("Escape Constraints : 0 Actions", "Target an ally.<br>Remove any form of combat crowd control.<br>If the target is constrained, grappled, tied or so, magically loosen the grip and the target can easily escape.");
	new Ability("Marching Chant : 0 Actions", "All allies within 30 feet gain 15 feet more movement speed for up to 1 minute.");
	new Ability("Soothing Hymn : 0 Actions", "Heal the lowest health ally that can hear you for 1d12.");
	new Ability("Charismatic Attack : 0 Actions", "Your next attack gains (Your Charisma) bonus to both hit and damage rolls.");
	new Ability("Epic Performance : Only usable while resting", "Heal all nearby allies for 1d8.");
	new Ability("Uplifting Sonata : 0 Actions", "Clear an ally of all crowd control effects.<br>30 feet range.");
	new Ability("Aria of Strength : 0 Actions", "Choose a target.<br>It's next skill check based on Strength gains +1d4 to the roll.");
	new Ability("Aria of Intelligence : 0 Actions", "Choose a target.<br>It's next skill check based on Intelligence gains +1d4 to the roll.");
	new Ability("Aria of Dexterity : 0 Actions", "Choose a target.<br>It's next skill check based on Dexterity gains +1d4 to the roll.");
	new Ability("Aria of Charisma : 0 Actions", "Choose a target.<br>It's next skill check based on Charisma gains +1d4 to the roll.");
	new Ability("Aria of Willpower : 0 Actions", "Choose a target.<br>It's next skill check based on Willpower gains +1d4 to the roll.");
	new Ability("Aria of Constitution : 0 Actions", "Choose a target.<br>It's next skill check based on Constitution gains +1d4 to the roll.");
	new Ability("Grand Finale : 1 Action", "Throw an attack on a target within 30 feet.<br>This attack deals 1d8 damage for each spell you cast since the combat started.");
	new Ability("Uncontrollable Dance : 1 Action", "Target a 40x10 area (line) coming from your position.<br>All enemies inside the area make a save.<br>If they fail, they are forced to dance.<br>While dancing, they can't attack, cast abilities or speak, but they can move.");
	new Ability("Mind Vision : Channeled", "A target humanoid makes a save.<br>If it fails, you can see through its eyes.<br>Lasts until cancelled or the target goes (Your Charisma) Miles away from you.<br>You need line of sight to the target to cast this at first.");
	new Ability("Cure Disease : 1 Action", "You can magically cure a disease if it's not incurable.<br>You can do this once per week per charge.");
	new Ability("Sound Barrier : 1 Action", "All Medium or smaller enemies within 15 feet are knocked back up to 15 feet from you.");
	new Ability("Begin Performance : Passive", "You have 1 Action more on your first turn in an encounter.");
	new Ability("Ale and Talent : Passive", "You gain the following:<br>a) Proficiency in any 2 weapon types<br>b) You learn 2 basic abilities permanently<br>d) Your 4 lowest Skills increase by +2.");
	new Ability("Magic Bolt : 0.5", "Throw a magic attack at a target.<br>If it hits, it deals (Your Level) damage.<br>You can only do this once per turn.<br>You can use this as attack of oportunity.<br><i> When you get this ability, choose an element for its damage type </i>");
	new Ability("Element Burst : 1 Action", "Throw a magic attack.<br>You can choose the damage type of this attack.<br>(Fire, Frost, Thunder, Force)");
	new Ability("Wind Blast : 0.5 Actions", "Emmit a blast of force wind form your hand.<br>This attempts a slow on an enemy and deals 1d4 damage.<br>You can combine two Wind Blasts to attempt a snare instead.<br>15 feet range.");
	new Ability("Telekinetic Bond : 0 Actions", "When resting, you can create a bond with an item.<br>When you use this Ability, if that item is within range, you can very quickly drag that item to you if it's path is not obstructed.<br>1 use / Rest.");
	new Ability("Transparency : 1 Action", "Make a target living creature or inanimate object slightly transparent.<br>It gains +1 to Stealth for up to 1 hour.");
	new Ability("Shield Force : Reaction", "When an attack would hit you, you can increase your Armor by +2 for that attack.<br>1 use / Rest.");
	new Ability("Mend Wounds : 1 Action", "Heal a target you touch for 1d4.<br>2 uses / Rest.");
	new Ability("Prestidigitation : Depends", "30 feet range<br>You can create harmless sensory effects.<br>You can create sparks and change the temperature of objects (channeled).<br>You can instantly clean or soil objects.<br>You can make symbols appear on surfaces (up to 1 hour).<br>You can create small, harmless illusions that fit into your hand.<br>You can control a quill with telekinesis to quickly write with it (5 feet range).");
	new Ability("Light : 0 Actions", "Touch an object.<br>That object will shine around in a 20 feet radius.<br>You choose the color of the light.<br>The light is not strong enough to blind creatures.<br>You can only have one light active at a time.");
	new Ability("Craft Ammo : Only while resting", "If you are in a forest/jungle/etc you can freely craft up to 5 arrows or bolts per rest.<br>If you are in a city, you can freely craft up to 5 bullets per rest.");
	new Ability("Eldritch Cast : Passive", "Whenever you make a magic attack, instead of rolling for hit, you hit if the enemy fails a save.<br>You can choose if this happens or not.");
	new Ability("Slow Fall : 0 Actions", "Touch an ally.<br>That ally does not take fall damage for up to 10 minutes.<br>1 use / Rest.");
	new Ability("Find Water : 0 Actions", "You can immediately tell the direction of the closest water source.");
