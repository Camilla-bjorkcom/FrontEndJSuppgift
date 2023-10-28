import React from 'react';
import img_logo_Crito from '../assets/images/Logo-Crito.svg';
import Button from './Generics/ButtonYellow';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const NavSection = () => {
    return (
        <section className="nav-section">
            <div className="container">
                <a href="home.html"><img src={img_logo_Crito} alt="Logo-Crito" /></a>


                <div className="menu">
                    <div className="top-menu">
                        <div className="contact-information">
                            <div className="content-box">
                                <i className="i fa-light fa-phone-volume"></i>
                                +46 (8) 121 470 50
                            </div>
                            <div className="content-box">
                                <i className="i fa-sharp fa-light fa-envelope"></i>
                                info@crito.com
                            </div>
                            <div className="content-box last">
                                <i className="i fa-thin fa-location-dot"></i>
                                Sveavägen 31, 111 34 STOCKHOLM
                            </div>
                        </div>
                        <div className="social-media">
                            <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
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