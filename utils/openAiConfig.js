import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-r6t79MvKwIsMQ579CJAn1odv",
  apiKey: process.env.OPENAI_API_KEY,
});

export const openai = new OpenAIApi(configuration);
