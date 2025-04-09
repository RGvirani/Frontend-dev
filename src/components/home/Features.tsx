
import { 
  Users, 
  CheckCircle, 
  LineChart, 
  Search, 
  PanelLeft, 
  HeartHandshake 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Search className="h-6 w-6 text-game-blue-600" />,
      title: "Analyze Requirements",
      description: "Understand user requirements and the use cases of your game application"
    },
    {
      icon: <Users className="h-6 w-6 text-game-blue-600" />,
      title: "Human Centered Design",
      description: "Apply methodical HCD processes to improve user experience for all players"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-game-blue-600" />,
      title: "Accessibility Checklists",
      description: "Evaluate your game against comprehensive accessibility guidelines"
    },
    {
      icon: <PanelLeft className="h-6 w-6 text-game-blue-600" />,
      title: "Design Solutions",
      description: "Develop and implement practical design solutions for accessibility challenges"
    },
    {
      icon: <LineChart className="h-6 w-6 text-game-blue-600" />,
      title: "Measure Impact",
      description: "Track improvements and measure the impact of accessibility features"
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-game-blue-600" />,
      title: "Inclusive Gaming",
      description: "Create games that everyone can enjoy regardless of ability or disability"
    }
  ];

  return (
    <section className="py-12 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">
            Comprehensive Accessibility Tools
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform provides everything you need to analyze, implement, and validate 
            accessibility features in your games.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="pb-2">
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
