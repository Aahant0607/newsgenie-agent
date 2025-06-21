// Dummy personalization logic for demo
function personalize(userId, summaries) {
  // In production, use user profile/preferences from DB
  return summaries.slice(0, 15);
}

module.exports = personalize;
