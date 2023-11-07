import React from 'react'
import ContactinfoDetails from './ContactinfoDetails'

const ContactinfoSection = () => {
  return (
    <section className="contact-info">
            <div className="container">
                <div className="flex-box">
                <ContactinfoDetails icon="contact-icon fa-sharp fa-solid fa-location-dot" title="Visit us" information="Sveavägen 31 
                111 34 STOCKHOLM"/>
                <ContactinfoDetails icon="contact-icon fa-sharp fa-solid fa-phone" title="Call us" information="+46(8)12147050 
                +46(8)12147051"/>
                <ContactinfoDetails icon="contact-icon fa-solid fa-envelope" title="Email us" information="info@crito.com 
                support@crito.com"/>
                </div>
            </div>
        </section>
  )
}

export default ContactinfoSection