import PropTypes from 'prop-types';

const CVPreview = ({ General = {}, Education = {}, Experience={} }) => {
    return (
        <div className='preview'>
            {Object.entries({ 'General Information': General, 'Education': Education, 'Experience': Experience }).map(([section, fields]) => {
                // eslint-disable-next-line no-unused-vars
                const nonEmptyFields = Object.entries(fields).filter(([_, value]) => value);
                return nonEmptyFields.length > 0 && (
                    <div key={section}>
                        <h2>{section}</h2>
                        {nonEmptyFields.map(([field, value]) => (
                            <p key={field}>{`${field}: ${value}`}</p>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

CVPreview.propTypes = {
    General: PropTypes.object,
    Education: PropTypes.object,
    Experience: PropTypes.object,
};

export default CVPreview;
