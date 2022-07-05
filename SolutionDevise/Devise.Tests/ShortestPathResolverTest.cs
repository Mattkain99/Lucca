namespace Devise.Tests;

public class ShortestPathResolverTest
{
    [Fact]
    public void ComputeDijkstra_ShouldReturn_ShortestPath()
    {
        var expectedPath = new List<Conversion>
        {
            new Conversion("AUD", "CHF", 0.9661f),
            new Conversion("CHF", "USD", 1 / 13.1151f),
            new Conversion("USD", "EUR", 1 / 13.1151f)
        };
        
        var conversions = new List<Conversion>
        {
            new Conversion("AUD", "CHF", 0.9661f),
            new Conversion("CHF", "AUD", 1 / 0.9661f),
            new Conversion("JPY", "KRW", 13.1151f),
            new Conversion("KRW", "JPY", 1 / 13.1151f),
            new Conversion("USD", "EUR", 1 / 13.1151f),
            new Conversion("CHF", "USD", 1 / 13.1151f),
            new Conversion("KRW", "CHF", 1 / 13.1151f),
            new Conversion("EUR", "USD", 13.1151f),
            new Conversion("USD", "JPY", 1 / 13.1151f),
            new Conversion("JPY", "INR", 1 / 13.1151f),
            new Conversion("INR", "EUR", 1 / 13.1151f),
            new Conversion("CHF", "KRW", 1 / 13.1151f)
        };
        
        var resolver = new ShortestPathResolver("AUD", "EUR", conversions);
        var result = resolver.ComputeDijkstra();
        foreach (var conversion in result)
        {
            Assert.True(expectedPath.Exists( c => c.From == conversion.From));
        }
    }
}