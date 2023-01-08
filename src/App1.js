import React, { useState, useEffect } from 'react';

const App = () => {
  const [students, setStudents] = useState([]); // initialize an empty array for storing students
  const [student, setStudent] = useState({ rollNumber: '', name: '', checkInTime: '', checkOutTime: '' }); // initialize an object for storing the current student's roll number, name, and check-in/check-out times

  // function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, student]); // add the current student to the array of students
    setStudent({ rollNumber: '', name: '', checkInTime: '', checkOutTime: '' }); // reset the current student object
  }

  // function to handle input changes
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  }

  // useEffect hook to count the number of students currently checked in
  useEffect(() => {
    const checkedInStudents = students.filter(student => student.checkOutTime === '');
    alert(`Number of students checked in: ${checkedInStudents.length}`);
  }, [students]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Roll Number:
          <input type="text" name="rollNumber" value={student.rollNumber} onChange={handleChange} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" value={student.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Check-in Time:
          <input type="text" name="checkInTime" value={student.checkInTime} onChange={handleChange} />
        </label>
        <br />
        <label>
          Check-out Time:
          <input type="text" name="checkOutTime" value={student.checkOutTime} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default App;
