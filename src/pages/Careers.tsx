import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Users, TrendingUp, Heart, Clock, MapPin, Lightbulb, Shield, Award, Leaf, ArrowRight } from 'lucide-react';

const Careers = () => {
  const coreValues = [
    {
      icon: <Lightbulb className="h-7 w-7" />,
      title: 'Innovation',
      description: 'Continuously embracing new technologies and creative solutions to drive progress in manufacturing and supply chain.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: 'Integrity',
      description: 'Building trust with clients through transparency, honesty, and ethical business practices.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Award className="h-7 w-7" />,
      title: 'Excellence',
      description: 'Delivering high-quality services with precision, efficiency, and measurable impact.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: 'Collaboration',
      description: 'Working hand-in-hand with clients, partners, and teams to achieve shared success.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Leaf className="h-7 w-7" />,
      title: 'Sustainability',
      description: 'Promoting eco-friendly, efficient, and future-ready solutions that benefit both business and society.',
      gradient: 'from-teal-500 to-green-500',
    },
  ];

  const benefits = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: 'Growth Opportunities',
      description: 'Continuous learning and career advancement paths',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Collaborative Team',
      description: 'Work with talented professionals in a supportive environment',
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Challenging Projects',
      description: 'Work on diverse and innovative IT solutions',
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote work options',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Competitive Benefits',
      description: 'Attractive compensation and comprehensive benefits',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Modern Workspace',
      description: 'State-of-the-art office in Coimbatore',
    },
  ];

  const handleContactUs = () => {
    const message = encodeURIComponent('Hi! I am interested in career opportunities at Fixus IT.');
    window.open(`https://wa.me/919629463964?text=${message}`, '_blank');
  };

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Join Our Team
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Build your career with Fixus IT and be part of our innovative journey
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              What We Stand For
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Fixus IT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="group p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${value.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Announcement Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 text-center bg-gradient-subtle">
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                New Opportunities Coming Soon!
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're expanding our team and will be announcing exciting new positions shortly. 
                Stay tuned for opportunities in software development, IT consulting, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleContactUs} variant="hero" size="lg">
                  Get Notified
                </Button>
                <Button 
                  onClick={() => {
                    const emailSubject = encodeURIComponent('Career Inquiry - Fixus IT');
                    const emailBody = encodeURIComponent('Hi, I would like to know about career opportunities at Fixus IT.');
                    window.open(`mailto:fixusservices@gmail.com?subject=${emailSubject}&body=${emailBody}`, '_blank');
                  }}
                  variant="outline" 
                  size="lg"
                >
                  Send Your Resume
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Join Fixus IT?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of a dynamic team that's shaping the future of IT solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-12 bg-gradient-primary text-primary-foreground">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">
                Our Culture
              </h2>
              <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
                At Fixus IT, we foster an environment of innovation, collaboration, and continuous growth. 
                We believe in empowering our team members to reach their full potential while delivering 
                exceptional solutions to our clients.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="opacity-90">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">30+</div>
                  <div className="opacity-90">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">2+</div>
                  <div className="opacity-90">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="opacity-90">Remote Friendly</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Stay Connected
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Follow us for career updates and company news
          </p>
          <Button onClick={handleContactUs} variant="hero" size="lg">
            Contact HR Team
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;