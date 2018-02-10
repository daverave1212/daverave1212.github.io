
	
	var talents = new Array();
	var idCounter = 0;
	var selectedTalent = -1;
	
	
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
	
		talents.push(this);
		
		this.image.addEventListener("click", function(){
			selectedTalent = this.getAttribute("id");
			selectedTalent = parseInt(selectedTalent);
			getElement("TALENTNAME").innerHTML = talents[selectedTalent].name;
			getElement("TALENTCOST").innerHTML = talents[selectedTalent].cost;
			getElement("TALENTDESC").innerHTML = talents[selectedTalent].desc;
			var t = talents[selectedTalent];
			getElement("DESCDIV").style.top = (t.y - 230) + "px";
			getElement("DESCDIV").style.left = (t.x + 50) + "px";
			getElement("DESCDIV").style.display = "block";
		});
	}
	
	window.onload = function(){
		var ahref = document.createElement("a");
		ahref.setAttribute("href", "http://www.google.com");
		
		var backButton = document.createElement("img");
		backButton.setAttribute("src", "back.png");
		
		ahref.appendChild(backButton);
		document.getElementById("BODY").appendChild(ahref);
		
	}