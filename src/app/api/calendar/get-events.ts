import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import { listEvents } from "../../../components/calendar/Calendar";

export default async function getEvents(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userToken } = req.cookies; // Implement logic to get user's access token from cookies or session
  if (!userToken) {
    res.status(401).json({ error: "Not authenticated" });
    return;
  }

  const oAuth2Client = new google.auth.OAuth2();
  oAuth2Client.setCredentials({ access_token: userToken });

  try {
    const events = await listEvents(oAuth2Client);
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving events" });
  }
}
