import { openai } from "../../utils/openAiConfig";

const handler = async (req, res) => {
  const prompt = req.query.prompt;

  if (!prompt) return res.status(400).json({ error: "Prompt missing" });

  if (prompt.length > 400)
    return res.status(400).json({ error: "Prompt is too long" });

  try {
    const response = await openai.createImage({
      prompt: `Create a real world visionary eye catching 8k dedicated concept image on following topic.\n
    Topic: ${prompt}\n`,
      n: 1,
      size: "1024x1024",
    });
    const image_url = response.data.data[0].url;
    res.status(200).json({ image_url });
  } catch (err) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};

export default handler;
