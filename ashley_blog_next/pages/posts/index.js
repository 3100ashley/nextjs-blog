import React from "react";
import AllPosts from "../../components/AllPosts";
import axios from "axios";

function Posts({ posts }) {
  return (
    
    <>
      <AllPosts posts={posts}></AllPosts>
    </>
  );
}

export default Posts;
export async function getStaticProps() {
  const postsRes = await axios.get("http://localhost:1337/api/posts");
  return {
    props: {
      posts: postsRes.data.data,
    },
  };
}
