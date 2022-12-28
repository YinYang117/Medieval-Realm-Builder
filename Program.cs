namespace Medieval_Realm_Builder;
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Welcome to Medieval Realm Builder!");
        Console.WriteLine("Who is playing?");
        var name = Console.ReadLine();
        var currDate = DateTime.Now;
        Console.WriteLine($"{Environment.NewLine}Hello, {name}, on {currDate:d} at {currDate:t}!");
        Console.Write($"\nPress any key to exit...");
        Console.ReadKey(true);
    }
}
