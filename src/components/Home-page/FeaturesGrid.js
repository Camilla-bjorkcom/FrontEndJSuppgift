import React from 'react'

const FeaturesGrid = ({icon, title, text}) => {
    return (
        <div className = "informative-text" >
                <i className={icon}></i>
                <h3>{title}</h3>
                <p>{text}</p>
            </div >
  )
}

export default FeaturesGrid