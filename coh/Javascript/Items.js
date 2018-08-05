
	function createItemTable(itemsArray){
		var table = createElementWithClass("table", "ItemTable");
		for(var i = 0; i<itemsArray.length; i++){
			var row = createElement("tr");
			setClass(row, "ItemTableRow");
			var rowContent = createElement("tc");
			rowContent.innerHTML = itemsArray[i];
			row.appendChild(rowContent);
			table.appendChild(row);}
		return table;
	}