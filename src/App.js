// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/User/Authpage';
import Attendance from './pages/Attendance';

const App = () => {
  return (
    <Router>
      {/* <Attendance /> */}
      <AuthPage />
      <Routes>
        <Route path="/login" component={AuthPage} />
        {/* Add other routes for different pages */}
      </Routes>
    </Router>
  );
};

export default App;
