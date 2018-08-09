
	var Weapons = {};
	
	function Weapon(Name, Type, Damage, IconPath, Effect, Other, Other2){
		Weapons[Name] = this;
		this.name = Name + "<br>" + inGraySpan(Type);
		this.damage = Damage;
		if(substringTo(IconPath, 3) == "http"){
			this.iconPath = IconPath;
		}
		else{
			this.iconPath = "Images/Icons/" + IconPath;
		}
		this.desc = Damage + " damage<br>";
		if(Other != undefined && Other != ""){
			this.desc += Other + "<br>";}
		if(Effect != "") this.desc += "<br>" + inGreenSpan("Special Effect: " + Effect);
		if(Other2 != undefined) this.desc += "<br>" + inBlueSpan(Other2);}
		
	// Staple is 2d6 for heavy, 1d6 for light
	// Staple for effect is 1d6
	
	new Weapon("Punch", "1-Handed Melee, Special", "1d6",
			"unarmed.png",
			"If you hit, attack again.",
			"",
			"Alternatives: Kick, Slam, Karate-Chop, etc");
			
	new Weapon("Club", "1-Handed Melee", "1d6 Smash",
			"club.png",
			"Deal 100% bonus damage.",
			"",
			"Alternatives: Katar (Slash instead of Smash)");
			
	new Weapon("Dagger", "1-Handed Melee, Finesse, Thrown*", "1d4 + 1 Pierce",
			"dagger.jpg",
			"If the attack was an ambush, deal 150% bonus damage.");
			
	new Weapon("Mace", "1-Handed Melee", "1d6 Smash",
			"mace.png",
			"Use this before you declare an attack. If you hit, the target is attempted a Stun.",
			"",
			"Alternatives: Light Morning Star");	
	
	new Weapon("Hand Axe", "1-Handed Melee, Thrown", "1d8 - 1 Slash",
			"hand_axe.png",
			"Heal for 100% of weapon damage done.",
			"",
			"Alternatives: Claws");	
	
	new Weapon("Hand Hammer", "1-Handed Melee, Thrown", "1d8 - 1 Smash",
			"hand_hammer.png",
			"Lower the target's Armor by 1. Melee only.");	
	
	new Weapon("Sickle", "1-Handed Melee, Finesse", "4 Slash",
			"sickle.jpg",
			"If the target is wearing armor, deal 100% bonus damage.",
			"",
			"Alternatives: Nunchaku (Smash instead of Slash)");	
	
	new Weapon("Spear", "1-Handed Melee", "1d8 Pierce - 1",
			"spear.jpg",
			"Use this before you declare an attack. The attack gains 10 feet bonus range.");		
	
	new Weapon("Flail", "1-Handed Melee", "1d10 - 2 Pierce or Smash",
			"flail.png",
			"Both you and the target take 200% of the damage.",
			"",
			"Alternatives: Combat Chains, Kusarigama");	
	
	new Weapon("Shortsword", "1-Handed Melee", "1d6",
			"shortsword.png",
			"The attack gains +3 to hit (se this after you rolled for hit)",
			"",
			"Alternatives: Falchion, Sabre, Scimitar variant");	
	
	new Weapon("Scimitar", "1-Handed Melee", "1d6",
			"scimitar.png",
			"Use this after you land an attack. Your next ranged attack deals 100% bonus damage if it hits.");	
	
	new Weapon("Rapier", "1-Handed Melee, Finesse", "2d4 + 1",
			"rapier.png",
			"For 0 Actions, you can perform a Disengage. You can only use this weapon if it's your only weapon and without a shield.");	
	
	new Weapon("Cleaver", "1-Handed Melee, Thrown", "1d4 + 1 Slash",
			"cleaver.png",
			"Attack again with this weapon.",
			"",
			"Alternatives: Dead Fish (Smash instead of Slash)");
	
	new Weapon("Warglaive", "1-Handed Melee, Finesse, Thrown", "1d12 - 3",
			"glaive.jpg",
			"If you miss, attack again.",
			"",
			"Alternatives: Boomerang, Chakram, Shuriken");
	
	new Weapon("Greatclub", "2-Handed Melee", "2d4 + 2",
			"greatclub.png",
			"Deal 50% bonus damage.");	
	
	new Weapon("Poor Man's Mallet", "2-Handed Melee", "1d8",
			"mallet.jpg",
			"Deal 150% bonus damage.");	
	
	new Weapon("Warhammer", "2-Handed Melee", "2d6",
			"warhammer.jpg",
			"Deal 100% bonus damage. You MUST use this after you land an attack, if you can.");	
	
	new Weapon("Heavy Mace", "2-Handed Melee", "1d12",
			"heavy_mace.png",
			"Use this before you declare an attack. If you hit, the target is attempted a Stun.");	
	
	new Weapon("Longsword", "1/2-Handed Melee, Versatile", "1d8 - 1 / 1d12",
			"longsword.png",
			"For 0 Actions, if you are wielding this in one hand and a shield, you deal the 2-Handed version of damage with the Longsword until the end of your turn.");	
	
	new Weapon("Greatsword", "2-Handed Melee", "1d20 Slash, -3 to hit",
			"greatsword.png",
			"After you roll for hit, you can add +3 to the hit roll (remove the hit penalty)");	
	
	new Weapon("Claymore", "2-Handed Melee", "2d6",
			"claymore.png",
			"Deal 50% bonus damage.");	
	
	new Weapon("Quarterstaff", "2-Handed Melee, Finesse", "1d12 + 1",
			"quarterstaff.jpg",
			"Use this before you declare the attack. Attack 2 targets and roll once for damage. Each target takes 50% of the damage if it hits, rounded up.");	
	
	new Weapon("Battle Axe", "2-Handed Melee", "2d8 - 2",
			"battle_axe.png",
			"Heal for 100% of the damage dealt.");	
	
	new Weapon("Scythe", "2-Handed Melee", "3d4",
			"scythe.png",
			"Instead of attacking, roll for damage. You can spread the damage however you want between creatures around you (at least 2 creatures).");	
	
	new Weapon("Lance", "2-Handed Melee", "1d8",
			"lance.png",
			"For 2 turns, gain +5 feet range. You can always use this with a shield (attacks still use 1 Action and still count as 2-Handed Melee).");	
	
	new Weapon("Pike", "2-Handed Melee", "1d12",
			"longspear.jpg",
			"The attack deals 50% of the damage to a target right behind the main target.");	
	
	new Weapon("Halberd", "2-Handed Melee", "1d10 + 1",
			"halberd.png",
			"For 0 Actions, you gain 5 feet bonus range until the end of your next turn.",
			"",
			"Alternatives: Garden Rake, Glaive, Bardiche");	
	
	new Weapon("Katana", "2-Handed Melee, Finesse", "2d10 - 4",
			"katana.png",
			"If the attack was an ambush, deal 50% bonus damage.");	
	
	new Weapon("Trident", "2-Handed Melee", "1d12",
			"trident.jpg",
			"Use this before you declare the attack. The attack gains +3 to hit.",
			"",
			"Alternatives: Pitchfork");	
	
	new Weapon("Pickaxe", "2-Handed Melee", "2d4 + 2",
			"pickaxe.png",
			"Reduce the target's Armor by 1.",
			"",
			"Alternatives: Falx");	
	
	new Weapon("Whip", "2-Handed Melee, Finesse", "1d8 + 2",
			"https://icon2.kisspng.com/20180403/wtw/kisspng-dark-souls-iii-whip-weapon-whip-5ac317d6924fd5.5518822315227350625993.jpg",
			"Deal 50% bonus damage, only if the target can bleed.");	
	
	new Weapon("Longbow", "2-Handed Ranged", "1d10",
			"longbow.jpg",
			"Deal 50% bonus damage.");	

	new Weapon("Shortbow", "2-Handed Ranged<br><br><i>Hint: this weapon is intended for characters who are not proficient in ranged weapons, such as heavy melee, strenght based warriors who want a decent ranged attack once in a while.</i>", "1d8",
			"shortbow.jpg",
			"Use this before you declare the attack. This attack is done as if you had proficiency in the weapon if you don't have it.");	

	new Weapon("Heavy Crossbow", "2-Handed Ranged", "1d12 + 1",
			"heavy_crossbow.jpg",
			"Use this for 0 Actions to reload the crossbow.",
			"<br>You must always spend 0.5 Actions to reload the crossbow before you can attack again.");	

	new Weapon("Heavy Gun", "2-Handed Ranged", "2d6 + 1",
			"heavy_gun.jpg",
			"Instead of attacking normally, shoot all targets in a 45*, 15 foot cone. Roll an attack for each and roll for damage once. Each attack hit deals 50% of the damage.",
			"<br>You must always spend 0.5 Actions to reload the gun before you can attack again.");	

	new Weapon("Javelin", "2-Handed Ranged", "1d10",
			"javelin.jpg",
			"Use this before declaring an attack. The attack tries to hit 2 targets in a line (roll once for hit, but twice for damage).");	

	new Weapon("Sling", "1-Handed Ranged", "1d4",
			"sling.png",
			"Use this for 0 Actions. This turn, attack with slings only use 0.25 Actions",
			"Attacks with slings use 0.33 actions (and you can attack 3 times per turn with the same sling)",
			"",
			"Alternatives: Slingshot");	

	new Weapon("Light Crossbow", "1-Handed Ranged", "4",
			"light_crossbow.jpg",
			"Use this for 0 Actions to reload the crossbow.",
			"<br>You must always spend 0.5 Actions to reload the crossbow before you can attack again.");	

	new Weapon("Handgun", "1-Handed Ranged", "1d6 + 1",
			"hand_gun.jpg",
			"Use this as a reaction to attack during an enemy's turn. If you do it, your attack happens before that enemy's attack.",
			"<br>You must always spend 0.5 Actions to reload the gun before you can attack again.");	

	new Weapon("Blowgun", "1-Handed Ranged", "1d4 + 1",
			"blowgun.png",
			"Deal 100% bonus damage as Poison damage.");	

	new Weapon("Other Thrown Weapon", "1-Handed Ranged", "1d6 Pierce/Smash/Slash",
			"other.png",
			"");	


	

		
	