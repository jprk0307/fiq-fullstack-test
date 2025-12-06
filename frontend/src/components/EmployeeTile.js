import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';

const EmployeeTile = ({ employee, onClick }) => (
    <div className="border p-2 m-1 shadow rounded cursor-pointer" onClick={onClick}>
        <h3>{employee.name}</h3>
        <p>Class: {employee.class}</p>
        <p>Attendance: {employee.attendance}%</p>
        <FiMoreVertical className="absolute top-2 right-2" />
    </div>
);

export default EmployeeTile;
