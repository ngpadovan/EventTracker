
import EventForm from "../../components/EventForm/EventForm";

export default function EventManager({ user, handleAddEvent }) {
  return (
    <div>
      <h1>Event Manager</h1>
      <div className="EventForm-manager">
        <EventForm user={user} handleAddEvent={handleAddEvent}  />
      </div>
    </div>
  );
}