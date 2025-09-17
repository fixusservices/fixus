import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Shield, 
  Cloud, 
  Cpu, 
  Database, 
  Globe,
  ArrowRight,
  Briefcase,
  FileText
} from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Manufacturing Solutions',
      description: 'Digital transformation for smart factories with IoT and automation',
      link: '/services/manufacturing',
      gradient: 'from-blue-500 to-cyan-500',
      featured: true,
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Supply Chain Management',
      description: 'End-to-end logistics optimization with real-time visibility',
      link: '/services/supply-chain',
      gradient: 'from-purple-500 to-pink-500',
      featured: true,
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Industry 4.0',
      description: 'Implement cutting-edge tech for the fourth industrial revolution',
      link: '/services/industry-4',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'ERP Implementation',
      description: 'Streamline operations with comprehensive ERP systems',
      link: '/services/erp',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Process Automation',
      description: 'Automate workflows to increase operational efficiency',
      link: '/services/automation',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'IT Consulting',
      description: 'Strategic technology guidance for digital transformation',
      link: '/services/consulting',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions and consulting services to drive your business forward
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                service.featured ? 'ring-2 ring-primary' : ''
              }`}
            >
              {service.featured && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-bl-lg">
                  FEATURED
                </div>
              )}
              
              <div className="p-6">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white mb-4 transform group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                
                <Link to={service.link}>
                  <Button variant="ghost" className="group/btn p-0">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
              {/* Hover Effect Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`} />
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link to="/services">
            <Button variant="hero" size="lg">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;