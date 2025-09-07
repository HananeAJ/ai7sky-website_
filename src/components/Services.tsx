import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Bot, Code2, Cpu, LineChart, Wallet } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Development",
      description: "Custom AI solutions tailored to your business needs, from conceptualization to deployment.",
    },
    {
      icon: Bot,
      title: "AgenticAI",
      description: "Autonomous AI agents that can perform complex tasks and make intelligent decisions.",
    },
    {
      icon: Wallet,
      title: "AI Crypto Trading Bots",
      description: "Sophisticated trading algorithms powered by machine learning for cryptocurrency markets.",
    },
    {
      icon: Code2,
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
    },
    {
      icon: Cpu,
      title: "Deep Learning / ML",
      description: "Advanced neural networks and machine learning models for complex problem-solving.",
    },
    {
      icon: LineChart,
      title: "Cost-Effective AI Solutions",
      description: "Premium AI development at competitive prices without compromising quality.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold font-display mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive AI solutions that drive innovation and transform businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;