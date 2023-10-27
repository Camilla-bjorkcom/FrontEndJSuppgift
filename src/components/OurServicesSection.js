import React, { useState } from 'react'
import ButtonOutlinedark from './Generics/ButtonOutlinedark'
import OurServicesBox from './OurServicesBox'
import img_background_lines from '../assets/images/Rectangle 607.svg'
import SectionTitle from './Generics/SectionTitle'

const OurServicesSection = () => {
    // const services = [
    //     {title:"Business Advice", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/businessadvice", className: "box", active: false},
    //     {title:"Startup Business", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/startupbusiness", className: "box", active: true},
    //     {title:"Financial Advice", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/financialadvice", className: "box", active: false},
    //     {title:"Risk Management", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/riskmanagement", className: "box", active: false}
    // ])

    const [services, setServices] = useState([
        {
            title: 'Buisness Advice',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.',
            url: '/services/businessadvice',
            active: false
        },
        {
            title: 'Startup Business',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.',
            url: '/services/startupbusiness',
            active: true
        },
        {
            title: 'Financial Advice',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.',
            url: '/services/financialadvice',
            active: false
        },
        {
            title: 'Risk Management',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.',
            url: '/services/riskmanagement',
            active: false
        },
        
    ])


    return (
        <section className="our-services">
            <img src={img_background_lines} className="background-lines-right" alt="background-lines" />
            <div className="container">
                <SectionTitle title="Our Services" subtitle="We Provide The Best 
     Service For Consulting"/>
                <div className="boxes">
                    {
                        services.map(service => (
                            <OurServicesBox key={service.title} title={service.title} description={service.description} url={service.url} active={service.active} />
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


// {/* {
//                         services.map((service, index) => (
//                             <OurServicesBox key={index} title={service.title} description={service.description} url={service.url} active={service.active} className={service.className} />
//                         ))
//                     } */}