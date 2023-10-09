export default function Participant({ participant }) {
    return (
      <div className="Participant">
        <p>Name: {participant.name}</p>
        <p>Email: {participant.email}</p>
      </div>
    );
  }