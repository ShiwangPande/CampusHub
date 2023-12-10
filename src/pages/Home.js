// RoleSelectionPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelectionPage = () => {
    const navigate = useNavigate();
    const [selectedRole, setSelectedRole] = useState('');

    const handleRoleSelection = (role) => {
        setSelectedRole(role);
    };

    const handleContinue = () => {
        // Perform any necessary actions based on the selected role
        // For now, just redirect to a new page with the selected role in the URL
        navigate(`/dashboard/${selectedRole}`);
        // navigate(`login`);
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Role Selection</h1>
            <p>Please select your role:</p>

            <div className="mt-4">
                <label className="mr-2">
                    <input
                        type="radio"
                        name="role"
                        value="student"
                        checked={selectedRole === 'student'}
                        onChange={() => handleRoleSelection('student')}
                    />
                    Student
                </label>

                <label className="mr-2">
                    <input
                        type="radio"
                        name="role"
                        value="teacher"
                        checked={selectedRole === 'teacher'}
                        onChange={() => handleRoleSelection('teacher')}
                    />
                    Teacher
                </label>

                <label>
                    <input
                        type="radio"
                        name="role"
                        value="admin"
                        checked={selectedRole === 'admin'}
                        onChange={() => handleRoleSelection('admin')}
                    />
                    Admin
                </label>
            </div>

            <button
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                onClick={handleContinue}
                disabled={!selectedRole}
            >
                Continue
            </button>
        </div>
    );
};

export default RoleSelectionPage;
