import React, { useState } from 'react';
import EmployeeTile from './EmployeeTile';
import EmployeeModal from './EmployeeModal';

const EmployeeGrid = ({ employees }) => {
    const [view, setView] = useState('grid'); // grid or tile
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    return (
        <div>
            <button onClick={() => setView(view === 'grid' ? 'tile' : 'grid')}>
                Toggle View
            </button>

            <div className={view === 'grid' ? 'grid grid-cols-10 gap-2' : 'flex flex-wrap'}>
                {employees.map(emp => (
                    <EmployeeTile
                        key={emp.id}
                        employee={emp}
                        onClick={() => setSelectedEmployee(emp)}
                    />
                ))}
            </div>

            {selectedEmployee && (
                <EmployeeModal
                    employee={selectedEmployee}
                    onClose={() => setSelectedEmployee(null)}
                />
            )}
        </div>
    );
};

export default EmployeeGrid;
