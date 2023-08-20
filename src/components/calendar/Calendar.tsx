import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

export const listEvents = async (auth: OAuth2Client) => {
  const calendar = google.calendar({ version: 'v3', auth });
  const response = await calendar.events.list({
    calendarId: 'primary', // Use 'primary' for user's primary calendar
    timeMin: new Date().toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  });
  return response.data.items;
};
