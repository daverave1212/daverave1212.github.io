
	
	var talents = new Array();
	var idCounter = 0;
	var selectedTalent = -1;
	
	var currentimage;
	
	function applyColor(col){
		currentimage.style.border = "5px solid " + col;
	}
	
	function LinkTalent(x, y, imagename, link){
		this.image = createImage(imagename + ".png");
		this.image.addEventListener("click", function(){
			window.location.href = link;
		});
		this.image.setAttribute("class", "talentimage");
		setImageXY(this.image, x, y);
	}
	
	function Talent(x, y, imagename, name, cost, desc){
		this.x = x;
		this.y = y;
		this.image = createImage(imagename + ".png");
		this.image.setAttribute("class", "talentimage");
		setImageXY(this.image, x, y);
		this.id = idCounter; idCounter++;
		this.image.setAttribute("id", this.id + "");
		this.name = name;
		this.cost = "Cost: " + cost + " Talent Points";
		this.desc = desc;
		currentimage = this.image;
		
		switch(imagename){
			case "hand_sign": applyColor("red"); break;
			case "spark": applyColor("Turquoise"); break;
			case "battlecast": applyColor("orange"); break;
			case "deathfire_bolt": applyColor("purple"); break;
			case "survivor": applyColor("lawngreen"); break;
			case "exorcise": applyColor("yellow"); break;
			case "keen_senses": applyColor("cyan"); break;
			case "kick": applyColor("#4682B4"); break;
			case "throwing_master": applyColor("#4682B4"); break;
			case "dodge": applyColor("#4682B4"); break;
			case "fast_hands": applyColor("grey"); break;
			case "surge": applyColor("GreenYellow "); break;
			case "watcher_eye": applyColor("Green"); break;
			case "luck": applyColor("gold"); break;
		}
	
		talents.push(this);
		
		this.image.addEventListener("click", function(){
			if(this.getAttribute("id") == selectedTalent + ""){
				if(getElement("DESCDIV").style.display == "block"){
					getElement("DESCDIV").style.display = "none";
					return;
				}
			}
			selectedTalent = this.getAttribute("id");
			selectedTalent = parseInt(selectedTalent);
			getElement("TALENTNAME").innerHTML = talents[selectedTalent].name;
			getElement("TALENTCOST").innerHTML = talents[selectedTalent].cost;
			getElement("TALENTDESC").innerHTML = talents[selectedTalent].desc;
			var t = talents[selectedTalent];
			getElement("DESCDIV").style.top = (t.y - 230) + "px";
			getElement("DESCDIV").style.left = (t.x + 50) + "px";
			//getElement("DESCDIV").style.top = (t.y) + "px";
			//getElement("DESCDIV").style.left = (t.x + 60) + "px";
			getElement("DESCDIV").style.display = "block";
		});
	}
	
	
	window.onload = function(){
		var ahref = document.createElement("a");
		ahref.setAttribute("href", "index.html");
		
		var backButton = document.createElement("img");
		backButton.setAttribute("src", "back.png");
		
		ahref.appendChild(backButton);
		document.getElementById("BODY").appendChild(ahref);
		
	}