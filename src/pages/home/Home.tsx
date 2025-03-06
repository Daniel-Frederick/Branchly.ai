import React, { useEffect } from "react";
import "./Home.css";
import logo from "../../assets/branchlyai.jpg"; // Ensure you have a relevant image
import { signInWithGoogle, logout } from "../../firebase.ts";
import { useAuth } from "../../FirebaseProvider.tsx";
import UserHistory from "../../services/history.ts";

// This component will contain home page:
// The Logo: A magnifiing glass looking at 'AI'
// The name: AI Prompt Explorer
// Google OAuth Login: https://www.youtube.com/watch?v=tgO_ADSvY1I
const Home = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      UserHistory.enterUser(user);
    }
  }, [user]);

  return (
    <div className="home-container">
      {/* Logo Section */}

      <div className="logo">
        <img src={logo} alt="AI Prompt Explorer Logo" />
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

// uid: Unique identifier
// displayName: User's name from Google profile
// email: User's email address
// photoURL: URL to the user's profile picture
// emailVerified: Boolean indicating if email is verified
// phoneNumber: If available
// providerData: Additional provider-specific information
// metadata: Contains creation time and last sign-in time
