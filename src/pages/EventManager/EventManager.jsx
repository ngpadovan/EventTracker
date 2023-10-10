import { useState } from "react";
import EventForm from "../../components/EventForm/EventForm";
import * as eventsAPI from '../../utilities/events-api';

export default function EventManager({ user, handleAddEvent }) {
  const [events, setEvents] = useState([]);

  async function handleAddEvent(newEventData) {
    const newEvent = await eventsAPI.addEvent(newEventData);
    setEvents([...events, newEvent]);
  }

  return (
    <div>
      <h1>Event Manager</h1>
      <div className="EventForm-manager">
        <EventForm user={user} handleAddEvent={handleAddEvent}  />
      </div>
    </div>
  );
}