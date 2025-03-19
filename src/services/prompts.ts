import axios from "axios";

class Prompts {
  private baseURL: string = "http://127.0.0.1:5000";

  async enterPrompt(prompt): Promise<void> {
    try {
      const response = await axios.post(`${this.baseURL}/api/add_prompt`, {
        user_id: prompt.user_id,
        prompt: prompt.prompt,
      })

      console.log("Prompt added to database: ", response.data);
    } catch (e) {
      console.log("Error: Could not enter a new Prompt: ", e);
      throw new Error("Failed to enter Prompt")
    }
  }
}

export default new Prompts();
