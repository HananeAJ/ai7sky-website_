import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-accent opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Ready to Transform Your Business with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">AI?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how our AI expertise can help you achieve your goals. 
            Get a free consultation and discover the power of intelligent solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="lg" className="group">
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              <Calendar className="mr-2" />
              Schedule a Call
            </Button>
            <Button variant="accent" size="lg">
              <MessageSquare className="mr-2" />
              Chat with Us
            </Button>
          </div>

          <div className="pt-8">
            <p className="text-sm text-muted-foreground">
              Trusted by startups and enterprises across MENA, Europe, and North America
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;