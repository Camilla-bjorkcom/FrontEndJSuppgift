import React from 'react'

const OurTeamMembers = ({id, title, text, imageUrl}) => {
    return (
        <div className="team-intro">
            <img src={imageUrl} alt="Kimberly Hansen, team" />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default OurTeamMembers