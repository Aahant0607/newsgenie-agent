const express = require('express');
const fetchNews = require('./newsFetcher');
const summarize = require('./summarizer');
const personalize = require('./personalize');

const app = express();
app.use(express.json());

app.get('/api/digest/:userId', async (req, res) => {
  try {
    const articles = await fetchNews();
    const summaries = await Promise.all(articles.map(article => summarize(article.content)));
    const personalized = personalize(req.params.userId, summaries);
    res.json({ digest: personalized });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
