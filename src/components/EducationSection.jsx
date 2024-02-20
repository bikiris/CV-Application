import AddSection from "./AddSection";

function EducationSection() {
    return (
        <div>
            <AddSection sectionName={"Education"} fields={["School", "Degree", "Graduation Date"]} />
        </div>
    )
}

export default EducationSection;