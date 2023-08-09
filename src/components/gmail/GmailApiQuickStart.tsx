'use client'


import React, { useState, useEffect } from 'react';




// const CLIENT_ID = '719390433566-169f1sca4us02k3rna4i7755103rlnp6.apps.googleusercontent.com'; // Replace with your actual Client ID
// const API_KEY = 'AIzaSyAt4J-i_Eld0bUCTSkKXUA3xDbOqZVAb0U'; // Replace with your actual API Key
// const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest';
// const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';
import { RequestInfo, RequestInit } from 'node-fetch';

const fetch = (url: RequestInfo, init?: RequestInit) =>
  import('node-fetch').then(({ default: fetch }) => fetch(url, init));

// const fetch = require('node-fetch');

interface TokenClient {
  callback: (resp: any) => void;
  requestAccessToken: (options: { prompt: string }) => void;
}fetch


declare global {
  interface Window {
    gapi: any;
    google: any;
    tokenClient: TokenClient;
  }
}



function GmailApiQuickStart() {
 
  const [gapiInited, setGapiInited] = useState(false);
  const [gisInited, setGisInited] = useState(false);
  const [showThreads, setShowThreads] = useState(false);

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://apis.google.com/js/api.js';
    script1.async = true;
    script1.defer = true;
    script1.onload = () => gapiLoaded();
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://accounts.google.com/gsi/client';
    script2.async = true;
    script2.defer = true;
    script2.onload = () => gisLoaded();
    document.body.appendChild(script2);
  }, []);

  function gapiLoaded() {
    window.gapi.load('client', initializeGapiClient);
  }

  async function initializeGapiClient() {
    await window.gapi.client.init({
      apiKey: process.env.REACT_APP_API_KEY,
      discoveryDocs: [process.env.REACT_APP_DISCOVERY_DOC],
    });
    setGapiInited(true);
    maybeEnableButtons();
  }

  function gisLoaded() {
    window.tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: process.env.REACT_APP_CLIENT_ID,
      scope: process.env.REACT_APP_SCOPES,
      callback: '', // defined later
    });
    setGisInited(true);
    maybeEnableButtons();
    
  }

  function maybeEnableButtons() {
    if (gapiInited && gisInited) {
      const authorizeButton = document.getElementById('authorize_button');
      if (authorizeButton) {
        authorizeButton.style.visibility = 'visible';
      }
    }
  }

  //authentication
  async function handleAuthClick() {
    window.tokenClient.callback = async (resp: any) => {
      if (resp.error !== undefined) {
       
        // return <Threads />
        throw resp;
        
      }
      const signoutButton = document.getElementById('signout_button');
      if (signoutButton) {
        signoutButton.style.visibility = 'visible';
        signoutButton.innerText = 'Refresh';
        setShowThreads(true)
      }

      // await <Threads />
      // await listLabels();
      await listMessages("me");
    };

    if ((window.gapi as any).client.getToken() === null) {
      const getToken = window.tokenClient.requestAccessToken({ prompt: 'consent' });

      console.log("token:", getToken )
      
    } else {
      window.tokenClient.requestAccessToken({ prompt: '' });
    }
  }


  
  function handleSignoutClick() {
    const token = (window.gapi as any).client.getToken();
    if (token !== null) {
      (window.google as any).accounts.oauth2.revoke(token.access_token);
      (window.gapi as any).client.setToken('');
      const contentElement = document.getElementById('content');
      if (contentElement) {
        contentElement.innerText = '';
      }
      const authorizeButton = document.getElementById('authorize_button');
      if (authorizeButton) {
        authorizeButton.innerText = 'Authorize';
        authorizeButton.style.visibility = 'hidden';
      }
      const signoutButton = document.getElementById('signout_button');
      if (signoutButton) {
        signoutButton.style.visibility = 'hidden';
      }
    }
  }
//list messages from gmail
 // Use 'node-fetch' for server-side or 'fetch' for client-side
 // Replace with your actual API Key
// const BASE_URL = 'https://gmail.googleapis.com/gmail/v1/users/me/drafts';

// async function getUserDrafts() {
//   try {
//     const response = await fetch(`${BASE_URL}?key=${API_KEY}`, {
//       headers: {
//         Authorization: `Bearer ${ACCESS_TOKEN}`, // Replace with your actual access token
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Request failed with status ${response.status}`);
//     }

//     const data = await response.json();
//     console.log('User drafts:', data.drafts);
//   } catch (error) {
//     console.error('An error occurred:', error.message);
//   }
// }

// // Call the function to get user drafts
// getUserDrafts();

 
async function listMessages(auth:any) {
  let response;
  try {
    response = await (window.gapi as any).client.gmail.users.messages.list({
      // payload:{},
      userId: 'me',
      labelIds: ['INBOX'],
      maxResults: 10, // You can adjust the number of messages to fetch
      raw:'',
      
  });
    console.log(response)
    
  } catch (err) {
    const contentElement = document.getElementById('content');
    if (contentElement) {
      contentElement.innerText = JSON.stringify(err);
    }
    return;
  }


  //display the messages
  const messages = response.result.messages;
  if (!messages || messages.length === 0) {
    const contentElement = document.getElementById('content');
    if (contentElement) {
      contentElement.innerText = 'No messages found.';
    }
    return;
  }

   
  

  const output = messages.reduce(
    (str: string, message: { id: string }) => `${str}${message.id}\n`,
    'Messages:\n'
  );

  const contentElement = document.getElementById('content');
  if (contentElement) {
    contentElement.innerText = output;
  }
}

//list labels
  async function listLabels() {
    let response;
    try {
      response = await (window.gapi as any).client.gmail.users.labels.list({
        'userId': 'me',
      });
    } catch (err) {
      const contentElement = document.getElementById('content');
      if (contentElement) {
        contentElement.innerText = JSON.stringify(err);
      }
      return;
    }
    const labels = response.result.labels;
    if (!labels || labels.length === 0) {
      const contentElement = document.getElementById('content');
      if (contentElement) {
        contentElement.innerText = 'No labels found.';
      }
      return;
    }
    const output = labels.reduce(
      (str: string, label: { name: string }) => `${str}${label.name}\n`,
      'Labels:\n'
    );
    const contentElement = document.getElementById('content');
    if (contentElement) {
      contentElement.innerText = output;
    }
  }

  return (
    <div>
      <p>Gmail API Quickstart</p>
      <button id="authorize_button" onClick={handleAuthClick}>
        Authorize
      </button>
      <button id="signout_button" onClick={handleSignoutClick}>
        Sign Out
      </button>
      <pre id="content" style={{ whiteSpace: 'pre-wrap' }}></pre>
      {/* {showThreads && <Threads />} */}
    </div>
  );
}

export default GmailApiQuickStart;
