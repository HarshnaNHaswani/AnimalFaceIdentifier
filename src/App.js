import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🦁": "Lion",
  "🦊": "Fox",
  "🐯": "Tiger",
  "🐭": "Mouse",
  "🦒": "Giraffe",
  "🐹": "Hamster",
  "🐻": "Bear",
  "🐺": "Wolf",
  "🐵": "Monkey",
  "🐮": "Cow"
};
var emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [message, setMessage] = useState("");

  function emojiInputHandler(event) {
    var input = event.target.value;
    var msg;
    if (input in emojiDictionary) {
      msg = emojiDictionary[input];
    } else {
      msg = "We don't have the meaning of this in our dictionary, sorry!!";
    }
    setMessage(msg);
  }

  function emojiClickHandler(emoji) {
    var msg = emojiDictionary[emoji];
    setMessage(msg);
  }
  return (
    <div className="App">
      <h1> Animal Face Identifier</h1>

      <input onChange={emojiInputHandler} />

      <div>{message}</div>

      <h2>Emojis in Dictionary</h2>
      <section>
        {emojiList.map((emoji) => {
          return (
            <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
              {emoji}
            </span>
          );
        })}
      </section>
    </div>
  );
}
