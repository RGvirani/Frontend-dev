
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import ProcessSection from "@/components/home/ProcessSection";
import MethodsSection from "@/components/home/MethodsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <ProcessSection />
        <MethodsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
