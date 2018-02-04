	/* Defs */
	W_SEA			= 1;
	W_LAKE			= 2;
	WS_BIG			= 1;
	WS_MEDIUM		= 2;
	WS_BASE			= 3;
	SEA_TOP			= 1;
	SEA_BOTTOM		= 2;
	SEA_LEFT		= 3;
	SEA_RIGHT		= 4;
	SEA_TOPLEFT		= 5;
	SEA_TOPRIGHT	= 6;
	SEA_BOTTOMLEFT	= 7;
	SEA_BOTTOMRIGHT = 8;
	
	/* "constants" for how big and how many the terrain patches are */
	var SEASAMOUNT = 4;	
	var SEASSIZE = 5;	//5
	var FORESTSNUMBER = 4;
	var FORESTSSIZE = 6;
	var MOUNTAINSNUMBER = 1;
	var MOUNTAINSSIZE = 5;
	var SNOWAMOUNT = 1;	//1
	var SNOWSIZE = 6;	//6
	var TOWNSNUMBER = 50;
	
	/* remembers if a sea exists at that origin */
	var sea_top			= false;
	var sea_bottom		= false;
	var sea_left		= false;
	var sea_right		= false;
	var sea_topleft		= false;
	var sea_topright	= false;
	var sea_bottomleft	= false;
	var sea_bottomright = false;
	
	nGeneratedWaterPatches = 0;
	nTowns = 0;
	
	var screenWidth	 = 1280;
	var screenHeight = 720;
	
		/* classes */	
	function WaterPatch(size){ /* WS_BIG or WS_MEDIUM */
		if(size == WS_BIG){
			this.image = createImage("images/WaterPatchHuge.png");}
		if(size == WS_MEDIUM){
			this.image = createImage("images/WaterPatchBig.png");}
		if(size == WS_BASE){
			this.image = createImage("images/WaterPatchBase.png");}
		this.x = 0;
		this.y = 0;
		if(size != WS_BASE){
			this.height = 200;
			this.width = 200;
			var randomRotation = randomInt(0, 360);
			this.image.style.transform = "rotate(" + randomRotation + "deg)";
		} else {
			this.height = 400;
			this.width = 400;
			var randomRotation = randomInt(0, 360);
			this.image.style.transform = "rotate(" + randomRotation + "deg)";}
		
		this.setXY = function(_x, _y){
			this.x = _x;
			this.y = _y;
			setImageXY(this.image, _x, _y);
		}
	}
	function SnowPatch(size){
		this.image = createImage("images/SnowPatch.png");
		this.x = 0;
		this.y = 0;
		this.height = 128;
		this.width = 128;
		var randomRotation = randomInt(0, 360);
		this.image.style.transform = "rotate(" + randomRotation + "deg)";

		this.setXY = function(_x, _y){
			this.x = _x;
			this.y = _y;
			setImageXY(this.image, _x, _y);
		}		
	}
	function ForestPatch(size){
		this.image = createImage("images/ForestPatch.png");
		this.x = 0;
		this.y = 0;
		this.height = 70;
		this.width = 70;
		var randomRotation = randomInt(0, 360);
		this.image.style.transform = "rotate(" + randomRotation + "deg)";

		this.setXY = function(_x, _y){
			this.x = _x;
			this.y = _y;
			setImageXY(this.image, _x, _y);
		}		
	}
	function MountainPatch(size){
		this.image = createImage("images/MountainPatch.png");
		this.x = 0;
		this.y = 0;
		this.height = 200;
		this.width = 200;
		var randomRotation = randomInt(-70, 70);
		//this.image.style.transform = "rotate(" + randomRotation + "deg)";

		this.setXY = function(_x, _y){
			this.x = _x;
			this.y = _y;
			setImageXY(this.image, _x, _y);
		}		
	}
	
	function GrassPatch(_x, _y){
		this.image = createImage("images/GrassPatch.png");
		this.x = _x;
		this.y = _y;
		this.height = 70;
		this.width = 70;
		var randomRotation = randomInt(0, 360);
		this.image.style.transform = "rotate(" + randomRotation + "deg)";

		this.setXY = function(_x, _y){
			this.x = _x;
			this.y = _y;
			setImageXY(this.image, _x, _y);
		}		
	}	
	var yellowSelectedBorder;
	//setImageXY(yellowSelectedBorder, screenWidth, screenHeight);
	nCaravanTowns = 0;
	nSmallTowns = 0;
	nNormalTowns = 0;
	nVillages = 0;
	nCities = 0;
	nBigCities = 0;
	function Town(type){
		this.image = createImage("images/Town.png");
		this.image.setAttribute("class", "" + nTowns);
		this.x = 0;
		this.y = 0;
		this.height = 33;
		this.width = 33;
		this.id = nTowns;
		nTowns++;
		
		this.image.addEventListener("click", function(){
			var thisTownID = parseInt(this.getAttribute("class"));
			var thisTown = towns[thisTownID];
			setImageXY(yellowSelectedBorder, towns[thisTownID].x, towns[thisTownID].y);
			getElement("DESCRIPTIONTITLE").innerHTML = thisTown.name;
			getElement("DESCRIPTION").innerHTML = thisTown.description;
		});

		this.setXY = function(_x, _y){
			this.x = _x;
			this.y = _y;
			setImageXY(this.image, _x, _y);
		}
		
		this.hasType = function(string_type){
			if(stringContains(this.type, string_type)){
				return true;}
			return false;
		}
		this.collidesWithWater = function(){
			for(iTown = 0; iTown<waterPatches.length; iTown++){
				if(detectCollision(this, waterPatches[iTown])){return true;}}
			return false;
		}
		
		this.collidesWithForest = function(){
			for(iTown = 0; iTown<forestPatches.length; iTown++){
				if(detectCollision(this, forestPatches[iTown])){return true;}}
			return false;
		}
		
		this.collidesWithSnow = function(){
			for(iTown = 0; iTown<snowPatches.length; iTown++){
				if(detectCollision(this, snowPatches[iTown])){return true;}}
			return false;
		}
		
		this.collidesWithMountain = function(){
			for(iTown = 0; iTown<mountainPatches.length; iTown++){
				if(detectCollision(this, mountainPatches[iTown])){return true;}}
			return false;			
		}
		
		this.collidesWithTowns = function(){
			var pseudoTown = {};
			pseudoTown.x = this.x;
			pseudoTown.y = this.y;
			pseudoTown.width = 70;
			pseudoTown.height = 70;
			for(iTown = 0; iTown<towns.length; iTown++){
				if(detectCollision(pseudoTown, towns[iTown])){return true;}}
			return false;
		}
		

		
		/* Descriptors below */
		this.	townSize			= "";
		this.	isCity				= false;
		this.	name				= "";
		this.	specialty			= "";
		this.	type				= "";	//island, snow, mountain, etc
		this.	description			= "";
		this.	location			= "";
		this.	northsouth			= "";
		this.	westeast			= "";
		this.	tavernName			= "";
		this.	tavernDescription	= "";
		
		this.generateTavern = function(){
			this.tavernName = namegen.tavernName();
			this.tavernDescription = gen.tavernDescription(this.townSize);
		}
			
		this.giveRandomSize = function(){
			var randomSizeVar = percentChance(3);
			if(randomSizeVar == true){
				this.townSize = "Caravan Town";
				nCaravanTowns++;}
			else{
				randomSizeVar = randomInt(1, 4);
				if(randomSizeVar == 4){
					randomSizeVar = percentChance(30);
					this.isCity = true;
					if(randomSizeVar == true){
						this.townSize = "Large City";
						nBigCities++;}
					else{
						this.townSize = "City";
						nCities++;}}
				else{
					if(randomSizeVar == 1){
						this.townSize = "Small Village";
						nSmallTowns++;}
					if(randomSizeVar == 2){
						this.townSize = "Village";
						nVillages++;}
					if(randomSizeVar == 3){
						this.townSize = "Town";
						nNormalTowns++;
					}
				}
			}
		}
		
		this.giveName = function(){
			var nameIsOK = false;
			while(!nameIsOK){
				nameIsOK = true;
				if(this.townSize == "Large City" || this.townSize == "City"){
					this.name = namegen.cityName();}
				else{
					this.name = namegen.townName();}
				if(stringContains(this.name, "east") && (westeast == "west" || westeast == "center")){
					alert("   > NOT OK BOI");
					nameIsOK = false;}
				if(stringContains(this.name, "west") && (westeast == "east" || westeast == "center")){
					alert("   > NOT OK BOI");
					nameIsOK = false;}
				if(stringContains(this.name, "south") && (northsouth == "north" || northsouth == "center")){
					alert("   > NOT OK BOI");
					nameIsOK = false;}
				if(stringContains(this.name, "north") && (northsouth == "south" || northsouth == "center")){
					alert("   > NOT OK BOI");
					nameIsOK = false;}
			}
		}
		
		this.createSpecialty = function(){
			this.specialty = gen.townSpecialty(this.townSize);
		}
		
		this.giveTypes = function(){
			if(this.collidesWithForest()){
				this.type += "forest";}
			if(this.collidesWithMountain()){
				this.type += "mountain";}
			if(this.collidesWithSnow()){
				this.type += "snow";}
		}
		
		this.generateLocation = function(){
			this.northsouth = "";
			this.westeast = "";
			console.log("  > Island? " + this.hasType("island"));
			if(this.hasType("island")){
				this.location += "on an island ";}
			if(this.x < screenWidth/3){
				westeast = "west";}
			else if(this.x > 2 * screenWidth/3){
				westeast = "east";}
			else{
				westeast = "center";}
			if(this.y < screenHeight/3){
				northsouth = "north";}
			if(this.y > 2 * screenHeight/3){
				northsouth = "south";}
			else{
				northsouth = "center";}
			if(northsouth != westeast){
				this.location += northsouth + "-" + westeast;}
			else{
				this.location += "in the center";}
			this.location += " on the map";
			if(this.hasType("snow")){
				this.location += ", covered with snow";}
			if(this.hasType("forest")){
				this.location += " inside a forest";}
			if(this.hasType("mountain")){
				this.location += " on top of a mountain";}
		}

		this.generateDescription = function(){
			this.description += this.name + " is a " + this.townSize + " located in the ";
			this.description += this.location;
			this.description += ".<br>";
			this.description += this.specialty + "<br><br>";
			this.description += this.name + " has:<br>";
			
			if(!this.isCity){
				this.	hasPawnShop			= percentChance(12);
				this.	hasHerbShop			= percentChance(23);
				this.	hasFruitShop		= percentChance(70);
				this.	hasMeatShop			= percentChance(89);
				this.	hasPotteryShop		= percentChance(23);
				this.	hasUndertaker		= percentChance(19);
				this.	hasLibrary			= percentChance(9);
				this.	hasMoneyLender		= percentChance(8);
				this.	hasBlacksmith		= percentChance(72);
				this.	hasCarpenter		= percentChance(46);
				this.	hasJeweler			= percentChance(15);
				this.	hasBaker			= percentChance(42);
				this.	hasGeneralGoods		= percentChance(84);
				this.	hasTailor			= percentChance(49);
				this.	hasLeatherworker	= percentChance(39);
				this.	hasAlchemist		= percentChance(5);
				this.	hasAntiquities		= percentChance(3);
				this.	hasTemple			= percentChance(78);
				this.	hasBarracks			= percentChance(31);
				this.	hasFort				= percentChance(12);
				this.	hasGuardTower		= percentChance(19);
				this.	hasMagicShop		= percentChance(18);
				this.	hasSpecialShop		= percentChance(11);}
			else{
				this.	hasPawnShop			= percentChance(24);
				this.	hasHerbShop			= percentChance(33);
				this.	hasFruitShop		= percentChance(94);
				this.	hasMeatShop			= percentChance(92);
				this.	hasPotteryShop		= percentChance(31);
				this.	hasUndertaker		= percentChance(26);
				this.	hasLibrary			= percentChance(29);
				this.	hasMoneyLender		= percentChance(12);
				this.	hasBlacksmith		= percentChance(94);
				this.	hasCarpenter		= percentChance(56);
				this.	hasJeweler			= percentChance(21);
				this.	hasBaker			= percentChance(69);
				this.	hasGeneralGoods		= percentChance(97);
				this.	hasTailor			= percentChance(64);
				this.	hasLeatherworker	= percentChance(53);
				this.	hasAlchemist		= percentChance(11);
				this.	hasAntiquities		= percentChance(9);
				this.	hasTemple			= percentChance(92);
				this.	hasBarracks			= percentChance(78);
				this.	hasFort				= percentChance(34);
				this.	hasGuardTower		= percentChance(56);
				this.	hasMagicShop		= percentChance(27);
				this.	hasSpecialShop		= percentChance(19);				
				}
			
			if(this.hasPawnShop){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Pawn Shop(s)<br>";}
			if(this.hasHerbShop){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Herb Shop(s)<br>";}
			if(this.hasFruitShop){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Fruits and Vegetable Market(s)<br>";}
			if(this.hasMeatShop){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Butcher(s)<br>";}
			if(this.hasPotteryShop){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Pottery Shop(s)<br>";}
			if(this.hasUndertaker){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Undertaker(s)<br>";}
			if(this.hasLibrary){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Library(Libraries)<br>";}
			if(this.hasMoneyLender){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Money Lender or Bank(s)<br>";}
			if(this.hasBlacksmith){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Blacksmith(s)<br>";}
			if(this.hasCarpenter){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Carpenter(s)<br>";}
			if(this.hasJeweler){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Jeweler(s)<br>";}
			if(this.hasBaker){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Baker(s)<br>";}
			if(this.hasGeneralGoods){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " General Goods Store(s)<br>";}
			if(this.hasTailor){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Tailor(s)<br>";}
			if(this.hasLeatherworker){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Leatherworker(s)<br>";}
			if(this.hasAlchemist){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Alchemist's Shop(s)<br>";}
			if(this.hasAntiquities){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Antiquarian(s)<br>";}
			if(this.hasTemple){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Temple(s)<br>";}
			if(this.hasBarracks){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Barrack(s)<br>";}
			if(this.hasFort){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Fort(s)<br>";}
			if(this.hasGuardTower){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Guard Tower(s)<br>";}
			if(this.hasMagicShop){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Magic Shop(s)<br>";}
			if(this.hasSpecialShop){
				var nCurrentShops = 1;
				if(this.isCity){
				nCurrentShops = randomInt(1, 3);}
				this.description += "\t - " + nCurrentShops + " Special Shop(s)<br>";}
			this.description += "<br>";
			this.description += this.tavernName + "<br>" + this.tavernDescription;
		}
	}

		
		
	
	function Marker(x, y){
		this.image = createImage("images/Marker.png");
		setImageXY(this.image, x, y);
	}
	
	function MarkerBlue(x, y){
		this.image = createImage("images/MarkerBlue.png");
		setImageXY(this.image, x, y);
	}
	
	function MarkerGreen(x, y){
		this.image = createImage("images/MarkerGreen.png");
		setImageXY(this.image, x, y);
	}	

	/* Actual functions below */

	var paragraphOne = createElement("p");

	function initMap(){
		map = getElement("MAP");
		map.style.width = screenWidth + "px";
		map.style.height = screenHeight + "px";
		}
	function initParagraph(){
		paragraphOne.innerHTML = "Current working size: " + screenWidth + " x " + screenHeight;
		getElement("BODY").appendChild(paragraphOne);
	}
	function generateBackground(){
		var bg = createElement("div");
		bg.style.width = screenWidth + "px";
		bg.style.height = screenHeight + "px";
		bg.style.backgroundColor = "#6C9F6C";
		bg.style.position = "absolute";
		getElement("MAP").appendChild(bg);
	}
	
	
	
	
	



	waterPatches = new Array(); /* contains all water patches ever */
	forestPatches = new Array();
	mountainPatches = new Array();
	snowPatches = new Array();
	towns = new Array();
	/* spawns recursively. The larger maxChance, the more it spawns */
	function generateBigWaterPatch(parentWaterX, parentWaterY, maxChance, seaSpawnLocation){ /* origin = SEA_BOTTOM, etc */
		var isNotPlaceable = true;
		var childX;
		var childY;
		var childXCenter;
		var childYCenter;
		var parentXCenter = parentWaterX + 75;
		var parentYCenter = parentWaterY + 75;
		while(isNotPlaceable){
			isNotPlaceable = false;
			var randomAngle = randomInt(0, 360);
			var distanceToChild = 75;
			//childXCenter = parentWaterX + floor(distanceToChild * Math.cos(randomAngle));
			//childYCenter = parentWaterY + floor(distanceToChild * Math.sin(randomAngle));
			//childX = childXCenter - 75;
			//childY = childYCenter - 75;
			childX = parentWaterX + randomIntControlled(-100, 100);	/* distance from parent */
			childY = parentWaterY + randomIntControlled(-100, 100);
			if(childX < -100 || childX > screenWidth){
				isNotPlaceable = true;}
			if(childY < -100 || childY > screenHeight){
				isNotPlaceable = true;}
		}
		var childWaterPatch = new WaterPatch(WS_BIG);
		childWaterPatch.setXY(childX, childY);
		waterPatches.push(childWaterPatch);
		var newMaxChance = maxChance - 1;
		var spawnedWaterPatches = maxChance;
		nGeneratedWaterPatches++;
		if(spawnedWaterPatches > 1){
			generateBigWaterPatch(childX, childY, newMaxChance, seaSpawnLocation);}
		if(spawnedWaterPatches > 3){
			generateBigWaterPatch(childX, childY, newMaxChance, seaSpawnLocation);
		}
	}
	function generateSea(){
		var nSeas = SEASAMOUNT;
		if(nSeas < 0){
			return;}	
		while(nSeas > 0){
			var seaSpawnLocation = randomInt(1, 8);
			var spawnX = 0;
			var spawnY = 0;
			var baseSpawnX = 0;
			var baseSpawnY = 0;
			var baseWaterPatch = "NULLWATERPATCH";
			if(seaSpawnLocation == SEA_TOP){
				sea_top = true;
				spawnX = randomInt(screenWidth/4, 3 * (screenWidth/4));
				spawnY = -30;}
			if(seaSpawnLocation == SEA_BOTTOM){
				sea_bottom = true;
				spawnX = randomInt(screenWidth/4, 3 * (screenWidth/4));
				spawnY = screenHeight;}
			if(seaSpawnLocation == SEA_LEFT){
				sea_left = true;
				spawnX = -30;
				spawnY = randomInt(screenHeight/4, 3 * (screenHeight/4));}
			if(seaSpawnLocation == SEA_RIGHT){
				sea_right = true;
				spawnX = screenWidth;
				spawnY = randomInt(screenHeight/4, 3 * (screenHeight/4));}
			if(seaSpawnLocation == SEA_TOPLEFT){
				sea_topleft = true;
				spawnX = randomInt(-30, screenWidth/4);
				spawnY = randomInt(-30, screenHeight/4);}
			if(seaSpawnLocation == SEA_TOPRIGHT){
				sea_topright = true;
				spawnX = randomInt(3 * (screenWidth/4), screenWidth);
				spawnY = randomInt(-30, screenHeight/4);}
			if(seaSpawnLocation == SEA_BOTTOMLEFT){
				sea_bottomleft = true;
				spawnX = randomInt(-30, screenWidth/4);
				spawnY = randomInt(3 * (screenHeight/4), screenHeight);}
			if(seaSpawnLocation == SEA_BOTTOMRIGHT){
				sea_bottomright = true;
				spawnX = randomInt(3 * (screenWidth/4), screenWidth);
				spawnY = randomInt(3 * (screenHeight/4), screenHeight);}
			baseWaterPatch = new WaterPatch(WS_BASE);
			baseSpawnX = spawnX - baseWaterPatch.width/2;
			baseSpawnY = spawnY - baseWaterPatch.width/2;
			baseWaterPatch.setXY(baseSpawnX, baseSpawnY);
			waterPatches.push(baseWaterPatch);
			generateBigWaterPatch(spawnX, spawnY, SEASSIZE, seaSpawnLocation);
			nSeas--;
		}
		console.log("Successfully generated " + SEASAMOUNT + " Seas!");
		console.log("top\tbottom\tleft\tright\ttopleft\ttopright\tbottomleft\tbottomright");
		console.log(sea_top+"\t"+sea_bottom+"\t"+sea_left+"\t"+sea_right+"\t"+sea_topleft+"\t"+sea_topright+"\t\t"+sea_bottomleft+"\t\t"+sea_bottomright);
	}
	function generateSnowPatch(parentX, parentY, maxChance){ /* origin = SEA_BOTTOM, etc */
		var isPlaceable = false;
		var childX;
		var childY;
		var childSnowPatch = new SnowPatch();
		var nTries = 0;
		while(!isPlaceable && nTries < 60){
			nTries++;
			isPlaceable = true;
			childX = parentX + randomIntControlled(-60, 60);	/* distance from parent */
			childY = parentY + randomIntControlled(-60, 60);
			childSnowPatch.setXY(childX, childY);
			if(childX < -35 || childX > screenWidth){
				console.log("   > out of bounds");
				isPlaceable = false;}
			if(childY < -35 || childY > screenHeight){
				console.log("   > out of bounds");
				isPlaceable = false;}
			for(i = 0; i<waterPatches.length; i++){
				if(detectCollision(childSnowPatch, waterPatches[i]) == true){
					console.log("  > DETECTED COLLISION WITH " + i);
					isPlaceable = false;
					break;}}
		}
		if(nTries > 58){
			getElement("MAP").removeChild(childSnowPatch.image);
			childSnowPatch = "destruct it";
			console.log("  > Reached impas at " + nTries + ". Returning...");
			return;
		}
		console.log("Generated snow patch after tries: " + nTries);
		childSnowPatch.setXY(childX, childY);
		snowPatches.push(childSnowPatch);
		var newMaxChance = maxChance - 1;
		var spawnedSnowPatches = maxChance;
		if(spawnedSnowPatches > 1){
			generateSnowPatch(childX, childY, newMaxChance);}
		if(spawnedSnowPatches > 3){
			generateSnowPatch(childX, childY, newMaxChance);
		}
	}
	function generateSnowZones(){
		var nZones = SNOWAMOUNT;
		if(nZones < 0){
			return;}	
		while(nZones > 0){
			var zoneSpawnLocation;
			var isPlaceable = false;
			while(!isPlaceable){
				isPlaceable = true;
				zoneSpawnLocation = randomInt(1, 8);
				switch(zoneSpawnLocation){
					case SEA_TOP:
						if(sea_top == true){
						isPlaceable = false;}
						break;
					case SEA_BOTTOM:
						if(sea_bottom == true){
						isPlaceable = false;}
						break;
					case SEA_LEFT:
						if(sea_left == true){
						isPlaceable = false;}
						break;
					case SEA_RIGHT:
						if(sea_right == true){
						isPlaceable = false;}
						break;
					case SEA_TOPLEFT:
						if(sea_topleft == true){
						isPlaceable = false;}
						break;
					case SEA_BOTTOMLEFT:
						if(sea_bottomleft == true){
						isPlaceable = false;}
						break;
					case SEA_BOTTOMRIGHT:
						if(sea_bottomright == true){
						isPlaceable = false;}
						break;
					case SEA_TOPRIGHT:
						if(sea_topright == true){
						isPlaceable = false;}
						break;
				}
			}
			var spawnX = 0;
			var spawnY = 0;
			var baseSpawnX = 0;
			var baseSpawnY = 0;
			var baseSnowPatch = new SnowPatch();
			
			isPlaceable = false;
			var nTries = 0;
			while(!isPlaceable && nTries < 30){
				nTries++;
				if(zoneSpawnLocation == SEA_TOP){
					spawnX = randomInt(screenWidth/4, 3 * (screenWidth/4));
					spawnY = -30;}
				if(zoneSpawnLocation == SEA_BOTTOM){
					spawnX = randomInt(screenWidth/4, 3 * (screenWidth/4));
					spawnY = screenHeight;}
				if(zoneSpawnLocation == SEA_LEFT){
					spawnX = -30;
					spawnY = randomInt(screenHeight/4, 3 * (screenHeight/4));}
				if(zoneSpawnLocation == SEA_RIGHT){
					spawnX = screenWidth;
					spawnY = randomInt(screenHeight/4, 3 * (screenHeight/4));}
				if(zoneSpawnLocation == SEA_TOPLEFT){
					spawnX = randomInt(-30, screenWidth/4);
					spawnY = randomInt(-30, screenHeight/4);}
				if(zoneSpawnLocation == SEA_TOPRIGHT){
					spawnX = randomInt(3 * (screenWidth/4), screenWidth);
					spawnY = randomInt(-30, screenHeight/4);}
				if(zoneSpawnLocation == SEA_BOTTOMLEFT){
					spawnX = randomInt(-30, screenWidth/4);
					spawnY = randomInt(3 * (screenHeight/4), screenHeight);}
				if(zoneSpawnLocation == SEA_BOTTOMRIGHT){
					spawnX = randomInt(3 * (screenWidth/4), screenWidth);
					spawnY = randomInt(3 * (screenHeight/4), screenHeight);}
				baseSpawnX = spawnX - baseSnowPatch.width/2;
				baseSpawnY = spawnY - baseSnowPatch.width/2;
				baseSnowPatch.setXY(baseSpawnX, baseSpawnY);
				isPlaceable = true;
				for(i = 0; i<waterPatches.length; i++){
					if(detectCollision(baseSnowPatch, waterPatches[i]) == true){
						isPlaceable = false;
						break;}}
			}
			if(nTries > 29){
				getElement("MAP").removeChild(baseSnowPatch.image);
				baseSnowPatch = "destruct this object";
				console.log("Unable to place starting snow patch");
			} else {
				var mrk = new Marker(baseSpawnX, baseSpawnY);
				snowPatches.push(baseSnowPatch);
				generateSnowPatch(baseSpawnX, baseSpawnY, SNOWSIZE, zoneSpawnLocation);			
			}
			nZones--;
		}
		console.log("Successfully generated Snow Zones!");
	}
	function generateForestPatch(parentX, parentY, maxSpawn){
		var isPlaceable = false;
		var childX = 0;
		var chilxY = 0;
		var childForestPatch = new ForestPatch();
		var nTries = 0;
		while(!isPlaceable && nTries < 30){
			var randomAngle = randomInt(0, 360);
			var distanceToChild = 45;
			childX = parentX + floor(distanceToChild * Math.cos(randomAngle));
			childY = parentY + floor(distanceToChild * Math.sin(randomAngle));
			childForestPatch.setXY(childX, childY);
			isPlaceable = true;
			for(i = 0; i<waterPatches.length; i++){
				if(detectCollision(childForestPatch, waterPatches[i]) == true){
					isPlaceable = false;
					break;}}
		}
		forestPatches.push(childForestPatch);
		var newMaxSpawn = maxSpawn - 1;
		if(newMaxSpawn < 1){
			return;}
		generateForestPatch(childX, childY, newMaxSpawn);
		if(newMaxSpawn > 3){
			generateForestPatch(childX, childY, newMaxSpawn);
		}
	}
	
	function generateForests(){
		var nForests = FORESTSNUMBER;
		
		while(nForests > 0){
			nForests--;
			var isPlaceable = false;
			var childX = 0;
			var chilxY = 0;
			var childForestPatch = new ForestPatch();
			while(!isPlaceable){
				childX = randomInt(-40, screenWidth);
				childY = randomInt(-40, screenHeight);
				childForestPatch.setXY(childX, childY);
				isPlaceable = true;
				for(i = 0; i<waterPatches.length; i++){
					if(detectCollision(childForestPatch, waterPatches[i]) == true){
						isPlaceable = false;
						break;}}
			}
			var currentMaxSpawn = FORESTSSIZE;
			generateForestPatch(childX, childY, currentMaxSpawn);
		}
	}
	
	function generateMountainPatch(parentX, parentY, maxSpawn){
		var isPlaceable = false;
		var childX = 0;
		var chilxY = 0;
		var childMountainPatch = new MountainPatch();
		var nTries = 0;
		while(!isPlaceable && nTries < 30){
			nTries++;
			//var randomAngle = randomInt(-90, 90);	/* makes it chain better */
			//var distanceToChild = 55;
			//childX = parentX + floor(distanceToChild * Math.cos(randomAngle));
			//childY = parentY + floor(distanceToChild * Math.sin(randomAngle));
			childX = parentX + randomInt(25, 70);
			childY = parentY + randomInt(-70, 70);
			childMountainPatch.setXY(childX, childY);
			isPlaceable = true;
			for(i = 0; i<waterPatches.length; i++){
				if(detectCollision(childMountainPatch, waterPatches[i]) == true){
					isPlaceable = false;
					break;}}
		}
		if(nTries > 29){
			getElement("MAP").removeChild(childMountainPatch.image);
			childMountainPatch = "NULL";
			return;
		}
		mountainPatches.push(childMountainPatch);
		var newMaxSpawn = maxSpawn - 1;
		if(newMaxSpawn < 1){
			return;}
		generateMountainPatch(childX, childY, newMaxSpawn);
		if(newMaxSpawn > 3){
			generateMountainPatch(childX, childY, newMaxSpawn);
		}
	}

	function generateMountains(){
		var nMountains = MOUNTAINSNUMBER;
		
		while(nMountains > 0){
			nMountains--;
			var isPlaceable = false;
			var childX = 0;
			var chilxY = 0;
			var childMountainPatch = new MountainPatch();
			var nTries = 0;
			while(!isPlaceable){
				nTries++;
				childX = randomInt(-40, screenWidth);
				childY = randomInt(-40, screenHeight);
				childMountainPatch.setXY(childX, childY);
				isPlaceable = true;
				for(i = 0; i<waterPatches.length; i++){
					if(detectCollision(childMountainPatch, waterPatches[i]) == true){
						isPlaceable = false;
						break;}}
			}
			var currentMaxSpawn = MOUNTAINSSIZE;
			generateMountainPatch(childX, childY, currentMaxSpawn);
			console.log("Placed first mountain after " + nTries + " tries");
		}
	}


	function initYellowBorder(){
		yellowSelectedBorder = createImage("images/TownSelected.png");
		yellowSelectedBorder.style.zIndex = "100";
		setImageXY(yellowSelectedBorder, screenWidth, screenHeight);
	}
	function generateTowns(){
		for(i = 1; i<=TOWNSNUMBER; i++){
			print("  ...generating");
			var newTown = new Town(0, 0);
			var isPlaceable = false;
			var nTries = 0;
			while(!isPlaceable && nTries < 30){
				nTries++;
				isPlaceable = true;
				var childX = randomInt(1, screenWidth - 35);
				var childY = randomInt(1, screenHeight - 35);
				newTown.setXY(childX, childY);
				if(newTown.collidesWithTowns()){
					isPlaceable = false;}
				else if(newTown.collidesWithWater()){
					var doesItCollideWithWater = percentChance(10); // Gives it 10% chance to be an island
					if(doesItCollideWithWater == true){
						print("   WATER: Placed on water");
						newTown.type += "island";
						removeElement(newTown.image);
						var newGrassPatch = new GrassPatch(0, 0);
						newGrassPatch.setXY(childX - newTown.width/2 - 10, childY - newTown.height/2 -10);
						addElement(newTown.image);}
					else{
						isPlaceable = false;}}}
			if(nTries >= 30){
				print("   T: Unable to place town");
				removeElement(newTown.image);
				newTown = "destruct";}
			else{
				towns.push(newTown);
				print("Generated town!");
				newTown.giveTypes();
				newTown.giveRandomSize();
				newTown.generateTavern();
				newTown.generateLocation();
				newTown.giveName();
				newTown.createSpecialty();
				newTown.generateDescription();}
		}
		
	}

	/* init */
	function initProgram(){
		initMap();
		generateBackground();
		generateSea();
		generateSnowZones();
		generateForests();
		generateMountains();
		generateTowns();
		initYellowBorder();
		initParagraph();
		console.log("nGeneratedWaterPatches: " + nGeneratedWaterPatches);
		console.log("waterPatches.length: " + waterPatches.length);
		
		console.log("Finished generating world.");
		}
	
	window.onload = initProgram;
	
	
	
		
	
	
/*
TO DO:
	(done?) fix why on smaller maps, seas sometimes spawn not on the side (upper right)
	(done) make base water patches bigger and round to look better
	(fixed for forest?) see why mountains and forests sometimes spawn on water near shores
		o Check max array size, maybe it exceeds
		
	
	Day 4:
		Added town location descriptions
		Added town shops
		
	To do:
		change shop frequency even more to match the town size

	Algorithm:
: Notice player that the map is 1 month/1 month-ish travel time
o Generate a green background
o Generate water (uninhabited)
	- Generate 0 or 1 (or rarely 2) large patches of water
		- Also, see if it starts from a side
	- These "patches of water" (blue)
		- These tree from eachother with a chance not to span
		- It also stop spanning from a point on
o Generate cities with pseudorandom positions
	- if too close to eachother, try other pos
		- this range depends on the screenWidth and screenHeight
	- if it is on water, give it like 1/5 chance to stay there
		if this happens, mark it as an Island city to generate 
	- make sure you only repeat like 30 times so it doesnt get stuck
	- all (almost) cities have a NULL terrain type (isl
o For each city, parse and generate its quest locations or some shit








*/
