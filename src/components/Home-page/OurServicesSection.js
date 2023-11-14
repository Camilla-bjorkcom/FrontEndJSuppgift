import React, { useState } from 'react'
import ButtonOutlinedark from '../Generics/ButtonOutlinedark'
import OurServicesBox from './OurServicesBox'
import img_background_lines from '../../assets/images/Rectangle 607.svg'
import SectionTitle from '../Generics/SectionTitle'

const OurServicesSection = () => {

    const [services, setServices] = useState([
        {
            title: 'Buisness Advice',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.',
            url: '/services/businessadvice',
        },
        {
            title: 'Startup Business',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.',
            url: '/services/startupbusiness',
        },
        {
            title: 'Financial Advice',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.',
            url: '/services/financialadvice',
        },
        {
            title: 'Risk Management',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.',
            url: '/services/riskmanagement',
        },

    ])


    return (
        <section className="our-services">
            <img src={img_background_lines} className="background-lines-right" alt="background-lines" />
            <div className="container">
                <div className="section-title">
                    <SectionTitle title="Our Services" subtitle="We Provide The Best 
     Service For Consulting"/>
                </div>
                <div className="boxes">
                    {
                        services.map(service => (
                            <OurServicesBox key={service.title} title={service.title} description={service.description} url={service.url} />
                        ))
                    }
                </div>
                <div className="btn-parent">
                    <ButtonOutlinedark text="Browse Services" url="#" />
                </div>
            </div>
        </section>
    )
}

export default OurServicesSection
