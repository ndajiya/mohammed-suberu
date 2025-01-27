import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  title: string;
  content: string;
  date: string;
  tags: string[];
}

export const BlogPost = ({ title, content, date, tags }: BlogPostProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Blog
      </Link>
      <Card className="glass-card">
        <CardHeader>
          <div className="flex gap-2 mb-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <CardTitle className="text-3xl mb-2">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{date}</p>
        </CardHeader>
        <CardContent>
          <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
        </CardContent>
      </Card>
    </div>
  );
};