import React from "react";
import AiLists from "../../components/aiLists/AiLists";
import Input from "../../components/input/Input";
import { AiInterface } from "../../types/AiInterface";
import { useAuth } from "../../FirebaseProvider";

const Profile = () => {
  const ais: AiInterface[] = [
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
      call: () => console.log("returned VeryLongAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
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
  ];


  // This should not be here, here for testing
  const { user } = useAuth();

  return (
    <main>
      {user ? (
        <h1>Welcome, {user.displayName}</h1>
      ) : (
        <h1>Welcome, Random</h1>
      )}
      {/* TODO: This might be wrong, both components need to have access
                to the same ai array, not separate copies.
                This is because we need the "active" property to dynamically be shared.
                Do we need to use Redux? */}
      <AiLists ais={ais}></AiLists>
      <Input ais={ais}></Input>
    </main>
  );
};

export default Profile;
