

export default function Participant({ participant, handleDelete }) {
    function handleDeleteClick(evt) {
        evt.preventDefault();
        handleDelete(participant._id);
      }
    
    return (
      <div className="Participant">
        <p>Name: {participant.name}</p>
        <p>Email: {participant.email}</p>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    );
  }
