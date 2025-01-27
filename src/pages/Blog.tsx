import { BlogCard } from '@/components/BlogCard';

const SAMPLE_POSTS = [
  {
    title: "Getting Started with Web Development",
    excerpt: "Learn the fundamentals of web development and start your journey as a developer.",
    date: "2024-02-20",
    slug: "getting-started-web-development",
    tags: ["Web Development", "Beginners"]
  },
  {
    title: "Modern CSS Techniques",
    excerpt: "Explore modern CSS techniques and best practices for building beautiful websites.",
    date: "2024-02-18",
    slug: "modern-css-techniques",
    tags: ["CSS", "Design"]
  },
  {
    title: "Understanding Economic Personality",
    excerpt: "Deep dive into React Hooks and how they can improve your React applications.",
    date: "2024-02-15",
    slug: "understanding-economic-personality",
    tags: ["React", "JavaScript"]
  }
];

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
          {SAMPLE_POSTS.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;