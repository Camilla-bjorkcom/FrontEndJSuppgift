import React from 'react'

const ButtonDark = ({text, url}) => {
  return (
    <a href= {url}><button className="btn-dark btn btn-warning" type="button">{text}<i className="fa-regular fa-arrow-up-right"></i></button></a>
  )
}

export default ButtonDark