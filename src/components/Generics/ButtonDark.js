import React from 'react';
import { Link } from 'react-router-dom';

const ButtonDark = ({text, url}) => {
  return (
    <Link to= {url}><button className="btn-dark btn btn-warning" type="button">{text}<i className="fa-regular fa-arrow-up-right"></i></button></Link>
  )
}

export default ButtonDark