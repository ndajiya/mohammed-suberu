import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-semibold">
            Portfolio
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="px-4 py-2 hover:bg-secondary rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 hover:bg-secondary rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/portfolio"
                className="px-4 py-2 hover:bg-secondary rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/blog"
                className="px-4 py-2 hover:bg-secondary rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};