import AddSection from './AddSection';
import PropTypes from 'prop-types';
import '../styles/ApplicationForm.css'; 

function ApplicationForm ({ onInputChange }) {
    return (
        <>
            <div className="Form">
                <AddSection sectionName={"General Information"} fields={["name", "email", "phone", "address", "linkedin"]} onInputChange={onInputChange} />
                <AddSection sectionName={"Education Information"} fields={["school", "degree", "graduation-date"]} onInputChange={onInputChange}/>
                <AddSection sectionName={"Experience Information"} fields={["job-title", "employer", "start-date", "end-date", "location"]} onInputChange={onInputChange}/>
            </div>
        </>
    )
}

ApplicationForm.propTypes = {
    onInputChange: PropTypes.func.isRequired,
};

export default ApplicationForm;