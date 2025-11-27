import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mile83_llm_functions from "./llm_functions/function.mjs";

//  define module classes
const app = express();
const LLM_function = new mile83_llm_functions();

// define middle wares
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// llm functions routes
app.get(
  "/Mile83LLMModel/api/v1/isAIServerOnline",
  LLM_function.isAIServerOnline
);

app.post("/Mile83LLMModel/api/v1/runLLMModel", LLM_function.runModel);

//  try to listen to llm model server
try {
  app.listen(process.env.PORT, () => {
    console.log("[+]AI Server is currently running [+]");
  });
} catch (err) {
  console.error("Error Starting Ai Server");
}
