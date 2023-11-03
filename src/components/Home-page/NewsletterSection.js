import React from 'react'
import img_Element2 from '../../assets/images/Element-2.png'
import { Link } from 'react-router-dom'

const NewsletterSection = () => {
  return (
    <section className="newsletter">
    <img src={img_Element2} className="background-lines-right" alt=""/>
    <div className="container section-title">
        <h2>Get News Updates By Signups</h2>
        <form>
            <input type="text" placeholder="username@domain.com" />
            <Link to="/services/newsletter"><button className="btn-yellow btn btn-warning" type="button">Subscribe<i className="fa-regular fa-arrow-up-right"></i></button></Link>
        </form>
    </div>
</section>
  )
}

export default NewsletterSection