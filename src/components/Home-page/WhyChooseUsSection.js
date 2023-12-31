import React from 'react';
import img_chooseus_img from '../../assets/images/chooseus-image.png'
import SectionTitle from '../Generics/SectionTitle'

const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us">
    <div className="container">
        <div className="left">
            <div className="section-title">
                <SectionTitle title="Why Choose Us" subtitle="Why We Are The Best Business Consulting Agency"/>
            </div>
            <div className="why">
                {/* Valt att inte ha komponenter här, varje icon ska ha ett eget div-element enligt min design-uppbyggnad  */}
                <div id="icon1" className="icon"><i className="fa-light fa-thumbs-up"></i></div>
                <div id="icon2" className="icon"><i className="fa-light fa-gem"></i></div>
                <div id="icon3" className="icon"><i className="fa-light fa-pen-field"></i></div>
                <div id="icon4" className="icon"><i className="fa-light fa-head-side-gear"></i></div>
                <div id="argument1" className="argument">
                    <h3>Process Excellence</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
                <div id="argument2" className="argument">
                    <h3>Strategic Planning</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
                <div id="argument3" className="argument">
                    <h3>Experience Design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
                <div id="argument4" className="argument">
                    <h3>Artificial Inteligence</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </div>
        <div className="right">
            <img className="chooseus-image" src={img_chooseus_img} alt="office talk between two women, discussing work at a desk" />
        </div>
    </div>
    <div className="background-box">
    </div>

</section>
  )
}

export default WhyChooseUsSection