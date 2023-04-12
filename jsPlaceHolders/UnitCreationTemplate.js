const { fibNums } = require('./fibonaci')


class UnitTemplate {
	constructor(startingPoints = 10) {
		this.maxPoints = startingPoints
		this.currentPoints = startingPoints
		// Level of the template determines maxPoints
		this.level = 1
		// Experiece earned from gameplay causes levelups
		this.experience = 10

		// Main stats = attack, body, magic
			// Sub stats = attack type, body type, magic type

		// Players raise the 3 main stats for general roles
			// and raise substats for more fine tuned balancing
		this.damage = 'Will depend on weapon'	
		this.attack = 0 				// soft attack. Might rename as skill in attacking
		this.armorPierce = 0 			// hard attack. 
		this.defense = 0 				// soft defense. Might rename armor
		this.dodge = 0 					// hard defense. Might rename as skill in defense
		this.block = (.5 * this.defense) + (.5 * this.dodge)
		this.body = 0
		this.hitpoints = this.body * 5
		this.magicalCapability = 0
		this.resourceName = "None"
		this.resourceAmount = this.magicalCapability * 10
		this.magicalResist = 0
		
	}

	addExperience(amount) {
		if (amount) this.experience += amount										// only adding amount once. recurse for level up messages
		if (this.experience >= (fibNums[this.level + 1] * 10)) { 					// checking the index 1 level higher
			this.level++
			console.log(`${this.constructor.name} has leveled up to ${this.level}.`)
			console.log(`Next level will be ${fibNums[this.level + 1] * 10} exp.`) 	// update player of next level threshold
			this.addExperience() 													// if enough exp is gained for more then 1 level
		} else if (!amount) return 													// base-case for recursion
	}



}


let scout = {
	attack: "low",
	defense: "low",
	speed: "high",
	stealth: "high",
	skill: "high",
	trait: "can see some information about enemies in the area"
}

let soldier = {
	attack: "medium",
	defense: "medium",
}




/*
Notes:
soft attack and hard attack refer to the Hearts of Iron stats setup
*/
