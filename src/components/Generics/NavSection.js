import React from 'react';
import img_logo_Crito from '../../assets/images/Logo-Crito.svg';
import Button from './ButtonYellow';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import NavSectionContent from '../Home-page/NavSectionContent';
import Socialmedia from './Socialmedia';

const NavSection = () => {
    return (
        <section className="nav-section">
            <div className="container">
                <Link to="/"><img src={img_logo_Crito} alt="Logo-Crito" /></Link>
                <button className="menu-bars"><i className="fa-solid fa-bars"></i></button>
                <div className="menu">
                    <div className="top-menu">
                        <div className="contact-information">
                            <NavSectionContent icon="i fa-light fa-phone-volume" p="+46 (8) 121 470 50" active={false} />
                            <NavSectionContent icon="i fa-sharp fa-light fa-envelope" p="info@crito.com" active={false}/>
                            <NavSectionContent icon="i fa-thin fa-location-dot" p="Sveavägen 31, 111 34 STOCKHOLM" active={true} />
                        </div>
                        <Socialmedia />
                    </div>
                    <div className="main-menu">
                        <Navbar />
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <Button text="Login" url="/services/login" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NavSection

//     <NavSectionContent icon="i fa-thin fa-location-dot" p="Sveavägen 31, 111 34 STOCKHOLM"/>                          <NavSectionContent icon="i fa-sharp fa-light fa-envelope" p="info@crito.com"/> 