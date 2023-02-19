import { openai } from "../../utils/openAiConfig";

const chatgpt = async (req, res) => {
  const prompt = req.query.prompt;

  if (!prompt) return res.status(400).json({ error: "Prompt missing" });

  if (prompt.length > 400)
    return res.status(400).json({ error: "Prompt is too long" });

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Create a cringy motivational quote based on the following topic.\n
      Topic: ${prompt}\n
      Cringy motivational quote:`,
    max_tokens: 400,
    temperature: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
    // top_p: 1,
    // n: 1,
    // stream: false,
    // logprobs: null,
    // stop: "\n",
  });

  const quote = completion.data.choices[0].text;

  res.status(200).json({ quote });
};

export default chatgpt;
