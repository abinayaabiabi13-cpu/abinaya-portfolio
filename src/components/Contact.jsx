function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <h2 className="section-title">Contact</h2>

        <p className="contact-intro">
          Feel free to reach out for collaborations, freelance work,
          or backend development opportunities.
        </p>

        <div className="contact-wrapper">

          {/* LEFT INFO */}
          <div className="contact-info">
            <div className="info-item">
              <h4>📍 Location</h4>
              <p>India</p>
            </div>

            <div className="info-item">
              <h4>📞 Phone</h4>
              <p>+91 9791368587</p>
            </div>

            <div className="info-item">
              <h4>✉ Email</h4>
              <p>abinayaabiabi13@gmail.com</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form">
            <form>
              <div className="form-row">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
              </div>

              <input type="text" placeholder="Subject" required />

              <textarea rows="6" placeholder="Message" required></textarea>

              <button type="submit" className="contact-btn">
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;