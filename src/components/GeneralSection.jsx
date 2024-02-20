import AddSection from './AddSection';

function GeneralSection() {
    return (
        <div>
            <AddSection sectionName={"General Information"} fields={["name", "email", "phone", "address", "linkedin"]} />
        </div>
    )
}

export default GeneralSection;