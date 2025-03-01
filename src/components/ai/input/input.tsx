import React, { useEffect, useState, useRef} from "react";
import "./input.css";
import axios from "axios"

const Input = () => {
  const [data, setData] = useState(null);
  const inputRef = useRef(null);
  const [userInput, setUserInput] = useState("");

  const handleClick = () => {
    if (inputRef.current && inputRef.current.value.trim() !== "") {
      setUserInput(inputRef.current.value)
      inputRef.current.value = "";
    } else {
      console.log("Input is empty!")
    }
  }

  useEffect(() => {
    console.log("userInput: ", userInput)
  }, [userInput]);

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
        {/* Give list of selectable AI */}
        <p>put the list of img elements here</p>
      </div>

      {/* History */}
      <div id="history">
     </div>
    </section>
  );
};

export default Input;
