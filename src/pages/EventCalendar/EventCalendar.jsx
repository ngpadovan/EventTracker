import React, { useState, useEffect } from 'react';
import EventForm from '../../components/EventForm/EventForm';
import * as eventsAPI from '../../utilities/events-api';
import Event from '../../components/Event/Event';

export default function EventCalendar({ user }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getEvents() {
      const eventsData = await eventsAPI.getAll();
      setEvents(eventsData);
    }
    getEvents();
  }, []);

  const eventsList = events.map((event, index) => (
    <Event key={index} event={event} handleDelete = {handleDelete}/>
  ));

  async function handleAddEvent(newEventData) {
    const newEvent = await eventsAPI.addEvent(newEventData);
    setEvents([...events, newEvent]);
  }

  async function handleDelete(eventId) {
    setEvents(events.filter(event => event._id !== eventId));
  }

  return (
    <div className="EventsListPage">
      <EventForm user={user} handleAddEvent={handleAddEvent} />
      <h1>Events</h1>
      {!events.length ? <p>No Events Yet</p> : eventsList}
    </div>
  );
}