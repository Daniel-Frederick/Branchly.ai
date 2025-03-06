export interface AiInterface {
  name: string; // Name of the AI
  call: () => void; // Method to obtain 
  color: string; // Main color for the AI
  logo: string; // Main logo for the AI
  active: boolean; // Is the AI active or not - This should always start as true
}
