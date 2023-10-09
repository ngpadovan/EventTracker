import React, { useState } from 'react';
import ParticipantForm from '../../components/ParticipantForm/ParticipantForm';

export default function ParticipantsListPage({ user, participants, handleAddParticipant }) {
  const participantsList = participants.map((participant, index) => (
    <div key={index}>
      <p>Name: {participant.name}</p>
      <p>Email: {participant.email}</p>
    </div>
  ));

  return (
    <div className="ParticipantsListPage">
      <ParticipantForm user={user} handleAddParticipant={handleAddParticipant} />
      <h1>Participants</h1>
      {!participants.length ? <p>No Participants Yet</p> : participantsList}
    </div>
  );
}