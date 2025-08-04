import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Notifications from './pages/Notifications.jsx';
import CallPage from './pages/CallPage.jsx';
import ChatPage from './pages/ChatPage.jsx';
import OnboardingPage from './pages/OnboardingPage.jsx';
import { Toaster } from 'react-hot-toast';
import PageLoader from './components/PageLoader.jsx';
import useAuthUser from './hooks/useAuthUser.js';


const App = () => {

  const {isLoading, authUser} = useAuthUser();

  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;

  

  if(isLoading) {
    return <PageLoader />
  }

  return (
    <div>
      <Routes>
        {console.log("isAuthenticated", isAuthenticated)}
        {console.log("isOnboarded", isOnboarded)}
        <Route path="/" element={isAuthenticated && isOnboarded ? (<HomePage />) : (<Navigate to={!isAuthenticated ? "/login" : "onboarding"}/>)}/>
        <Route path="/signup" element={!isAuthenticated ? <SignupPage /> : <Navigate to="/"/>}/>
        <Route path="/login" element={!isAuthenticated ? <LoginPage/> : <Navigate to="/"/>}/>
        <Route path="/notification" element={isAuthenticated ? <Notifications /> : <Navigate to="/login"/>}/>
        <Route path="/call" element={isAuthenticated ? <CallPage /> : <Navigate to="/login"/>}/>
        <Route path="/chat" element={isAuthenticated ? <ChatPage /> : <Navigate to="/login"/>}/>
        <Route
          path="/onboarding"
          element={
            isAuthenticated ? (
              !isOnboarded ? (
                <OnboardingPage />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>

      <Toaster/>
    </div>
  )
}

export default App