import React from 'react'
import Ah   from '../assets/Pepperoni.jpg'
import '../styles/About.css'
// ذي بس عرض
const About = () => {
    return (
        <div className="about">
          <div
            className="aboutTop" style={{ backgroundImage: `url(${Ah})` }}>
             </div>
          <div className="aboutBottom">
            <h1>   (اللهم اكفني بحلالك عن حرامك واغنني بفضلك عمن سواك) </h1>
            <p>
                

            </p>
          </div>
        </div>
      );
}

export default About
