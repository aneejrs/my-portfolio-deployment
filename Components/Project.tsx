"use client";

import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "Kanzas Tours & Travels",
    category: "Tourism Management Platform",

    description:
      "Developed a tourism management website for Lakshadweep travel packages with public-facing modules and admin-side functionalities for customer inquiries and content management.",

    technologies: [
      "Next.js",
      "React.js",
      "MongoDB",
      "REST API",
      "JWT Authentication",
      "Responsive UI",
    ],

    responsibilities: [
      "Developed responsive frontend pages using Next.js and React.js",
      "Built reusable UI components for travel packages and enquiry sections",
      "Implemented Contact Us module and admin dashboard for customer requests",
      "Secured admin routes with JWT-based authentication",
      "Integrated MongoDB for website and enquiry data storage",
      "Optimized website performance and SEO-friendly routing",
    ],

    liveDemo: "https://www.kanzastours.com",
    github: "",
  },

  {
    number: "02",
    title: "Wyntees",
    category: "E-Commerce Platform",

    description:
      "Developed a full-stack e-commerce platform for T-shirt sales with Cash on Delivery support, including frontend, backend and admin management modules.",

    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "JWT Authentication",
      "REST API",
    ],

    responsibilities: [
      "Developed scalable frontend components using Next.js and TypeScript",
      "Developed CRUD operations for products and categories",
      "Implemented secure JWT authentication for admin login",
      "Integrated MongoDB for product, category, and order management",
      "Designed responsive UI and ensured seamless user experience",
    ],

    liveDemo: "https://www.wyntees.in",
    github: "",
  },

  {
    number: "03",
    title: "Alma Elite",
    category: "Corporate Construction Website",

    description:
      "Developed a corporate website for a Saudi-based construction company, including public website pages and admin-side content management.",

    technologies: [
      "Next.js",
      "React.js",
      "MongoDB",
      "Admin Dashboard",
      "JWT Authentication",
    ],

    responsibilities: [
      "Built admin-side modules for dynamic content management",
      "Implemented JWT-based admin authentication",
      "Integrated MongoDB for website data storage",
      "Enhanced UI design and SEO optimization",
    ],

    liveDemo: "https://www.almaeliteksa.com",
    github: "",
  },

  {
    number: "04",
    title: "Wynxio Technologies",
    category: "Corporate Website Revamp",

    description:
      "Revamped the existing corporate website from ASP.NET MVC to Next.js, modernizing the architecture and improving website performance.",

    technologies: [
      "Next.js",
      "React.js",
      "MongoDB",
      "JWT Authentication",
    ],

    responsibilities: [
      "Migrated the existing website architecture from ASP.NET MVC to Next.js",
      "Developed modern reusable React components",
      "Implemented responsive layouts and improved UI consistency",
      "Worked with authentication and dynamic website content",
      "Improved overall website performance and maintainability",
    ],

    liveDemo: "https://www.wynxiotech.com",
    github: "",
  },

  {
    number: "05",
    title: "SS Akhil Dath & Gouri Krishna RD",
    category: "Freelance Digital Wedding Invitation",

    description:
      "Designed and developed a premium interactive digital wedding invitation as a freelance client project, featuring bilingual content, RSVP functionality, event details, animations and Kerala-inspired visual design.",

    technologies: [
      "React.js",
      "TypeScript",
      "TanStack Start",
      "TanStack Router",
      "Vite",
      "Tailwind CSS",
      "Git & GitHub",
      "Vercel",
    ],

    responsibilities: [
      "Developed the responsive digital wedding invitation using React.js and TypeScript",
      "Implemented English and Malayalam language support",
      "Built interactive RSVP and guest response functionality",
      "Implemented live wedding countdown and event information sections",
      "Integrated Google Calendar and Google Maps functionality",
      "Created Kerala-inspired animations, decorations and visual effects",
      "Implemented background wedding music and interactive controls",
      "Optimized the experience for mobile, tablet and desktop devices",
      "Configured and deployed the production website using Vercel",
    ],

    liveDemo: "https://wedding.ssakhildath.com",
    github: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <div className="section-heading">

          <p className="section-label">
            PROFESSIONAL PROJECTS
          </p>

          <h2>
            Selected work &
            <span> real-world projects.</span>
          </h2>

          <p>
            A selection of web applications, corporate platforms
            and freelance client projects I&apos;ve worked on using
            modern frontend technologies.
          </p>

        </div>

        {/* =====================================================
            PROJECT LIST
        ===================================================== */}

        <div className="projects-list">

          {projects.map((project, index) => (

            <motion.article
              key={project.title}
              className="project-card-large"

              initial={{
                opacity: 0,
                y: 35,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.15,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >

              {/* =================================================
                  PROJECT TOP
              ================================================= */}

              <div className="project-top">

                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-category">
                  {project.category}
                </div>

              </div>

              {/* =================================================
                  PROJECT MAIN
              ================================================= */}

              <div className="project-main">

                {/* =================================================
                    PROJECT INFORMATION
                ================================================= */}

                <div className="project-info">

                  <h3>
                    {project.title}
                  </h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  {/* =================================================
                      TECHNOLOGIES
                  ================================================= */}

                  <div className="project-tech">

                    {project.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                  {/* =================================================
                      PROJECT ACTIONS
                  ================================================= */}

                  <div className="project-actions">

                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-live-button"
                    >
                      <FaExternalLinkAlt />

                      Live Demo
                    </a>

                    {project.github && (

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github-button"
                      >
                        <FaGithub />

                        GitHub
                      </a>

                    )}

                  </div>

                </div>

                {/* =================================================
                    RESPONSIBILITIES
                ================================================= */}

                <div className="project-responsibilities">

                  <h4>
                    Key Responsibilities
                  </h4>

                  <ul>

                    {project.responsibilities.map(
                      (responsibility) => (

                        <li key={responsibility}>
                          {responsibility}
                        </li>

                      )
                    )}

                  </ul>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}