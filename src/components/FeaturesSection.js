import React from 'react'
import ButtonYellow from './Generics/ButtonYellow'

const FeaturesSection = () => {
  return (
    <section className="features">
    <div className="container">
        <div className="section-title">
            <p className="title">Features</p>
            <h2>Our Accounting is trusted by thousand of companies</h2>
            <ButtonYellow text="Learn More" url="/services/Learn-more"/>
        </div>
        <div className="grid-features">
            <div className="informative-text">
                <i className="fa-regular fa-handshake"></i>
                <h3>Business Advice</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="informative-text">
                <i className="fa-regular fa-lightbulb-exclamation-on"></i>
                <h3>Startup Business</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="informative-text">
                <i className="fa-sharp fa-solid fa-chart-mixed-up-circle-dollar"></i>
                <h3>Financial Advice</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="informative-text">
                <i className="fa-solid fa-box-open-full"></i>
                <h3>Risk Management</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default FeaturesSection