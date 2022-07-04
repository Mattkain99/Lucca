namespace Devise;

public record CurrenciesFile
(
    string From,
    string To, 
    float Amount ,
    List<Conversion> Conversions
);