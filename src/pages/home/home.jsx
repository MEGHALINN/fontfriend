import React, { useState } from "react";
import "./home.css";
import logo from "../../images/fontlogo.png";

export default function Home() {
  const [pgName, setPgName] = useState(""); // State to store the PG name
  const [paragraph, setParagraph] = useState(""); // State to store the paragraph
  const handlePgNameChange = (e) => {
    setPgName(e.target.value);
  };
  const handleParagraphChange = (e) => {
    setParagraph(e.target.value);
  };

  return (
    <div className="dashboard">
      <div className="nav">
        <div className="nav-left">
          <img src={logo} alt="" />
        </div>
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
              <input type="text" value={pgName} onChange={handlePgNameChange} />
            </div>
            {pgName && <p>Entered word: {pgName}</p>} {/* Display entered word */}
          </div>
        </div>
      </div>
    </div>
  );
}
