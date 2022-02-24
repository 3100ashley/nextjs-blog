import React, { useState } from "react";
import style from "../../styles/Home.module.css";
import Link from "next/link";
import axios from "axios";
function Displayforum({ response }) {
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState("");
  const [id, setId] = useState("");
  const [a, formerArray] = useState([]);


  const submitAnswer = () => {
    try {
      axios.put(`http://localhost:1337/api/strapi-forums/${id}`, {
        Answers: [...a, answer],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className={style.topcont}>
        <h1 className={style.heading}>Display forum</h1>
        <div>
          <Link href="/upload">
            <button>Ask a question</button>
          </Link>
          <button>Login</button>
        </div>
      </div>
      <h2 className={style.subheading}>Questions</h2>

      {response.map((response, index) => (
        <div key={index}>
          <div className={style.userinfo}>
            <p>Posted By: {response.attributes.Username}</p>
          </div>

          <div className={style.questioncont}>
            <p className={style.question}>{response.attributes.Questions}</p>
          </div>

          <div className={style.answercont}>
            <h2 className={style.subheading}>Answers</h2>
            <div className={style.inputanswer}>
              <form>
                <textarea
                  type="text"
                  placeholder="Enter your answer"
                  rows="5"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                />
                <button
                  onClick={() => {
                    setId(response.id);
                    formerArray(response.attributes.Answers);
                    submitAnswer();
                  }}
                >
                  Post
                </button>
              </form>
            </div>
            <button className={style.showanswer} onClick={() => setShow(!show)}>
              {show ? "Hide Answers" : "Show Answers"}
            </button>
            {show ? (
              <div className={style.answers}>
                {response.attributes.Answers.map((answers, i) => (
                  <div className={style.eachanswer} key={i}>
                    <p className={style.username}>
                      {response.attributes.Answername}
                    </p>
                    <p className={style.answertext}>{answers}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Displayforum;
