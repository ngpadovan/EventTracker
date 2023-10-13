import { useState } from "react";
import './ParticipantForm.css';


export default function ParticipantForm ({user, handleAddParticipant}) {
    const [newParticipant, setNewParticipant] = useState({
        name: '',
        email: '',
    });

    function handleChange(evt) {
        setNewParticipant({ ...newParticipant, [evt.target.name]: evt.target.value });
      }
      
    function handleSubmit(evt) {
        evt.preventDefault();
        const newParticipantData = {...newParticipant};
        newParticipantData.user = user;
        handleAddParticipant(newParticipantData);
        setNewParticipant({
            name: '',
            email: ''
        })
      }

    
      return (
        <div className="ParticipantForm">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              type="text"
              onChange={handleChange}
              value={newParticipant.name}
            />
    
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="text"
              onChange={handleChange}
              value={newParticipant.email}
            />
    
            <button type="submit">Add Participant</button>
          </form>
        </div>
      );
    }