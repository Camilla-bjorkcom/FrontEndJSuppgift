import React from 'react'
import { Link } from 'react-router-dom';

const ButtonOutlinedark = ({text, url}) => {
  return (
    <Link to={url}><button className="btn-outline btn btn-outline-dark" type="button">{text}<i className="fa-regular fa-arrow-up-right"></i></button></Link>
  )
}

export default ButtonOutlinedark