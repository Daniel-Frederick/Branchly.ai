import React from "react";
import { AiInterface } from "../../types/AiInterface"

interface Prop {
  ais: AiInterface[]
}

const AiLists: React.FC<Prop> = ({ais}: ) => {
  return (
    <section id="aiLists" className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {ais.map((ais) => (
        <div key={ais.name} className={`p-4 rounded-xl shadow-lg text-white ${ais.color} flex flex-col items-center text-center`}>
          {/* Logo */}
          <div className="text-4xl">{ais.logo}</div>

          {/* AI Name */}
          <div className="font-bold text-lg mt-2 break-words w-full">{ais.name}</div>

          {/* Call Button */}
          <button
            onClick={ais.call}
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

