import './Participant.css'

export default function Participant({ participant, handleDelete }) {
    function handleDeleteClick(evt) {
        evt.preventDefault();
        handleDelete(participant._id);
      }
    
      return (
        <div className="Participant-card">
          <div className="Participant-info">
            <p className="Participant-name">Name: {participant.name}</p>
            <p className="Participant-email">Email: {participant.email}</p>
          </div>
          <button onClick={handleDeleteClick} className="Delete-button">Delete</button>
        </div>
      );
    }
