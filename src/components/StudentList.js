import React from 'react';
import { useSelector } from 'react-redux';
import Header from './header'; // Import the Header component
import './studentlist.css'; // Import the CSS file

const StudentList = () => {
  const students = useSelector((state) => state.students);

  return (
    <div>
        <Header /> {/* Include the Header component */}
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Sl No</th> 
            <th>Name</th>
            <th>Age</th>
          
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
                <td>{student.slNo}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
