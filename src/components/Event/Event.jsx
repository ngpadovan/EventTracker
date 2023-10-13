import './Event.css'

export default function Event({ event, handleDelete }) {

  const formattedDate = new Date(event.dateTime).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  function handleDeleteClick(evt) {
    evt.preventDefault();
    handleDelete(event._id);
  }

  return (
    <div className="Event">
      <p>Title: {event.eventName}</p>
      <p>Date: {formattedDate}</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}