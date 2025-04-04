import React, { useState } from "react";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // Track the active link

  const handleLinkClick = (item) => {
    setActiveLink(item); // Set the clicked item as active
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "testimonial", "contact"].map((item) => (
          <li
            className={`app__flex p-text ${activeLink === item ? "active" : ""}`} // Add 'active' class to the active link
            key={`link-${item}`}
          >
            <div />
            <a
              href={`#${item}`}
              onClick={() => handleLinkClick(item)} // Set the active link on click
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
              {["home", "about", "work", "skills", "testimonial", "contact"].map((item) => (
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
