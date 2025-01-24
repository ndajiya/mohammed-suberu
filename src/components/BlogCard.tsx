import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  tags: string[];
}

export const BlogCard = ({ title, excerpt, date, slug, tags }: BlogCardProps) => {
  return (
    <Link to={`/blog/${slug}`} className="block transform transition-all hover:-translate-y-1">
      <Card className="h-full glass-card">
        <CardHeader>
          <div className="flex gap-2 mb-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <CardTitle className="line-clamp-2">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{date}</p>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
};