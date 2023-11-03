import React from 'react'

const ContactinfoSection = () => {
  return (
    <section className="contact-info">
            <div className="container">
                <div className="flex-box">
                    <div className="contact-box informative-text">
                        <i className="contact-icon fa-sharp fa-solid fa-location-dot"></i>
                        <h3 className="contact-headline ">Visit us</h3>
                        <p className="information">Sveavägen 31
                             111 34 STOCKHOLM
                        </p>
                    </div>
                    <div className="contact-box informative-text">
                        <i className="contact-icon fa-sharp fa-solid fa-phone"></i>
                        <h3 className="contact-headline ">Call us</h3>
                        <p className="information">+46 (8) 121 470 50
                            +46 (8) 121 470 51</p>
                    </div>
                    <div className="contact-box informative-text">
                        <i className="contact-icon fa-solid fa-envelope"></i>
                        <h3 className="contact-headline ">Email us</h3>
                        <p className="information">info@crito.com support@crito.com</p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ContactinfoSection