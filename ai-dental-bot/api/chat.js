export default async function handler(req, res) {

  const userMessage = req.body.message;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${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}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are a dental clinic assistant.
- Be simple and friendly
- Always suggest booking appointment
- Do not give medical diagnosis
`
        },
        {
          role: "user",
          content: userMessage
        }
      ]
    })
  });

  const data = await response.json();

  res.status(200).json({
    reply: data.choices[0].message.content
  });
}