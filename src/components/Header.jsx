import JsPDF from "jspdf";
import "../styles/Header.css"

const Header = () => {
    const downloadPDF = () => {
        const report = new JsPDF('portrait', 'pt', 'a4');
        report.html(document.querySelector('.resume-preview')).then(() => {
          report.save("resume.pdf");
        });
    }

    return (
        <nav className='header'>
            <h2>Resume Builder</h2>
            <ul className="navigation">
                <li>###</li>
                <li>
                <button onClick={downloadPDF}>Download PDF</button>
                </li>
            </ul>
        </nav>
    )
}

export default Header;