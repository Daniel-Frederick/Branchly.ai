import React from "react";
import "./profile.css";
import Openai from "./openai/openai";
import Claude from "./claude/claude";

const Profile = () => {
  return (
    <main>
      <div className="header">Profile Page</div>
      <Openai></Openai>
      <Claude></Claude>
    </main>
  );
};

export default Profile;
