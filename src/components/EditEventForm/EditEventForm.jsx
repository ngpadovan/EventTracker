import { useState } from 'react';
import './EditEventForm.css';


export default function EditEventForm({ event, handleUpdate }) {
  const [editedEvent, setEditedEvent] = useState(event);

  function handleChange(evt) {
    const { name, value, type, checked } = evt.target;
    if (name === 'participants') {
      const participantsArray = value.split(',').map((participant) => participant.trim());
      setEditedEvent({
        ...editedEvent,
        participants: participantsArray,
      });
    } else {
      setEditedEvent({
        ...editedEvent,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  }


  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdate(editedEvent);
  }

  return (
    <div>
      <div className="EditEventForm">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="eventName"
              value={editedEvent.eventName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
          <label>
          Category:
          <select
            name="category"
            value={editedEvent.category}
            onChange={handleChange}
          >
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Health and Fitness">Health and Fitness</option>
            <option value="Special Occasions">Special Occasions</option>
          </select>
        </label>
          </div>
          <div>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={editedEvent.location}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Date and Time:</label>
            <input
              type="datetime-local"
              name="dateTime"
              value={editedEvent.dateTime}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Participants:</label>
            <input
              type="text"
              name="participants"
              value={editedEvent.participants.join(', ')}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Recurring Weekly:</label>
            <input
              type="checkbox"
              name="recurringWeekly"
              checked={editedEvent.recurringWeekly}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Event Details:</label>
            <textarea
              name="details"
              value={editedEvent.details}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}