import './App.css';
import Header from './components/Header';
import './assets/scss/style.scss';
import ShowcaseSection from './components/ShowcaseSection';
import BrandsSection from './components/BrandsSection';
import FeaturesSection from './components/FeaturesSection';
import AboutCompanySection from './components/AboutCompanySection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ProjectandCaseSection from './components/ProjectandCaseSection';
import OurServicesSection from './components/OurServicesSection';

function App() {
  return (
    <div className="wrapper">
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
    </div>
  );
}

export default App;
