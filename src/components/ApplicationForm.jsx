import AddSection from './AddSection';
import './ApplicationForm.css'; 
function ApplicationForm () {
    return (
        <>
            <div className="Form">
                <h1>Application Form</h1>
                <AddSection sectionName={"General Information"} fields={["name", "email", "phone", "address", "linkedin"]} />
                <AddSection sectionName={"Education Information"} fields={["School", "Degree", "Graduation Date"]} />
                <AddSection sectionName={"Experience Information"} fields={["Job Title", "employer", "start Date", "end Date", "location"]} />
            </div>
        </>
    )
}

export default ApplicationForm;