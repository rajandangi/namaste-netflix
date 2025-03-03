import OpenAI from "openai";
import { DEEPSEEK_BASE_URL } from "@/utils/constants";

// Initialize OpenAI with the DeepSeek API base URL and API key
const openai = new OpenAI({
  baseURL: DEEPSEEK_BASE_URL,
  apiKey: import.meta.env.VITE_DEEPSEEK_API_KEY,
  dangerouslyAllowBrowser: true,
});

// Function to get a completion from the DeepSeek API
export const completion = async (prompt) => {
  try {
    const res = await await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a knowledgeable and friendly Movie Recommendation system dedicated solely to providing movie recommendations. When responding, provide only a comma-separated list of movie titles with no additional commentary. Use available data on movies, genres, and viewing preferences to generate accurate recommendations. If a query is not directly related to movies—such as topics on politics, sports, or other non-movie subjects—politely refuse to answer and prompt the user to ask about movies only. Maximum 10 movies per request.`,
        },
        { role: "user", content: prompt },
      ],
      model: "deepseek-chat",
    });

    return res.choices[0]?.message?.content;
  } catch (error) {
    return error;
  }
};
