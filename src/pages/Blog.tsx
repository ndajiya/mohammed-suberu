import { BlogCard } from '@/components/BlogCard';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12 animate-fadeIn">
          <h1 className="text-3xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground">
            Thoughts, tutorials, and insights about web development and design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;