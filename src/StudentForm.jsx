import React, { useState } from 'react'
import "./StudentForm.css";

function StudentForm({onShowResult}) {
    const [student ,setStudent] = useState({
        schoolName:"",
        year:"",
        studentName:"",
        fatherName:"",
        motherName:"",
        rollNo:"",
        className:"",
        section:"",
        dob:"",

        hindi:"",
        english:"",
        science:"",
        social:"",
        maths:"",
        computer:"",
    });

    const handleChange =(e)=>{
        setStudent({
            ...student,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        const mark =[
            Number(student.hindi),
            Number(student.english),
            Number(student.science),
            Number(student.social),
            Number(student.maths),
            Number(student.computer),
        ];

        const total = mark.reduce((a,b)=> a + b,0);

        const percentage = (total / 600) * 100;

        let grade = "";
        let division = "";
        let result = "PASS";

        if (mark.some((mark) => mark < 33)){
            result = "FAIL";
            grade = "F";
            division = "--";
        }
        else {
          if(percentage >= 90) grade = "A+";
          else if (percentage >= 80) grade = "A";
          else if (percentage >= 70) grade = "B";
          else if (percentage >= 60) grade = "C";
          else grade = "D";

          if(percentage >= 65) division= "First";
          else if(percentage >= 45) division = "Second";
          else division ="Third";
        }

        onShowResult({
            ...student,
            total,
            percentage: percentage.toFixed(2),
            grade,
            division,
            result,
        });
    };
  return (
    <div className="form-container">
        <h1>Student Information</h1>

        <form onSubmit={handleSubmit}>

            <input
              type="text" 
              name='schoolName'
              placeholder='School Name'
              value={student.schoolName}
              onChange={handleChange}
              required
            />
            
            <input
              type="text" 
              name='year'
              placeholder='Academic Year'
              value={student.year}
              onChange={handleChange}
              required
            />

            <input
              type="text" 
              name='studentName'
              placeholder='Student Name'
              value={student.studentName}
              onChange={handleChange}
              required
            />

            <input
              type="text" 
              name='fatherName'
              placeholder='Father Name'
              value={student.fatherName}
              onChange={handleChange}
              required
            />

            <input
              type="text" 
              name='motherName'
              placeholder='Mother Name'
              value={student.motherName}
              onChange={handleChange}
              required
            />

            <input
              type="text" 
              name='rollNo'
              placeholder='Roll No.'
              value={student.rollNo}
              onChange={handleChange}
              required
            />

            <input
              type="text" 
              name='className'
              placeholder='Class Name'
              value={student.className}
              onChange={handleChange}
              required
            />

            <input
              type="text" 
              name='section'
              placeholder='Section'
              value={student.section}
              onChange={handleChange}
              required
            />
            
            <label>Date Of Birth</label>
            <input
              type="date" 
              name='dob'
              value={student.dob}
              onChange={handleChange}
              required
            />
             
             <hr />
            <h2>Student Mark</h2>

            <input 
              type="number" 
              name='hindi'
              placeholder='Hindi'
              min="0"
              max="100"
              value={student.hindi}
              onChange={handleChange}
              required
            />

            <input 
              type="number" 
              name='english'
              placeholder='English'
              min="0"
              max="100"
              value={student.english}
              onChange={handleChange}
              required
            />

            <input 
              type="number" 
              name='science'
              placeholder='Science'
              min="0"
              max="100"
              value={student.science}
              onChange={handleChange}
              required
            />

            <input 
              type="number" 
              name='social'
              placeholder='Social'
              min="0"
              max="100"
              value={student.social}
              onChange={handleChange}
              required
            />

            <input 
              type="number" 
              name='maths'
              placeholder='Maths'
              min="0"
              max="100"
              value={student.maths}
              onChange={handleChange}
              required
            />

            <input 
              type="number" 
              name='computer'
              placeholder='Computer'
              min="0"
              max="100"
              value={student.computer}
              onChange={handleChange}
              required
            />

            <button type='submit'>
                Show Result
            </button>
        </form>
    </div>
  )
}
export default StudentForm