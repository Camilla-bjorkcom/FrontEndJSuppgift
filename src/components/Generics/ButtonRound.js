import React from 'react'
import { Link } from 'react-router-dom';

const ButtonRound = ({url}) => {
  return (
    <Link to={url}><button className="round-btn" type="button"><i className="fa-sharp fa-solid fa-play"></i></button></Link>
  )
}

export default ButtonRound