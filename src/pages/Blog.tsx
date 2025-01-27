import { BlogCard } from '@/components/BlogCard';

export const BLOG_POSTS = [
  {
    title: "Getting Started with Web Development",
    excerpt: "Learn the fundamentals of web development and start your journey as a developer. This comprehensive guide covers HTML, CSS, and JavaScript basics.",
    content: `Web development is an exciting field that combines creativity with technical skills. As you begin your journey, it's important to understand the core technologies that power the web.

    HTML (HyperText Markup Language) forms the foundation of web content, providing structure and meaning to your pages. CSS (Cascading Style Sheets) brings your content to life with styling and layout capabilities. JavaScript adds interactivity and dynamic behavior to your websites.

    Starting with these fundamentals will give you a solid foundation to build upon as you progress in your web development career. Remember to practice regularly and build small projects to reinforce your learning.`,
    date: "2024-02-20",
    slug: "getting-started-web-development",
    tags: ["Web Development", "Beginners"]
  },
  {
    title: "Modern CSS Techniques",
    excerpt: "Explore modern CSS techniques and best practices for building beautiful websites. Learn about Flexbox, Grid, and CSS custom properties.",
    content: `CSS has evolved significantly over the years, introducing powerful features that make web design more intuitive and flexible. Modern CSS techniques have revolutionized how we approach layout and styling.

    Flexbox and Grid have transformed how we handle layout in CSS. Flexbox excels at one-dimensional layouts, while Grid provides powerful tools for two-dimensional layouts. Together, they form a comprehensive system for creating responsive designs.

    CSS custom properties (variables) allow for more maintainable and dynamic styling. Combined with modern pseudo-classes and pseudo-elements, we can create more interactive and engaging user interfaces with less JavaScript.`,
    date: "2024-02-18",
    slug: "modern-css-techniques",
    tags: ["CSS", "Design"]
  },
  {
    title: "Understanding Economic Personality",
    excerpt: "Explore how personality traits influence economic decision-making and financial behavior in different contexts.",
    content: `Economic personality is a fascinating intersection of psychology and economics that helps us understand how individual differences affect financial decisions and economic behavior.

    Research has shown that personality traits like conscientiousness, risk tolerance, and time preference play crucial roles in financial decision-making. These traits influence everything from saving habits to investment strategies and entrepreneurial success.

    Understanding your economic personality can help you make better financial decisions and develop strategies that align with your natural tendencies while compensating for potential blind spots in your decision-making process.`,
    date: "2024-02-15",
    slug: "understanding-economic-personality",
    tags: ["Economics", "Psychology"]
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12 animate-fadeIn">
          <h1 className="text-3xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground">
            Thoughts, tutorials, and insights about web development, economics, and design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;