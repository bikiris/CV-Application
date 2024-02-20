import AddSection from './AddSection';
import PropTypes from 'prop-types';
import './ApplicationForm.css'; 

function ApplicationForm ({ onInputChange }) {
    return (
        <>
            <div className="Form">
                <h1>Application Form</h1>
                <AddSection sectionName={"General Information"} fields={["name", "email", "phone", "address", "linkedin"]} onInputChange={onInputChange} />
                <AddSection sectionName={"Education Information"} fields={["School", "Degree", "Graduation Date"]} onInputChange={onInputChange}/>
                <AddSection sectionName={"Experience Information"} fields={["Job Title", "employer", "start Date", "end Date", "location"]} onInputChange={onInputChange}/>
            </div>
        </>
    )
}

ApplicationForm.propTypes = {
    onInputChange: PropTypes.func.isRequired,
};

export default ApplicationForm;