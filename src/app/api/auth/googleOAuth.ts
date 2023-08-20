import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];
const REDIRECT_URL = "http://localhost:3000/api/oauth-callback";

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  REDIRECT_URL
);

export const getAuthUrl = () => {
  return oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
};

export const getAccessToken = async (code: string) => {
  const { tokens } = await oAuth2Client.getToken(code);
  return tokens;
};
