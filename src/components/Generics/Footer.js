import React from 'react'
import Socialmedia from './Socialmedia'
import LogoCritofooter from '../../assets/images/Logo-Crito-footer.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
    <div className="position-line-img">
        <div className="border-line"></div>
        <img className="background-lines" src="images/Rectangle 116.svg" alt="" />
    </div>
    <div className="container">
        <div className="upper-pt">
            <div className="logo">
                <div className="logo-img"><img src={LogoCritofooter} alt="Logo-Crito" /></div>
                <div className="about-us-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas
                        voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </div>
            </div>
            <div id="company" className="informative-text">
                <h3>Company</h3>
                <Link to="/About">
                    <p>About</p>
                </Link>
                <Link to="/Features">
                    <p>Features</p>
                </Link>
                <Link to="/Works">
                    <p>Works</p>
                </Link>
                <Link to="/Careers">
                    <p>Career</p>
                </Link>
            </div>
            <div id="help" className="informative-text">
                <h3>Help</h3>
                <Link to="/Customer-support">
                    <p>Customer Support</p>
                </Link>
                <Link to="/Delivery-details">
                    <p>Delivery Details</p>
                </Link>
                <Link to="/Terms">
                    <p>Terms & Conditions</p>
                </Link>
                <Link to="/privacy-policy">
                    <p>Privacy Policy</p>
                </Link>
            </div>
            <div id="resources" className="informative-text">
                <h3>Resources</h3>
                <Link to="/ebooks">
                    <p>Free eBooks</p>
                </Link>
                <Link to="/tutorial">
                    <p>Development Tutorial</p>
                </Link>
                <Link to="/blog">
                    <p>How to - Blog</p>
                </Link>
                <Link to="/yt-playlist">
                    <p>Youtube Playlist</p>
                </Link>
            </div>
            <div id="link" className="informative-text">
                <h3>Link</h3>
                <Link to="/ebooks">
                    <p>Free eBooks</p>
                </Link>
                <Link to="/tutorial">
                    <p>Development Tutorial</p>
                </Link>
                <Link to="/blog">
                    <p>How to - Blog</p>
                </Link>
                <Link to="/yt-playlist">
                    <p>Youtube Playlist</p>
                </Link>
            </div>
        </div>
        <div className="lower-pt">
            <div className="flex">
                <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
              <Socialmedia />
            </div>
        </div>
    </div>
</footer>

  )
}

export default Footer