using System.Globalization;

namespace Devise;

public static class FileParser
{
    public static CurrenciesFile ParseFile(string filepath)
    {
        if (!File.Exists(filepath))
        {
            throw new FileNotFoundException();
        }

        var stream = File.OpenText(filepath);

        var line = stream.ReadLine();
        if (line == null)
        {
            throw new FileEmptyException();
        }
        
        var target = line.Split(";");

        var nbRate = Int32.Parse(stream.ReadLine() ?? "0");

        var conversions = new List<Conversion>();
        var i = 0;
        while((line = stream.ReadLine())!=null && i < nbRate)
        {
            var rateLine = line.Split(";");
            conversions.Add(new Conversion(rateLine[0], rateLine[1],
                float.Parse(rateLine[2], CultureInfo.InvariantCulture)));
            i++;
        }

        return new CurrenciesFile(
            target[0],
            target[2],
            float.Parse(target[1]),
            conversions);
    }
}