import { useState } from 'react';

function EducationSection() {
    const [school,setSchool] = useState("");
    const [degree,setDegree] = useState("");
    const [graduationDate,setGraduationDate] = useState("");
    return (
        <div>
            <h1>Education</h1>
            <p>School</p>
            <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} />
            <p>Degree</p>
            <input type="text" value={degree} onChange={(e) => setDegree(e.target.value)} />
            <p>Graduation Date</p>
            <input type="date" value={graduationDate} onChange={(e) => setGraduationDate(e.target.value)} />  
        </div>
    )
}

export default EducationSection;