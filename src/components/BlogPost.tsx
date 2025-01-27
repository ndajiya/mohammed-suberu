import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogPostProps {
  title: string;
  content: string;
  date: string;
  tags: string[];
}

export const BlogPost = ({ title, content, date, tags }: BlogPostProps) => {
  return (
    <Card className="max-w-4xl mx-auto glass-card">
      <CardHeader>
        <div className="flex gap-2 mb-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-3xl">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{date}</p>
      </CardHeader>
      <CardContent>
        <div className="prose prose-invert max-w-none">
          {content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};