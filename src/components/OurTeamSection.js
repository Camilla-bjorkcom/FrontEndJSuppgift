import React from 'react'
import OurTeamMembers from './OurTeamMembers'

const OurTeamSection = () => {
  return (
    <section className="our-team">
    <div className="container">
        <div className="upper">
            <div className="section-title">
                <p className="title"> Meet Our Team</p>
                <h2>Experience Team Members</h2>
            </div>
            <div className="button-team">
                <a href="#"><button className="btn-outline btn btn-outline-dark" type="button">Browse Team<i className="fa-regular fa-arrow-up-right"></i></button></a>
            </div>
        </div>
        <div className="images-team">
            {/* <div id="active-team" className="team-intro">
                <img id="active-img" src="./assets/images/Kristine-Palmer.png" alt="Kristine Palmer, team" />
                <h3>Kristine Palmer</h3>
                <p>Chef Operation Officer</p>
            </div>
            <div id="active-team2" className="team-intro">
                <img id="active-img2" src="./assets/images/Mark-Aubri.png" alt="Mark Aubri, team" />
                <h3>Mark Aubri</h3>
                <p>Senior Consultant</p>
            </div> */}
            <OurTeamMembers id="active-team" title="Kristine Palmer" text="Chef Operation Officer" imageUrl="./assets/images/Kristine-Palmer.png"/>
            <OurTeamMembers id="active-team2" title="Mark Aubri" text="Senior Consultant" imageUrl="./assets/images/Mark-Aubri.png"/>
            <OurTeamMembers title="Kimberly Hansen" text="Senior Consultant" imageUrl=""/>
            <OurTeamMembers title="Justin Willoman" text="Senior Tech Consultant" imageUrl="/assets/images/Justin-Willoman.png"/>
        </div>
        <div className="carousel-dot">
            <div className="dot">.</div>
            <div className="dot active">.</div>
            <div className="dot">.</div>
            <div className="dot">.</div>
            <div className="dot">.</div>
        </div>
    </div>

</section>
  )
}

export default OurTeamSection