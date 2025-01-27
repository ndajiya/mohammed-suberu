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
    date: "2025-01-05",
    slug: "getting-started-web-development",
    tags: ["Web Development", "Beginners"]
  },
  {
    title: "Hierarchy of Economic Personality Factors",
    excerpt: "Explore the hierarchy of the factors of economic personality.",
    content: `
<ol><h2><strong><li> Geography</li></strong></h2>
<i>Social Learning Theory</i>
<ul><strong><li>Definition:</strong> Environmental and locational factors that shape economic opportunities.</li>
<strong><li>Examples:</li></strong>
<ul><li>Proximity to trade routes can lead to entrepreneurial cultures.</li>
  <li>Resource-rich regions often drive extractive economic systems.</li></ul></ol>


<ol start="2"><h2><strong><li>Genetics</li></strong></h2>
<i>Social Learning Theory</i>
<ul><strong><li>Definition:</strong> Biological predispositions that might influence behavior, including risk tolerance or impulsivity.</li>
<strong><li>Examples:</li></strong>
<ul><li>Inherited tendencies toward patience or delayed gratification could shape savings habits.</li>
<li>Risk-seeking behavior may have genetic components affecting investment choices.</li></ul></ol>

<ol start="3"><h2><strong><li>Learning(Belief/Experience)</li></strong></h2>
<i>Social Learning Theory</i>
<ul><strong><li>Definition:</strong> How past experiences influence future economic behavior.</li>
<strong><li>Examples:</li></strong>
<ul><li>A person who faced financial hardship may adopt frugal habits.</li>
<li>Someone who experienced success investing may take more risks.</li>
<li>Remote, Possible, Probable, Certain(Positive)</li></ul></ol>

<ol start="4"><h2><strong><li>Personality(identity)</li></strong></h2>
<ul><strong><li>Definition:</strong> Individual traits that influence economic decisions.</li>
<strong><li>Examples:</li></strong>
<ul><li><strong>Locus of Control:</strong>  Determines whether individuals attribute outcomes to internal factors (self-agency) or external factors (environment, fate).
<ul><li><strong>Internal locus:</strong> Individuals believe they can control their economic success through effort and decisions.</li>
<li><strong>External locus:</strong> Individuals see external forces, such as luck or systemic constraints, as decisive factors.</li></ul>
<li><strong>Homo Altruisticus(Homo Reciprocans):</strong> Makes decisions prioritizing others’ (the group's) well-being over personal gain.</li>
<li><strong>Homo Prudens(Homo Moralis):</strong> Prioritizes careful, risk-averse decision-making.</li>
<li><strong>Homo Economicus:</strong> Acts purely out of rational self-interest.</li>
<li><strong>Homo Socialis(Institutionalis):</strong> Operates based on the norms, rules, and shared values of institutions, emphasizing collaboration and the collective good over individual gain.</li></ul></ol>


<ol start="5"><h2><strong><li>Technology</li></strong></h2>
<ul><strong><li>Definition:</strong> The tools and systems that enable or change economic activities.</li>
<strong><li>Examples:</li></strong>
<ul><li>The internet facilitates global e-commerce.</li>
<li>Automation shifts labor demand and production efficiency.</li>
<li>Patents</li></ul></ol>

<ol start="6"><h2><strong><li>Memetics(Sociocultural System)</li></strong></h2>
<h3>a) Culture:</h3>
<ul><strong><li>Definition:</strong> Shared norms and customs that influence behavior.</li>
<strong><li>Examples: </li></strong>
<ul><li>Collectivist cultures may focus on group-oriented economic decisions.</li>
<li>Individualistic cultures may promote entrepreneurial activities.</li></ul></ul>
<h3>b) Religion:</h3>
<ul><strong><li>Definition:</strong> Beliefs that shape values, ethics, and economic actions.</li>
<strong><li>Examples: </li></strong>
<ul><li>Islamic finance prohibits interest (riba), influencing banking systems.</li>
<li>Protestant work ethic emphasizes discipline and productivity.</li></ul></ol>

<ol start="7"><h2><strong><li>Institutions</li></strong></h2>
<ul><strong><li>Definition:</strong> Formal and informal rules that guide economic behavior.</li>
<strong><li>Examples:</li></strong>
<ul><li>Legal systems enforce contracts and property rights.</li>
<li>Informal norms, like trust in communities, affect trade and lending.</li>
<li>Politics: Heterocentrism vs homocentrism</li></ul></ol>

<ol start="8"><h2><strong><li>Wealth(Income)</li></strong></h2>
<ul><strong><li>Definition:</strong> The resources individuals have that shape their choices and preferences.</li>
<strong><li>Examples:</li></strong>
<ul><li>High-income individuals may take greater financial risks.</li>
<li>Low-income households may prioritize basic needs over long-term savings.</li></ul>
</ol>


    `,
    date: "2025-01-25",
    slug: "economic-personality-factors",
    tags: ["Economics", "Psychology"]
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
      <p>Markets are influenced by collective psychological factors, making economic personality a crucial factor in understanding market behavior.Also, 
      rationality assumes people make decisions based on perfect information and careful calculation of costs and benefits. With economic personality 
      rationality can be narrowed down to learning where uncertainty also stems from.</p>
    `,
    date: "2021-01-15",
    slug: "understanding-economic-personality",
    tags: ["Economics", "Psychology"]
  }
];