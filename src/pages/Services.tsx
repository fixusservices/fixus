import { useParams } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Code,
  Shield,
  Database,
  Cpu,
  Briefcase,
  Globe,
  Cloud,
  Monitor,
  Smartphone,
  Server,
  Lock,
  LineChart,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const Services = () => {
  const { service } = useParams();

  const allServices = {
    'software-development': {
      title: 'Software Development',
      icon: <Code className="h-12 w-12" />,
      description: 'Custom software solutions tailored to your business needs',
      details: 'We build scalable, secure, and user-friendly applications using the latest technologies.',
      features: [
        'Web Application Development',
        'Mobile App Development',
        'API Development & Integration',
        'Cloud-Native Solutions',
        'Progressive Web Apps',
        'Microservices Architecture',
      ],
    },
    'cybersecurity': {
      title: 'Cybersecurity',
      icon: <Shield className="h-12 w-12" />,
      description: 'Protect your digital assets with advanced security solutions',
      details: 'Comprehensive security services to safeguard your business from cyber threats.',
      features: [
        'Security Audits & Assessments',
        'Penetration Testing',
        'Vulnerability Management',
        'Incident Response',
        'Security Compliance',
        'Employee Training',
      ],
    },
    'sap': {
      title: 'SAP Services',
      icon: <Database className="h-12 w-12" />,
      description: 'End-to-end SAP implementation and data migration',
      details: 'Expert SAP consultants to help you leverage the full potential of SAP solutions.',
      features: [
        'SAP Implementation',
        'SAP S/4HANA Migration',
        'SAP Data Migration',
        'SAP Support & Maintenance',
        'SAP Integration',
        'SAP Training',
      ],
    },
    'iot': {
      title: 'IoT Solutions',
      icon: <Cpu className="h-12 w-12" />,
      description: 'Connect and optimize your devices with IoT technology',
      details: 'Transform your business with smart, connected IoT solutions.',
      features: [
        'IoT Strategy Consulting',
        'Device Integration',
        'Data Analytics',
        'Remote Monitoring',
        'Predictive Maintenance',
        'Smart Automation',
      ],
    },
    'erp': {
      title: 'ERP Implementation',
      icon: <Briefcase className="h-12 w-12" />,
      description: 'Streamline operations with comprehensive ERP systems',
      details: 'Implement robust ERP solutions to integrate and optimize your business processes.',
      features: [
        'ERP Selection & Planning',
        'System Implementation',
        'Data Migration',
        'Process Optimization',
        'Training & Support',
        'Custom Development',
      ],
    },
  };

  const categories = [
    {
      title: 'Core IT Services',
      services: [
        { ...allServices['software-development'], key: 'software-development' },
        { ...allServices['cybersecurity'], key: 'cybersecurity' },
      ],
    },
    {
      title: 'Enterprise Solutions',
      services: [
        { ...allServices['sap'], key: 'sap' },
        { ...allServices['erp'], key: 'erp' },
      ],
    },
    {
      title: 'Emerging Technologies',
      services: [
        { ...allServices['iot'], key: 'iot' },
      ],
    },
  ];

  // If specific service page
  if (service && allServices[service as keyof typeof allServices]) {
    const currentService = allServices[service as keyof typeof allServices];
    
    return (
      <div className="pt-20">
        {/* Service Hero */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-foreground/10 flex items-center justify-center animate-fade-in">
                {currentService.icon}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
                {currentService.title}
              </h1>
              <p className="text-xl max-w-3xl mx-auto opacity-90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                {currentService.details}
              </p>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentService.features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {feature}
                      </h3>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // All services page
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Our Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Comprehensive IT solutions and consulting services to drive your business forward
          </p>
        </div>
      </section>

      {/* Services by Category */}
      {categories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6">
                    <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground mb-4 transform group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <Link to={`/services/${service.key}`}>
                      <Button variant="ghost" className="group/btn p-0">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your unique requirements and create a tailored solution
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="xl">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;