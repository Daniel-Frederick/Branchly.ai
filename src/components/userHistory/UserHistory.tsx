import React, { useState, useEffect } from "react";
import Prompts from "../../services/prompts";

const UserHistory = () => {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    async function fetchPrompts() {
      try {
        const data = await Prompts.get_all_prompts();
        setPrompts(data.prompts);
      } catch (error) {
        console.error("Error fetching prompts:", error);
      }
    }
    fetchPrompts();
  }, []);

  return (
    <>
      {prompts.map((prompt, index) => (
        <p key={index}>{prompt.prompt_text}</p>
      ))}
    </>
  );
};

export default UserHistory;

