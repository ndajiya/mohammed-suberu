import { useParams } from 'react-router-dom';
import { BlogPost } from '@/components/BlogPost';
import { blogPosts } from '@/data/blogPosts';
import { Navigate } from 'react-router-dom';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return <BlogPost {...post} />;
};

export default BlogPostPage;