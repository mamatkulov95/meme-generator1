import { useState, useEffect } from "react";

import "./Form.css";

export default function Form() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="form">
      <div className="form-input">
        <input
          type="text"
          className="input-top"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          placeholder="Top  text"
        />

        <input
          type="text"
          className="input-bottom"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          placeholder="Bottom text"
        />
      </div>

      <div>
        <button onClick={getMemeImage} className="form-btn">
          Get a new meme image
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme-image"></img>
        <h2 className="meme-text top-text">{meme.topText}</h2>
        <h2 className="meme-text bottom-text">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
