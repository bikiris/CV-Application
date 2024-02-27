
import { useState } from "react";
import PropTypes from 'prop-types';

const AddField = ({ value, onChange }) => {
    const [field, setField] = useState("");

    const handleInputChange = (e) => {
        setField(e.target.value);
        onChange(e.target.value);
    };

    let type = "text";

    if (value.toUpperCase().includes("DATE")) {
        type = "date";
    }else if (value.toUpperCase().includes("EMAIL")) {
        type = "email";
    }else if (value.toUpperCase().includes("PHONE")) {
        type = "tel";
    }

    

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
    onChange: PropTypes.func.isRequired,
};

export default AddField;
    