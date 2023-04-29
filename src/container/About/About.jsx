import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";

import { AppWrap,MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";


export const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        Know That <span>Good Design</span> <br /> means{" "}
        <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((About, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
            key={About.title + index}
          >
            <img src={urlFor(About.imgUrl)} alt={About.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {About.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {About.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};
export default AppWrap(
  MotionWrap(About, 'app__about'), 
  "about",
  "app__whitebg"
  );
