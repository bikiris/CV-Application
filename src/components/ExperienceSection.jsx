import { useState } from "react";

function ExperienceSection() {
    const [jobTitle,setJobTitle] = useState("");
    const [employer,setEmployer] = useState("");
    const [startDate,setStartDate] = useState("");
    const [endDate,setEndDate] = useState("");
    const [location,setLocation] = useState("");

    return (
        <div>
            <h1>Experience</h1>
            <div>
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
            </div>
        </div>
    )
}

export default ExperienceSection;