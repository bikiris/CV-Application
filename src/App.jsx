import { useState } from "react";
import ApplicationForm from "./components/ApplicationForm";
import CVPreview from "./components/CVPreview";
import Header from "./components/Header";
import "./styles/App.css";

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
        "school": "",
        "degree": "",
        "graduation-date": "",
        "description": ""
    },
    "Experience": {
        "job-title": "",
        "employer": "",
        "start-date": "",
        "end-date": "",
        "location": "",
        "description": ""
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
      <Header />
      <div className="Main">
        <ApplicationForm inputValues={inputValues} onInputChange={handleInputChange} />
        <CVPreview
          General={inputValues["General Information"]}
          Education={inputValues["Education"]}
          Experience={inputValues["Experience"]}
        />
      </div>
    </div>
  );
}

export default App;
