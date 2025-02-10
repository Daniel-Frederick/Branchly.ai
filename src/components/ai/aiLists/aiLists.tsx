import React from "react";
import "./aiLists.css";

interface AiInterface {
  name: string;
  call: () => void;
  color: string;
  logo: string;
  active: boolean;
}

// Make this a Global variable
const ais: AiInterface[] = [
  {
    name: "OpenAI",
    call: () => {
      console.log("returned OpenAI");
    },
    color: "green",
    logo: "OpenAI Logo",
    active: true,
  },
  {
    name: "Claude",
    call: () => {
      console.log("returned Claude");
    },
    color: "yellow",
    logo: "Claude Logo",
    active: true,
  },
  {
    name: "Claude",
    call: () => {
      console.log("returned Claude");
    },
    color: "blue",
    logo: "Claude Logo",
    active: true,
  },
  {
    name: "Clauffffffffffffffffffffde",
    call: () => {
      console.log("returned Claude");
    },
    color: "red",
    logo: "Claude Logo",
    active: true,
  },
  {
    name: "Clauasdfasfasdfadfde",
    call: () => {
      console.log("returned Claude");
    },
    color: "orange",
    logo: "Claude Logo",
    active: true,
  },
];

const AiLists: React.FC = () => {
  return (
    <section id="aiLists">
      {ais.map((ai) => (
        <div key={ai.name} style={{ backgroundColor: ai.color }}>
          <div className="header">{ai.name} Comp</div>
          <div className="logo">{ai.logo}</div>
          <p>{ai.name} AI</p>
          <button onClick={ai.call}>Call AI</button>
        </div>
      ))}
    </section>
  );
};

export default AiLists;
