const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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", // Replace this with your actual API key
});

export async function generateWebsiteCode(prompt) {
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 1024,
    n: 1,
    stop: null,
    temperature: 0.7,
  });

  return completion.data.choices[0].text;
}

