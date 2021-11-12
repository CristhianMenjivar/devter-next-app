import AppLayout from "../../components/AppLayout";
import { URL_BASE } from "../../herlpers/config";
import Post from "../../components/posts/Post";

const Posts = ({ posts = [] }) => {
  return (
    <AppLayout
      seo={{
        title: "Posts",
        description: "Posts page",
        icon: "/favicon.ico",
      }}
      showButtonBack={true}
      titlePage="All Posts"
    >
      {/* tailwind post list */}
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </div>
    </AppLayout>
  );
};

Posts.getInitialProps = async (_ctx) => {
  try {
    const res = await fetch(`${URL_BASE}/post`);
    const result = await res.json();

    const { posts } = result;

    return {
      posts,
    };
  } catch (error) {
    return {
      error,
    };
  }
};

export default Posts;
