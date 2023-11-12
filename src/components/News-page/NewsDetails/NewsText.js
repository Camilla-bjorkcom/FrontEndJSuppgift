import React from 'react'

const NewsText = (imageUrl, text) => {
  return (
    <div className='newstext'>
        <img src={imageUrl} />
        <p>{text}</p>

    </div>
  )
}

export default NewsText