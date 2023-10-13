import * as eventsAPI from '../../utilities/events-api';
import { useState, useEffect } from 'react';
import EventDetail from '../../components/EventDetail/EventDetail';
import { useParams } from 'react-router-dom';
import './EventDetailPage.css'



export default function EventDetailPage ({ user }) {

    const [event, setEvent] = useState();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    

    

useEffect(() => {
    async function getEventDetails() {
        try {
        const eventData = await eventsAPI.getEventById(id);
        setEvent(eventData);
        } catch (error) {
            
        } finally {
            setLoading(false);
        }
    }
    getEventDetails();
}, [id]);
      

return (
    <div>
        <h1>Event Details</h1>
        {loading ? (
        <p>Loading...</p>
        ) : (
        <div className='event-detail-container'>
        <EventDetail event={event} setEvent={setEvent}/>
        </div>
        )}
    </div>
    );
}