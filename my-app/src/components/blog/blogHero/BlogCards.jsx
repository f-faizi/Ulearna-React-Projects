import BlogCard from "./BlogCard";

function BlogCards({ posts }) {
  return (
    <div>
      <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard post={post} key={post.title} />
        ))}
      </div>
    </div>
  );
}

export default BlogCards;
