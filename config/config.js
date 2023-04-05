const serverPort = process.env.NEXT_PUBLIC_PORT || 80;
const youtubeApiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const mongoURI = process.env.NEXT_PUBLIC_MONGODB_URI;
const jwtSecretToken = process.env.NEXT_PUBLIC_JWT_SECRET_TOKEN;
const appUrl = process.env.NEXT_PUBLIC_APP_URL;
const channelId = process.env.NEXT_PUBLIC_CHANNEL_ID;

const config = {
  serverPort,
  youtubeApiKey,
  mongoURI,
  jwtSecretToken,
  appUrl,
  channelId,
};

module.exports = config;
