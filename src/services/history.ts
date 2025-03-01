import axios from "axios"

class UserHistory {
  // Define the base URL of your backend API (make sure this matches your Flask app's URL)
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  // Method to fetch user history (GET request)
  async getUserHistory(): Promise<string> {
    try {
      // Replace '/api/get-history' with the actual endpoint from your Flask API
      const response = await axios.get(`${this.baseURL}/`);

      return response.data;
    } catch (error) {
      console.error("Error fetching user history:", error);
      throw new Error("Failed to fetch user history.");
    }
  }
}

export default new UserHistory("http://127.0.0.1:5000");
