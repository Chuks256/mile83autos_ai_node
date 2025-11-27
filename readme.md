Mile83 LLM Model API

A lightweight Express.js API server designed to expose LLM (Large Language Model) functions through simple HTTP endpoints. The server checks its online status and runs LLM inference via the mile83_llm_functions module.

🚀 Features

Check Server Status – Verify that the AI server is up and running.

Run LLM Model – Send prompts or parameters to execute the LLM model.

Built with Express, CORS, dotenv, and body-parser.

Easy to deploy and integrate with other services.

📦 Installation

Clone the repository and install dependencies:

npm install

Ensure you have a .env file with:

PORT=4044

▶️ Running the Server

Start the server:

npm start

If successful, you should see:

[+]AI Server is currently running [+]

📡 API Endpoints

1. Check AI Server Status

GET /Mile83LLMModel/api/v1/isAIServerOnline

Response Example:

{
"status": "online",
"message": "AI Server is running"
}

Method implemented by: LLM_function.isAIServerOnline

2. Run LLM Model

POST /Mile83LLMModel/api/v1/runLLMModel

Request Body Example:
{
"prompt": "Explain quantum computing in simple terms.",
"options": {
"temperature": 0.7,
"maxTokens": 200
}
}

Response Example:
{
"output": "Quantum computing is..."
}

Method implemented by: LLM_function.runModel
Behavior depends on the logic inside llm_functions/function.mjs.

🧩 Project Structure
project/
│── llm_functions/
│ └── function.mjs
│── index.js (or similar entry file)
│── package.json
│── .env

🛠️ Technologies Used
Node.js
Express.js
CORS
body-parser
dotenv
openrouter

🤖 Model used:
meta-llama/llama-3-8b-instruct

📝 Notes
Ensure your LLM function handler (mile83_llm_functions) exports isAIServerOnline and runModel as Express route-compatible methods.
The server automatically parses JSON and URL-encoded payloads.
CORS is fully enabled.

⭐ Contributing
Feel free to submit issues or PRs to improve functionality or documentation.
The project is a private repo

📄 License
MIT License
