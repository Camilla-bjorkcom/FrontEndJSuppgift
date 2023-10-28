import React from 'react'
import img_founder_CEO from '../assets/images/founder_CEO.jpg'
import ButtonDark from './Generics/ButtonDark'
import ButtonRound from './Generics/ButtonRound'
import { Link } from 'react-router-dom';

const AboutCompanySection = () => {
  return (
    <section className="about-company">
    <div className="container">
        <div className="left-img">
            <div className="img-ceo"><img src={img_founder_CEO} alt="Founder Samantha Brown" /></div>
            <div className="informative-text">
                <h3>Samantha Brown, </h3>
                <h4>Founder</h4>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
            </div>
        </div>
        <div className="section-title right">
            <div className="title">About Company</div>
            <h2>We Are Business Consulting & Credit Repair Experts</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse
                obcaecati? Ex esse error voluptates iure vel totam eos.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci
                accusantium libero provident voluptate amet.</p>
            <div className="about-btn">
                <ButtonDark text="Learn More" url="#"/>
                <ButtonRound url="#"/>
                <Link to="#">Intro Video</Link>
            </div>
        </div>
    </div>
</section>
  )
}

export default AboutCompanySection