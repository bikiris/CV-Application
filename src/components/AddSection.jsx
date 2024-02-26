import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import AddField from './AddField';
import '../styles/AddSection.css';

const AddSection = ({ sectionName, fields, onInputChange }) => {
    const [isVisible, setIsVisible] = useState(false);
    // creates ref at the end of the form allow to focus to the end of the form
    const endOfFormRef = useRef(null);

    useEffect(() => {
        if (isVisible && endOfFormRef.current) {
            endOfFormRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isVisible]);

    return (
        <div className='section'>
            <h2>{sectionName}</h2>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide' : 'Show'}
            </button>
            <div className={`toggleable-content ${isVisible ? 'visible' : 'hidden'}`}>
                {fields.map((field) => (
                    <AddField key={field} value={field} type="text" onChange={(value) => onInputChange(sectionName, field, value)} />
                ))}
                <div ref={endOfFormRef}></div>
            </div>
        </div>
    );
    
}

AddSection.propTypes = {
    sectionName: PropTypes.string.isRequired,
    fields: PropTypes.array.isRequired,
    onInputChange: PropTypes.func.isRequired,
};

export default AddSection;