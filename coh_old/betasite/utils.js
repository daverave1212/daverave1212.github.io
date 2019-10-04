	var print = console.log;
	var NULL = 0;
	var KEY_ENTER = 13;
	
	function roundDown25(nr){
		return (nr - nr%25);
	}
	
	function talentNameToImagePath(t){
		console.log(t);
		var lowerCaseT = t.toLowerCase();
		var returnedPath = "";
		for(var i = 0; i<t.length; i++){
			if(lowerCaseT[i] == " "){
				returnedPath += "_";}
			else if(lowerCaseT[i] == ":"){
				returnedPath = returnedPath.substring(0, i-1);
				console.log(returnedPath);
				return returnedPath;
			}
			else{
				returnedPath += lowerCaseT[i];
			}
		}
		return returnedPath;
	}
	
	function distanceBetween(t1, t2){
		return Math.sqrt((t1.x - t2.x) * (t1.x - t2.x) + (t1.y - t2.y) * (t1.y - t2.y));}
		
	function angleBetween(t1, t2){
		return Math.atan2(t2.y - t1.y, t2.x - t1.x) * 180 / Math.PI;}
		
	function min(a, b){
		if(a < b) return a;
		return b;}
	
	function SequenceNode(_Object){
		this.previous	= NULL;
		this.next		= NULL;
		this.data		= _Object;
	}
	
	function Sequence(){
		this.first	= NULL;
		this.last	= NULL;
		this.length = 0;
		
		this.pushBack = function(_Object){
			var s = new SequenceNode(_Object);
			if(this.length == 0){
				this.last = s;
				this.first = s;}
			else{
				this.last.next = s;
				s.previous = this.last;
				this.last = s;}
			this.length++;}
			
		this.pushFront = function(_Object){
			var s = new SequenceNode(_Object);
			if(this.length == 0){
				this.first = s;
				this.last = s;}
			else{
				s.next = this.first;
				this.first.previous = s;
				this.first = s;}
			this.length++;}
	}//endSequence
	
	function Match(){
		this.pieces = new Array();
		this.push = function(_Object){
			this.pieces.push(_Object);
		}
	}
	
	function addElement(dom_e){
		document.getElementById("MAP").appendChild(dom_e);
	}
	function removeElement(dom_e){
		document.getElementById("MAP").removeChild(dom_e);
	}
	function percentChance(chance){	/* Ex: percentChance(20) = 20% chance to return true; */
		var c = randomInt(1, 100);
		if(c <= chance) return true;
		return false;
	}
	function detectCollision(Object_a, Object_b){
		var aCenterX = Object_a.x + Object_a.width/2;
		var aCenterY = Object_a.y + Object_a.height/2;
		var bCenterX = Object_b.x + Object_b.width/2;
		var bCenterY = Object_b.y + Object_b.height/2;
		var distance = Math.sqrt( (bCenterX - aCenterX)*(bCenterX - aCenterX) + (bCenterY - aCenterY)*(bCenterY - aCenterY) );
		if(distance < Object_a.width/2 + Object_b.width/2){
			return true;}
		return false;
	}
	
	function getTextInputValueAsNumber(id){
		var theInput = document.getElementById(id);
		return parseInt(theInput.value);
	}
	
	function getSelectedOption(id){
		var theInput = document.getElementById(id);
		return theInput.options[theInput.selectedIndex].value;
	}
	
	var WORLDSEED = 0;
	
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	
	function initSeed(seed){
		WORLDSEED = seed % 2147483647;
		if(WORLDSEED <= 0)
			WORLDSEED += 2147483646;
	}

	function next(){
	  return WORLDSEED = WORLDSEED * 16807 % 2147483647;
	}

	function DEPRECATEDrandomInt(low, high){
		return next() % (high - low + 1) + low;
	}
	
	function randomInt(low, high){
		return Math.floor(Math.random() * (high - low + 1) + low);
	}
	
	function randomOf(...args){
		return args[randomInt(0, args.length - 1)];
	}
	
	/*
	function randomInt(l, h){
		//var r = randomFromSeed();
		//console.log(r);
		//return Math.floor(r * (h - l + 1) + l);
		return Math.floor(Math.random() * (h - l + 1) + l);
	}
	*/
	
	var floor = Math.floor;
	
	function get(theElement){
		return document.getElementById(theElement);
	}
	
	function normalizeConsole(theElement){
		theElement.style.width = "300px";
		theElement.style.height = "150px";
		theElement.style.position = "relative";
	}
	
	function add(theElement){
		document.getElementById("Window").appendChild(theElement);
	}
	
	function randomIntControlled(l, h){
		var a = randomInt(1, 2);
		if(a == 1){
			return randomInt(l, l/2);}
		else{
			return randomInt(h/2, h);}
	}
	
	function createElement(type){
		if(type == "scrollbox"){
			var scrollableDiv = createElement("div");
			scrollableDiv.style.width = "300px";
			scrollableDiv.style.height = "300px";
			scrollableDiv.style.overflowY = "scroll";
			return scrollableDiv;
		} else return document.createElement(type);
	}
	
	function getElement(id){
		return document.getElementById(id);
	}
	
	function getElements(className){
		return document.getElementsByClassName(className);
	}
	
	function removeAllChildren(node){
		while (node.firstChild) {
			console.log("Removing " + node.firstChild);
			node.removeChild(node.firstChild);}
	}
		
	function setClass(object, c){
		object.setAttribute("class", c);}
	
	function setID(object, id){
		object.setAttribute("id", id);}
		
	function addClass(object, c){
		object.setAttribute("class", object.getAttention("class") + " " + c);}
	
	function createImage(src){
		var img = createElement("img");
		img.setAttribute("src", src);
		return img;
	}

	function randomizeArray(array_a){
		var iRandomize;
		for(iRandomize = 0; iRandomize < array_a.length; iRandomize++){
			var randomizeArrayIndex = randomInt(0, array_a.length - 1);
			var auxRandomize = array_a[iRandomize];
			array_a[iRandomize] = array_a[randomizeArrayIndex];
			array_a[randomizeArrayIndex] = auxRandomize;
		}
	}


	function setImageXY(var_img_i, x, y){
		var_img_i.style.top = y + "px";
		var_img_i.style.left = x + "px";}
		
	function stringContains(string_a, substring_b){
		if(string_a.indexOf(substring_b) >= 0){
			return true;
		}
		return false;
	}



