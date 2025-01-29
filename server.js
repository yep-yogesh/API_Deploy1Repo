// Load the dotenv package
require('dotenv').config();

// Access environment variables
const config = {
  apiKey: process.env.API_KEY,
  serverSecret: process.env.SERVER_SECRET,
  isKalvian: process.env.IS_KALVIAN === 'true',
};

// Log the variables (for testing)
console.log("API Key:", config.apiKey);
console.log("Server Secret:", config.serverSecret);
console.log("Is Kalvian:", config.isKalvian);
