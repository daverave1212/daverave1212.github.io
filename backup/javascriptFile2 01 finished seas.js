	/* Defs */
	W_SEA		= 1;
	W_LAKE		= 2;
	WS_BIG		= 1;
	WS_MEDIUM	= 2;
	SEA_TOP		= 1;
	SEA_BOTTOM	= 2;
	SEA_LEFT	= 3;
	SEA_RIGHT	= 4;
	
	var SEASAMOUNT = 2;
	var SEASSIZE = 9;
	
	nGeneratedWaterPatches = 0;
	
	var screenWidth	 = 1680;
	var screenHeight = 1050;
	
	/* System functions */

	function randomInt(l, h){
		return Math.floor(Math.random() * (h - l + 1) + l);
	}
	
	
	function createElement(type){
		return document.createElement(type);
	}
	
	function getElement(id){
		return document.getElementById(id);
	}
		
	
	
	function createImage(src){
		var img = createElement("img");
		img.setAttribute("src", src);
		return img;
	}




	function setImageXY(var_img_i, x, y){
		var_img_i.style.top = y + "px";
		var_img_i.style.left = x + "px";}



		/* classes */	
	function WaterPatch(size){ /* WS_BIG or WS_MEDIUM */
		if(size == WS_BIG){
			this.image = createImage("images/WaterPatchBig.png");}
		if(size == WS_MEDIUM){
			this.image = createImage("images/WaterPatch.png");
		}
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
		
		this.draw = function(){
			getElement("CANVAS").getContext("2d").drawImage(this.image, this.x, this.y);
		}
	}
	

	/* Actual functions below */

	
	var paragraphOne = createElement("p");
	

	function initMap(){
		map = getElement("MAP");
		map.style.width = screenWidth + "px";
		map.style.height = screenHeight + "px";
		}
	function initCanvas(){
		canvas = getElement("CANVAS");
		canvas.style.width = screenWidth + "px";
		canvas.style.height = screenHeight + "px";
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
		bg.style.top = "0px";
		getElement("MAP").appendChild(bg);
	}
	
	
	
	
	



	waterPatches = new Array();
	/* spawns recursively. The larger maxChance, the more it spawns */
	function generateBigWaterPatch(parentWaterX, parentWaterY, maxChance){
		var isNotPlaceable = true;
		var childX;
		var childY;
		while(isNotPlaceable){
			isNotPlaceable = false;
			childX = parentWaterX + randomInt(-69, 69);	/* distance from parent */
			childY = parentWaterY + randomInt(-69, 69);
			if(childX < -30 || childX > screenWidth){
				isNotPlaceable = true;}
			if(childY < -30 || childY > screenHeight){
				isNotPlaceable = true;}
		}
		var childWaterPatch = new WaterPatch(WS_BIG);
		childWaterPatch.setXY(childX, childY);
		childWaterPatch.draw();
		console.log("Created patch at: " + childX + ", " + childY);
		waterPatches.push(childWaterPatch);
		var newMaxChance = maxChance - 1;
		var spawnedWaterPatches = maxChance;
		nGeneratedWaterPatches++;
		if(spawnedWaterPatches > 1){
			generateBigWaterPatch(childX, childY, newMaxChance);}
		if(spawnedWaterPatches > 3){
			generateBigWaterPatch(childX, childY, newMaxChance);
		}
	}
	function generateSea(){
		var nSeas = randomInt(1, SEASAMOUNT);
		if(nSeas < 0){
			return;}	
		while(nSeas >= 0){
			var seaSpawnLocation = randomInt(1, 4);
			var spawnX = 0;
			var spawnY = 0;
			if(seaSpawnLocation == SEA_TOP){
				spawnX = randomInt(0, screenWidth);
				spawnY = -30;}
			if(seaSpawnLocation == SEA_BOTTOM){
				spawnX = randomInt(0, screenWidth);
				spawnY = screenHeight;}
			if(seaSpawnLocation == SEA_LEFT){
				spawnX = -30;
				spawnY = randomInt(0, screenHeight);}
			if(seaSpawnLocation == SEA_RIGHT){
				spawnX = screenWidth;
				spawnY = randomInt(0, screenHeight);}
			generateBigWaterPatch(spawnX, spawnY, SEASSIZE);
			nSeas--;
		}
	}

	/* init */
	function initProgram(){
		initMap();
		initCanvas();
		//generateBackground();
		//generateSea();
		generateBigWaterPatch(300, 300, 10);
		initParagraph();
		console.log(nGeneratedWaterPatches);
		}window.onload = initProgram;
	
	
	
		
	
	
/*
TO DO:
	fix why on smaller maps, seas sometimes spawn not on the side (upper right)

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
o Generate terrain:
	- so until now, we should have a map with water and grass and random cities around
	- Generate random mountains
		- mountains are generated similar to water:
			- choose 1 starting spot
			- span from there
				- for each span, check that it's not on water
			- fewer trees
		- forests
			- same as mountains, but for each span, check adjacent 

Small optimizations:
	- make seas tend to span towards inside and cover the sides too










*/