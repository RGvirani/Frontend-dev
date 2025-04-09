
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Eye, 
  EarIcon, 
  MousePointer, 
  Brain, 
  MoreHorizontal, 
  CheckCircle2, 
  Circle 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Checklists = () => {
  const categories = [
    {
      id: "visual",
      label: "Visual",
      icon: <Eye className="h-4 w-4" />,
      checklists: [
        {
          title: "Color Accessibility",
          description: "Ensure your game is accessible to users with color blindness",
          totalItems: 15,
          completedItems: 10,
          lastUpdated: "2 days ago"
        },
        {
          title: "Text Readability",
          description: "Guidelines for making game text readable for all users",
          totalItems: 12,
          completedItems: 6,
          lastUpdated: "1 week ago"
        },
        {
          title: "Visual Cues",
          description: "Non-color dependent visual feedback systems",
          totalItems: 8,
          completedItems: 8,
          lastUpdated: "3 days ago"
        }
      ]
    },
    {
      id: "auditory",
      label: "Auditory",
      icon: <EarIcon className="h-4 w-4" />,
      checklists: [
        {
          title: "Subtitles & Captions",
          description: "Comprehensive caption system for all audio content",
          totalItems: 10,
          completedItems: 7,
          lastUpdated: "5 days ago"
        },
        {
          title: "Audio Cues",
          description: "Ensuring gameplay information is available through audio",
          totalItems: 8,
          completedItems: 2,
          lastUpdated: "2 weeks ago"
        }
      ]
    },
    {
      id: "motor",
      label: "Motor",
      icon: <MousePointer className="h-4 w-4" />,
      checklists: [
        {
          title: "Input Remapping",
          description: "Allow players to customize controls to suit their needs",
          totalItems: 14,
          completedItems: 11,
          lastUpdated: "1 day ago"
        },
        {
          title: "Timing Requirements",
          description: "Adjustable timing for players with motor disabilities",
          totalItems: 9,
          completedItems: 3,
          lastUpdated: "3 weeks ago"
        }
      ]
    },
    {
      id: "cognitive",
      label: "Cognitive",
      icon: <Brain className="h-4 w-4" />,
      checklists: [
        {
          title: "Clear Objectives",
          description: "Ensuring game goals and tasks are clearly communicated",
          totalItems: 12,
          completedItems: 9,
          lastUpdated: "4 days ago"
        },
        {
          title: "Difficulty Options",
          description: "Providing multiple difficulty levels and assists",
          totalItems: 11,
          completedItems: 5,
          lastUpdated: "1 week ago"
        },
        {
          title: "Tutorial Systems",
          description: "Accessible learning experiences for all players",
          totalItems: 15,
          completedItems: 10,
          lastUpdated: "2 days ago"
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter mb-2">Accessibility Checklists</h1>
                <p className="text-muted-foreground">
                  Comprehensive guidelines to evaluate and improve game accessibility
                </p>
              </div>
              <Button>
                Create Custom Checklist
              </Button>
            </div>
            
            <Tabs defaultValue="visual" className="w-full">
              <TabsList className="mb-6">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-1">
                    {category.icon}
                    <span>{category.label}</span>
                  </TabsTrigger>
                ))}
                <TabsTrigger value="all">
                  <MoreHorizontal className="h-4 w-4" />
                  <span>All</span>
                </TabsTrigger>
              </TabsList>
              
              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.checklists.map((checklist, index) => (
                      <Card key={index} className="card-hover">
                        <CardHeader className="pb-2">
                          <CardTitle className="flex items-center justify-between">
                            {checklist.title}
                            <Button variant="ghost" size="icon" className="h-7 w-7">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">More options</span>
                            </Button>
                          </CardTitle>
                          <CardDescription>{checklist.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="flex justify-between items-center mb-1 text-sm">
                            <span>Progress</span>
                            <span className="font-medium">
                              {checklist.completedItems}/{checklist.totalItems}
                            </span>
                          </div>
                          <Progress 
                            value={Math.round((checklist.completedItems / checklist.totalItems) * 100)} 
                            className="h-2"
                          />
                          <div className="mt-4 space-y-1">
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                              <span className="text-sm">
                                {checklist.completedItems} completed items
                              </span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Circle className="h-4 w-4 text-muted-foreground mt-1 shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                Last updated {checklist.lastUpdated}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-2">
                          <Button variant="default" size="sm" className="w-full">
                            View Checklist
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
              
              <TabsContent value="all">
                <div className="space-y-10">
                  {categories.map((category) => (
                    <div key={category.id}>
                      <div className="flex items-center gap-2 mb-4">
                        {category.icon}
                        <h2 className="text-xl font-semibold">{category.label} Accessibility</h2>
                      </div>
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {category.checklists.map((checklist, index) => (
                          <Card key={index} className="card-hover">
                            <CardHeader className="pb-2">
                              <CardTitle className="flex items-center justify-between">
                                {checklist.title}
                                <Button variant="ghost" size="icon" className="h-7 w-7">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">More options</span>
                                </Button>
                              </CardTitle>
                              <CardDescription>{checklist.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="pb-2">
                              <div className="flex justify-between items-center mb-1 text-sm">
                                <span>Progress</span>
                                <span className="font-medium">
                                  {checklist.completedItems}/{checklist.totalItems}
                                </span>
                              </div>
                              <Progress 
                                value={Math.round((checklist.completedItems / checklist.totalItems) * 100)} 
                                className="h-2"
                              />
                              <div className="mt-4 space-y-1">
                                <div className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 shrink-0" />
                                  <span className="text-sm">
                                    {checklist.completedItems} completed items
                                  </span>
                                </div>
                                <div className="flex items-start gap-2">
                                  <Circle className="h-4 w-4 text-muted-foreground mt-1 shrink-0" />
                                  <span className="text-sm text-muted-foreground">
                                    Last updated {checklist.lastUpdated}
                                  </span>
                                </div>
                              </div>
                            </CardContent>
                            <CardFooter className="pt-2">
                              <Button variant="default" size="sm" className="w-full">
                                View Checklist
                              </Button>
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Checklists;
