using Devise;

var filepath = args.Length > 0 ? Environment.GetCommandLineArgs()[1] : "./devise.txt";
var file = FileParser.ParseFile(filepath);

var resolver = new ShortestPathResolver(file.From, file.To, file.Conversions);

var shortestConversionPath = resolver.ComputeDijkstra();
var result = file.Amount;

foreach (var conversion in shortestConversionPath)
{
    Console.WriteLine($"Convert from {conversion.From} to {conversion.To} : {conversion.Rate} * {result}"); 
    result = (float) Math.Round((conversion.Rate * result), 4);
}

Console.WriteLine($"The result for {file.Amount} {file.From} into {file.To} is {result} {file.To}");