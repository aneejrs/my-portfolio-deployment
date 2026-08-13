"use client";

import { motion } from "framer-motion";

import {
  FaCertificate,
  FaCode,
  FaNetworkWired,
  FaCloud,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

/* =========================================================
   CERTIFICATIONS DATA
========================================================= */

const certifications = [
    {
    title: "DevOps and Cloud – The Future of Software Engineering",
    issuer: "Wynxio Technologies",
    category:  "DevOps & Cloud",
    icon: <FaCloud />,
    description:
      "Certification focused on modern DevOps practices, cloud technologies and software delivery.",
    link: "#",
    },
    {
    title: "Front End Development Internship",
    issuer: "Wynxio Technologies",
    category: "Frontend Development",
    icon: <FaCode />,
    description:
      "Hands-on experience in frontend development, React.js, responsive UI development and modern web application practices.",
    link: "#",
  },

  {
    title: "Developer Essentials",
    issuer: "Kerala Blockchain Academy",
    category: "Technology",
    icon: <FaCertificate />,
    description:
      "Certification covering essential concepts and fundamentals related to modern software and blockchain technologies.",
    link: "#",
  },

 
  
];

/* =========================================================
   CERTIFICATIONS COMPONENT
========================================================= */

export default function Certifications() {
  return (
    <section
      className="certifications section"
      id="certifications"
    >
      <div className="container">

        {/* =================================================
            SECTION HEADING
        ================================================= */}

        <motion.div
          className="section-heading center"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <p className="section-tag">
            CERTIFICATIONS
          </p>

          <h2>
            Continuous{" "}
            <span className="gradient-text">
              learning.
            </span>
          </h2>

          <p>
            Professional certifications and continuous
            learning that complement my technical skills
            and frontend development experience.
          </p>

        </motion.div>


        {/* =================================================
            CERTIFICATIONS GRID
        ================================================= */}

        <div className="certifications-grid">

          {certifications.map(
            (certification, index) => (

              <motion.article
                key={certification.title}
                className="certification-card glass"

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
                }}

                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}

                whileHover={{
                  y: -8,
                }}
              >

                {/* =================================================
                    CARD TOP
                ================================================= */}

                <div className="certification-top">

                  <div className="certification-icon">
                    {certification.icon}
                  </div>

                  <span className="certification-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>


                {/* =================================================
                    CATEGORY
                ================================================= */}

                <span className="certification-category">
                  {certification.category}
                </span>


                {/* =================================================
                    CERTIFICATION TITLE
                ================================================= */}

                <h3>
                  {certification.title}
                </h3>


                {/* =================================================
                    ISSUER
                ================================================= */}

                <p className="certification-issuer">
                  {certification.issuer}
                </p>


                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p className="certification-description">
                  {certification.description}
                </p>


                {/* =================================================
                    VIEW CERTIFICATE
                ================================================= */}

                {certification.link !== "#" && (

                  <a
                    href={certification.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-link"
                  >

                    <span>
                      View Certificate
                    </span>

                    <FaArrowUpRightFromSquare />

                  </a>

                )}

              </motion.article>

            )
          )}

        </div>

      </div>
    </section>
  );
}