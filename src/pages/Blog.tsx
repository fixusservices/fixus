import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of SAP in MSMEs',
      excerpt: 'Discover how small and medium enterprises are leveraging SAP to compete with larger corporations.',
      author: 'Dr. Arun Kumar',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'SAP',
    },
    {
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Stay ahead of cyber threats with these essential security practices for your business.',
      author: 'Sneha Patel',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Security',
    },
    {
      title: 'IoT Revolution in Manufacturing',
      excerpt: 'How Internet of Things is transforming the manufacturing industry in India.',
      author: 'Rajesh Sharma',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'IoT',
    },
    {
      title: 'Cloud Migration Strategy Guide',
      excerpt: 'A comprehensive guide to successfully migrate your business to the cloud.',
      author: 'Priya Nair',
      date: '2023-12-28',
      readTime: '10 min read',
      category: 'Cloud',
    },
    {
      title: 'AI-Powered Portfolio Generation',
      excerpt: 'How our resume-to-portfolio tool uses AI to create stunning professional portfolios.',
      author: 'Dr. Arun Kumar',
      date: '2023-12-20',
      readTime: '4 min read',
      category: 'AI',
    },
    {
      title: 'ERP Implementation Success Stories',
      excerpt: 'Real-world examples of successful ERP implementations and their impact.',
      author: 'Rajesh Sharma',
      date: '2023-12-15',
      readTime: '8 min read',
      category: 'ERP',
    },
  ];

  const categories = ['All', 'SAP', 'Security', 'IoT', 'Cloud', 'AI', 'ERP'];

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Insights & Updates
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Stay informed with the latest trends, tips, and insights from the IT industry
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'hero' : 'outline'}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Badge */}
                <div className="h-2 bg-gradient-primary" />
                
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-4">
                    {post.category}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <div className="flex items-center mr-4">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="group/btn p-0 mt-4">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for the latest insights and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;