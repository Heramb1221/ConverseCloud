import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Notifications from './pages/Notifications.jsx';
import CallPage from './pages/CallPage.jsx';
import ChatPage from './pages/ChatPage.jsx';
import OnboardingPage from './pages/OnboardingPage.jsx';
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/notification" element={<Notifications />}/>
        <Route path="/call" element={<CallPage />}/>
        <Route path="/chat" element={<ChatPage />}/>
        <Route path="/onboarding" element={<OnboardingPage />}/>
      </Routes>

      <Toaster/>
    </div>
  )
}

export default App