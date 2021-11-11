import AppLayout from "../../components/AppLayout";
import { URL_BASE } from "../../herlpers/config";

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
          <div className="w-full sm:1/2 md:w-1/2 lg:w-1/4 p-3" key={post.id}>
            <div className="bg-white rounded shadow overflow-hidden border border-gray-300">
              {/* @next/next/no-img-element */}
              <img className="w-full" src={post.thumbnail} alt={post.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{post.title}</div>
                <p className="text-gray-700 text-base">{post.body}</p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  #winter
                </span>
              </div>
            </div>
          </div>
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
