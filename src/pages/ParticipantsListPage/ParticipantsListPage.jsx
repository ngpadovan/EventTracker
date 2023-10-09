import React, { useState, useEffect } from 'react';
import ParticipantForm from '../../components/ParticipantForm/ParticipantForm';
import * as participantsAPI from "../../utilities/participants-api";
import Participant from "../../components/Participant/Participant";

export default function ParticipantsListPage({ user }) {
  
const [participants, setParticipants] = useState([]);

useEffect(function() {
    async function getParticipants() {
      const notes = await participantsAPI.getAll();
      setParticipants(notes);
    }
    getParticipants();
  }, [])
  
  
  const participantsList = participants.map((participant, index) => (
    <Participant key={index} participant={participant} />
  ));

  async function handleAddParticipant(newParticipantData) {
    const newParticipant = await participantsAPI.addParticipant(newParticipantData);
    setParticipants([...participants, newParticipant]);
  }

  return (
    <div className="ParticipantsListPage">
      <ParticipantForm user={user} handleAddParticipant={handleAddParticipant} />
      <h1>Participants</h1>
      {!participants.length ? <p>No Participants Yet</p> : participantsList}
    </div>
  );
}