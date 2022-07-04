namespace Devise.Tests;

public class FileParserTest
{
    [Fact]
    public void ParseFile_ShouldThrowEmptyFileError_WhenEmptyFile()
    {
        Assert.Throws<FileEmptyException>(() => FileParser.ParseFile("./empty.txt"));
    }
    
    [Fact]
    public void ParseFile_ShouldThrowFileNotFoundError_WhenFileNotFound()
    {
        Assert.Throws<FileNotFoundException>(() => FileParser.ParseFile("./notfound.txt"));
    }
    
    [Fact]
    public void ParseFile_ShouldBuildValidCurrenciesFile()
    {
        var expectedConversions = new List<Conversion>
        {
            new Conversion("AUD", "CHF", 0.9661f),
            new Conversion("JPY", "KRW", 13.1151f)
        };
        var expectedFile = new CurrenciesFile("EUR", "JPY", 550, expectedConversions);
        var currentFile = FileParser.ParseFile("./devise_wrongInputLine.txt");
        
        Assert.Equal(expectedFile.Amount, currentFile.Amount);
        Assert.Equal(expectedFile.From, currentFile.From);
        Assert.Equal(expectedFile.To, currentFile.To);
        Assert.Equal(expectedConversions.Count, currentFile.Conversions.Count);
    }
}