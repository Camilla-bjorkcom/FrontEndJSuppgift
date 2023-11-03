import React from 'react'


const OurTeamMembers = ({ altText, type, typeTwo, title, text, imgUrl }) => {

    const getTeamId = () => {
        switch (type) {
            case 'active-team':
                return 'active-team'
            case 'active-team2':
                return 'active-team2'
            default:
                return ''
                break;
        }
    }

    const getImgId = () => {
        switch (typeTwo) {
            case 'active-img':
                return 'active-img'
            case 'active-img2':
                return 'active-img2'
            default:
                return ''
                break;
        }
    }

    return (
        <div className="team-intro" id={getTeamId()}>
            <img src={imgUrl} id={getImgId()} alt={altText} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default OurTeamMembers
