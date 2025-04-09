
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Understand Usage Context",
      description: "Study how players with different abilities interact with games and identify key challenges they face.",
      items: ["Player interviews", "Observation sessions", "Contextual inquiry", "Needs analysis"]
    },
    {
      number: "02",
      title: "Specify Usage Requirements",
      description: "Convert research insights into clear requirements and specifications for accessible game design.",
      items: ["Accessibility criteria", "Technical specifications", "Performance benchmarks", "Compatibility requirements"]
    },
    {
      number: "03",
      title: "Develop Design Solutions",
      description: "Create innovative solutions that address accessibility challenges without compromising gameplay.",
      items: ["Alternative control schemes", "Visual assistance modes", "Audio cues and subtitles", "Cognitive accessibility features"]
    },
    {
      number: "04",
      title: "Evaluate Design Solutions",
      description: "Test your implementations with real users to validate their effectiveness and gather feedback.",
      items: ["Usability testing", "Expert reviews", "Compliance verification", "Iterative improvements"]
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-game-blue-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Human Centered Design Process</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Our systematic approach ensures that accessibility isn't an afterthought but an integral part of your game development.
          </p>
        </div>
        
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="flex-1">
                <div className="bg-game-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
                  Step {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground mb-6">{step.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-game-blue-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video rounded-xl bg-muted border overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-game-blue-100/50">
                    <div className="text-center p-6">
                      <div className="text-4xl font-bold text-game-blue-700 mb-2">{step.number}</div>
                      <div className="text-lg text-game-blue-800">{step.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="font-medium">
            Start Implementing HCD Process
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
