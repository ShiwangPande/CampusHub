// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/User/Authpage';
import Attendance from './pages/Attendance';
import Home from './pages/Home';
import DashboardPage from './pages/Dashboard';
import StudentDashboardPage from './pages/Student/StudentDashboard';
import UserProfilePage from './pages/User/UserDashboardPage';

const App = () => {
  return (
    <Router>
      {/* <Attendance /> */}
      {/* <AuthPage /> */}
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/dashboard/:role" element={<DashboardPage />} />
        <Route path="/dashboard/student" element={<StudentDashboardPage />} />
        <Route path="/dashboard/admin" element={<UserProfilePage />} />
        {/* Add other routes for different pages */}
      </Routes>
    </Router>
  );
};

export default App;
