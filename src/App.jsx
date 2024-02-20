import { useState } from "react";
import ApplicationForm from "./components/ApplicationForm";

function App() {
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (section, field, value) => {
      setInputValues(prevValues => ({ 
          ...prevValues, 
          [section]: { ...(prevValues[section] || {}), [field]: value }
      }));
  };

  console.log(inputValues);
  
  return (
    <div className="App">
      <ApplicationForm onInputChange={handleInputChange}/>
      {/* Display the input values */}
      <div className="preview">
                {Object.entries(inputValues).map(([section, fields]) => (
                    <div key={section}>
                        <h2>{section}</h2>
                        {Object.entries(fields).map(([field, value]) => (
                            <p key={field}>{`${field}: ${value}`}</p>
                        ))}
                    </div>
                ))}
            </div>
    </div>
  )
}

export default App;
