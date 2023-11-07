import React from 'react'
import { Link } from 'react-router-dom'

const ContactFormSection = () => {
  return (
    <section className="contact-form">
            <div className="container">
                <div className="headline-form section-title">
                    <h2>Leave us a message for any information.</h2>
                </div>
                <div className="form-wrapper">
                    <form id="form" method="post">

                        <div className="mb-3">
                            <label for="name">
                            </label>
                            <input id="name" type="text" name="Name" placeholder="Name*" className="form-input p-2" tabindex="1" />
                        </div>

                        <div className="mb-3">
                            <label for="email">
                            </label>
                            <input id="email" type="email" name="Email" placeholder="Email*" className="form-input p-2" tabindex="2"  />
                        </div>

                        <div className="mb-3">
                            <label for="message">
                            </label>
                            <textarea name="message" id="message" placeholder="Your Message*" className="form-input p-2" tabindex="3" ></textarea>
                        </div>

                        <Link to="#"><button className="btn-yellow btn btn-warning form-input" type="button">Send Message<i className="fa-regular fa-arrow-up-right"></i></button></Link>
                    </form>
                </div>
            </div>
        </section>
  )
}

export default ContactFormSection