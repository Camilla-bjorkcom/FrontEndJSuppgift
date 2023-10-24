import React from 'react'

const ButtonRound = ({url}) => {
  return (
    <a href={url}><button className="round-btn" type="button"><i className="fa-sharp fa-solid fa-play"></i></button></a>
  )
}

export default ButtonRound