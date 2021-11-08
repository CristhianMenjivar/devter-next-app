import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AppLayout from "../../components/AppLayout";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const router = useRouter();

  const handlerBack = () => router.back();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <AppLayout
      seo={{
        title: "Posts",
        description: "Posts page",
        icon: "/favicon.ico",
      }}
      showButtonBack={true}
    >
      <h1>Posts</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </AppLayout>
  );
};

export default Posts;
