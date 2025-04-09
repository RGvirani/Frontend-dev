
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, SortAsc } from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuCheckboxItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";

const Games = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortType, setSortType] = useState<"name" | "score">("score");
  
  const games = [
    {
      id: "1",
      title: "Horizon Forbidden West",
      developer: "Guerrilla Games",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400",
      accessibilityScore: 85,
      tags: ["Visual", "Auditory", "Motor"]
    },
    {
      id: "2",
      title: "The Last of Us Part II",
      developer: "Naughty Dog",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&h=400",
      accessibilityScore: 95,
      tags: ["Visual", "Auditory", "Motor", "Cognitive"]
    },
    {
      id: "3",
      title: "Forza Horizon 5",
      developer: "Playground Games",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400",
      accessibilityScore: 90,
      tags: ["Motor", "Visual", "Cognitive"]
    },
    {
      id: "4",
      title: "Hades",
      developer: "Supergiant Games",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400",
      accessibilityScore: 75,
      tags: ["Visual", "Motor"]
    },
    {
      id: "5",
      title: "Celeste",
      developer: "Extremely OK Games",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=600&h=400",
      accessibilityScore: 80,
      tags: ["Motor", "Cognitive", "Auditory"]
    },
    {
      id: "6",
      title: "Minecraft",
      developer: "Mojang Studios",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400",
      accessibilityScore: 70,
      tags: ["Visual", "Cognitive"]
    }
  ];

  const allTags = [...new Set(games.flatMap(game => game.tags))];

  const filteredGames = games
    .filter(game => 
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      game.developer.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(game => 
      selectedTags.length === 0 || 
      selectedTags.some(tag => game.tags.includes(tag))
    )
    .sort((a, b) => {
      if (sortType === "score") {
        return b.accessibilityScore - a.accessibilityScore;
      } else {
        return a.title.localeCompare(b.title);
      }
    });

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

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by accessibility</DropdownMenuLabel>
                  {allTags.map((tag) => (
                    <DropdownMenuCheckboxItem
                      key={tag}
                      checked={selectedTags.includes(tag)}
                      onCheckedChange={() => toggleTag(tag)}
                    >
                      {tag}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <SortAsc className="h-4 w-4" />
                    <span className="sr-only">Sort</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={sortType === "score"}
                    onCheckedChange={() => setSortType("score")}
                  >
                    Accessibility Score
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={sortType === "name"}
                    onCheckedChange={() => setSortType("name")}
                  >
                    Name
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGames.map((game, index) => (
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
            
            {filteredGames.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium">No games found</h3>
                <p className="text-muted-foreground mt-2">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Games;
