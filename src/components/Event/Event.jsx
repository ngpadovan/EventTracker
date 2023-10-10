

export default function Event({ event, handleDelete }) {

    function handleDeleteClick(evt) {
        evt.preventDefault();
        handleDelete(event._id);
      }

    return (
      <div className="Event">
        <p>Title: {event.eventName}</p>
        <p>Date: {event.dateTime}</p>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    );
  }