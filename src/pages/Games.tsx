import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, SortAsc } from "lucide-react";
import { Input } from "@/components/ui/input";

const Games = () => {
  const games = [
    {
      id: "1",
      title: "Horizon Forbidden West",
      developer: "Guerrilla Games",
      image: "https://placehold.co/600x400/3678f6/FFFFFF/png?text=Game+Cover",
      accessibilityScore: 85,
      tags: ["Visual", "Auditory", "Motor"]
    },
    {
      id: "2",
      title: "The Last of Us Part II",
      developer: "Naughty Dog",
      image: "https://placehold.co/600x400/3678f6/FFFFFF/png?text=Game+Cover",
      accessibilityScore: 95,
      tags: ["Visual", "Auditory", "Motor", "Cognitive"]
    },
    {
      id: "3",
      title: "Forza Horizon 5",
      developer: "Playground Games",
      image: "https://placehold.co/600x400/3678f6/FFFFFF/png?text=Game+Cover",
      accessibilityScore: 90,
      tags: ["Motor", "Visual", "Cognitive"]
    },
    {
      id: "4",
      title: "Hades",
      developer: "Supergiant Games",
      image: "https://placehold.co/600x400/3678f6/FFFFFF/png?text=Game+Cover",
      accessibilityScore: 75,
      tags: ["Visual", "Motor"]
    },
    {
      id: "5",
      title: "Celeste",
      developer: "Extremely OK Games",
      image: "https://placehold.co/600x400/3678f6/FFFFFF/png?text=Game+Cover",
      accessibilityScore: 80,
      tags: ["Motor", "Cognitive", "Auditory"]
    },
    {
      id: "6",
      title: "Minecraft",
      developer: "Mojang Studios",
      image: "https://placehold.co/600x400/3678f6/FFFFFF/png?text=Game+Cover",
      accessibilityScore: 70,
      tags: ["Visual", "Cognitive"]
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 75) return "bg-yellow-500";
    return "bg-orange-500";
  };

  const getTagColor = (tag: string) => {
    switch(tag) {
      case "Visual": return "bg-blue-100 text-blue-800";
      case "Auditory": return "bg-purple-100 text-purple-800";
      case "Motor": return "bg-green-100 text-green-800";
      case "Cognitive": return "bg-amber-100 text-amber-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter mb-2">Game Database</h1>
                <p className="text-muted-foreground">
                  Browse and evaluate games for accessibility features
                </p>
              </div>
              <Button>
                Add New Game
              </Button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  className="pl-9"
                  placeholder="Search games..."
                  type="search"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
              <Button variant="outline" size="icon">
                <SortAsc className="h-4 w-4" />
                <span className="sr-only">Sort</span>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((game, index) => (
                <Link to={`/game/${game.id}`} key={index}>
                  <Card className="overflow-hidden card-interactive hover:shadow-lg transition-all duration-200 h-full">
                    <div className="aspect-video relative">
                      <img 
                        src={game.image} 
                        alt={game.title}
                        className="object-cover w-full h-full" 
                      />
                      <div className="absolute top-2 right-2">
                        <div className={`${getScoreColor(game.accessibilityScore)} text-white text-xs font-bold px-2 py-1 rounded-md`}>
                          {game.accessibilityScore}%
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle>{game.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{game.developer}</p>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex flex-wrap gap-1">
                        {game.tags.map((tag, i) => (
                          <Badge key={i} className={`badge-accessibility ${getTagColor(tag)}`}>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm" className="w-full">
                        Play Game
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Games;
