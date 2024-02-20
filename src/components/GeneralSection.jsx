import { useState, useEffect, useRef} from 'react';

function GeneralSection() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [location,setLocation] = useState("");
    const [phone,setPhone] = useState("");
    const [linkedIn,setLinkedIn] = useState("");
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
            <h2>General Information</h2>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide' : 'Show'}
            </button>
            <div className={`toggleable-content ${isVisible ? 'visible' : 'hidden'}`}>
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
        </div>
    )
}

export default GeneralSection;