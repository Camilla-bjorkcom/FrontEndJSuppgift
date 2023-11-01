import React, {useState} from 'react'
import OurTeamMembers from './OurTeamMembers'
import img_JustinWilloman from '../assets/images/Justin-Willoman.png'
import img_KristinePalmer from '../assets/images/Kristine-Palmer.png'
import img_MarkAubri from '../assets/images/Mark-Aubri.png'
import img_KimberlyHansen from '../assets/images/Kimberly-Hansen.png'

const OurTeamSection = () => {
    
    const [team, setTeam] = useState([
        {
            title: 'Kristine Palmer',
            text:"Chef Operation Officer",
            img: {img_KristinePalmer},
            altText: "Kristine Palmer, team",
            type: "active-team",
            typeTwo: "active-img"
        },
        {
            title: 'Mark Aubri',
            text:"Senior Consultant",
            img: {img_MarkAubri},
            altText: "Mark Aubri, team",
            type: "active-team2",
            typeTwo: "active-img2"
        },
        {
            title: 'Kimberly Hansen',
            text:"Senior Consultant",
            img: {img_KimberlyHansen},
            altText: "Kimberly Hansen, team",
            type: "",
            typeTwo: ""
        },
        {
            title: 'Justin Willoman',
            text:"Senior Tech Consultant",
            img: {img_JustinWilloman},
            altText: "Justin Willoman, team",
            type: "",
            typeTwo: ""
        },
        
    ])



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
       {
        
        team.map(teamMember => (
                <OurTeamMembers key={teamMember.title} text={teamMember.text} img={teamMember.img} type={teamMember.type} typeTwo={teamMember.typeTwo} altText={teamMember.altText}/>
        ))
        
       }
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