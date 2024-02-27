import { useState, useRef } from "react";
import PropTypes from 'prop-types';

const AddField = ({ value, onChange }) => {
    const [field, setField] = useState("");

    const textareaRef = useRef(null);

    const adjustHeight = () => {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      };

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
    }else if (value.toUpperCase().includes("DESCRIPTION")){
        type = "textarea";
    }

    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);

    return (
        <>
        {type !== "textarea" && (
            <div>
                <p>{capitalizedValue}</p>
                <input type={type} value={field} onChange={handleInputChange} />
            </div>
        )}
        {type === "textarea" && (
            <div className="description">
                <p>{capitalizedValue}</p>
                <textarea ref={textareaRef} value={field} onChange={handleInputChange} onInput={adjustHeight} />
            </div>
        )}
        </>
    );
};

AddField.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default AddField;
    