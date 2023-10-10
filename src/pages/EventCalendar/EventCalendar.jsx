import React, { useState, useEffect } from 'react';
import EventForm from '../../components/EventForm/EventForm';
import * as eventsAPI from '../../utilities/events-api';
import Calendar from '../../components/Calendar/Calendar'; // Import your Calendar component
import './EventCalendar.css';

export default function EventCalendar({ user }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getEvents() {
      const eventsData = await eventsAPI.getAll();
      setEvents(eventsData);
    }
    getEvents();
  }, []);

  const eventsList = events.map((event, index) => ({
    id: event._id,
    title: event.eventName,
    start: new Date(event.dateTime),
    end: new Date(event.dateTime), // You can adjust this as needed
  }));

  async function handleAddEvent(newEventData) {
    const newEvent = await eventsAPI.addEvent(newEventData);
    setEvents([...events, newEvent]);
  }

  async function handleDelete(eventId) {
    setEvents(events.filter(event => event._id !== eventId));
  }

  return (
    <div className="EventCalendar">
      <div className="EventForm-container">
        <EventForm user={user} handleAddEvent={handleAddEvent} />
      </div>
      <div className="Calendar-container">
        <Calendar events={eventsList} />
      </div>
    </div>
  );
}