import profile from "../assets/profile.jpg";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-wrapper">

        {/* Image Section */}
        <div className="about-image">
          <img src={profile} alt="Profile" />
        </div>

        {/* Content Section */}
        <div className="about-content">
          <h2>About Me</h2>

          <p className="about-intro">
            Java Developer with strong foundation in backend development,
            object-oriented programming and Spring Boot. Passionate about
            building scalable applications and clean architecture.
          </p>

          <div className="about-details">
            <div>
              <p><strong>Birthday:</strong> 30/06/2005</p>
              <p><strong>Phone:</strong> +91 9791368587</p>
              <p><strong>City:</strong> Kanyakumari </p>
            </div>

            <div>
              <p><strong>Age:</strong> 20</p>
              <p><strong>Degree:</strong> B.E CSE</p>
              <p><strong>Email:</strong> abinayaabiabi13@email.com</p>
            </div>
          </div>

          <p className="about-description">
            I enjoy solving real-world problems using Java and modern backend
            technologies. I focus on writing efficient, maintainable code and
            continuously improving my technical skills.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;