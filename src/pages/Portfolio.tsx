
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12 animate-fadeIn">
          <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
          <p className="text-muted-foreground">
            A showcase of my recent projects and technical achievements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Actor AI</CardTitle>
              <CardDescription>
                An AI-powered application that helps users practice acting by providing dynamic scene partners and feedback.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">AI Integration</Badge>
              </div>
              <img 
                src="/lovable-uploads/362e5f4e-3edc-4b05-aa1f-5e5f11a065e9.png" 
                alt="Actor AI Preview" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button asChild>
                <a 
                  href="https://actor-ai.lovable.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Afternoon Tea Haven</CardTitle>
              <CardDescription>
                A modern e-commerce platform for a boutique tea shop, featuring an elegant design and seamless shopping experience.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Stripe Integration</Badge>
              </div>
              <img 
                src="/lovable-uploads/041e1cac-6362-472c-82a6-895d01494720.png" 
                alt="Afternoon Tea Haven Preview" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button asChild>
                <a 
                  href="https://afternoon-tea-haven.lovable.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
