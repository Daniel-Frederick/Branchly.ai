// Component for styling each AI in the list
import React from "react";
import { AiInterface } from "../../types/AiInterface";
import "./AiLists.css";

interface Prop {
  ais: AiInterface[];
}

const AiLists: React.FC<Prop> = ({ ais }) => {
  return (
    <section
      id="aiLists"
      className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
    >
      {ais.filter((ai) => ai.active).map((ai) => (
        <div
          key={ai.name}
          className={`p-4 rounded-xl shadow-lg text-white ${ai.color} flex flex-col items-center text-center`}
        >
          {/* Logo */}
          <div className="text-4xl">{ai.logo}</div>

          {/* AI Name */}
          <div className="font-bold text-lg mt-2 break-words w-full">
            {ai.name}
          </div>

          {/* Call Button */}
          <button
            onClick={ai.call}
            className="mt-3 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-200"
          >
            Call AI
          </button>
        </div>
      ))}
    </section>
  );
};

export default AiLists;
