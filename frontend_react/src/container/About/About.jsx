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
      <p className='p-text1'>I'm a current student at Epicodus. I bring enthusiasm and understanding of various programming languages to webpage planning and development. I have experience designing and developing sites from concept to roll out. I have a foundational grasp of various CSS and HTML options and development platforms. <br /> 
      <br />
      I've worked in both customer-facing and behind-the-scenes roles throughout my professional work experience. My professional work experience includes call centers, Insurance, and the construction industry. I'm highly adept at cultivating teams to have a positive influence on company objectives. Once teams have been formed, I enjoy being a motivated, results-oriented leader. I push to understand my team's wants and needs. <br /> 
      <br />
      I'm also capable of working on my own with little to no direction. I'm comprehensive and detailed, and I like to understand the why behind objectives. I'm excited to continue learning about different programming and test/apply my knowledge to real-world projects.
      </p>
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