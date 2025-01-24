import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-background/50 -z-10" />
        <div className="container mx-auto px-4 text-center animate-fadeIn">
          <Badge variant="secondary" className="mb-4">
            Welcome to my portfolio
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Creating Digital Experiences
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm a developer passionate about building beautiful and functional web applications
            that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/portfolio">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">Read My Blog</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;