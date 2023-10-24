import React from 'react'
import ButtonOutlinedark from './Generics/ButtonOutlinedark'
import OurServicesBox from './OurServicesBox'
import img_background_lines from '../assets/images/Rectangle 607.svg'
import SectionTitle from './Generics/SectionTitle'

const OurServicesSection = () => {
const services = [
    {title:"Business Advice", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/businessadvice", type:""},
    {title:"Startup Business", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/startupbusiness", type:"active-box"},
    {title:"Financial Advice", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/financialadvice", type:""},
    {title:"Risk Management", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url:"/services/riskmanagement", type:""}
]


    return (
    <section className="our-services">
            <img src={img_background_lines} className="background-lines-right" alt="background-lines" />
            <div className="container">
                <SectionTitle title="Our Services" subtitle="We Provide The Best 
     Service For Consulting"/>
                <div className="boxes">
                    {
                        services.map((service, index) => (
                            <OurServicesBox key={index} title={service.title} type={service.type} description={service.description} url={service.url} />
                        ))
                    }

                    <div className="btn-parent">
                    <ButtonOutlinedark text="Browse Services" url="#" />
                    </div>
                </div>
            </div>
    </section>
  )
}

export default OurServicesSection