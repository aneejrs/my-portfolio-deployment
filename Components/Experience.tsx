"use client";

import { motion } from "framer-motion";

const experiences = [
      {
    role: "React Developer Intern",
    company: "Wynxio Technologies",
    location: "Trivandrum, Kerala, India",
    period: "Sep 2025 – Present",
    description:
      "Developed modern and responsive web applications using React.js and Next.js. Built reusable UI components, integrated APIs and worked with modern frontend development practices.",
  },
  {
    role: "Relationship Manager",
    company: "Access Insurance Broking Pvt. Ltd.",
    location: "Kochi, Kerala, India",
    period: "Dec 2024 – Sep 2025",
    description:
      "Managing client relationships, business operations, customer requirements and insurance-related processes while ensuring service quality and business growth.",
  },
   {
    role: "Process Associate",
    company: "M Squared Software and Services",
    location: "Trivandrum, Kerala, India",
    period: "Jun 2022 – Oct 2022",
    description:
      "Processed medical billing, claims management and Revenue Cycle Management (RCM) activities to ensure timely reimbursement. Verified patient demographics, insurance coverage, eligibility and authorization details prior to claim submission. Performed payment posting, account reconciliation and claims follow-up while maintaining accuracy and compliance standards.",
  },
  {
    role: "Data Processing Executive",
    company: "Standout IT Solutions",
    location: "Technopark, Trivandrum, Kerala, India",
    period: "Jan 2018 – Apr 2022",
    description:
      "Handled data processing, verification and business operations while maintaining accuracy, productivity and quality standards.",
  },
 
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">

        <div className="section-heading center">
          <p className="section-tag">EXPERIENCE</p>

          <h2>
            My professional{" "}
            <span className="gradient-text">
              journey.
            </span>
          </h2>

          <p>
            Experience across frontend development,
            business operations, data processing and
            client relationship management.
          </p>
        </div>

        <div className="timeline">

          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.role}`}
              className="experience-item"
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >

              <div className="timeline-dot"></div>

              <div className="experience-card">

                <div className="experience-header">

                  <div>
                    <h3>
                      {experience.role}
                    </h3>

                    <p className="company">
                      {experience.company}
                    </p>

                    <p className="company">
                      {experience.location}
                    </p>
                  </div>

                  <span>
                    {experience.period}
                  </span>

                </div>

                <p className="experience-text">
                  {experience.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}