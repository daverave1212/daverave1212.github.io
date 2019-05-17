
	var QueuedSpells = [];
	var userDidAnything = false;
	
	function queueSpell(){
		var spellName = get("Input").value;
		if(SpellNames.indexOf(spellName) > -1){
			QueuedSpells.push(spellName);
			var option = createElement("option");
			option.innerHTML = spellName;
			get("AddedSpells").appendChild(option);
			get("Input").value = "";
			userDidAnything = true;
			get("AddSpell").setAttribute("class", "Button");}
		else{
			flashAddButton();
		}
	}
	
	function flashAddButton(){
		var b = get("AddSpell");
		b.setAttribute("class", "Flashed1");
		setTimeout(function(){
			b.setAttribute("class", "Flashed2");
		}, 250);
	}
	
	function resetSpells(){
		removeAllChildren(get("AddedSpells"));
		if(userDidAnything){
			location.reload();
		}
	}
	
	function removeSpell(){
		get("AddedSpells").removeChild(getSelectedOption("AddedSpells"));
	}
	
	function generate(){
		console.log(QueuedSpells.length);
		for(var i = 0; i<QueuedSpells.length; i++){
			let spellName = QueuedSpells[i];
			CanvasManager.addSpell(Spells[spellName]);
		}
		QueuedSpells = [];
		removeAllChildren(get("AddedSpells"));
	}
	
	function gotoLink(l){
		window.location = l;
	}
	
	function downloadAllCanvases(){
		var zip = new JSZip();
		for(var i = 0; i<CanvasManager.canvases.length; i++){
			let data = CanvasManager.canvases[i].canvas.toDataURL("image/png; base64");
			data = data.replace(/^data:image\/(png|jpg);base64,/, "");
			zip.file("Page" + i + ".png", data, {base64: true});}
		zip.generateAsync({type:"blob"})
		.then(function(content) {
			// see FileSaver.js
			saveAs(content, "example.zip");
		});
	}
	
	function downloadPng(){
		var data = get("Canvas0").toDataURL("image/png; base64");
		data = data.replace(/^data:image\/(png|jpg);base64,/, "");
		var zip = new JSZip();
		zip.file("Hello.txt", "Hello World\n");
		zip.file("Panda.png", data, {base64: true});
		zip.generateAsync({type:"blob"})
		.then(function(content) {
			// see FileSaver.js
			saveAs(content, "example.zip");
		});
		return;
	}

	function download() {
		// ReImg.fromCanvas(get("Canvas0")).downloadPng("Spell Sheet");
		downloadAllCanvases();
		//downloadPng();
	}
	
	
	forEachKey(SpellDatabase, (key)=>{
		if(SpellDatabase[key] != null)
			addSpell(SpellDatabase[key])
	})
	window.onload = function(){
		get("Input").value = "";
		resetSpells();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
