import React from 'react';
import { useSelector } from 'react-redux';
import Header from './header'; // Import the Header component
import './teacher.css'; // Import the CSS file

const TeacherList = () => {
  const teachers = useSelector((state) => state.teachers);

  return (
    <div>
      <Header /> {/* Include the Header component */}
      <h2>Teacher List</h2>
      <table>
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={index}>
              <td>{teacher.slNo}</td>
              <td>{teacher.name}</td>
              <td>{teacher.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherList; 
