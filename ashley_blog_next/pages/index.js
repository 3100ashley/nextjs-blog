import React from "react";
import axios from "axios";
import HomeHeader from "../components/HomeHeader";
import HomeLatestPost from "../components/HomeLatestPost";
import styles from "../styles/Home.module.css";
import Displayforum from "./Comps/Displayforum";
import { readForum, createQuestion } from "./api/index";
import { react, useState, useEffect } from "react";

function Home({ posts }) {
  const [question, setQuestions] = useState({});
  const [response, setResponse] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await readForum();
      setResponse(result.data.data);
    };
    fetchData();
  }, []);
  
  return (
    <>
      <HomeHeader></HomeHeader>
      <HomeLatestPost posts={posts}></HomeLatestPost>
      <div className={styles.container}>
        <Displayforum response={response}/>
      </div>
    </>
  );
}
export default Home;

export async function getStaticProps() {
  const postsRes = await axios.get("http://localhost:1337/api/posts");

  return {
    props: {
      posts: postsRes.data.data,
    },
  };
}
