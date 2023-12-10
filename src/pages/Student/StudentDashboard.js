// StudentDashboardPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import AuthPage from '../User/Authpage';
const StudentDashboardPage = () => {
    // Get the role from the URL parameters
    const { role } = useParams();

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
            <p>Welcome to the Student Dashboard, {role}!</p>

            {/* Add student-specific content or actions */}
            <p>Your upcoming assignments:</p>
            <ul>
                <li>Assignment 1</li>
                <li>Assignment 2</li>
                <li>Assignment 3</li>
            </ul>
            <AuthPage />

            {/* Add more student-specific content as needed */}
        </div>
    );
};

export default StudentDashboardPage;
