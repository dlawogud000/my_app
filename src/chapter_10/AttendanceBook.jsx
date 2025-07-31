import React from 'react';

const students = [
    {id: 1, name: 'alice',},
    {id: 2, name: 'bob',},
    {id: 3, name: 'charlie',},
    {id: 4, name: 'dave',},
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;