new class Item{
	constructor(name) {
		this.name = name;
		this.resourceCost = {};
		this.timeCost = 0;
		this.properties = {};
		this.etc = [];
	}

}

let leatherArmor = new Item(
	"Leather Armor",
	{"leather": 15},
	15,
	{"armor points": 5}
)

let plateArmor = new Item(
	"Plate Armor",
	{"metal": 85},
	125,
	{"armor points": 50}
)
