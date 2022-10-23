import "./Form.css";
import React, { useState } from "react";
import memesData from "./memesData";

export default function Form() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArr = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArr.length);
    setMemeImage(memesArr[randomNumber].url);
  }

  return (
    <div className="form">
      <div className="form-input">
        <input type="text" className="input-top"></input>
        <input type="text" className="input-bottom"></input>
      </div>
      <div>
        <button onClick={getMemeImage} className="form-btn">
          Get a new meme image
        </button>
      </div>
      <img src={memeImage} className="meme-image"></img>
    </div>
  );
}
