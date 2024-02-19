import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import GeneralSection from "./GeneralSection";
import './ApplicationForm.css'; 
function ApplicationForm () {
    return (
        <div className="Form">
            <h1>Application Form</h1>
            <GeneralSection />
            <EducationSection />
            <ExperienceSection />
        </div>
    )
}

export default ApplicationForm;