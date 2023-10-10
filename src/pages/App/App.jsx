import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
// import NewOrderPage from '../NewOrderPage/NewOrderPage';

import NavBar from '../../components/NavBar/NavBar';
import ParticipantsListPage from '../ParticipantsListPage/ParticipantsListPage'

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
              <Route path="/*" element={<Navigate to="/participants" />} />
              {/* <Route path="/orders/new" element={<NewOrderPage />} /> */}
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
