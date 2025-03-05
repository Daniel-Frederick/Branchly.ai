import React, { useEffect, useState, useRef } from "react";
import "./Input.css";
import axios from "axios";
import UserHistory from "../../services/history.ts";
import { AiInterface } from "../../types/AiInterface";

interface Prop {
  ais: AiInterface[];
}

const Input: React.FC<Prop> = ({ ais }) => {
  const [data, setData] = useState(null);
  const inputRef = useRef(null);
  const [userInput, setUserInput] = useState<string>("");

  const handleClick = async () => {
    const inputValue = inputRef.current.value.trim();
    if (inputRef.current && inputValue !== "") {
      setUserInput(inputValue);
      inputRef.current.value = "";
      const data = await UserHistory.getUserHistory();
      console.log("Data: ", data);
    } else {
      console.log("Input is empty!");
    }
  };

  useEffect(() => {
    console.log("userInput: ", userInput);
  }, [userInput]);

  // const handleEnterPress(event) {
  //   if (event.key !== "Enter") return;
  //   handleClick();
  //   // onKeyDown={handleEnterPress}
  // }

  return (
    // This will be the header component with the buttons to enable or disable specfic ai
    <section id="rootInput">
      {/* Input Prompt */}
      <div id="input">
        <input type="text" placeholder="Enter prompt..." ref={inputRef} />
        <button onClick={handleClick}>Enter</button>
      </div>

      {/* Select ai */}
      <div id="selectable">
        {/* Make the images horizontal  */}
        <div>
          {ais.map((ai) => (
            <label className="checkbox-wrapper" key={ai.name}>
              <input className="checkbox-input" type="checkbox" defaultChecked/>
              <div className="ai-logo">{ai.logo}</div>
            </label>
          ))}
        </div>
      </div>

      {/* History */}
      <div id="history"></div>
    </section>
  );
};

export default Input;
