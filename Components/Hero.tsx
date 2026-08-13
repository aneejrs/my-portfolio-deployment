"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">

        {/* =========================
            HERO CONTENT
        ========================== */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-intro">
            FRONTEND DEVELOPER
          </p>

          <h1 className="hero-name-main">
           <p>Hi, I’m</p> 
            <span>Aneej R Suku</span>
          </h1>

          <h2 className="hero-position">
            React Developer
          </h2>

          <p className="hero-description">
            I’m a Frontend Developer specializing in React.js and Next.js,
            passionate about building modern, scalable and responsive web
            applications with clean UI, reusable components and
            performance-focused development.
          </p>

          {/* =========================
              EXPERIENCE SUMMARY
          ========================== */}
          <div className="hero-summary">

            <div className="summary-item">
              <strong>5+</strong>

              <div>
                <span>Years Experience</span>
                <small>Professional Experience</small>
              </div>
            </div>

            <div className="summary-line"></div>

            <div className="summary-item">
              <strong>1+</strong>

              <div>
                <span>Year</span>
                <small>Frontend Development</small>
              </div>
            </div>

            <div className="summary-line"></div>

            <div className="summary-item">
              <strong>4+</strong>

              <div>
                <span>Years</span>
                <small>Operations</small>
              </div>
            </div>

          </div>

          {/* =========================
              ACTION BUTTONS
          ========================== */}
          <div className="hero-actions">

            <a
              href="#projects"
              className="primary-button"
            >
              View My Projects
              <FaArrowRight />
            </a>

            <a
              href="/Aneej-R-Suku.pdf"
              download
              className="secondary-button"
            >
              Download Resume
              <FaDownload />
            </a>

          </div>

          {/* =========================
              SOCIAL LINKS
          ========================== */}
          <div className="hero-socials">

            <a
              href="https://github.com/aneejrs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/aneej-r-suku-ba6959217/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

          </div>

          {/* =========================
              TECHNOLOGY STACK
          ========================== */}
          <div className="hero-tech">
            <span>React.js</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>JavaScript</span>
            <span>Node.js</span>
          </div>

        </motion.div>

        {/* =========================
            PROFILE IMAGE
        ========================== */}
        <motion.div
          className="hero-profile"
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
        >

          <div className="profile-glow"></div>

          <div className="profile-ring profile-ring-one"></div>

          <div className="profile-ring profile-ring-two"></div>

          <div className="profile-image-wrapper">
            <Image
              src="/Aneej.png"
              alt="Aneej R Suku - React and Next.js Developer"
              width={430}
              height={430}
              priority
              className="profile-image"
            />
          </div>

        </motion.div>

      </div>
    </section>
  );
}