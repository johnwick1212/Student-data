import React, {useState, useEffect} from "react"


const App = () => {

  const [students, setStudents] = useState([])
  const [kid, setKid] = useState({Name: '', rollno: '', checkInTime: '', checkOutTime: ''})

  function handleClick(e) {
    setStudents((prev) => {
      return (
        [...prev, kid]
      )
    })
  }
  
  function handleChange(e) {
      setKid((prev) => {
        return {...prev, [e.target.name]: e.target.value}
      })
      
  }

  useEffect(() => {
    const checkedInStudents = students.filter(student => student.checkOutTime === '');
    alert(`Number of students checked in: ${checkedInStudents.length}`);
  }, [students]);

  return (
    <div className="upper-div">
      <div className="middle-div">
        <input onChange={handleChange} type="text" placeholder="Enter Name" name="Name" value={kid.Name} /><br/><br/>
        <input onChange={handleChange} type="text" placeholder="Enter Roll Number" name="rollno" value={kid.rollno} /><br/><br/>
        <input onChange={handleChange} type="text" placeholder="Check-in-time" name="checkInTime" value={kid.checkInTime} /><br/><br/>
        <input onChange={handleChange} type="text" placeholder="Check-out-time" name="checkOutTime" value={kid.checkOutTime} /><br/><br/>
        <button onClick={handleClick}>Click to add details</button><br/><br/>
      </div>
    </div>
  );
};

export default App;
