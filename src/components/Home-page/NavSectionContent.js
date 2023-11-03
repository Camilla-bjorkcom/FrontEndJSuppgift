import React from 'react'

const NavSectionContent = ({icon, p, active}) => {
    return (
        <div className={`content-box ${active ? 'last' : ''}`}>
            <i className={icon}></i>
            <p>{p}</p>
        </div>
    )
}

export default NavSectionContent