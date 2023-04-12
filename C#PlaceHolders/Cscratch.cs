// Made with ChatGPT
using System;

class Program
{
	static void Main()
	{
		// Set up the point buy system values
		const int POINT_BUY_TOTAL = 27;
		const int POINT_BUY_MIN = 8;
		const int POINT_BUY_MAX = 15;
		const int POINT_BUY_COST = 1;

		// Set up variables to hold the attribute values
		int strength = 0;
		int dexterity = 0;
		int constitution = 0;
		int intelligence = 0;
		int wisdom = 0;
		int charisma = 0;

		// Set up variables to hold the skill values
		int acrobatics = 0;
		int animalHandling = 0;
		int arcana = 0;
		int athletics = 0;
		int deception = 0;
		int history = 0;
		int insight = 0;
		int intimidation = 0;
		int investigation = 0;
		int medicine = 0;
		int nature = 0;
		int perception = 0;
		int performance = 0;
		int persuasion = 0;
		int religion = 0;
		int sleightOfHand = 0;
		int stealth = 0;
		int survival = 0;

		// Set up variables to hold the feat values
		bool feat1 = false;
		bool feat2 = false;
		bool feat3 = false;

		// Get the attribute values from the user using the point buy system
		while (true)
		{
			Console.WriteLine($"You have {POINT_BUY_TOTAL} points to spend on attributes.");
			Console.WriteLine($"Attributes cost {POINT_BUY_COST} point(s) per increase, and must be between {POINT_BUY_MIN} and {POINT_BUY_MAX}.");
			Console.Write("Enter your Strength value: ");
			strength = GetAttributeValue();
			Console.Write("Enter your Dexterity value: ");
			dexterity = GetAttributeValue();
			Console.Write("Enter your Constitution value: ");
			constitution = GetAttributeValue();
			Console.Write("Enter your Intelligence value: ");
			intelligence = GetAttributeValue();
			Console.Write("Enter your Wisdom value: ");
			wisdom = GetAttributeValue();
			Console.Write("Enter your Charisma value: ");
			charisma = GetAttributeValue();

			// Check if the total point cost is valid
			int totalPointCost = CalculatePointCost(strength, dexterity, constitution, intelligence, wisdom, charisma, POINT_BUY_COST);
			if (totalPointCost <= POINT_BUY_TOTAL)
			{
				break;
			}

			Console.WriteLine($"You have spent {totalPointCost} points, which is more than your total of {POINT_BUY_TOTAL} points. Please adjust your attribute values.");
		}

		// Get the skill values from the user
		Console.WriteLine("Enter your skill values (0 for untrained, 1 for trained):");
		acrobatics = GetSkillValue("Acrobatics");
		animalHandling = GetSkillValue("Animal Handling");
		arcana = GetSkillValue("Arcana");
		athletics = GetSkillValue("Athletics");
		deception = GetSkillValue("Deception");
		history = GetSkillValue("History");
		insight = GetSkillValue("Insight");
		intimidation = GetSkillValue("Intimidation");
		investigation = GetSkillValue("Investigation");
		medicine = GetSkillValue("Medicine");
		nature = GetSkillValue("Nature");
		perception = GetSkillValue("Perception");
	}
}
