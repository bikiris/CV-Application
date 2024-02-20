
import { useState } from "react";
import PropTypes from 'prop-types';

const AddField = ({ value }) => {
    const [field, setField] = useState("");
    let type = "text";

    if (value.toUpperCase().includes("DATE")) {
        type = "date";
    }else if (value.toUpperCase().includes("email")) {
        type = "email";
    }else if (value.toUpperCase().includes("phone")) {
        type = "tel";
    }else {
        type = "text";
    }

    const handleInputChange = (e) => {
        setField(e.target.value);
    };

    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);

    return (
        <div>
            <p>{capitalizedValue}</p>
            <input type={type} value={field} onChange={handleInputChange} />
        </div>
    );
};

AddField.propTypes = {
    value: PropTypes.string.isRequired,
};

export default AddField;
    