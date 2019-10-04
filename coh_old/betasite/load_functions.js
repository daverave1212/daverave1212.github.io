

	function loadMagicTree(){
		destroyAllTalents();
		var magic			= new Talent(550, 250, "Magic : Passive", "3", "You gain proficiency with Magic Weapons.<br>You also gain Mage Power.<br>You also gain a Spell Book.<br>In this Spell Book, you can have up to 3 Basic Spells prepared at a time.<br>You can change the Basic Spells you have prepared at any rest.<br>All of your attacks with spells gain +3 to Hit (d20) if you don't already have this from another Root Talent.");
		var ignite			= new Talent(400, 350, "Ignite : 0 Actions", "2", "Deal (Your Level) Fire damage to a target (instantly).");
		var blink			= new Talent(700, 350, "Blink : 0.5 Actions - 30 ft", "2", "Quickly teleport to a nearby spot. The spell leaves behind a magical trail that can be seen. If you have 2 charges of this spell ready, you can use 2 at once (0.5 action total) to leave no trail.");
		var distort_vision	= new Talent(650, 500, "Distort Vision : 1 Action - 30 ft", "2", "This incantation distorts the space a few feet around you. The more intelligence you have, the more it is distorted. Concentrated.");
		var focus			= new Talent(850, 650, "Focus : Passive", "3", "You have +1 to hit with all spell attacks.");
		var invisibility	= new Talent(800, 500, "Invisibility : 1 Action, Channeled, while moving", "3", "Turn invisible. While invisible, you can only move at half speed. Getting too close to an enemy may break invisibility.");
		var elemental_blast	= new Talent(350, 500, "Elemental Blast : 1 Action", "2", "Throw an elemental attack.<br>Choose between Fire, Frost or Arcane.<br>This attack deals (Your Level) bonus damage, of your chosen element.<br>Thrown.");
		var hand_sign		= new Talent(500, 500, "Hand Sign : 0 Actions", "2", "Your next spell that requires a 1 action will only require a 0.5 action.");
		var control_element	= new Talent(200, 500, "Control Element : Depends, 30 ft", "2", "You can manipulate one of the elements: fire, water, earth, air You can use this quickly, but it still spends 1 action from your next turn if in combat. When you gain this ability, you gain control over only 1 of those elements. Your control and the strength of this ability scales with your Intelligence. You can get this ability again for just 1 Skill Point.");
		var fire_enchantment	= new Talent(50, 650, "Fire Enchantment : Only while resting", "2", "Use a {Fire Rune : 20 gold} to imbue a weapon until your next rest.<br>This covers the weapon in small flames.<br>That weapon deals +1d4 Fire damage.<br>If any water-like liquid touches the weapon, the enchant falters.");
		var frost_enchantment		= new Talent(200, 650, "Frost Enchantment : Only while resting", "2", "Use a {Frost Rune : 20 gold} to imbue a weapon until your next rest.<br>The weapon now emmits cold.<br>On every attack, the weapon deals +1d6 damage if the target is below 50% health.<br>If any heat touches the weapon, the enchant falters.");
		var advanced_enchantments	= new Talent(100, 800, "Advanced Enchantments : Passive", "3", "Increases the damage of Fire Enchantment to 1d6.<br>Increases the damage of Frost Enchantment to 1d8.<br>Enchantments no longer require materials.");
		var soul_enchantment		= new Talent(50, 950, "Soul Enchantment : Only while resting", "5", "Use a {Captured Soul} to imbue a weapon until your next rest.<br>The weapon now deals +1d8 true damage regardless if it hits or not.<br>Attacks hit with that weapon also ignore resistances.");
		var mage_enchantment		= new Talent(250, 950, "Mage Enchantment : Only while resting", "5", "Use a {Power Crystal} to imbue a weapon until your next rest.<br>The wielder's spell attacks have +2 to hit and deal +1d4 damage.");
		var master_enchantment		= new Talent(100, 1100, "Master Enchantment : Only while resting", "5", "Permanently imbue a non-magic and non-magical weapon.<br>You can only do this once every 10 years per charge.<br>That weapon gains +6 to hit and +1d6 Thunder damage.<br>That weapon can't be enchanted again.");
		var mage_armor		= new Talent(700, 800, "Mage Armor : 0 Actions", "2", "Put a protective shield around an ally.<br>That ally has +2 AC against spells.<br>Lasts until your next rest.");
		var force_zone		= new Talent(1000, 800, "Force Zone : 1, Channeled, While moving", "4", "You maintain a 15 ft zone of force around you. It blocks ranged physical attacks. Can be maintained until you are attacked.");
		var conceal_magic	= new Talent(950, 500, "Conceal Magic : 1 Action", "1", "For 1 minute, your magic becomes undetectable my magic.");
		var translation		= new Talent(850, 350, "Translation : Passive", "2", "You are able to (only) understand (only) common languages when spoken to.");
		var battlecast		= new Talent(1000, 650, "Battlecast : Passive", "3", "If you're wearing heavy armor, after you land an attack with a melee weapon and you apply any Status Efect to the target, you get a bonus 0.5 action. It can only be used to cast a spell.");
		var mimick			= new Talent(1000, 350, "Mimick : 0.5 Actions - 30 ft", "2", "The next time an enemy casts a spell, you can cast a version of that spell once in your next turn");
		var fake_sound		= new Talent(1100, 500, "Fake Sound : 0.5", "2", "You create a sound out of thin air. You roll a Deception check to see how close to perfection the result is.");
		var explosion_rune	= new Talent(350, 650, "Explosion Rune : 1 Action", "2", "Casts a rune on a solid surface (2.5 ft radius). Any physical contact with it detonates it. Whatever stepped in it takes Staff Power fire damage and is attempted a snare on.");
		var prison_rune		= new Talent(500, 650, "Prison Rune : 1 Action", "2", "Cast a rune on the ground (on a solid surface).<br>A creature stepping on it is now marked.<br>The next attack against that creature has Advantage.<br>On detonation, that creature is also attempted a snare.");
		var antimagic_rune	= new Talent(600, 650, "Antimagic Rune : 1 Action", "4", "Place a rune on the ground.<br>You can activate it at any time and from any distance.<br>When you activate it, the rune creates a 25x25 feet zone.<br>ALL units inside are attempted a silence and take (Your Level) Arcane damage on detonation.");
		var telekinesis		= new Talent(450, 800, "Telekinesis : Depends", "2", "You may levitate and control objects around you. The weight and the precision of your control scales with your Intelligence. Concentrated.");
		var spark			= new Talent(300, 800, "Spark : 1 Action", "3", "Throw a spell attack.<br>This attack deals (Your Level + 1d4) bonus damage, all Thunder damage.<br>The spell has Disadvantage against targets that don't properly conduct electricity.");
		var rain_of_ice		= new Talent(550, 950, "Rain of Ice : 0.5 Actions Each turn", "3", "When first cast, target a 10x10 area.<br>While channeling, throw an attack with disadvantage on each unit in the zone.<br>This attack deals all Frost damage.");
		var flame_strike	= new Talent(350, 950, "Flame Strike : 1 Action", "3", "Target a 20x20 area to light it in flames.<br>At the end of each of your turns, all creatures inside take (Your Level / 2) Fire damage (roll only once).<br>Lasts 1 minute.");
		var magic_missile	= new Talent(700, 950, "Magic Missile : 1 Action", "3", "Throw 3 attacks at a target.<br>These attacks deal (Your Level) damage.");
		var conjuration		= new Talent(450, 1100, "Conjuration : 1", "2", "You can conjure an object made of arcane energy. The object is always of only a color of your choice, can be solid or not and is transparent or translucent. Lasts from a few seconds to a few minutes and the size scales with your Intelligence.");
		var castermaster	= new Talent(700, 650, "Castermaster : Passive Universal", "4", "Your attacks with Magic Weapons deal +1d4 damage.");
		var deathfire_bolt	= new Talent(300, 1100, "Deathfire Bolt : 1 Action", "2", "Throw a spell attack on a target.<br>This attack deals (Your Level) bonus damage.<br>Deals all Necrotic damage.<br>Unholy creatures are healed instead, and has no effect on other non-living creatures.");
		var wild_magic		= new Talent(700, 1100, "Wild Magic : 1 Action", "Roll 1d100. A random effect from below happens, according to the first and second digit:", "0 All allies around	/ Take your weapon damage<br>1 All enemies around / Healed for your weapon damage<br>2 A random enemy / Polymorphed into a critter<br>3 A random ally / Stunned<br>4 All creatures around / Gain +2 AC for 1 minute<br>5 All creatures around you except you / Silenced<br>6 All creatures around a chosen target / Pulled to you<br>7 A chosen target / Take (Your Level) damage<br>8 Nobody / Gain Advantage on the next attack<br>9 You / Explodes for (Your Level) damage in 5 ft radius");
		var flame_ray		= new Talent(350, 1250, "Flame Ray : 1 Action", "4", "Shoot a Fire ray in a 40x5 ft line.<br>Throw a single attack.<br>This attack can hit all targets inside the ray.<br>Deals weapon damage + (Your Level) Fire damage.");
		var splash_frost	= new Talent(550, 1250, "Splash Frost : 1 Action", "3", "Shoot a water bolt.<br>This bolt bounces off walls and solid surfaces up to 2 times.<br>This bolt deals weapon damage, but gains (Your Level) damage for each bounce.<br>Roll for hit if it hits a target (thrown).<br>Travels up to 100 ft total.");
		var portal			= new Talent(450, 1400, "Portal : 1 Action", "3", "Conjure a portal where you are. You can cast it again in another place. You and allies can freely move between the 2 portals. Lasts 7 days. 1 use / week");
		var fireball		= new Talent(300, 1400, "Fireball : 1 Action", "5", "Declare a 15x15 area.<br>All targets inside make a save.<br>If they fail they take (Weapon Damage * 2) Fire damage.<br>Otherwise, they take half of that damage.");
		var frost_nova		= new Talent(600, 1400, "Frost Nova : 1 Action", "5", "All creatures in a 15 feet radius around you are attempted a Stun.<br>If the Stun succeeds, they take (Your Level) damage.");

		
		magic.setState(AVAILABLE);
		link(magic, ignite);
		link(magic, blink);
		link(ignite, elemental_blast);
		link(ignite, hand_sign);
		link(hand_sign, distort_vision);
		link(control_element, elemental_blast);
		link(blink, distort_vision);
		link(invisibility, blink);
		link(translation, blink);
		link(mimick, translation);
		link(invisibility, conceal_magic);
		link(conceal_magic, fake_sound);
		link(mimick, fake_sound);
		link(fire_enchantment, control_element);
		link(frost_enchantment, control_element);
		link(explosion_rune, elemental_blast);
		link(prison_rune, hand_sign);
		link(focus, distort_vision);
		link(focus, invisibility);
		link(focus, battlecast);
		link(antimagic_rune, prison_rune);
		link(castermaster, antimagic_rune);
		link(focus, castermaster);
		link(advanced_enchantments, fire_enchantment);
		link(advanced_enchantments, frost_enchantment);
		link(telekinesis, explosion_rune);
		link(telekinesis, prison_rune);
		link(mage_armor, focus);
		link(force_zone, mage_armor);
		link(soul_enchantment, advanced_enchantments);
		link(mage_enchantment, advanced_enchantments);
		link(mage_enchantment, flame_strike);
		link(spark, telekinesis);
		link(flame_strike, telekinesis);
		link(rain_of_ice, telekinesis);
		link(magic_missile, telekinesis);
		link(magic_missile, mage_armor);
		link(master_enchantment, soul_enchantment);
		link(master_enchantment, mage_enchantment);
		link(deathfire_bolt, conjuration);
		link(conjuration, flame_strike);
		link(conjuration, rain_of_ice);
		link(wild_magic, magic_missile);
		link(flame_ray, conjuration);
		link(splash_frost, conjuration);
		link(portal, flame_ray);
		link(portal, splash_frost);
		link(fireball, portal);
		link(frost_nova, portal);
		}
		
	function loadCombatTree(){
		destroyAllTalents();
		var t1 = new Talent(200, 450, "Agile", 5, "I am agile af. i am a ninja mate hear whu yuu duin m8");
		var t2 = new Talent(100, 600, "Bandage", 5, "I am agile af. i am a ninja mate hear whu yuu duin m8");
		var t3 = new Talent(650, 250, "Bandage", 5, "I am agile af. i am a ninja mate hear whu yuu duin m8");
		link(t1, t3);
		link(t3, t2);
		t3.setState(AVAILABLE);
		
	}
	
	
	
	
	
	
	
	