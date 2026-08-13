"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaCertificate,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navItems = [
  {
    name: "Home",
    href: "#home",
    icon: <FaHome />,
  },
  {
    name: "About",
    href: "#about",
    icon: <FaUser />,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: <FaCode />,
  },
  {
    name: "Certifications",
    href: "#certifications",
    icon: <FaCertificate />,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: <FaBriefcase />,
  },
  
  {
    name: "Projects",
    href: "#projects",
    icon: <FaProjectDiagram />,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: <FaEnvelope />,
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [visible, setVisible] = useState(true);

  /* =========================================
     SCROLL + ACTIVE SECTION
  ========================================= */

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar at top
      if (currentScrollY <= 50) {
        setVisible(true);
      }
      // Scrolling down
      else if (currentScrollY > lastScrollY) {
        setVisible(false);
        setMenuOpen(false);
      }
      // Scrolling up
      else {
        setVisible(true);
      }

      lastScrollY = currentScrollY;

      /* Detect active section */

      const sections = navItems
        .map((item) =>
          document.querySelector(item.href)
        )
        .filter(Boolean);

      let currentSection = "home";

      sections.forEach((section) => {
        if (!section) return;

        const rect =
          section.getBoundingClientRect();

        if (
          rect.top <=
            window.innerHeight * 0.35 &&
          rect.bottom >=
            window.innerHeight * 0.35
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =========================================
     RESIZE
  ========================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* =========================================
     NAVIGATION
  ========================================= */

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const target =
      document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);

    window.history.replaceState(
      null,
      "",
      href
    );
  };

  return (
    <>
      {/* =====================================
          NAVBAR
      ===================================== */}

      <AnimatePresence>
        {visible && (
          <motion.header
            className="navbar"
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -100,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
          >
            <div className="navbar-container">

              {/* LOGO */}

              <a
                href="#home"
                className="navbar-logo"
                onClick={(event) =>
                  handleNavigation(
                    event,
                    "#home"
                  )
                }
              >
                <span className="logo-symbol">
                  A
                </span>

                <span className="logo-name">
                  ANEEJ
                </span>
              </a>

              {/* DESKTOP NAVIGATION */}

              <nav className="desktop-nav">
                {navItems.map((item) => {
                  const sectionId =
                    item.href.replace(
                      "#",
                      ""
                    );

                  const isActive =
                    activeSection ===
                    sectionId;

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`nav-link ${
                        isActive
                          ? "active"
                          : ""
                      }`}
                      onClick={(event) =>
                        handleNavigation(
                          event,
                          item.href
                        )
                      }
                    >
                      <span className="nav-icon">
                        {item.icon}
                      </span>

                      <span>
                        {item.name}
                      </span>

                      {isActive && (
                        <motion.span
                          className="nav-active-line"
                          layoutId="nav-active-line"
                        />
                      )}
                    </a>
                  );
                })}
              </nav>

              {/* MOBILE BUTTON */}

              <button
                type="button"
                className="mobile-menu-button"
                onClick={() =>
                  setMenuOpen(
                    !menuOpen
                  )
                }
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <FaTimes />
                ) : (
                  <FaBars />
                )}
              </button>

            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* =====================================
          MOBILE NAVIGATION
      ===================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <motion.nav
              className="mobile-nav"
              initial={{
                y: -20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
            >
              {navItems.map(
                (item, index) => {
                  const sectionId =
                    item.href.replace(
                      "#",
                      ""
                    );

                  const isActive =
                    activeSection ===
                    sectionId;

                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className={`mobile-nav-link ${
                        isActive
                          ? "active"
                          : ""
                      }`}
                      onClick={(event) =>
                        handleNavigation(
                          event,
                          item.href
                        )
                      }
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          index * 0.05,
                      }}
                    >
                      <span className="mobile-nav-icon">
                        {item.icon}
                      </span>

                      <span>
                        {item.name}
                      </span>
                    </motion.a>
                  );
                }
              )}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}