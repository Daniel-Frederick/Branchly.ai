import React, { useEffect } from "react";
import "./Home.css";
import logo from "../../assets/branchlyai.jpg";
import { signInWithGoogle, logout } from "../../firebase.ts";
import { useAuth } from "../../FirebaseProvider.tsx";
import Users from "../../services/users";

const Home = () => {
  const { user } = useAuth();

  useEffect(() => {
    const enterUser = async () => {
      if (user) {
        try {
          // Asynchronously store new user in database
          await Users.enterUser(user);
        } catch (error) {
          console.error("Error entering user: ", error);
        }  
      }
    }
    enterUser();
  }, [user]);

  return (
    <div className="home-container">
      {/* Logo Section */}

      <div className="logo">
        <img src={logo} alt="Branchly.ai Logo" />
      </div>

      {/* Title */}
      <h1 className="title">AI Prompt Explorer</h1>

      {/* Google Authentication */}
      <div>
        {user ? (
          <div>
            {/* Displaying the user's profile picture */}
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="Profile"
                style={{ width: 100, borderRadius: "50%" }}
              />
            )}
            <h1 className="title">Welcome, {user.displayName}</h1>

            <button onClick={logout}>Sign Out</button>
          </div>
        ) : (
          <div>
            <h1 className="title">Please sign in to view your profile.</h1>
            <button onClick={signInWithGoogle}>Sign In with Google</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
