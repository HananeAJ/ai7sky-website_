import { CheckCircle2, Globe, Shield, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Globe,
      title: "North African Heritage",
      description: "Bringing unique perspectives and innovative solutions from the heart of North Africa.",
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Building long-term partnerships through transparency and consistent delivery.",
    },
    {
      icon: Users,
      title: "Barakah of Teamwork",
      description: "Collaborative excellence powered by diverse talents working in harmony.",
    },
  ];

  const reasons = [
    "High-level expertise at competitive pricing",
    "Proven track record with international clients",
    "24/7 support and maintenance",
    "Agile development methodology",
    "Cutting-edge AI technologies",
    "Cultural understanding and global perspective",
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold font-display">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">AI7Sky</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are an association of passionate AI developers from North Africa, united by our commitment 
              to delivering exceptional AI solutions. Our team combines deep technical expertise with cultural 
              richness, bringing unique perspectives to every project.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With roots in a region known for its mathematical and scientific heritage, we continue 
              the tradition of innovation while embracing modern AI technologies to solve complex business challenges.
            </p>

            <div className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
            <h3 className="text-2xl font-bold mb-6">Why Choose AI7Sky?</h3>
            
            <div className="space-y-3">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{reason}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm font-medium text-center">
                "Excellence through collaboration, innovation through diversity"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;