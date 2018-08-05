

	
	var Scripts = {};
	
	// On Scripts.showHelpBox(), the box is automatically placed at
	// the location of the cursor (scroll is autocalculated).
	// For each individual page, use a onmouseover="handleHelp()"
	// <img class = "StatHelp HelpIcon" onmouseover = "handleHelp('strength')" onmouseout = "Scripts.hideHelpBox()" src = "Images/Interface/help.png">
	// Each page will handleHelp its own way
	Scripts.showHelpBox = function(isAbility){
		var x = roundUp(event.clientX, 40);
		var y = event.clientY + window.scrollY;
		get("HelpBox").style.display = "block";
		get("HelpBox").style.top = y + "px";
		get("HelpBox").style.left = x + "px";
		if(isAbility){
			print("Definitely an ability");
			get("HelpBox").style.color = "white";
			get("HelpBox").style.fontFamily = "Arial, Helvetica, sans-serif";
			get("HelpBox").style.maxWidth = "350px";
			}
		else{
			get("HelpBox").style.color = "gold";
			get("HelpBox").style.fontFamily = "'Times New Roman', Times, serif";
			}
		}
		
	Scripts.hideHelpBox = function(){
		get("HelpBox").style.display = "none";
	}
	
	Scripts.setHelpText = function(text){
		get("HelpBoxPar").innerHTML = text;
	}
	Scripts.initializeHelpBox = function(){
		var helpBoxNode = createElementWithID("div", "HelpBox");
		var helpBoxText = createElementWithID("p", "HelpBoxPar")
		helpBoxNode.appendChild(helpBoxText);
		get("Wrapper").appendChild(helpBoxNode);
	}
	
	// There is by default an OptionsWrapper > OptionsPane as the first child of WindowWrapper
	// <img id = "Settings" onclick = "Scripts.showSettings()" class = "SettingsButton" src = "Images/Interface/settings.png">
	var isSettingsShowing = false;
	Scripts.showSettings = function(){
		if(isSettingsShowing){
			get("SettingsWrapper").style.display = "none";
			isSettingsShowing = false;}
		else{
			get("SettingsWrapper").style.display = "block";
			isSettingsShowing = true;
		}
	}
	Scripts.hideSettings = function(){
		get("SettingsWrapper").style.display = "none";
	}
	
	Scripts.addMod = function(){
		var modLink = get("ImportMod").value;
		var script = createElement("script");
		script.setAttribute("src", modLink);
		script.setAttribute("type", "text/javascript");
		document.head.appendChild(script);
		
		}


	function main(){
		Scripts.initializeHelpBox();
	
	} window.onload = main;
	

	
	
	
	
	
	
	