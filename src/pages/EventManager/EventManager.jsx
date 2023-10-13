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
      <h1 className="heading">Event Manager</h1>
      <div className="content-container">
        <div className="event-list">
          {!events.length ? <p>No Events Yet</p> : eventsList}
        </div>
        <div className="event-form-manager">
          <EventForm user={user} handleAddEvent={handleAddEvent} />
        </div>
      </div>
    </div>
  );
}
