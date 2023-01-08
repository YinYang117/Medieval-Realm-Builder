class Building {
	constructor(name, resource, time, labor, techLevel, effects, ...etc) {
		this.name = "";
		this.resources = {};
		this.restrictions = {}; // needs lava, a river, highground, foundation, is an addition of previous building
		this.time = 0; // # of turns to complete.
		this.labor = []; // labor tech. basic: villager w/ hammer, larger tools: crane scaffolding post-drill, stonework: mason tools, magical: spells and rituals
		this.effects = {}; // What does this building do when finished
		this.description = "";
		this.etc = [etc];

		// this.techLevel = 0; // Idea being the Level of tech of your realm. like dark, feudal, castle, imperial, or a specific tech unlock that's required
	}
}

let basicHouse = new Building(
	"Basic House", 
	{wood: 15}, 
	{groundType: "dry"}, 
	30, 
	["basic"], 
	{workforce: "villager", amount: 4},
	"Creates and supports 4 villagers. Villager workforces can start labor tasks instantly: mining, chopping, building.",
	["All workforces can be trained as soldiers, turned into craftsmen and resource gatherers, etc."]
);

let troopBarrack = new Building(
	"Troop Barracks",
	{wood: 50, stone: 10},
	{groundType: "land"},
	140,
	["basic"],
	{workforce: "recruits", amount: 10},
	"Creates and supports 10 recruits. Recruits can be trained as soldiers faster then other workforces."
	["All workforces can be trained as soldiers, turned into craftsmen and resource gatherers, etc."]
)

let nobilityQuarters = new Building(
	"Nobility Quarters",
	{stone: 50, wood: 10},
	{groundType: "withinCastleArea"},
	150,
	["skilled", "stoneCrafters"],
	{workforce: "nobles", amount: 1},
	"Creates and supports 1 noble. Nobles are an elite workforce, or higher tier",
	[
		"This workforce will not directly build or gather.",
		"Nobles train into higher tier units or evolve into new leader / hero cards.",
		"As a Noble levels up / evolves, etc, they may require an entourage.",
		"An entourage is a minimun number of other 'things' they require to maintain. Such as personal troop Barracks, labor force, etc.",
		"Nobles can direct their entourages to build, gather, train into military, etc, on their behalf.",
		"Very high level nobles may require lower level nobles be built under them."
	]
)

/*
General Notes:
	Balance for labor and resource costs:
		Every point of wood takes 2 turns to build per workforce.
		Every point of stone takes 4 turns to build per workforce and may require tools and/or skill.
		Build time may only be sped up x4. Extra workforce cant fit into the build site. Not sure how AOE4 does it... but might copy their timings instead.
		Labor tech is a minimun. You might be able to speed up some build times more then x4 by having appropriate higher labor building techs/tools.
	Balance for workforce:
		Training a soldier for labor requires 4-8 turns. Starts as unskilled / level 1
		Training a laborer for soldiering requires 10 turns. Starts at level 1 / rookie
		Training for a higher level of labor or soldier requires more.
*/

/*
General level of scale and balancing:
	Each time something goes "up" a "level" the steps in time, resources, tech, etc to make it exist are all going to start with a theme of balancing and we'll see how it goes from there.
	Thinking this will be like factorio, Iron and copper plates -> gc -> rc -> bc.
		low			10
		mid-low		12-13
		mid			15
		mid-high	17-18
		high		20

		So 10 wood takes 100 actions
		10 stone takes 120-130 actions
		10 wood with higher tools 70 actions
		10 wood with skilled labor 80 actions
*/
