import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Eye, Award, Users, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology solutions',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Client-Centric',
      description: 'Your success is our primary focus and driving force',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'Delivering quality that exceeds expectations every time',
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'Transparency',
      description: 'Open communication and honest partnerships',
    },
  ];

  const team = [
    {
      name: 'Dr. Arun Kumar',
      role: 'CEO & Founder',
      expertise: 'Digital Transformation',
    },
    {
      name: 'Priya Nair',
      role: 'CTO',
      expertise: 'Cloud Architecture',
    },
    {
      name: 'Rajesh Sharma',
      role: 'Head of SAP',
      expertise: 'SAP Implementation',
    },
    {
      name: 'Sneha Patel',
      role: 'Security Lead',
      expertise: 'Cybersecurity',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
              About Fixus IT & Consulting
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Your trusted technology partner in Coimbatore, driving digital transformation 
              for businesses across India and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Transforming Businesses Since 2014
              </h2>
              <p className="text-muted-foreground mb-4">
                Founded in the heart of Coimbatore, Fixus IT & Consulting Services has been 
                at the forefront of digital innovation for over a decade. We specialize in 
                delivering comprehensive IT solutions that empower businesses to thrive in 
                the digital age.
              </p>
              <p className="text-muted-foreground mb-4">
                Our journey began with a simple mission: to make enterprise-grade technology 
                accessible to businesses of all sizes. Today, we've helped over 100 companies 
                transform their operations, from MSMEs to large enterprises.
              </p>
              <p className="text-muted-foreground mb-6">
                With expertise spanning software development, cybersecurity, SAP services, 
                IoT solutions, and our flagship resume-to-portfolio generator, we're your 
                one-stop destination for all IT needs.
              </p>
              <Link to="/services">
                <Button variant="hero" size="lg">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Years</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-lg transition-shadow animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with innovative IT solutions that drive growth, 
                efficiency, and competitive advantage. We strive to be the catalyst for 
                digital transformation, making advanced technology accessible and actionable 
                for organizations of all sizes.
              </p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted IT consulting partner in South India and beyond, 
                known for our innovative solutions, exceptional service, and unwavering 
                commitment to client success. We envision a future where every business 
                can leverage technology to its fullest potential.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground transform group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our <span className="text-primary">Leadership</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-3xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {member.expertise}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's work together to transform your business
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="xl">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;