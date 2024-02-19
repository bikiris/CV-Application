import { useState } from 'react';

function GeneralSection() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [location,setLocation] = useState("");
    const [phone,setPhone] = useState("");
    const [linkedIn,setLinkedIn] = useState("");
    return (
        <div>
            <h1>General Information</h1>
            <p>Name</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <p>Email</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p>Location</p>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            <p>Phone</p>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <p>LinkedIn</p>
            <input type="url" value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} />
        </div>
    )
}

export default GeneralSection;