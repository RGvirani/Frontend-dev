
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, FileSpreadsheet, PencilRuler, LayoutGrid, Book, ArrowRight } from "lucide-react";

const MethodsSection = () => {
  const methods = [
    {
      title: "User Interviews",
      description: "Conduct in-depth interviews with gamers of different abilities to understand their needs and challenges.",
      icon: <Users className="h-6 w-6 text-game-blue-600" />,
      link: "#"
    },
    {
      title: "Personas",
      description: "Create detailed user personas to help your team understand and empathize with different player groups.",
      icon: <Users className="h-6 w-6 text-game-blue-600" />,
      link: "#"
    },
    {
      title: "Card Sorting",
      description: "Organize game features and controls in ways that make sense to different user groups.",
      icon: <FileSpreadsheet className="h-6 w-6 text-game-blue-600" />,
      link: "#"
    },
    {
      title: "Sketching",
      description: "Quickly visualize and iterate on accessible UI solutions before implementation.",
      icon: <PencilRuler className="h-6 w-6 text-game-blue-600" />,
      link: "#"
    },
    {
      title: "Wireframes",
      description: "Create low-fidelity mockups to test navigation and layout with accessibility in mind.",
      icon: <LayoutGrid className="h-6 w-6 text-game-blue-600" />,
      link: "#"
    },
    {
      title: "User Stories",
      description: "Document specific accessibility needs as user stories to guide development priorities.",
      icon: <Book className="h-6 w-6 text-game-blue-600" />,
      link: "#"
    }
  ];

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Research Methods</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
              Apply these proven UX research techniques to better understand and address accessibility needs.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            View All Resources
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <Card key={index} className="card-interactive h-full">
              <CardHeader className="pb-2">
                <div className="mb-2">{method.icon}</div>
                <CardTitle>{method.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{method.description}</CardDescription>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="link" className="p-0 h-auto text-game-blue-600">
                  Learn more
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodsSection;
