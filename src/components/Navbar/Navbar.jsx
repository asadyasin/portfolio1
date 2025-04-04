import React, { useState, useEffect, useMemo } from "react";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // Track the active link

  // Memoize the sections array to avoid unnecessary reinitialization
  const sections = useMemo(() => ["home", "about", "work", "skills", "testimonial", "contact"], []);

  useEffect(() => {
    // Create a new IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update active link when section comes into view
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in the viewport
      }
    );

    // Observe each section
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]); // Keep sections in the dependency array (it's memoized)

  const handleLinkClick = (item) => {
    setActiveLink(item); // Set the clicked item as active
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {sections.map((item) => (
          <li
            className={`app__flex p-text ${activeLink === item ? "active" : ""}`} // Add 'active' class to the active link
            key={item}
          >
            <div />
            <a
              href={`#${item}`}
              onClick={() => handleLinkClick(item)} // Set active on click
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {sections.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => {
                      handleLinkClick(item); // Set active on click
                      setToggle(false); // Close the mobile menu
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
