import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import AddField from './AddField';
import '../styles/AddSection.css';

const AddSection = ({ sectionName, fields, onInputChange }) => {
    const [isVisible, setIsVisible] = useState(false);
    // creates ref at the end of the form allow to focus to the end of the form
    const formRef = useRef(null);

    useEffect(() => {
        if (isVisible && formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isVisible]);

    return (
        <section className='section'>
            <div className='section-header' ref={formRef}>
                <h2>{sectionName}</h2>
                <button onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? 'Hide' : 'Show'}
                </button>
            </div>
            <div className={`toggleable-content ${isVisible ? 'visible' : 'hidden'}`}>
                {fields.map((field) => (
                    <AddField key={field} value={field} type="text" onChange={(value) => onInputChange(sectionName, field, value)} />
                ))}
            </div>
        </section>
    );
    
}

AddSection.propTypes = {
    sectionName: PropTypes.string.isRequired,
    fields: PropTypes.array.isRequired,
    onInputChange: PropTypes.func.isRequired,
};

export default AddSection;