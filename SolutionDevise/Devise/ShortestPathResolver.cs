namespace Devise;

public class ShortestPathResolver
{
    private string From { get; }
    private string To { get; }
    private List<Conversion> Conversions { get; }
    
    public ShortestPathResolver(string from, string to, List<Conversion> conversions)
    {
        From = from;
        To = to;
        Conversions = conversions;
    }

    public List<Conversion> ComputeDijkstra()
    {
        var predecessors = new Dictionary<string, string?>();
        var vertices = Conversions
            .Select(c => c.From)
            .Concat(Conversions.Select(c => c.To))
            .Distinct()
            .ToList();
        var distances = new Dictionary<string, int>();
        
        foreach (var vertex in vertices)
        {   
            predecessors.Add(vertex, null);
            distances.Add(vertex, Int32.MaxValue);
        }

        distances[From] = 0;
        var tempVertices = vertices;
        
        while (tempVertices.Any())
        {
            string nearestVertex = "";
            foreach (var vertex in vertices)
            {
                nearestVertex = nearestVertex == "" || distances[vertex] < distances[nearestVertex]
                    ? vertex
                    : nearestVertex;
            }

            tempVertices.Remove(nearestVertex);

            var neighbours = Conversions
                .Where(c => c.From == nearestVertex)
                .Select(c => c.To)
                .ToList();

            foreach (var neighbour in neighbours)
            {
                var distance = distances[nearestVertex] + 1;
                if (distance < distances[neighbour] && distances[nearestVertex] != Int32.MaxValue)
                {
                    distances[neighbour] = distance;
                    predecessors[neighbour] = nearestVertex;
                }
            }
        }

        var shortestPath = new List<Conversion>();

        var vx = To;
        while(predecessors[vx] != null)
        {
            var previousVertex = Conversions.First(c=>c.From == predecessors[vx] && c.To == vx);
            shortestPath.Add(previousVertex);
            vx = previousVertex.From;
        }

        shortestPath.Reverse();
        return shortestPath;
    }
}