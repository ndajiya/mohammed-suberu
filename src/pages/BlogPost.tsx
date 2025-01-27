import { useParams } from 'react-router-dom';
import { BlogPost as BlogPostComponent } from '@/components/BlogPost';
import { BLOG_POSTS } from './Blog';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-20 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <BlogPostComponent
          title={post.title}
          content={post.content}
          date={post.date}
          tags={post.tags}
        />
      </div>
    </div>
  );
};

export default BlogPostPage;