import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
import EventCalendar from '../EventCalendar/EventCalendar';
import EventManager from '../EventManager/EventManager';
import NavBar from '../../components/NavBar/NavBar';
import ParticipantsListPage from '../ParticipantsListPage/ParticipantsListPage'
import EventDetailPage from '../EventDetailPage/EventDetailPage'

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/participants" element={<ParticipantsListPage user = {user}/>}/>
              <Route path="/participants/*" element={<Navigate to="/participants" />} />
              <Route path="/eventmanager" element={<EventManager user = {user}/>} />
              <Route path="/" element={<EventCalendar user = {user}/>} />
              <Route path="/events/:id" element={<EventDetailPage user = {user}/>} />
              {/* <Route path="/orders/new" element={<NewOrderPage />} /> */}
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
