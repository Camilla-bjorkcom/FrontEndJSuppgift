import React from 'react'
import ButtonRound from './Generics/ButtonRound'

const OurServicesBox = ({ title, description, url, active }) => {

    return (
        <div className={`box ${active ? 'active-box' : ''}`}>
            <div className="line" alt="black-line"></div>
            <h3>{title}</h3>
            <p>{description}</p>
            <ButtonRound url={url}/>
        </div>
    )
}

export default OurServicesBox



// const getBoxClassName = () => {
    //     switch (type) {
    //         case 'active-box':
    //             return 'active-box box'
    //         default:
    //             return 'box'
    //             break;
    //     }