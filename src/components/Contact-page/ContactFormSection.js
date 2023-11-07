import React from 'react'
import Sectiontitle from '../Generics/SectionTitle'
import FormComponent from './FormComponent'

const ContactFormSection = () => {
  return (
    <section className="contact-form">
            <div className="container">
                <div className="headline-form section-title">
                    <Sectiontitle subtitle="Leave us a message for any information."/>
                </div>

                  <FormComponent />
            </div>
        </section>
  )
}

export default ContactFormSection