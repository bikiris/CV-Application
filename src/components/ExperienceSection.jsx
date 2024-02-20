import { useState, useEffect, useRef } from "react";

function ExperienceSection() {
    const [jobTitle,setJobTitle] = useState("");
    const [employer,setEmployer] = useState("");
    const [startDate,setStartDate] = useState("");
    const [endDate,setEndDate] = useState("");
    const [location,setLocation] = useState("");
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
            <h2>Experience</h2>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide' : 'Show'}
            </button>
            <div className={`toggleable-content ${isVisible ? 'visible' : 'hidden'}`}>
                <p>Job Title</p>
                <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
                <p>Employer</p>
                <input type="text" value={employer} onChange={(e) => setEmployer(e.target.value)} />
                <p>Start Date</p>
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                <p>End Date</p>
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                <p>Location</p>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                <div ref={endOfFormRef}></div>
            </div>
        </div>
    )
}

export default ExperienceSection;