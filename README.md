# NewsGenie: Autonomous Personalized News Delivery Agent

## Problem Statement
The digital news landscape overwhelms users with information from countless sources. Manual curation is time-consuming and often misses relevant stories. There is a need for an autonomous agent that fetches, analyzes, and delivers the most important news, tailored to each user’s interests, with zero manual intervention.

## Proposed Solution
NewsGenie is an AI-powered agent that:
- Aggregates news from multiple trusted sources in real-time
- Uses LLMs to summarize and rank stories by relevance and user interest
- Delivers a daily digest of 10–15 top news items, personalized for each user
- Continuously learns from user feedback to refine recommendations
- Requires no manual prompts or curation

## Technology Stack
- Frontend: React.js
- Backend: Node.js, Express
- AI/ML: OpenAI GPT-4o (Azure API)
- News Aggregation: NewsAPI, Google News API
- Database: MongoDB
- Authentication: JWT
- Hosting: Vercel/Netlify

## How to Run
1. Clone the repo
2. Set up API keys in `.env`
3. Run backend: `npm install && npm start`
4. Run frontend: `cd client && npm install && npm start`

## Contributors
- [Aahant Kumar]
