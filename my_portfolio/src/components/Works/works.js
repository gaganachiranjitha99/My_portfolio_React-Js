import React from 'react'
import './works.css';
import portfolio1 from '../../assets/portfolio-1.png';
import portfolio2 from '../../assets/portfolio-2.png';
import portfolio3 from '../../assets/portfolio-3.png';
import portfolio4 from '../../assets/portfolio-4.png';
import portfolio5 from '../../assets/portfolio-5.png';
import portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className='worksDesc'>I'm an enthusiastic and highly skilled software developer with a deep passion for creating elegant and efficient solutions. With Java,Spring Boot,Python,React Js,Node Js and Flutter, I've had the privilege of working on a diverse range of projects, gaining expertise in various technologies, and delivering high-quality software solutions.</span>
<div className="worksImgs">

    <img src={portfolio1} alt="" className='worksImg' />
    <img src={portfolio2} alt="" className='worksImg' />
    <img src={portfolio3} alt="" className='worksImg' />
    <img src={portfolio4} alt="" className='worksImg' />
    <img src={portfolio5} alt="" className='worksImg' />
    <img src={portfolio6} alt="" className='worksImg' />
</div>

    </section>
  )
}

export default Works
