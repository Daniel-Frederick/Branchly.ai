import React from "react";
import "./profile.css";
import Openai from "./openai/openai";
import Claude from "./claude/claude";
import AiLists from "./aiLists/aiLists";
import Input from "./input/input";

const Profile = () => {
  // Make this similar UI to Claude

  // This will be staticly defined at the bottom of the screen
  // You will have the option to hide AI, which will display below prompt

  // This will be able to hide the AI choices and you can choose to drag up the prompt to reveal your question history

  // This will be a floating box

  return (
    // This will be the header component with the buttons to enable or disable specfic ai
    <main>
      <AiLists></AiLists>
      <Input></Input>
    </main>
  );
};

export default Profile;
