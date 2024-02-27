import PropTypes from 'prop-types';
import '../styles/CVPreview.css';

const CVPreview = ({ General = {}, Education = {}, Experience={} }) => {

    const isObjectEmpty = (obj) => Object.values(obj).every(x => (x === null || x === ''));

    const descriptionToBulletPoints = (description) => {
        const bulletPoints = description.split('\n').filter((line) => line.trim() !== '');
        return (
            <ul>
                {bulletPoints.map((point, index) => <li key={index}>{point}</li>)}
            </ul>
        );
    }

    return (
        <div className='resume-preview'>
            {!isObjectEmpty(General) && (
                <div className='general'>
                    <p id="name">{General.name}</p>
                    <div className='contact-info'>
                        {General.email && <p id="email">{General.email}</p>}
                        {General.phone && <p id="phone">{General.phone}</p>}
                        {General.address && <p id="address">{General.address}</p>}
                        {General.linkedin && <p id="linkedin">{General.linkedin}</p>}
                    </div>
                </div>
            )}
            {!isObjectEmpty(Education) && (
                <div className='education'>
                    <h2>Education</h2>
                    <div className='education-info'>
                        <div className='row'>
                            {Education.school && <p id="school">{Education.school}</p>}
                            {Education['graduation-date'] && <p id="graduation-date">{Education['graduation-date']}</p>}
                        </div>
                        <div className='row'>
                            {Education.degree && <p id="degree">{Education.degree}</p>}
                        </div>
                    </div>
                    {Education.description && descriptionToBulletPoints(Education.description)}
                </div> 
            )}
            {!isObjectEmpty(Experience) && (
                <div className='experience'>
                    <h2>Experience</h2>
                    <div className='experience-info'>
                        <div className='row'>
                            {Experience.employer && <p id="employer">{Experience.employer}</p>}
                            {Experience['start-date'] && Experience['end-date'] && (
                                <>
                                    {`${Experience['start-date']} to ${Experience['end-date']}`}
                                </>
                            )}
                        </div>
                        <div className='row'>
                            {Experience['job-title'] && <p id="job-title">{Experience['job-title']}</p>}
                            {Experience.location && <p id="location">{Experience.location}</p>}
                        </div>
                    </div>
                    {Experience.description && descriptionToBulletPoints(Experience.description)}
                </div>  
            )}

            
            {/* to iterate through the object
            {Object.entries({ 'Education': Education, 'Experience': Experience }).map(([section, fields]) => {
                // eslint-disable-next-line no-unused-vars
                const nonEmptyFields = Object.entries(fields).filter(([_, value]) => value);
                return nonEmptyFields.length > 0 && (
                    <div key={section}>
                        <h2>{section}</h2>
                        {nonEmptyFields.map(([field, value]) => (
                            <p key={field} id={field.toLowerCase()}>{`${field}: ${value}`}</p>
                        ))}
                    </div>
                );
            })} */}
        </div>
    );
};

CVPreview.propTypes = {
    General: PropTypes.object,
    Education: PropTypes.object,
    Experience: PropTypes.object,
};

export default CVPreview;
