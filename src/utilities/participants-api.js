import sendRequest from './send-request';
const BASE_URL = '/api/participants';

export function addParticipant(participantData) {
    return sendRequest(BASE_URL, 'POST', participantData);
  }

export function getAll() {
    return sendRequest(BASE_URL);
  }

  export function deleteParticipant(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
  }