import { useState } from 'react';

export default function EventForm({ user, handleAddEvent }) {
  const [newEvent, setNewEvent] = useState({
    eventName: '',
    category: '',
    location: '',
    dateTime: '',
    participants: '',
    recurringWeekly: false,
    details: '',
  });

  function handleChange(evt) {
    const { name, value, type, checked } = evt.target;
    const newValue = type === 'checkbox' ? checked : value;
    setNewEvent({
      ...newEvent,
      [name]: newValue,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddEvent(newEvent);
    setNewEvent({
      eventName: '',
      category: '',
      location: '',
      dateTime: '',
      participants: '',
      recurringWeekly: false,
      details: '',
    });
  }

  return (
    <div className="EventForm">
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            name="eventName"
            value={newEvent.eventName}
            onChange={handleChange}
          />
        </label>
        <label>
          Category:
          <select
            name="category"
            value={newEvent.category}
            onChange={handleChange}
          >
            {/* Options for categories */}
          </select>
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={newEvent.location}
            onChange={handleChange}
          />
        </label>
        <label>
          Date and Time:
          <input
            type="datetime-local"
            name="dateTime"
            value={newEvent.dateTime}
            onChange={handleChange}
          />
        </label>
        <label>
          Recurring Weekly:
          <input
            type="checkbox"
            name="recurringWeekly"
            checked={newEvent.recurringWeekly}
            onChange={handleChange}
          />
        </label>
        <label>
          Event Details:
          <textarea
            name="details"
            value={newEvent.details}
            onChange={handleChange}
          />
        </label>
        <label>
          Participants:
          <input
            type="text"
            name="participants"
            value={newEvent.participants}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}
