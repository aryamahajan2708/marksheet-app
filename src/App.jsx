import React, { useState } from 'react'
import StudentForm from './StudentForm';
import Marksheet from './Marksheet';
import './App.css';

function App() {
    const [studentData, setStudentData] = useState(null);

    const handleShowResult = (data) =>{
        setStudentData(data);
    };

    const handleBack = () =>{
        setStudentData(null);
    };

  return (
    <div className='app'>
        {! studentData ? (
        <StudentForm onShowResult={handleShowResult}/>
        ) : (
          <>
            <Marksheet student={studentData}/>
            <div className="btn-container">
                <button className='back-btn' onClick={handleBack}> ← Back to Form</button>
            </div>
          </>
        )}
    </div>
  );
}

export default App