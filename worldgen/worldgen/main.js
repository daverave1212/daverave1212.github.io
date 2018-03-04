	/* init */
	
	function generateGuilds(){
		thievesGuild = new ThievesGuild();
		cult		 = new Cult();
		goodGuild	 = new GoodGuild();
	}
	
	function initYellowBorder(){
		yellowSelectedBorder = createImage("images/TownSelected.png");
		yellowSelectedBorder.style.zIndex = "100";
		setImageXY(yellowSelectedBorder, screenWidth, screenHeight);
	}
	
	function autoSetConstants(){	
		screenWidth		= parseInt(getElement("I_WIDTH").value);
		screenHeight	= parseInt(getElement("I_HEIGHT").value);
	
		SEASSIZE = floor((floor(screenHeight/10) * floor(screenWidth/10)) * 0.0005);
		FORESTSSIZE = SEASSIZE;
		SNOWSIZE = SEASSIZE;
		MOUNTAINSSIZE = SEASSIZE;
		
		TOWNSNUMBER = parseInt(getElement("I_NTOWNS").value);
		SEASAMOUNT = parseInt(getElement("I_NSEAS").value);
		MOUNTAINSNUMBER = parseInt(getElement("I_NMOUNTAINS").value);
		FORESTSNUMBER = parseInt(getElement("I_NFORESTS").value);
		SNOWAMOUNT = parseInt(getElement("I_NSNOW").value);
		ISLANDCHANCE = 10 + parseInt(getElement("I_FREQUENCYTOWNSONISLANDS").value);
		
		SEASSIZE += parseInt(getElement("I_SSEAS").value);
		if(SEASSIZE < 0) SEASSIZE = 0;
		SNOWSIZE += parseInt(getElement("I_SSNOW").value);
		if(SNOWSIZE < 0) SNOWSIZE = 0;
		FORESTSSIZE += parseInt(getElement("I_SFORESTS").value);
		if(FORESTSSIZE < 0) FORESTSSIZE = 0;
		MOUNTAINSSIZE += parseInt(getElement("I_SMOUNTAINS").value);
		if(MOUNTAINSSIZE < 0) MOUNTAINSSIZE = 0;
		
		if(getElement("C_GENERATEFORESTS").checked == false){
			FORESTSNUMBER = 0;}
		if(getElement("C_GENERATEMOUNTAINS").checked == false){
			MOUNTAINSNUMBER = 0;}
		if(getElement("C_GENERATESNOW").checked == false){
			SNOWAMOUNT = 0;}
	}

	function initOrGenerateSeed(){
		var s = getElement("INPUTSEED").value;
		if(s.length == 0){
			var newSeed = trueRandomInt(100000, 999999);
			initSeed(newSeed);
			getElement("INPUTSEED").value = "" + newSeed;}
		else{
			initSeed(parseInt(getElement("INPUTSEED").value));
		}
	}
	
	function initButton(){
		getElement("BUTTONCREATEWORLD").addEventListener("click", function(){
			initOrGenerateSeed();
			var currentSeed = getElement("INPUTSEED").value;
			WORLDSEED = parseInt(currentSeed);
			autoSetConstants();
			generateWorld();
			});
		getElement("BUTTONRESETWORLD").addEventListener("click", reset);
	}
	
	function initInputs(){
		getElement("I_WIDTH").value = "1280";
		getElement("I_HEIGHT").value = "720";
	}

	
	function generateWorld(){
		getElement("MAP").style.display = "block";
		initMap();
		generateGuilds();
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
	
	function reset(){
		location.reload();}
	

	
	function initProgram(){
		initButton(); 	/* gives the Create World button click event listener */
		initInputs();


		//generateWorld();
	}
	
	window.onload = initProgram;
	
	
	
	
	
	
	
	/*
	waterPatches = new Array();
	forestPatches = new Array();
	mountainPatches = new Array();
	snowPatches = new Array();
	towns = new Array();
	
	var allImagesInMap = getElement("MAP").querySelectorAll("img");
	for(var imagesInMapIterator = 0; imagesInMapIterator < allImagesInMap.length; imagesInMapIterator++){
		getElement("MAP").removeChild(allImagesInMap[imagesInMapIterator]);
	}
	*/