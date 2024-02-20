import AddSection from "./AddSection";

function ExperienceSection() {

    return (
        <div>
            <AddSection sectionName={"Experience"} fields={["Job Title", "employer", "start Date", "end Date", "location"]} />
        </div>
    )
}

export default ExperienceSection;