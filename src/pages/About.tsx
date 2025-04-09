
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Users, LineChart, Tool, Mail, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Gamepad2 className="h-12 w-12 mx-auto mb-4 text-game-blue-600" />
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Making Games Accessible for Everyone
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Game AE is a comprehensive platform designed to help game developers evaluate 
                and improve the accessibility of their games for players of all abilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg mb-4">
                  We believe that games should be enjoyed by everyone, regardless of their physical 
                  or cognitive abilities. Our mission is to bridge the gap between developers and 
                  players by providing the tools and knowledge needed to create truly inclusive gaming experiences.
                </p>
                <p className="text-lg">
                  Through comprehensive evaluation tools, expert guidelines, and a collaborative 
                  approach, we're working to transform the gaming industry into a more accessible 
                  space for all players.
                </p>
              </div>
              <div className="bg-game-blue-50 rounded-lg p-6 border">
                <h3 className="text-xl font-semibold mb-4">Why Accessibility Matters</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-game-blue-100 rounded-full p-1 mt-1">
                      <Users className="h-5 w-5 text-game-blue-600" />
                    </div>
                    <div>
                      <strong className="font-medium">Larger Audience</strong>
                      <p className="text-muted-foreground">
                        15-20% of gamers have disabilities that can affect how they play
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-game-blue-100 rounded-full p-1 mt-1">
                      <LineChart className="h-5 w-5 text-game-blue-600" />
                    </div>
                    <div>
                      <strong className="font-medium">Business Impact</strong>
                      <p className="text-muted-foreground">
                        Accessible games reach more players and generate higher revenues
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-game-blue-100 rounded-full p-1 mt-1">
                      <Tool className="h-5 w-5 text-game-blue-600" />
                    </div>
                    <div>
                      <strong className="font-medium">Better Design</strong>
                      <p className="text-muted-foreground">
                        Accessibility features often improve usability for all players
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We take a methodical, human-centered approach to game accessibility, 
                focusing on understanding real player needs and providing practical solutions.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-game-blue-100 flex items-center justify-center mb-4">
                    <span className="font-bold text-game-blue-600">1</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Analysis</h3>
                  <p className="text-muted-foreground">
                    We analyze user requirements and use cases through research and player feedback
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-game-blue-100 flex items-center justify-center mb-4">
                    <span className="font-bold text-game-blue-600">2</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Understanding</h3>
                  <p className="text-muted-foreground">
                    We work to understand the context in which players interact with games
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-game-blue-100 flex items-center justify-center mb-4">
                    <span className="font-bold text-game-blue-600">3</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Solutions</h3>
                  <p className="text-muted-foreground">
                    We develop practical design solutions that address accessibility challenges
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-game-blue-100 flex items-center justify-center mb-4">
                    <span className="font-bold text-game-blue-600">4</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Evaluation</h3>
                  <p className="text-muted-foreground">
                    We test and validate solutions with real players to ensure effectiveness
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions about game accessibility or want to learn more about 
                our platform? We'd love to hear from you.
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-game-blue-100 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-game-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Contact Us</h3>
                      <p className="text-muted-foreground">We typically respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          First name
                        </label>
                        <input
                          id="first-name"
                          className="w-full p-2 rounded-md border"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                          Last name
                        </label>
                        <input
                          id="last-name"
                          className="w-full p-2 rounded-md border"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-2 rounded-md border"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full p-2 rounded-md border min-h-[120px]"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <Button className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
