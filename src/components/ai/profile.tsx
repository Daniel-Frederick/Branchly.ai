import React from "react";
import "./profile.css";
import Openai from "./openai/openai";
import Claude from "./claude/claude";
import AiLists from "./aiLists/aiLists";
import Input from "./input/input";

const Profile = () => {
  return (
    <main>
      <AiLists></AiLists>
      <Input></Input>
    </main>
  );
};

export default Profile;
