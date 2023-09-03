import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

export const Skills = () => {
  return (
    <section id='skills'>
        
        <span className='skillTitle'>What I do</span>
        <span className="skillDesc">I'm an enthusiastic and highly skilled software developer with a deep passion for creating elegant and efficient solutions. With Java,Spring Boot,Python,React Js,Node Js and Flutter, I've had the privilege of working on a diverse range of projects, gaining expertise in various technologies, and delivering high-quality software solutions.</span>
    <div className="skillBars">
        <div className="skillBar">
            <img src={UIDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>I specialize in crafting intuitive interfaces and captivating user experiences using industry-leading design tools like Figma and Adobe XD.</p>

            </div>
            </div>  

        <div className="skillBar">
            <img src={WebDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Website design</h2>  
                <p> I bring expertise in HTML, CSS, Bootstrap, and React.js to create user-friendly and visually appealing websites.</p>

            </div>
        </div>

        <div className="skillBar">
            <img src={AppDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Mobile App Devolopment</h2>
                <p>I specialize in creating stunning mobile applications using Flutter and Android. With expertise in both platforms.</p>

            </div>
        </div>


        
    </div>




    </section>
  )
}
export default Skills;
