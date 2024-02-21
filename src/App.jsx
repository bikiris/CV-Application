import { useState } from "react";
import ApplicationForm from "./components/ApplicationForm";
import CVPreview from "./components/CVPreview";
import "./App.css";

function App() {
  const [inputValues, setInputValues] = useState({
    "General Information": {
        "name": "",
        "email": "",
        "phone": "",
        "address": "",
        "linkedin": ""
    },
    "Education": {
        "School": "",
        "Degree": "",
        "Graduation Date": ""
    },
    "Experience": {
        "Job Title": "",
        "employer": "",
        "start Date": "",
        "end Date": "",
        "location": ""
    }
  });

  const handleInputChange = (section, field, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [section]: { ...(prevValues[section] || {}), [field]: value },
    }));
  };

  return (
    <div className="App">
      <ApplicationForm onInputChange={handleInputChange} />
      <CVPreview
        General={inputValues["General Information"]}
        Education={inputValues["Education Information"]}
        Experience={inputValues["Experience Information"]}
      />
    </div>
  );
}

export default App;
