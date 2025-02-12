import React from "react";
import "./input.css";

const Input = () => {
  return (
    // This will be the header component with the buttons to enable or disable specfic ai
    <section id="rootInput">
      {/* Input Prompt */}
      <div id="input">
        <input type="text" placeholder="Enter prompt..." />
      </div>

      {/* Select ai */}
      <div id="selectable">
        {/* Give list of selectable AI */}
        <p>put the list of img elements here</p>
      </div>

      {/* History */}
      <div id="history">
        {/* Give list of past Prompts */}
        <p>put the list of text history elements here</p>
      </div>
    </section>
  );
};

export default Input;
