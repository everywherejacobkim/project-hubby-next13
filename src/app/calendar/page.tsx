"use client";
import React, { useEffect, useState } from "react";
import { getAuthUrl } from "../api/auth/googleOAuth";
import { listEvents } from "../../components/calendar/Calendar";

type Props = {};

const CalendarPage = (props: Props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Implement logic to check if user is authenticated
      // If not, redirect user to the getAuthUrl
      const response = await fetch("/api/get-events");
      const data = await response.json();
      setEvents(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Google Calendar Events</h1>
      {/* <ul>
        {events.map((event) => (
          <li key={event.id}>{event.summary}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default CalendarPage;
