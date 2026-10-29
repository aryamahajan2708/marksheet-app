import React from 'react'
import './Marksheet.css';

function Marksheet({ student}) {
    if (!student) return null;

    const subjects = [
        {name : "Hindi", marks: student.hindi},
        {name : "English", marks: student.english},
        {name : "Science", marks: student.science},
        {name : "Social", marks: student.social},
        {name : "Maths", marks: student.maths},
        {name : "Computer", marks: student.computer},
    ];

  return (
    <div className="marksheet">
        <div className="header">
            <h1>{student.schoolName}</h1>
            <h3>Annual Examination Marksheet</h3>
            <p>Academic year : {student.year}</p>
        </div>

        {/* student details */}

        <div className="student-info">
            <div>
                <p><strong>Student Name :</strong> {student.studentName}</p>
                <p><strong>Father Name :</strong> {student.fatherName}</p>
                <p><strong>Mother Name :</strong> {student.motherName}</p>
                <p><strong>Date Of Birth :</strong> {student.dob}</p>
            </div>
            <div>
                <p><strong>Roll No. :</strong> {student.rollNo}</p>
                <p><strong>Class :</strong> {student.className}</p>
                <p><strong>Section :</strong> {student.section}</p>
            </div>       
        </div>

        {/* mark table */}

        <table className="mark-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Maximum Marks</th>
                <th>Obtained Marks</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
                {subjects.map((subject , index)=>(
                    <tr key={index}>
                        <td>{subject.name}</td>
                        <td>100</td>
                        <td>{subject.marks}</td>
                        <td>
                            {Number(subject.marks) >= 33 ?(
                                <span style={{color:"green" , fontWeight :'bold'}}>Pass</span>
                            ) : (
                                <span style={{color:"red" , fontWeight :'bold'}}>Fail</span>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        {/* summary */}

        <div className="summary">
            <h3>Result Summary</h3>

            <table className='summary-table'>
                <tbody>
                    <tr>
                        <td>Total Marks</td>
                        <td>600</td>
                        <td>{student.total}</td>
                    </tr>

                    <tr>
                        <td>Percentage</td>
                        <td colSpan="2">{student.percentage}%</td>
                    </tr>

                    <tr>
                        <td>Grade</td>
                        <td colSpan="2">{student.grade}</td>
                    </tr>

                    <tr>
                        <td>Division</td>
                        <td colSpan="2">{student.division}</td>
                    </tr>
                    <tr>
                        <td>Final Result</td>
                        <td colSpan="2">
                            {student.result === "PASS" ?(
                                <span style={{color:'green', fontWeight:'bold',fontSize:'20px'}}>PASS</span>
                            ) : (
                                <span style={{color:'red', fontWeight:'bold',fontSize:'20px'}}>FAIL</span>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="remarks">
            <p>
                {student.result === "PASS"
                ? "Congratulations! You have successfully passed the examination." 
                : "Needs improvement. You are fail in the examination."}          
            </p>                            
        </div>  
    </div>
  );
};
export default Marksheet