import React, { useState } from "react";
import AiLists from "../../components/aiLists/AiLists";
import Input from "../../components/input/Input";
import { AiInterface } from "../../types/AiInterface";
import { useAuth } from "../../FirebaseProvider";

const Profile = () => {
  const [ais, setAis] = useState<AiInterface[]>([
    {
      name: "OpenAI",
      call: () => console.log("returned OpenAI"),
      color: "bg-green-500",
      logo: "🧠",
      active: true,
    },
    {
      name: "Claude",
      call: () => console.log("returned Claude"),
      color: "bg-yellow-500",
      logo: "🤖",
      active: true,
    },
    {
      name: "VeryLongAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      call: () =>
        console.log("returned VeryLongAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
      color: "bg-blue-500",
      logo: "⚡",
      active: true,
    },
    {
      name: "ClauFFFFFFFFFFFF",
      call: () => console.log("returned ClauFFFFFFFFFFFF"),
      color: "bg-red-500",
      logo: "💡",
      active: true,
    },
  ]);

  return (
    <main>
      <AiLists ais={ais} />
      <Input ais={ais} setAis={setAis} />
    </main>
  );
};

export default Profile;
