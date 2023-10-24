import React from 'react'
import ButtonRound from './Generics/ButtonRound'

const OurServicesBox = ({ title, description, type }) => {

    const getBoxClassName = () => {
        switch (type) {
            case 'active-box':
                return 'active-box box'
            default:
                return 'box'
                break;
        }

    }

    return (
        <div className={getBoxClassName()}>
            <div className="line" alt="black-line"></div>
            <h3>{title}</h3>
            <p>{description}</p>
            <ButtonRound />
        </div>
    )
}

export default OurServicesBox