import AddSection from './AddSection';
import PropTypes from 'prop-types';
import '../styles/ApplicationForm.css'; 

function ApplicationForm ({ inputValues, onInputChange }) {
    return (
        <>
            <div className="Form">
                {Object.entries(inputValues).map(([section, fields]) => {
                    return (
                        <AddSection key={section} sectionName={section} fields={Object.keys(fields)} onInputChange={onInputChange} />
                    );
                })}
            </div>
        </>
    )
}

ApplicationForm.propTypes = {
    inputValues: PropTypes.object.isRequired,
    onInputChange: PropTypes.func.isRequired,
};

export default ApplicationForm;