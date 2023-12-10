// DashboardPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const DashboardPage = () => {
  // Get the role from the URL parameters
  const { role } = useParams();

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome to the Dashboard, {role}!</p>

      {/* Add role-specific content or actions based on the 'role' parameter */}
      {role === 'student' && <p>Student-specific content goes here.</p>}
      {role === 'teacher' && <p>Teacher-specific content goes here.</p>}
      {role === 'admin' && <p>Admin-specific content goes here.</p>}
    </div>
  );
};

export default DashboardPage;
