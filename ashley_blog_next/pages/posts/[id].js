import React from "react";
import axios from "axios";
import MarkdownIt from "markdown-it";

function PostPage({ post }) {
  const md = new MarkdownIt();
  const htmlContent = md.render(post.attributes.content);
  return (
    <>
      <article>
        <header>
          <h1>{post.attributes.title}</h1>
          <h2>{post.attributes.description}</h2>
        </header>
        <section dangerouslySetInnerHTML={{ __html: htmlContent }}></section>
      </article>
    </>
  );
}

export default PostPage;

export async function getStaticProps({ params }) {
  const postRes = await axios.get(
    `http://localhost:1337/api/posts/${params.id}`
  );
  return {
    props: {
      post: postRes.data.data,
    },
  };
}

export async function getStaticPaths() {
  const postRes = await axios.get("http://localhost:1337/api/posts");
  const paths = postRes.data.data.map((post) => {
    return { params: { id: post.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}
