
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Make Games Accessible for <span className="text-game-blue-600">Everyone</span>
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Evaluate and improve your game's accessibility with our 
              comprehensive tools and guidelines. Reach more players and create better experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="font-medium">
                Start Evaluating
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Browse Guidelines
              </Button>
            </div>
          </div>
          <div className="relative lg:block">
            <div className="relative mx-auto aspect-video overflow-hidden rounded-xl border bg-muted">
              <img 
                src="/lovable-uploads/432490ca-e754-4141-a2ca-64693b7f2803.png" 
                alt="Game Accessibility Evaluation Process"
                className="object-cover w-full h-full" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-lg bg-white/90 dark:bg-gray-950/90 p-4 backdrop-blur shadow-lg">
                  <h3 className="font-semibold text-sm">Human Centered Design Process</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Understand usage context, specify requirements, develop design solutions, and evaluate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
