import { google } from "googleapis";

// Replace these with your own credentials
const USER_ACCESS_TOKEN = "your-user-access-token";

// Create a Gmail API client with the user access token
const oauth2Client = new google.auth.OAuth2();
oauth2Client.setCredentials({ access_token: USER_ACCESS_TOKEN });
const gmail = google.gmail({ version: "v1", auth: oauth2Client });

// Function to list emails
const listEmails = async () => {
  try {
    // List messages in the inbox
    const response = await gmail.users.messages.list({
      userId: "me",
      labelIds: ["INBOX"],
    });

    const messages = response.data.messages;
    console.log("messages", messages);

    //     if (messages && messages.length > 0) {
    //       console.log('Messages:');
    //       for (const message of messages) {
    //         const msg = await gmail.users.messages.get({ userId: 'me', id: message.id });
    //         console.log(`Subject: ${msg.data.subject}, From: ${msg.data.from}, Date: ${msg.data.internalDate}`);
    //       }
    //     } else {
    //       console.log('No messages found.');
    //     }
  } catch (error) {
    console.error("Error listing emails:", error);
  }
};

// Call the function to list emails
listEmails();

// async function getAccessToken(code: string) {
//   const { tokens } = await new google.auth.OAuth2({
//     clientId: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   }).getToken(code);

//   return tokens.access_token;
// }

// const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
// const REDIRECT_URI = "your-redirect-uri";

// const oAuth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REDIRECT_URI
// );

// export async function getGmail(quantity: number, code: string, userId: string) {
//   const token = await getAccessToken(code);
//   try {
//     const response = await fetch(
//       `https://www.googleapis.com/gmail/v1/users/${userId}/messages?maxResults=${quantity}`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: "Bearer " + token,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(
//         `Failed to fetch data from Gmail API: ${response.statusText}`
//       );
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data from Gmail API:", error);
//     throw error;
//   }
// }
