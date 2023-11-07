import React from 'react'

const ContactinfoDetails = ({ icon, title, information }) => {
    return (
        <div className="contact-box informative-text">
            <i className={icon}></i>
            <h3 className="contact-headline">{title}</h3>
            <p className="information">{information}</p>
        </div>
    )
}

export default ContactinfoDetails