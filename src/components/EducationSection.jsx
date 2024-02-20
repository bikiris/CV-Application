import { useState, useEffect, useRef} from 'react';

function EducationSection() {
    const [school,setSchool] = useState("");
    const [degree,setDegree] = useState("");
    const [graduationDate,setGraduationDate] = useState("");
    const [isVisible, setIsVisible] = useState(true);
    // creates ref at the end of the form allow to focus to the end of the form
    const endOfFormRef = useRef(null);

    useEffect(() => {
        if (isVisible && endOfFormRef.current) {
            endOfFormRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isVisible]);

    return (
        <div>
            <h2>Education</h2>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide' : 'Show'}
            </button>
            <div className={`toggleable-content ${isVisible ? 'visible' : 'hidden'}`}>
                <p>School</p>
                <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} />
                <p>Degree</p>
                <input type="text" value={degree} onChange={(e) => setDegree(e.target.value)} />
                <p>Graduation Date</p>
                <input type="date" value={graduationDate} onChange={(e) => setGraduationDate(e.target.value)} />  
            </div>
        </div>
    )
}

export default EducationSection;