StructureTypes = {
	'House' : {					// Collects the resources on the tile aswell
		name : 'House',
		cost : {
			wood : 2,
			stone : 2,
		},
		res : {
			gold : 3,
			food : 3,
			points : 2
		}
	},
	'Tower' : {
		name : 'Tower',
		cost : {
			stone : 2,
			food : 2
		},
		res : {
			gold : 6,
			points : 2
		}
	},
	'Town Hall' : {
		name : 'Town Hall',
		cost : {},
		res : {}
	},
	'Windmill' : {
		name : 'Windmill',
		cost : {
			gold : 3,
			wood : 3
		},
		res : {
			food : 4,
			stone : 4,
			points : 3
		}
	},
	'Temple' : {
		name : 'Temple',
		cost : {
			stone : 3,
			wood : 3,
			gold : 3,
			food : 3
		},
		res : {
			points : 8
		}
	},
	'Workcamp' : {
		name : 'Workcamp',
		cost : {
			gold : 3,
			food : 3
		},
		res : {
			wood : 5,
			stone : 3,
			points : 3
		}
	},
	'Shack' : {
		name : 'Shack',
		cost : {},
		res : {
			wood : 1,
			food : 1,
			stone : 1,
			gold : 1
		}
	}

}

console.log(StructureTypes)