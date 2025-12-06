import React from 'react';

const EmployeeModal = ({ employee, onClose }) => (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow-lg w-1/2 relative">
            <button className="absolute top-2 right-2" onClick={onClose}>X</button>
            <h2>{employee.name}</h2>
            <p>Age: {employee.age}</p>
            <p>Class: {employee.class}</p>
            <p>Subjects: {employee.subjects.join(', ')}</p>
            <p>Attendance: {employee.attendance}%</p>
        </div>
    </div>
);

export default EmployeeModal;
