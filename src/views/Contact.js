import React from 'react'
import Header from '../components/Generics/Header'
import Footer from '../components/Generics/Footer'
import ConnectSection from '../components/Contact-page/ConnectSection'
import ContactinfoSection from '../components/Contact-page/ContactinfoSection'
import ContactFormSection from '../components/Contact-page/ContactFormSection'


const Contact = () => {
  return (
    <>
    <Header />
    <main>
    <ConnectSection />
    <ContactinfoSection />
    <ContactFormSection />
  
    </main>
    <Footer />
    </>
  )
}

export default Contact