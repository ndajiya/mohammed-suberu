export interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  slug: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    title: "Getting Started with Web Development",
    excerpt: "Learn the fundamentals of web development and start your journey as a developer.",
    content: `
      <h2>Starting Your Web Development Journey</h2>
      <p>Web development is an exciting field that combines creativity with technical skills. As you begin your journey, you'll encounter three core technologies:</p>
      <ul>
        <li><strong>HTML</strong> - The backbone of web content</li>
        <li><strong>CSS</strong> - The styling language that makes websites beautiful</li>
        <li><strong>JavaScript</strong> - The programming language that adds interactivity</li>
      </ul>
      <h3>Why Learn Web Development?</h3>
      <p>The demand for web developers continues to grow as businesses increasingly rely on web applications. Whether you're interested in freelancing, joining a startup, or working for a large corporation, web development skills are highly valuable.</p>
      <h3>Getting Started</h3>
      <p>Begin with HTML and CSS basics, then move on to JavaScript fundamentals. Practice building simple websites and gradually increase complexity as you learn. Remember, every expert was once a beginner!</p>
    `,
    date: "2024-02-20",
    slug: "getting-started-web-development",
    tags: ["Web Development", "Beginners"]
  },
  {
    title: "Modern CSS Techniques",
    excerpt: "Explore modern CSS techniques and best practices for building beautiful websites.",
    content: `
      <h2>Modern CSS Techniques for Better Websites</h2>
      <p>CSS has evolved significantly in recent years, introducing powerful features that make web design more efficient and flexible.</p>
      <h3>CSS Grid and Flexbox</h3>
      <p>Modern layouts are built using CSS Grid and Flexbox. These tools provide powerful ways to create responsive designs with minimal code.</p>
      <h3>CSS Custom Properties</h3>
      <p>Variables in CSS, known as Custom Properties, allow for more maintainable and dynamic stylesheets. They're especially useful for theming and responsive design.</p>
      <h3>Modern Selectors</h3>
      <p>New CSS selectors like :is(), :where(), and :has() provide more powerful ways to target elements while keeping specificity under control.</p>
    `,
    date: "2024-02-18",
    slug: "modern-css-techniques",
    tags: ["CSS", "Design"]
  },
  {
    title: "Understanding Economic Personality",
    excerpt: "Explore how personality traits influence economic decision-making and financial behavior.",
    content: `
      <h2>The Impact of Personality on Economic Decisions</h2>
      <p>Economic personality refers to how individual psychological traits influence financial decision-making and economic behavior.</p>
      <h3>Key Personality Traits in Economics</h3>
      <p>Research has identified several personality traits that significantly impact economic decisions:</p>
      <ul>
        <li><strong>Risk Tolerance</strong> - How comfortable individuals are with financial uncertainty</li>
        <li><strong>Time Preference</strong> - The tendency to prefer immediate or delayed rewards</li>
        <li><strong>Self-Control</strong> - The ability to resist immediate gratification for long-term benefits</li>
      </ul>
      <h3>Practical Applications</h3>
      <p>Understanding your economic personality can help you make better financial decisions and develop more effective money management strategies.</p>
      <h3>The Role of Psychology in Markets</h3>
      <p>Markets are influenced by collective psychological factors, making economic personality a crucial factor in understanding market behavior.</p>
    `,
    date: "2024-02-15",
    slug: "understanding-economic-personality",
    tags: ["Economics", "Psychology"]
  }
];