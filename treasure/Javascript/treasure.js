
	function generateVanity(howMany){
		var gvDesc = "";
		for(var gvi = 1; gvi <= howMany; gvi++){
			if(gvi == howMany && gvi != 1){
				gvDesc += " and ";}
			else if(gvi > 1){
				gvDesc += ", ";}
			switch(randomInt(1, 4)){
				case 1:
					gvDesc += "a " + randomOf("golden", "silver") + " " + randomOf(
						"spoon set",
						"fork set",
						"plate",
						"tankard",
						"glass",
						"pot",
						"sculpture",
						"egg",
						"amulet",
						"ring",
						"chain",
						"statue");
						break;
				case 2:
					gvDesc += "a quality " + randomOf("wine", "mead", "liquor") + " bottle";
					break;
				case 3:
					gvDesc += "expensive " + randomOf("silk", "spices", "glass");
					break;
				case 4:
					gvDesc +=  randomOf(
						"an Amethyst",
						"a Diamond",
						"an Emerald",
						"a Garnet",
						"a Topaz",
						"a Ruby",
						"a Sapphire");}}
		return gvDesc;}

	function generateWeapons(howMany){
		var gwDesc = "";
		for(var gwi = 1; gwi <= howMany; gwi++){
			if(gwi == howMany && gwi != 1){
				gwDesc += " and ";}
			else if(gwi > 1){
				gwDesc += ", ";}
			gwDesc += randomOf(
				"a Heavy Sword (29g)",
				"a Heavy Axe (20g)",
				"a War Hammer (37g)",
				"a Shortsword (6g)",
				"a Handaxe (4g)",
				"a Mace (7g)",
				"a Short Bow (17g)",
				"a Long Bow (28g)",
				"a Heavy Crossbow (31g)",
				"a Light Crossbow (19g)",
				"a Dagger (3g)",
				"a Knife (1g)",
				"a Dagger (3g)");}
		return gwDesc;}

	function generateTrinkets(howMany){
		var genTrinketDesc = "";
		var howMuchFood = 0;
		for(var gti = 1; gti <= howMany; gti++){
			if(gti == howMany && gti != 1){
				genTrinketDesc += " and ";}
			else if(gti > 1){
				genTrinketDesc += ", ";}
			switch(randomInt(1, 6)){
				case 1:
					var madeOf = "a " + randomOf("wood", "metal");
					var theObject = madeOf + " " + randomOf(
						"spoon set",
						"fork set",
						"plate",
						"tankard",
						"glass",
						"pot",
						"sculpture");
					genTrinketDesc += theObject;
					break;
				case 2:
					genTrinketDesc += "a(n) " + randomOf("wine", "mead", "empty") + " bottle";
					break;
				case 3:
					genTrinketDesc += "torches"; break;
				case 4:
				case 5:
					genTrinketDesc += randomOf(
						"a tusk",
						"a bunch of fangs",
						"some toothpicks",
						"a few candles",
						"a lock",
						"a bear trap",
						"a pickaxe",
						"a shovel",
						"a few jars",
						"a sack of nails",
						"a sack of 20 caltrops",
						"a metal hook",
						"a whistle",
						"20 feet of rope",
						"a pair of socks",
						"an oil lantern",
						"a flint and steel",
						"a vial of acid",
						"a vial of drink-poison",
						"a sack of flour",
						"a crowbar",
						"a bell",
						"an oil flask",
						"a quill and ink"); break;
				case 6:
					genTrinketDesc += "food"; break;
					break;}}
		return genTrinketDesc;}
	
	function generateTreasure(gold){
		var totalGoldWorth = gold;
		var totalGoldWorth = floor((randomInt(80, 120) * totalGoldWorth)/100);
		var goldRaw = floor((randomInt(0, 35) / 100) * totalGoldWorth);
		var goldInGoods = totalGoldWorth - goldRaw;
		var tiers = [
			20,			/* Trinket */
			50,			/* Material */
			100,		/* Consumable */
			150,		/* Vanity */
			200,		/* Lesser Magic Item */
			400		];	/* Strong Magic Item */
		var nTrinkets		= 0;
		var nMaterials		= 0;
		var nConsumables	= 0;
		var nVanity			= 0;
		var nLesserItems	= 0;
		var nStrongItems	= 0;
		print(goldInGoods);
		while(goldInGoods > 20){
			var maxTier = 6;
			if(goldInGoods < 600) maxTier--;
			if(goldInGoods < 350) maxTier--;
			if(goldInGoods < 150) maxTier--;
			if(goldInGoods < 100) maxTier--;
			if(goldInGoods < 50)  maxTier--;
			var currentTier = randomInt(0, maxTier - 1); /*generates random  type of item */
			print(currentTier);
			switch(currentTier){
				case 0: nTrinkets++;	break;
				case 1: nMaterials++;	break;
				case 2: nConsumables++;	break;
				case 3: nVanity++;		break;
				case 4: nLesserItems++;	break;
				case 5: nStrongItems++;	break;}
			goldInGoods -= tiers[currentTier];}
		var returnDescription = "";
		goldRaw += goldInGoods;
		if(goldRaw > 0){
			returnDescription += "" + goldRaw + " gold.<br>";}
		if(nTrinkets > 0){
			nTrinkets += randomInt(0, 2);
			if(nTrinkets >= 2 && randomInt(1, 2) == 2){
				returnDescription += capitalizeFirstLetter(generateWeapons(nTrinkets - 1)) + "<br>";
				nTrinkets--;}
			returnDescription += capitalizeFirstLetter(generateTrinkets(nTrinkets)) + " worth a total of " + (35 + randomInt(-15, 10)) * nTrinkets + " gold.<br>";}
		if(nMaterials > 0){
			returnDescription += floor(5/3 * nMaterials) + " ";
			returnDescription += randomOf(
				"Blacksmithing",
				"Alchemy",
				"Leatherworking",
				"Cooking",
				"Tailoring",
				"Woodworking",
				"Scribe",
				"Fishing");
			returnDescription += " material(s).<br>";}
		if(nConsumables > 0){
			returnDescription += nConsumables + " scroll(s) or potion(s).<br>";}
		if(nVanity > 0){
			returnDescription += capitalizeFirstLetter(generateVanity(nVanity)) + " worth a total of " + ((200 + randomInt(-24, 24)) * nVanity) + " gold<br>";}
		if(nLesserItems > 0){
			returnDescription += nLesserItems + " lesser magic item(s).<br>";}
		if(nStrongItems > 0){
			returnDescription += nStrongItems + " powerful magic item(s).<br>;"}
		return returnDescription;		
	}
		
		/*
		* trinkets
		* materials:
			alchemy
			blacksmith
			etc
		* vanity items (golden egg)
		* gem
		
		
		*/
		
	
	