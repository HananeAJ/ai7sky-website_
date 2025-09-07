import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamLead = {
    name: "Ayoub Jadouli",
    role: "Team Lead & AI Solutions Architect",
    expertise: "Deep Learning, AgenticAI & Strategic AI Implementation",
    image: "/api/placeholder/200/200",
  };

  const teamMembers = [
    {
      name: "Fatima Zahra Belhamra",
      role: "AI Developer",
      expertise: "Software & Data Engineering",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Hanane Ajaoud",
      role: "AI Engineer",
      expertise: "AI, Data Science, Software Development",
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

        {/* Team Grid: Lead + Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Team Lead Card (larger) */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden lg:col-span-2">
            <CardContent className="p-8">
              <div className="relative mb-6 flex justify-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-3xl font-bold">
                  {teamLead.name.split(" ").map((n) => n[0]).join("")}
                </div>
              </div>

              <div className="text-center space-y-3">
                <h3 className="font-semibold text-2xl">{teamLead.name}</h3>
                <p className="text-primary font-medium text-lg">{teamLead.role}</p>
                <p className="text-sm text-muted-foreground">{teamLead.expertise}</p>
              </div>

              <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-border/50">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Team Members */}
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="relative mb-4 flex justify-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.expertise}</p>
                </div>

                <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-border/50">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
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
