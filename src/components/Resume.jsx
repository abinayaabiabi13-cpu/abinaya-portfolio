function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">

        <h2 className="section-title">Resume</h2>

        <p className="resume-intro">
          Passionate Java Developer focused on backend development,
          scalable systems, and clean architecture.
        </p>

        <div className="resume-wrapper">

          {/* LEFT SIDE */}
          <div className="resume-column">

            <h3>Summary</h3>

            <div className="resume-item">
              <h4>Abinaya A V</h4>
              <p>
                Innovative and deadline-driven Java Developer with strong
                experience in Spring Boot and backend systems.
              </p>
              <ul>
                <li>India</li>
                <li>+91 9791368587</li>
                <li>abinayaabiabi13@email.com</li>
              </ul>
            </div>

            <h3>Education</h3>

            <div className="resume-item">
              <h4>B.E Computer Science</h4>
              <h5>2023 - 2027</h5>
              <p>Panimalar Engineering College</p>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="resume-column">

            <h3>Professional Experience</h3>

            <div className="resume-item">
              <h4>Java Developer Intern</h4>
              <p>InternPe Tech Solutions</p>
              <ul>
                <li>Built REST APIs using Spring Boot</li>
                <li>Integrated MySQL database</li>
                <li>Improved application performance</li>
              </ul>
            </div>

          </div>

        </div>

        {/* Download Button */}
        <div className="resume-download">
          <a href="/resume.pdf" download className="download-btn">
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}

export default Resume;