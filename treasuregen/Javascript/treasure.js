
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
						"emblem",
						"decorative shield",
						"decorative dagger",
						"statue",
						"framed hourglass");
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
						"a Sapphire",
						"an expensive painting",
						"an expensive sculpture",
						"a compass",
						"a set of painting and some brushes");}}
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
				"a Dagger (3g)",
				"a Pickaxe (11g)");}
		return gwDesc;}

	function Pair(a1, a2){
		this.left = a1;
		this.right = a2;}
	function generateTrinkets(howMany){
		var genTrinketDesc = "";
		var alreadyGeneratedFood = false;
		for(var gti = 1; gti <= howMany; gti++){
			if(gti == howMany && gti != 1){
				genTrinketDesc += " and ";}
			else if(gti > 1){
				genTrinketDesc += ", ";}
			switch(randomInt(1, 6)){
				case 1:
					var madeOf = randomOf(" wood", " metal");
					var theObject = randomOf(
						new Pair("a", " spoon set"),
						new Pair("a", " fork set"),
						new Pair("a bunch of", " plates"),
						new Pair("some", " tankards"),
						new Pair("some", " cups"),
						new Pair("a", " pot"),
						new Pair("a", " sculpture"),
						new Pair("a", " vase"),
						new Pair("a small empty", " box"),
						new Pair("some small", " bells"),
						new Pair("", " common tools"),
						new Pair("a", " insignia"));
					theObject = theObject.left + madeOf + theObject.right;
					genTrinketDesc += theObject;
					break;
				case 2:
					genTrinketDesc += "a(n) " + randomOf("wine", "mead", "empty", "rum", "whiskey", "cooking oil") + " bottle";
					break;
				case 3:
					genTrinketDesc += randomOf("torches", "boots", "rags", "common clothes"); break;
				case 4:
				case 5:
					genTrinketDesc += randomOf(
						"a tusk",
						"a bunch of fangs",
						"some toothpicks",
						"a few candles",
						"a lock",
						"some chalk",
						"a fishing tackle",
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
						"a vial of weak drink-poison",
						"a sack of flour",
						"a crowbar",
						randomInt(1, 40) + " arrows",
						randomInt(1, 40) + " bolts",
						"a bell",
						"some blankets",
						randomInt(1, 3) + " common books",
						"a stack of blank paper",
						"a stack of uninteresting documents",
						"some parchments",
						"a deteriorated fishing net",
						"a box of sculpting clay",
						"a box of sealing wax",
						"a bottle of animal glue",
						"an amateur painting",
						"a set of playing cards",
						"a set of bone dice",
						"a vial of perfume",
						"an old lumberjack axe",
						"some whetstones",
						randomInt(4, 19) + " iron spikes",
						"a small mirror",
						"a hairbrush",
						"an oil flask",
						"a quill and ink",
						"a leather saddle",
						"an abacus",
						"a silk scarf",
						"a kite",
						"a doll",
						"an empty notebook",
						"a wooden pipe"); break;
				case 6:
					if(alreadyGeneratedFood == false){genTrinketDesc += "food";alreadyGeneratedFood = true;}
					else{gti--;}
					break;
			}
		}
		return genTrinketDesc;}
	
	function generateTreasure(gold){
		var totalGoldWorth = gold;
		var totalGoldWorth = floor((randomInt(80, 120) * totalGoldWorth)/100);
		var goldRaw = floor((randomInt(0, 35) / 100) * totalGoldWorth);
		var goldInGoods = totalGoldWorth - goldRaw;
		var tiers = [
			20,			/* Trinket */
			35,			/* Material */
			75,		/* Consumable */
			125,		/* Vanity */
			150,		/* Lesser Magic Item */
			400		];	/* Strong Magic Item */
		var nTrinkets		= 0;
		var nMaterials		= 0;
		var nConsumables	= 0;
		var nVanity			= 0;
		var nLesserItems	= 0;
		var nStrongItems	= 0;
		print(goldInGoods);
		while(goldInGoods > 20){
			var maxTier = 5;
			if(goldInGoods < 600) maxTier--;
			if(goldInGoods < 350) maxTier--;
			if(goldInGoods < 150) maxTier--;
			if(goldInGoods < 100) maxTier--;
			if(goldInGoods < 50)  maxTier--;
			var currentTier = randomInt(0, maxTier); /*generates random  type of item */
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
			var generatedTrinket = generateTrinkets(nTrinkets);
			returnDescription += capitalizeFirstLetter(generatedTrinket) + " worth a total of " + (35 + randomInt(-15, 10)) * nTrinkets + " gold.<br>";}
		if(nMaterials > 0){
			var nFoundMaterials = floor(5/3 * nMaterials);
			returnDescription += nFoundMaterials + " ";
			returnDescription += randomOf(
				"Blacksmithing",
				"Alchemy",
				"Leatherworking",
				"Cooking",
				"Tailoring",
				"Woodworking",
				"Scribe",
				"Fishing");
			returnDescription += " material(s) worth " + nFoundMaterials * (randomInt(17, 25)) + " gold<br>";}
		if(nConsumables > 0){
			returnDescription += nConsumables + " scroll(s) or potion(s).<br>";}
		if(nVanity > 0){
			returnDescription += capitalizeFirstLetter(generateVanity(nVanity)) + " worth a total of " + ((200 + randomInt(-24, 24)) * nVanity) + " gold<br>";}
		if(nLesserItems > 0){
			returnDescription += nLesserItems + " lesser magic item(s).<br>";}
		if(nStrongItems > 0){
			returnDescription += nStrongItems + " powerful magic item(s).<br>"}
		return returnDescription;		
	}
		
	
	