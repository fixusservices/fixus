import { useState, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Upload, FileText, Download, Sparkles, User, Mail, Briefcase, GraduationCap, Code, Loader2 } from 'lucide-react';

const ResumeToPortfolio = () => {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [portfolioData, setPortfolioData] = useState<any>(null);
  const [manualInput, setManualInput] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    experience: '',
    education: '',
    projects: '',
  });

  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      const validTypes = ['application/pdf', 'text/plain', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(uploadedFile.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF, TXT, or DOCX file",
          variant: "destructive",
        });
        return;
      }
      setFile(uploadedFile);
      toast({
        title: "File uploaded",
        description: `${uploadedFile.name} ready for processing`,
      });
    }
  }, []);

  const processResume = async () => {
    if (!file && !manualInput) {
      toast({
        title: "No input provided",
        description: "Please upload a resume or fill in the form",
        variant: "destructive",
      });
      return;
    }

    setProcessing(true);

    // Simulate AI processing
    setTimeout(() => {
      const mockData = manualInput ? {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        skills: formData.skills.split(',').map(s => s.trim()),
        experience: formData.experience.split('\n').filter(e => e.trim()),
        education: formData.education,
        projects: formData.projects.split('\n').filter(p => p.trim()),
      } : {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+91 9876543210',
        skills: ['React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'TypeScript'],
        experience: [
          'Led development of e-commerce platform serving 100K+ users',
          'Optimized database queries resulting in 40% performance improvement',
          'Implemented CI/CD pipeline reducing deployment time by 60%',
        ],
        education: 'B.Tech in Computer Science, Anna University (2018-2022)',
        projects: [
          'AI-powered chatbot using NLP for customer service',
          'Real-time collaboration tool with WebSocket integration',
          'Mobile app for healthcare management with 10K+ downloads',
        ],
      };

      setPortfolioData(mockData);
      setProcessing(false);
      toast({
        title: "Portfolio generated!",
        description: "Your professional portfolio is ready",
      });
    }, 3000);
  };

  const downloadPortfolio = () => {
    if (!portfolioData) return;

    const portfolioHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${portfolioData.name} - Portfolio</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
          h1 { color: #007BFF; }
          h2 { color: #333; border-bottom: 2px solid #007BFF; padding-bottom: 5px; }
          .skill { display: inline-block; background: #f0f0f0; padding: 5px 10px; margin: 5px; border-radius: 5px; }
        </style>
      </head>
      <body>
        <h1>${portfolioData.name}</h1>
        <p>Email: ${portfolioData.email} | Phone: ${portfolioData.phone}</p>
        <h2>Skills</h2>
        <div>${portfolioData.skills.map((s: string) => `<span class="skill">${s}</span>`).join('')}</div>
        <h2>Experience</h2>
        <ul>${portfolioData.experience.map((e: string) => `<li>${e}</li>`).join('')}</ul>
        <h2>Education</h2>
        <p>${portfolioData.education}</p>
        <h2>Projects</h2>
        <ul>${portfolioData.projects.map((p: string) => `<li>${p}</li>`).join('')}</ul>
      </body>
      </html>
    `;

    const blob = new Blob([portfolioHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio.html';
    a.click();
    URL.revokeObjectURL(url);

    toast({
      title: "Download started",
      description: "Your portfolio has been downloaded",
    });
  };

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary-foreground/10 rounded-full mb-6">
            <Sparkles className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">AI-Powered Portfolio Generator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Transform Your Resume into a
            <span className="block mt-2">Professional Portfolio</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Upload your resume and let our AI create a stunning portfolio website in seconds. 
            Perfect for job seekers and professionals looking to stand out.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!portfolioData ? (
            <Card className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Upload Your Resume
                </h2>
                <p className="text-muted-foreground">
                  Support for PDF, TXT, and DOCX formats
                </p>
              </div>

              {/* File Upload Area */}
              <div className="mb-6">
                <label htmlFor="resume-upload" className="cursor-pointer">
                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-12 text-center hover:border-primary/50 transition-colors">
                    {file ? (
                      <div className="space-y-2">
                        <FileText className="h-12 w-12 mx-auto text-primary" />
                        <p className="text-foreground font-medium">{file.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(file.size / 1024).toFixed(2)} KB
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
                        <p className="text-foreground font-medium">
                          Drop your resume here or click to browse
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Maximum file size: 5MB
                        </p>
                      </div>
                    )}
                  </div>
                </label>
                <input
                  id="resume-upload"
                  type="file"
                  accept=".pdf,.txt,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>

              {/* Manual Input Toggle */}
              <div className="text-center mb-6">
                <Button
                  variant="outline"
                  onClick={() => setManualInput(!manualInput)}
                >
                  {manualInput ? 'Use File Upload' : 'Enter Details Manually'}
                </Button>
              </div>

              {/* Manual Input Form */}
              {manualInput && (
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="skills">Skills (comma-separated)</Label>
                    <Input
                      id="skills"
                      placeholder="React, Node.js, Python, AWS"
                      value={formData.skills}
                      onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience">Experience (one per line)</Label>
                    <Textarea
                      id="experience"
                      placeholder="Led development of e-commerce platform..."
                      rows={4}
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="education">Education</Label>
                    <Input
                      id="education"
                      placeholder="B.Tech in Computer Science, University Name"
                      value={formData.education}
                      onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="projects">Projects (one per line)</Label>
                    <Textarea
                      id="projects"
                      placeholder="AI-powered chatbot using NLP..."
                      rows={4}
                      value={formData.projects}
                      onChange={(e) => setFormData({ ...formData, projects: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {/* Process Button */}
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={processResume}
                disabled={processing || (!file && !manualInput)}
              >
                {processing ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing with AI...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate Portfolio
                  </>
                )}
              </Button>
            </Card>
          ) : (
            <div className="space-y-8">
              {/* Portfolio Preview */}
              <Card className="p-8 animate-fade-in">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Your Portfolio</h2>
                  <div className="space-x-2">
                    <Button variant="outline" onClick={() => setPortfolioData(null)}>
                      Start Over
                    </Button>
                    <Button variant="hero" onClick={downloadPortfolio}>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>

                {/* Portfolio Content */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center pb-6 border-b">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-3xl font-bold">
                      {portfolioData.name.split(' ').map((n: string) => n[0]).join('')}
                    </div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">{portfolioData.name}</h1>
                    <div className="flex justify-center items-center space-x-4 text-muted-foreground">
                      <span className="flex items-center">
                        <Mail className="h-4 w-4 mr-1" />
                        {portfolioData.email}
                      </span>
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {portfolioData.phone}
                      </span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {portfolioData.skills.map((skill: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-primary" />
                      Experience
                    </h3>
                    <ul className="space-y-2">
                      {portfolioData.experience.map((exp: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground">{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Education */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                      Education
                    </h3>
                    <p className="text-muted-foreground">{portfolioData.education}</p>
                  </div>

                  {/* Projects */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-primary" />
                      Projects
                    </h3>
                    <ul className="space-y-2">
                      {portfolioData.projects.map((project: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ResumeToPortfolio;