import React from 'react'

const ButtonOutlinedark = ({text, url}) => {
  return (
    <a href={url}><button className="btn-outline btn btn-outline-dark" type="button">{text}<i className="fa-regular fa-arrow-up-right"></i></button></a>
  )
}

export default ButtonOutlinedark