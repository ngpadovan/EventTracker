import * as eventsAPI from '../../utilities/events-api';
import React, { useState, useEffect } from 'react';
import EventDetail from '../../components/EventDetail/EventDetail';
import { useParams } from 'react-router-dom';


export default function EventDetailPage ({ user }) {

    const [event, setEvent] = useState();
    const { id } = useParams();
    

    useEffect(() => {
        async function getEventDetails() {
            const eventData = await eventsAPI.getEventById(id);
            setEvent(eventData);
        }
        getEventDetails();
      }, [id]);

    return (
        <div>
        <h1>Event Details</h1>
        <EventDetail event={event} />
        </div>
    )
}