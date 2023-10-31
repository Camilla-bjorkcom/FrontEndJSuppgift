import React from 'react'

const TestimonialCustomer = ({reviewsText, imgCustomer, altText, name, title, img}) => {
    return (
        <div className="customer section-title informative-text">
            <img src={img} alt="five stars" />
            <p className="reviews">{reviewsText}</p>
            <div className="flex-image-text">
                <img className="testimonial-img" src={imgCustomer} alt={altText} />
                <div className="grid-text">
                    <h3>{name}</h3>
                    <p className="title">{title}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCustomer