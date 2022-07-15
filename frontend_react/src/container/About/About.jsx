import React, { useState, useEffect } from 'react';

import { images} from '../../constants';
import { motion } from 'framer-motion';
import './About.scss';

const abouts = [
  {title: 'Web Development', description: 'I am a good web developer.', imgUrl: images.about01},
  {title: 'Web Design', description: 'I am a good web developer.', imgUrl: images.about02},
  {title: 'UI/UX', description: 'I am a good web developer.', imgUrl: images.about03},
  {title: 'Web Animations', description: 'I am a good web developer.', imgUrl: images.about04}
]

const About = () => {
  return (
    <>
      <h2 className="head-text"> About <span>Me</span></h2>
      <p></p>
      <div className="app__profiles" id="about">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1}}
            whileHover={{ scale: 1.1}}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className="bold-text" style={{ marginTop: 20}}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About