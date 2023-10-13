import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EventForm from '../../components/EventForm/EventForm';
import * as eventsAPI from '../../utilities/events-api';
import Calendar from '../../components/Calendar/Calendar';
import './EventCalendar.css';


export default function EventCalendar({ user }) {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getEvents() {
      const eventsData = await eventsAPI.getAll();
      setEvents(eventsData);
    }
    getEvents();
  }, []);

const handleEventClick = (event) => {
  navigate(`/events/${event.id}`);
};

  // const getCategoryColor = (category) => {
  //   switch (category) {
  //     case 'Personal':
  //       return 'blue';
  //     case 'Work':
  //       return 'green';
  //     case 'Entertainment':
  //       return 'orange';
  //     case 'Health and Fitness':
  //       return 'red';
  //     case 'Special Occasions':
  //       return 'purple';
  //     default:
  //       return 'gray';
  //   }
  // };

const eventsList = events.map((event, index) => ({
  id: event._id,
  title: event.eventName,
  start: new Date(event.dateTime),
  end: new Date(event.dateTime),
  // backgroundColor: getCategoryColor(event.category),
}));

  

async function handleAddEvent(newEventData) {
  const newEvent = await eventsAPI.addEvent(newEventData);
  setEvents([...events, newEvent]);
}


return (
  <div className="EventCalendar">
    <div className="EventForm-container">
      <EventForm user={user} handleAddEvent={handleAddEvent} />
    </div>
    <div className="Calendar-container">
      <Calendar events={eventsList} handleEventClick={handleEventClick} />
    </div>
  </div>
  );
}