import React from 'react'
import Header from '../components/Header';
import ShowcaseSection from '../components/ShowcaseSection'
import BrandsSection from '../components/BrandsSection'
import FeaturesSection from '../components/FeaturesSection'
import AboutCompanySection from '../components/AboutCompanySection'
import OurServicesSection from '../components/OurServicesSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import ProjectandCaseSection from '../components/ProjectandCaseSection'

const Home = () => {
  return (
    <>
    <Header/>
    <main>
        <ShowcaseSection />
        <BrandsSection />
        <FeaturesSection />
        <AboutCompanySection />
        <OurServicesSection />
        <WhyChooseUsSection />
        <ProjectandCaseSection />
      </main>
    </>
  )
}

export default Home