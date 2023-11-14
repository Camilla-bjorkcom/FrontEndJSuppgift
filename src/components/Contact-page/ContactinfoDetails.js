import React from 'react'

const ContactinfoDetails = ({ icon, title, informationOne, informationTwo }) => {
    return (
        <div className="contact-box informative-text">
            <div className='first-row'>
            <i className={icon}></i>
            <h3 className="contact-headline">{title}</h3>
            </div>
            <p className="information">{informationOne}</p>
            <p className="information">{informationTwo}</p>
        </div>
    )
}

export default ContactinfoDetails