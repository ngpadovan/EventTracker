import { useState } from "react";
import * as eventsAPI from "../../utilities/events-api";
import EditEventForm from "../EditEventForm/EditEventForm";



export default function EventDetail({ event, handleDelete, handleEditClick, setEvent }) {
  const [isEditing, setIsEditing] = useState(false);


  function handleEditClick() {
    setIsEditing(true)
  }

  async function handleUpdate(editedEvent) {
    try {
      await eventsAPI.update(event._id, editedEvent);
      const updatedEventData = await eventsAPI.getEventById(event._id);
      setEvent(updatedEventData);
      setIsEditing(false);
    } catch (error) {
    }
  }

  
    return (
      <div className="Event">
      <div>
        <p><strong>Title:</strong> {event.eventName}</p>
        <p><strong>Category:</strong> {event.category}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Date and Time:</strong> {new Date(event.dateTime).toLocaleString()}</p>
        <p><strong>Participants:</strong> {Array.isArray(event.participants) ? event.participants.join(', ') : ''}</p>
        <p><strong>Recurring Weekly:</strong> {event.recurringWeekly ? 'Yes' : 'No'}</p>
        <p><strong>Event Details:</strong> {event.details}</p>
  
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      {isEditing && (<EditEventForm event={event} setEvent={setEvent} handleUpdate={handleUpdate}/>)}
      </div>
    );
  }