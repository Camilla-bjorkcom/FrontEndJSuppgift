import React from 'react'

const ButtonYellow = ({text, url}) => {
  return (
    <a href={url}><button className="btn-yellow btn btn-warning" type="button">{text}<i className="fa-regular fa-arrow-up-right"></i></button></a>
  )
}

export default ButtonYellow