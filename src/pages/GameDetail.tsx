
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, Star } from "lucide-react";

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Simulate fetching game data
  useEffect(() => {
    const games = [
      {
        id: "1",
        title: "Horizon Forbidden West",
        developer: "Guerrilla Games",
        image: "https://placehold.co/600x400/3678f6/FFFFFF/png?text=Game+Cover",
        accessibilityScore: 85,
        tags: ["Visual", "Auditory", "Motor"],
        description: "Horizon Forbidden West continues Aloy's story as she moves west to face a majestic but dangerous frontier where she'll encounter amazing machines and mysterious new threats.",
        releaseYear: 2022,
        platforms: ["PlayStation 5", "PlayStation 4"]
      },
      {
        id: "2",
        title: "The Last of Us Part II",
        developer: "Naughty Dog",
        image: "https://placehold.co/600x400/3678f6/FFFFFF/png?text=Game+Cover",
        accessibilityScore: 95,
        tags: ["Visual", "Auditory", "Motor", "Cognitive"],
        description: "Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community gives them stability, despite the constant threat of the infected and other, more desperate survivors.",
        releaseYear: 2020,
        platforms: ["PlayStation 4"]
      },
      {
        id: "3",
        title: "Forza Horizon 5",
        developer: "Playground Games",
        image: "https://placehold.co/600x400/3678f6/FFFFFF/png?text=Game+Cover",
        accessibilityScore: 90,
        tags: ["Motor", "Visual", "Cognitive"],
        description: "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in the world's greatest cars.",
        releaseYear: 2021,
        platforms: ["Xbox Series X/S", "Xbox One", "PC"]
      },
      {
        id: "4",
        title: "Hades",
        developer: "Supergiant Games",
        image: "https://placehold.co/600x400/3678f6/FFFFFF/png?text=Game+Cover",
        accessibilityScore: 75,
        tags: ["Visual", "Motor"],
        description: "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion and Transistor.",
        releaseYear: 2020,
        platforms: ["PC", "Nintendo Switch", "PlayStation", "Xbox"]
      },
      {
        id: "5",
        title: "Celeste",
        developer: "Extremely OK Games",
        image: "https://placehold.co/600x400/3678f6/FFFFFF/png?text=Game+Cover",
        accessibilityScore: 80,
        tags: ["Motor", "Cognitive", "Auditory"],
        description: "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain, in this super-tight platformer from the creators of TowerFall.",
        releaseYear: 2018,
        platforms: ["PC", "Nintendo Switch", "PlayStation", "Xbox"]
      },
      {
        id: "6",
        title: "Minecraft",
        developer: "Mojang Studios",
        image: "https://placehold.co/600x400/3678f6/FFFFFF/png?text=Game+Cover",
        accessibilityScore: 70,
        tags: ["Visual", "Cognitive"],
        description: "Minecraft is a game about placing blocks and going on adventures. Explore randomly generated worlds and build amazing things from the simplest of homes to the grandest of castles.",
        releaseYear: 2011,
        platforms: ["PC", "Mobile", "PlayStation", "Xbox", "Nintendo Switch"]
      }
    ];

    const foundGame = games.find(g => g.id === id);
    setGame(foundGame);
  }, [id]);

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

  const handlePlayGame = () => {
    setIsPlaying(!isPlaying);
  };

  if (!game) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <p>Loading game...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <Link to="/games" className="flex items-center gap-2 mb-6 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to Games
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {isPlaying ? (
                <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto animate-pulse" />
                    <h3 className="text-xl mt-4">Now Playing {game.title}</h3>
                    <p className="mt-2 text-gray-400">This is a demo. In a real application, the game would load here.</p>
                    <Button 
                      onClick={handlePlayGame} 
                      variant="outline" 
                      className="mt-4 bg-white/10 hover:bg-white/20 text-white"
                    >
                      Exit Game
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title} 
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button 
                      onClick={handlePlayGame} 
                      size="lg"
                      className="gap-2 px-6 py-6 rounded-full"
                    >
                      <Play className="h-5 w-5" />
                      Play Game
                    </Button>
                  </div>
                </div>
              )}
              
              <div className="mt-6">
                <h1 className="text-3xl font-bold">{game.title}</h1>
                <p className="text-muted-foreground">{game.developer} • {game.releaseYear}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {game.tags.map((tag: string, i: number) => (
                    <Badge key={i} className={`${getTagColor(tag)}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-6">
                  <h2 className="text-lg font-semibold mb-2">Description</h2>
                  <p className="text-muted-foreground">{game.description}</p>
                </div>
                
                <div className="mt-6">
                  <h2 className="text-lg font-semibold mb-2">Platforms</h2>
                  <div className="flex flex-wrap gap-2">
                    {game.platforms.map((platform: string, i: number) => (
                      <Badge key={i} variant="outline">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-card rounded-lg border p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`${getScoreColor(game.accessibilityScore)} text-white font-medium px-3 py-1 rounded-md text-lg`}>
                    {game.accessibilityScore}%
                  </div>
                  <h2 className="text-lg font-semibold">Accessibility Score</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Visual</span>
                      <div className="flex items-center">
                        {Array.from({length: 4}).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-game-blue-500 text-game-blue-500" />
                        ))}
                        <Star className="h-4 w-4 text-muted" />
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-game-blue-500 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Auditory</span>
                      <div className="flex items-center">
                        {Array.from({length: 3}).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-game-blue-500 text-game-blue-500" />
                        ))}
                        {Array.from({length: 2}).map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-muted" />
                        ))}
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-game-blue-500 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Motor</span>
                      <div className="flex items-center">
                        {Array.from({length: 5}).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-game-blue-500 text-game-blue-500" />
                        ))}
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-game-blue-500 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Cognitive</span>
                      <div className="flex items-center">
                        {Array.from({length: 4}).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-game-blue-500 text-game-blue-500" />
                        ))}
                        <Star className="h-4 w-4 text-muted" />
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-game-blue-500 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="w-full">View Full Evaluation</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GameDetail;
