import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Ahmed Benali",
      role: "AI Architect",
      expertise: "Deep Learning & Computer Vision",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Fatima El-Khoury",
      role: "ML Engineer",
      expertise: "NLP & AgenticAI",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Youssef Mansouri",
      role: "Data Scientist",
      expertise: "Predictive Analytics",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Amina Bouaziz",
      role: "AI Developer",
      expertise: "Crypto Trading Algorithms",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Omar Khalil",
      role: "Full Stack AI Engineer",
      expertise: "AI Integration & APIs",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Sara Benhadid",
      role: "Research Lead",
      expertise: "Reinforcement Learning",
      image: "/api/placeholder/200/200",
    },
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold font-display mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Talented AI experts from across North Africa, united in our mission to deliver excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-primary rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.expertise}</p>
                </div>

                <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-border/50">
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;