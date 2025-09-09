import HeroSection from '@/components/Home/HeroSection';
import ServicesOverview from '@/components/Home/ServicesOverview';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Trophy, Zap } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Expert Team',
      description: 'Skilled professionals with years of industry experience',
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: 'Proven Results',
      description: '100+ successful projects delivered on time',
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your needs',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, TechStart Solutions',
      content: 'Fixus IT transformed our business with their innovative solutions. Highly recommended!',
    },
    {
      name: 'Priya Sharma',
      role: 'CTO, Digital Innovations',
      content: 'Their SAP implementation was flawless. Professional team with excellent support.',
    },
    {
      name: 'Arun Patel',
      role: 'Director, CloudFirst Inc',
      content: 'The resume-to-portfolio tool is a game-changer for our HR department.',
    },
  ];

  return (
    <div>
      <HeroSection />
      <ServicesOverview />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">Fixus IT</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver excellence through innovation and dedication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="flex space-x-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-3">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how Fixus IT can help you achieve your goals
          </p>
          <div className="flex justify-center">
            <a 
              href="https://wa.me/919629463964" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="xl">
                Get Started Today
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;