const { fibNums } = require('./fibonaci')


class UnitTemplate {
	constructor(startingPoints = 10) {
		this.maxPoints = startingPoints
		this.currentPoints = startingPoints
		// Level of the template determines maxPoints
		this.level = 1
		// Experiece earned from gameplay causes levelups
		this.experience = 0

		// Main stats = attack, body, magic
		// Sub stats = attack type, body type, magic type
		// and sub-amounts
		// Players will raise the 3 main stats to allow more points to go into the specific ones
		// Players can raise substats for more fine tuned balancing	
		this.attack = 0 // soft attack
		this.armorPierce = 0 // hard attack
		this.meleeAttack = this.attack
		this.rangedAttack = this.attack
		this.defense = 0 // soft defense
		this.dodge = 0 // hard defense
		this.body = 0
		this.hitpoints = this.body * 5
		this.magicalCapability = 0
		this.resourceName = "None"
		this.resourceAmount = 0 + (this.magicalCapability * (1 - 5))
		this.magicalResist = 0

		this.addExperience(10)
	}

	addExperience(amount) {
		if (amount) this.experience += amount										// only adding amount once. recurse for level up messages
		if (this.experience >= (fibNums[this.level + 1] * 10)) { 					// checking the index 1 level higher
			this.level++
			console.log(`${this.constructor.name} has leveled up to ${this.level}.`)
			console.log(`Next level will be ${fibNums[this.level + 1] * 10} exp.`) 	// update player of next level threshold
			this.addExperience() 													// if more exp gained then 1 level accounts for
		} else if (!amount) return 													// base-case for recursion
	}

}

let testunit = new UnitTemplate()
testunit.addExperience(20)
console.log(testunit)
