export default function EventDetail({ event }) {
    return (
      <div>
        <h2>Event Details</h2>
        <p><strong>Title:</strong> {event.eventName}</p>
        <p><strong>Category:</strong> {event.category}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Date and Time:</strong> {new Date(event.dateTime).toLocaleString()}</p>
        <p><strong>Participants:</strong> {event.participants.join(', ')}</p>
        <p><strong>Recurring Weekly:</strong> {event.recurringWeekly ? 'Yes' : 'No'}</p>
        <p><strong>Event Details:</strong> {event.details}</p>
  
        {/* <button onClick={() => handleEdit(event._id)}>Edit</button>
        <button onClick={() => handleDelete(event._id)}>Delete</button> */}
  
      </div>
    );
  }