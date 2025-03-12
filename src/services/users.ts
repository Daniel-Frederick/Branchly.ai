import axios from "axios";

class Users {
  // Define the base URL of your backend API (make sure this matches your Flask app's URL)
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  // Method to fetch user history (GET request)
  async getUserHistory(): Promise<string> {
    try {
      // Replace '/api/get-history' with the actual endpoint from your Flask API
      const response = await axios.get(`${this.baseURL}/api`);

      return response.data;
    } catch (error) {
      console.error("Error fetching user history:", error);
      throw new Error("Failed to fetch user history.");
    }
  }

  async enterUser(userData): Promise<void> {
    try {
      const response = await axios.post(`${this.baseURL}/api/add_user`, {
        email: userData.email,
        name: userData.displayName,
        pfp: userData.photoURL,
      });

      console.log("User added to database:", response.data);
    } catch (error) {
      console.error("Error: could not enter new user: ", error);
      throw new Error("Failed to enter user");
    }
  }
}

export default new Users("http://127.0.0.1:5000");
