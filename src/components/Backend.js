const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/chat', (req, res) => {
  const userMessage = req.body.message;
  // Call to a chatbot service (e.g., OpenAI) or use an AI library for response generation
  const botResponse = `You asked: ${userMessage}`; // Example, replace with actual AI response logic

  res.json({ reply: botResponse });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
