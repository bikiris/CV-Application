import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import AddField from './AddField';

const AddSection = ({ sectionName, fields }) => {
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
            <h2>{sectionName}</h2>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide' : 'Show'}
            </button>
            <div className={`toggleable-content ${isVisible ? 'visible' : 'hidden'}`}>
                {fields.map((field) => (
                    <AddField key={field} value={field} type="text" />
                ))}
                <div ref={endOfFormRef}></div>
            </div>
        </div>
    );
    
}

AddSection.propTypes = {
    sectionName: PropTypes.string.isRequired,
    fields: PropTypes.array.isRequired,
};

export default AddSection;