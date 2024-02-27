import React, { useState } from "react";
import axios from 'axios';
import "./home.css";
import logo from "../../images/fontlogo.png";

export default function Home() {
  const [word, setWord] = useState(""); // State to store the Word
  const [paragraph, setParagraph] = useState(""); // State to store the paragraph
  const [pronunciation, setPronunciation] = useState(""); // State to store the pronounciation

  const handleWordChange = (e) => {
    setWord(e.target.value);
  };
  const handleParagraphChange = (e) => {
    setParagraph(e.target.value);
  };

  let submit = async(e) =>{
    e.preventDefault()

    try{
      /*alert("submitted")*/
      await axios.post("http://localhost:5000/", {word})

      const response = await axios.post("http://localhost:5000/", { word });
      setPronunciation(response.data.joinedSyllables);
    } catch(e){ console.log(e) }
  }

  return (
    <div className="dashboard">
      <div className="nav-left">
          <img src={logo} alt="" />
        </div>
      <div className="dashboard-cont">
        <div className="side-bar">
          <div>
            <a href="/">Home</a>
          </div>
        </div>
        <div className="main-cont">
        <div className="addval">
            <h2>PARAGRAPH</h2>
            <div>
              <textarea value={paragraph} onChange={handleParagraphChange}></textarea>
            </div>
            {paragraph && <p>Entered paragraph: {paragraph}</p>} {/* Display entered paragraph */}
          </div>
        </div>
        <div className="right-bar">
          <div className="addval">
          <h2>WORD</h2>
            <div>
              <label>Enter your word:</label>
              <input type="text" value={word} onChange={handleWordChange} />
              <button type="button" onClick={submit}>SUBMIT</button>
            </div>
            {word && <p>Entered word: {word}</p>} {/* Display entered word */}
            {pronunciation && <p>Pronunciation: {pronunciation}</p>} {/* Display pronounciation word */}
          </div>
        </div>
      </div>
    </div>
  );
}
