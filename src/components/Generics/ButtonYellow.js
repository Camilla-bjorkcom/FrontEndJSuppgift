import React from 'react';
import { Link } from 'react-router-dom';

const ButtonYellow = ({text, url}) => {
  return (
    <Link to={url}><button className="btn-yellow btn btn-warning" type="button">{text}<i className="fa-regular fa-arrow-up-right"></i></button></Link>
  )
}

export default ButtonYellow