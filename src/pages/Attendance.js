// src/components/AttendanceMarking.js
import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const studentData = Array.from({ length: 70 }, (_, index) => ({
    id: index + 1,
    name: `Student ${index + 1}`,
    attendance: [], // array to store attendance for each day
}));

const AttendanceMarking = () => {
    const [students, setStudents] = useState(studentData);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const markAttendance = (studentId, isPresent) => {
        setStudents((prevStudents) =>
            prevStudents.map((student) =>
                student.id === studentId
                    ? {
                        ...student,
                        attendance: [
                            ...student.attendance,
                            { date: selectedDate, present: isPresent },
                        ],
                    }
                    : student
            )
        );
    };

    const handleExport = () => {
        const data = students.map(({ name, attendance }) => {
            const formattedData = attendance.map(({ date, Absent }) => ({
                Date: date.toISOString().split('T')[0],
                Time: date.toLocaleTimeString(),
                Name: name,
                Attendance: Absent ? 'Present' : 'Absent',
            }));
            return formattedData;
        });

        const flattenedData = data.flat();

        const ws = XLSX.utils.json_to_sheet(flattenedData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Attendance Sheet');
        XLSX.writeFile(wb, 'attendance_sheet.xlsx');
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Mark Attendance</h1>
            <div className="grid grid-cols-3 gap-4 bg-gray-100 p-4 rounded-lg">
                <div className="font-bold">Student Name</div>
                <div className="font-bold">Present</div>
                <div className="font-bold">Absent</div>

                {students.map((student) => (
                    <React.Fragment key={student.id}>
                        <div className="flex items-center py-2">{student.name}</div>
                        <div
                            className={`flex items-center justify-center cursor-pointer ${!student.attendance.some(
                                (entry) =>
                                    entry.date.toISOString().split('T')[0] ===
                                    selectedDate.toISOString().split('T')[0]
                            )
                                    ? 'bg-green-500 hover:bg-green-600'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                } rounded-lg p-2`}
                            onClick={() => markAttendance(student.id, true)}
                        >
                            <span className="text-white">Present</span>
                        </div>
                        <div
                            className={`flex items-center justify-center cursor-pointer ${student.attendance.some(
                                (entry) =>
                                    entry.date.toISOString().split('T')[0] ===
                                    selectedDate.toISOString().split('T')[0]
                            )
                                    ? 'bg-red-500 hover:bg-red-600'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                } rounded-lg p-2`}
                            onClick={() => markAttendance(student.id, false)}
                        >
                            <span className="text-white">Absent</span>
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <div className="mt-4">
                <label className="mr-2">Select Date:</label>
                <input
                    type="date"
                    value={selectedDate.toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(new Date(e.target.value))}
                />
            </div>
            <button
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                onClick={handleExport}
            >
                Submit Attendance
            </button>
        </div>
    );
};

export default AttendanceMarking;
