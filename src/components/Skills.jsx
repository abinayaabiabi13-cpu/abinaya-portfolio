function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <h2 className="section-title">Skills</h2>

        <p className="skills-intro">
          I specialize in backend development using Java and Spring Boot.
          I build scalable REST APIs, work with databases, and design clean,
          maintainable architectures. Passionate about writing optimized
          and production-ready code.
        </p>

        <div className="skills-grid">

          {/* LEFT SIDE */}
          <div className="skill-column">

            <div className="skill">
              <span>Java</span>
              <span>95%</span>
              <div className="progress">
                <div className="progress-bar" style={{width:"95%"}}></div>
              </div>
            </div>

            <div className="skill">
              <span>Spring Boot</span>
              <span>90%</span>
              <div className="progress">
                <div className="progress-bar" style={{width:"90%"}}></div>
              </div>
            </div>

            <div className="skill">
              <span>MySQL</span>
              <span>85%</span>
              <div className="progress">
                <div className="progress-bar" style={{width:"85%"}}></div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="skill-column">

            <div className="skill">
              <span>REST APIs</span>
              <span>92%</span>
              <div className="progress">
                <div className="progress-bar" style={{width:"92%"}}></div>
              </div>
            </div>

            <div className="skill">
              <span>HTML / CSS</span>
              <span>80%</span>
              <div className="progress">
                <div className="progress-bar" style={{width:"80%"}}></div>
              </div>
            </div>

            <div className="skill">
              <span>Git & GitHub</span>
              <span>88%</span>
              <div className="progress">
                <div className="progress-bar" style={{width:"88%"}}></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;