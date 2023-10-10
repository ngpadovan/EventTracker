export default function Event({ event }) {
    return (
      <div className="Event">
        <p>Title: {event.eventName}</p>
        <p>Date: {event.dateTime}</p>
      </div>
    );
  }