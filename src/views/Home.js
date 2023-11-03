import React from 'react'
import Header from '../components/Generics/Header';
import ShowcaseSection from '../components/Home-page/ShowcaseSection'
import BrandsSection from '../components/Home-page/BrandsSection'
import FeaturesSection from '../components/Home-page/FeaturesSection'
import AboutCompanySection from '../components/Home-page/AboutCompanySection'
import OurServicesSection from '../components/Home-page/OurServicesSection'
import WhyChooseUsSection from '../components/Home-page/WhyChooseUsSection'
import ProjectandCaseSection from '../components/Home-page/ProjectandCaseSection'
import OurTeamSection from '../components/Home-page/OurTeamSection';
import TestimonialSection from '../components/Home-page/TestimonialSection';
import ArticleNewsSection from '../components/Home-page/ArticleNewsSection';
import NewsletterSection from '../components/Home-page/NewsletterSection';
import Footer from '../components/Generics/Footer';

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
        <OurTeamSection />
        <TestimonialSection />
        <ArticleNewsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}

export default Home