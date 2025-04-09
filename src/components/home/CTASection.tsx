
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <Card className="bg-game-blue-600 text-white border-none overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                  Ready to make your game accessible to everyone?
                </h2>
                <p className="text-game-blue-100 md:text-lg">
                  Start evaluating your game today with our comprehensive tools and expert guidelines.
                  Our platform helps you identify, implement, and validate accessibility features.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="lg" variant="secondary" className="text-game-blue-700 font-medium">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/20 hover:text-white">
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="absolute -right-12 -top-12 -bottom-12 w-[120%] bg-game-blue-500 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-game-blue-600 to-transparent z-10"></div>
                <div className="relative z-20 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="space-y-4">
                    <div className="h-4 w-32 bg-white/20 rounded"></div>
                    <div className="flex gap-2">
                      <div className="h-10 w-10 rounded bg-white/20"></div>
                      <div className="space-y-2 flex-1">
                        <div className="h-4 w-3/4 bg-white/20 rounded"></div>
                        <div className="h-4 w-1/2 bg-white/20 rounded"></div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-10 w-10 rounded bg-white/20"></div>
                      <div className="space-y-2 flex-1">
                        <div className="h-4 w-full bg-white/20 rounded"></div>
                        <div className="h-4 w-2/3 bg-white/20 rounded"></div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-10 w-10 rounded bg-white/20"></div>
                      <div className="space-y-2 flex-1">
                        <div className="h-4 w-5/6 bg-white/20 rounded"></div>
                        <div className="h-4 w-3/4 bg-white/20 rounded"></div>
                      </div>
                    </div>
                    <div className="h-8 w-24 bg-white/30 rounded mt-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
