import React, { useEffect, useState } from "react";
import PostPreview from "./PostPreview";

function AllPosts({ posts }) {
  function renderPostPreviews() {
    return posts.map((post) => {
      return <PostPreview post={post} key={post.id}></PostPreview>;
    });
  }
  return (
    <>
      <h2>Posts</h2>
      {renderPostPreviews()}
    </>
  );
}

export default AllPosts;
