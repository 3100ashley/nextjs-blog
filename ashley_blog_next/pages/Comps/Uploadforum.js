
import style from "../../styles/Home.module.css";
import Link from "next/Link";
import { createQuestion } from "../api/index";
import { React, useState } from "react";
function Uploadforum() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const sendData = () => {
    const newQuestion = {
      Title: name,
      Questions: description,
    };
    createQuestion(newQuestion);
  };
  return (
    <div className={style.uploadpage}>
      <div className={style.topcont}>
        <h1>Ask a question</h1>
        <Link href="/">
          <button>Forum</button>
        </Link>
      </div>
      <div className={style.formcont}>
        <form className={style.uploadform}>
          <input
            type="text"
            placeholder="Enter your title"
            maxLength="74"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Enter your description"
            rows="8"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
              <button onClick={() => sendData()}>Submit Question</button>
        </form>
      </div>
    </div>
  );
}
export default Uploadforum;
