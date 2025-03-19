import React, { useEffect, useState, useRef } from "react";
import "./Input.css";
import Users from "../../services/users.ts";
import { AiInterface } from "../../types/AiInterface";
import UserHistory from "../userHistory/UserHistory"
import Prompts from "../../services/prompts"

interface Prop {
  ais: AiInterface[];
  setAis: React.Dispatch<React.SetStateAction<AiInterface[]>>;
}

const Input: React.FC<Prop> = ({ ais, setAis }) => {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [userInput, setUserInput] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);

  const handleClick = async () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value.trim();
      if (inputValue !== "") {
        setUserInput(inputValue);
        inputRef.current.value = "";
        setHistory((prevHistory) => [...prevHistory, inputValue]);

        // TODO: Change this so its not hard coded
        const prompt = {
          user_id: 1,
          prompt: userInput,
        }

        try {
          await Prompts.enterPrompt(prompt)
          console.log("Data: ", data);
        } catch (e) {
          console.log("Error: Prompt in Input component failed: ", e)
        }
      } else {
        console.log("Input is empty!");
      }
    }
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleClick();
    }
  };

  const handleActiveToggle = (index: number) => {
    setAis((prevAis) =>
      prevAis.map((ai, i) => (i === index ? { ...ai, active: !ai.active } : ai))
    );
  };

  useEffect(() => {
    console.log("userInput: ", userInput);
  }, [userInput]);

  return (
    <section id="rootInput">
      {/* Input Prompt */}
      <div id="input">
        <textarea
          placeholder="Enter prompt..."
          onKeyDown={handleEnterPress}
          ref={inputRef}
        />
        {/* TODO: Change it so if when there is no valid text input in the textarea,
                  or there are no active ais, then the button is disabled and you can
                  not hit enter in the textarea. */}
        {/* TODO: Make the checkboxes persistent */}
        <button onClick={handleClick}>Enter</button>
      </div>

      {/* Select AI */}
      <div id="selectable">
        <div>
          {ais.map((ai, index) => (
            <label className="checkbox-wrapper" key={ai.name}>
              <input
                className="checkbox-input"
                type="checkbox"
                checked={ai.active}
                onChange={() => handleActiveToggle(index)}
              />
              <div className="ai-logo">{ai.logo}</div>
            </label>
          ))}
        </div>
      </div>

      {/* History */}
      <div id="history">
        <UserHistory list={history} />
      </div>
    </section>
  );
};

export default Input;
