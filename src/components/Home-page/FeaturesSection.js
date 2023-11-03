import React from 'react'
import ButtonYellow from '../Generics/ButtonYellow'
import SectionTitle from '../Generics/SectionTitle'
import FeaturesGrid from './FeaturesGrid'

const FeaturesSection = () => {
    return (
        <section className="features">
            <div className="container">
                <div className="section-title">
                    <SectionTitle title="Features" subtitle="Our Accounting is trusted by thousand of companies" />
                    <ButtonYellow text="Learn More" url="/services/Learn-more" />
                </div>
                <div className="grid-features">
                    <FeaturesGrid icon="fa-regular fa-handshake" title="Business Advice" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                    <FeaturesGrid icon="fa-regular fa-lightbulb-exclamation-on" title="Startup Business" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                    <FeaturesGrid icon="fa-sharp fa-solid fa-chart-mixed-up-circle-dollar" title="Financial Advice" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                    <FeaturesGrid icon="fa-solid fa-box-open-full" title="Risk Management" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                </div>
            </div>
</section >
  )
}

export default FeaturesSection