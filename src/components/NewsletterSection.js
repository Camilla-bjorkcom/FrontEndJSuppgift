import React from 'react'

const NewsletterSection = () => {
  return (
    <section className="newsletter">
    <img src="images/Element-2.png" className="background-lines-right" alt=""/>
    <div className="container section-title">
        <h2>Get News Updates By Signups</h2>
        <form>
            <input type="text" placeholder="username@domain.com" />
            <a href="#"><button className="btn-yellow btn btn-warning" type="button">Subscribe<i className="fa-regular fa-arrow-up-right"></i></button></a>
        </form>
    </div>
</section>
  )
}

export default NewsletterSection