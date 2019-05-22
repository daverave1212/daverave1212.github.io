
	
class Tile{
	constructor(x, y, board){
		this.board = board
		this.x = x
		this.y = y
		this.type = 'grass'
		this.structure = null
		this.owner = null
	}
	
	buildStructure(str, player){
		this.structure = str
		this.owner = player
	}
	
}
	

