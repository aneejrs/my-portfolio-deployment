
"use client";

import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaSass,
  FaBootstrap,
  FaDocker,
  FaKey,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiMongodb,
  SiPostman,
  SiVercel,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    category: "Frontend",
    level: "Advanced",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    category: "Frontend",
    level: "Advanced",
    icon: FaCss3Alt,
  },
  {
    name: "JavaScript",
    category: "Language",
    level: "Advanced",
    icon: FaJsSquare,
  },
  {
    name: "React.js",
    category: "Frontend",
    level: "Advanced",
    icon: FaReact,
  },
  {
    name: "Next.js",
    category: "Framework",
    level: "Advanced",
    icon: SiNextdotjs,
  },
  {
    name: "TypeScript",
    category: "Language",
    level: "Intermediate",
    icon: SiTypescript,
  },
  {
    name: "Redux",
    category: "State Management",
    level: "Intermediate",
    icon: SiRedux,
  },
  {
    name: "CSS Modules",
    category: "Styling",
    level: "Advanced",
    icon: FaCss3Alt,
  },
  {
    name: "Node.js",
    category: "Backend",
    level: "Intermediate",
    icon: FaNodeJs,
  },
  {
    name: "MongoDB",
    category: "Database",
    level: "Intermediate",
    icon: SiMongodb,
  },
  {
    name: "REST API",
    category: "API Integration",
    level: "Advanced",
    icon: SiPostman,
  },
  {
    name: "JWT Authentication",
    category: "Authentication",
    level: "Advanced",
    icon: FaKey,
  },
  {
    name: "Git",
    category: "Version Control",
    level: "Advanced",
    icon: FaGitAlt,
  },
  {
    name: "GitHub",
    category: "Version Control",
    level: "Advanced",
    icon: FaGithub,
  },
  {
    name: "Sass",
    category: "Styling",
    level: "Intermediate",
    icon: FaSass,
  },
  {
    name: "Bootstrap",
    category: "UI Framework",
    level: "Intermediate",
    icon: FaBootstrap,
  },
  {
    name: "Vercel Deployment",
    category: "Deployment",
    level: "Intermediate",
    icon: SiVercel,
  },
  {
    name: "Docker",
    category: "DevOps",
    level: "Intermediate",
    icon: FaDocker,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">

        {/* SECTION HEADER */}

        <motion.div
          className="section-heading center"
          initial={{
            opacity: 0,
            y: 30,
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
            TECHNICAL EXPERTISE
          </p>

          <h2>
            My Technical{" "}
            <span className="gradient-text">
              Toolkit.
            </span>
          </h2>

          <p>
            Technologies and tools I use to build
            modern, scalable and responsive web applications.
          </p>
        </motion.div>

        {/* SKILLS GRID */}

        <div className="skills-grid">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                className="skill-card-3d"

                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.96,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}

                viewport={{
                  once: true,
                  amount: 0.15,
                }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}

                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: -5,
                  scale: 1.03,
                }}
              >

                {/* ICON */}

                <div className="skill-icon-large">
                  <Icon />
                </div>

                {/* NAME + CATEGORY */}

                <div className="skill-content">
                  <h3>
                    {skill.name}
                  </h3>

                  <p>
                    {skill.category}
                  </p>
                </div>

                {/* LEVEL */}

                <div className="skill-level">

                  <span>
                    {skill.level}
                  </span>

                  <div className="skill-level-bar">
                    <div
                      className={
                        skill.level === "Advanced"
                          ? "level-fill advanced"
                          : "level-fill intermediate"
                      }
                    />
                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

