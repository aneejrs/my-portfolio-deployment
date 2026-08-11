import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">

        <div className="section-heading center">
          <p className="section-label">
            CONTACT
          </p>

          <h2>
            Let&apos;s work
            <span> together.</span>
          </h2>

          <p>
            Open to frontend development opportunities,
            interesting projects and meaningful
            collaborations.
          </p>
        </div>

        <div className="contact-card">

          <a
            href="mailto:aneejrs619@gmail.com"
            className="contact-item"
          >
            <FaEnvelope />

            <div>
              <small>Email</small>
              <strong>
                aneejrs619@gmail.com
              </strong>
            </div>
          </a>

          <a
            href="tel:+917560989319"
            className="contact-item"
          >
            <FaPhone />

            <div>
              <small>Phone</small>
              <strong>
                +91 7560989319
              </strong>
            </div>
          </a>

          <div className="contact-item">
            <FaMapMarkerAlt />

            <div>
              <small>Location</small>
              <strong>
                Trivandrum, Kerala, India
              </strong>
            </div>
          </div>

          <div className="contact-actions">


            <a
              href="https://github.com/aneejrs/"
              target="_blank"
              rel="noreferrer"
              className="social-button"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/aneej-r-suku-ba6959217/"
              target="_blank"
              rel="noreferrer"
              className="social-button"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}