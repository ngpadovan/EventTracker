import { useState, useEffect } from "react";
import EventForm from "../../components/EventForm/EventForm";
import * as eventsAPI from '../../utilities/events-api';
import Event from "../../components/Event/Event";
import './EventManager.css'


export default function EventManager({ user, handleAddEvent }) {
  const [events, setEvents] = useState([]);


  useEffect(() => {
    async function getEvents() {
      const eventsData = await eventsAPI.getAll();
      setEvents(eventsData);
    }
    getEvents();
  }, []); 

  const eventsList = events.map((event, index) => (
    <Event key={event._id} event={event} handleDelete={handleDelete} />
  ));

  async function handleAddEvent(newEventData) {
    const newEvent = await eventsAPI.addEvent(newEventData);
    setEvents([...events, newEvent]);
  }
  async function handleDelete(eventId) {
    setEvents(events.filter((event) => event._id !== eventId));
  }
  return (
    <div className="EventManager">
      <EventForm user={user} handleAddEvent={handleAddEvent} />
      <h1>Event Manager</h1>
      {!events.length ? <p>No Events Yet</p> : eventsList}
    </div>
  );
}