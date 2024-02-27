import { useState } from "react";
import ApplicationForm from "./components/ApplicationForm";
import CVPreview from "./components/CVPreview";
import JsPDF from "jspdf";
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
        "graduation-date": ""
    },
    "Experience": {
        "job-title": "",
        "employer": "",
        "start-date": "",
        "end-date": "",
        "location": ""
    }
  });

  const handleInputChange = (section, field, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [section]: { ...(prevValues[section] || {}), [field]: value },
    }));
  };

  const downloadPDF = () => {
    const report = new JsPDF('portrait', 'pt', 'a4');
    report.html(document.querySelector('.resume-preview')).then(() => {
      report.save("resume.pdf");
    });
 }

  return (
    <div className="App">
      <ApplicationForm onInputChange={handleInputChange} />
      <CVPreview
        General={inputValues["General Information"]}
        Education={inputValues["Education Information"]}
        Experience={inputValues["Experience Information"]}
      />
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
}

export default App;
