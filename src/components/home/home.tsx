import React from "react";
import "./home.css";
import logo from "../../assets/branchlyai.jpg"; // Ensure you have a relevant image

// This component will contain home page:
// The Logo: A magnifiing glass looking at 'AI'
// The name: AI Prompt Explorer
// Google OAuth Login: https://www.youtube.com/watch?v=tgO_ADSvY1I
const Home = () => {
  return (
    <div className="home-container">
      {/* Logo Section */}

      <div className="logo">
        <img src={logo} alt="AI Prompt Explorer Logo" />
      </div>

      {/* Title */}
      <h1 className="title">AI Prompt Explorer</h1>

      {/* Google Authentication */}
      <button>Google</button>

    </div>
  );
};

export default Home;
