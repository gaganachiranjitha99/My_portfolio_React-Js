import React from 'react'
import './intro.css';
import bg from '../../assets/image.png';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (


    <section id="intro">

          <div className="introContent">
      <span className="hello">Hello,</span>
      <span className="introText">I'm <span className="introName">Gagana Chiranjitha</span><br/>Software Devoloper</span>
          <p className="introPara">I'm a passionate software developer with a strong background in JAVA</p>
          <Link><button className="btn"><img src={btnImg} alt="hire me" className='btnImg' />Hire me</button></Link>
          </div>


    <img src={bg} alt="profile" className="bg" />

    </section>


  )
}

export default Intro;