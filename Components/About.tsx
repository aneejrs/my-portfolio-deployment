import {
  FaCode,
  FaLaptopCode,
  FaLightbulb,
} from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">

        <div className="section-heading">
          <p className="section-label">
            ABOUT ME
          </p>

          <h2>
            Turning ideas into
            <span> useful products.</span>
          </h2>
        </div>

        <div className="about-grid">

          <div className="about-content">
            <p>
              I&apos;m a frontend developer passionate about
              creating modern, responsive and intuitive
              web experiences.
            </p>

            <p>
              My primary focus is React.js and Next.js,
              with experience building reusable components,
              responsive interfaces, dashboards and
              API-driven applications.
            </p>

            <p>
              I enjoy solving practical problems through
              clean code, thoughtful UI and modern
              frontend technologies.
            </p>
          </div>

          <div className="about-cards">

            <div className="about-card">
              <FaCode />

              <div>
                <h3>Clean Code</h3>
                <p>
                  Reusable and maintainable frontend
                  architecture.
                </p>
              </div>
            </div>

            <div className="about-card">
              <FaLaptopCode />

              <div>
                <h3>Modern UI</h3>
                <p>
                  Responsive interfaces built for
                  real users.
                </p>
              </div>
            </div>

            <div className="about-card">
              <FaLightbulb />

              <div>
                <h3>Problem Solving</h3>
                <p>
                  Practical solutions focused on
                  business requirements.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}