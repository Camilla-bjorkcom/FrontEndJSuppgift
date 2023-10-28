import React from 'react'
import ButtonYellow from '../components/Generics/ButtonYellow'

const NotFound = () => {
  return (
    <div class="container not-found">
      <h1>404 Page Not Found</h1>
      <p>Unable to find the page you're looking for</p>
      <ButtonYellow text="Go back to the beginning" url="/" />
    </div>
  )
}

export default NotFound