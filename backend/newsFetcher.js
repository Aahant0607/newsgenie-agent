const axios = require('axios');

async function fetchNews() {
  const res = await axios.get('https://newsapi.org/v2/top-headlines', {
    params: { country: 'in', apiKey: process.env.NEWS_API_KEY }
  });
  return res.data.articles;
}

module.exports = fetchNews;
