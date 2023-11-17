import React, { useEffect, useState } from 'react'

const ScrolltoTopBtn = () => {

    const [position, setPosition] = useState(0);

    useEffect (() => {
        window.addEventListener('scroll', () => {
            setPosition(window.scrollY)
        })
        
        return () => {
            window.removeEventListener('scroll', () => {})
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({top:0, behavior: 'smooth'}) 
    }

  return (
    <button className={`scroll-to-top ${position < 100 ? 'hide' : ''}`} onClick={scrollToTop}>
    <i className="fa-solid fa-arrow-up"/>
    </button>
  )
}

export default ScrolltoTopBtn