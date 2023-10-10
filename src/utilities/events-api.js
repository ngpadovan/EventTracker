import sendRequest from './send-request';
const BASE_URL = '/api/events';

export function addEvent(eventData) {
    return sendRequest(BASE_URL, 'POST', eventData);
  }

export function getAll() {
  return sendRequest(BASE_URL);
}

export function deleteEvent(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}