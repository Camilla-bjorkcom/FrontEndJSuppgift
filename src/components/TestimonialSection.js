import React, { useState } from 'react'
import TestimonialCustomer from './TestimonialCustomer';

const TestimonialSection = () => {

    const [testimonials, SetTestimonial] = useState([

        {
            reviewsText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantiu libero ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate",
            imgCustomer: "./assets/images/Cassandra-Warren.png",
            altText: "Cassandra Warren, customer",
            name: "Cassandra Warren",
            title: "Business Manager, Dorfus",
            img: "./assets/images/Star.svg",
        },
        {
            reviewsText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantiu libero ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate",
            imgCustomer: "./assets/images/Amanda-Tulling.png",
            altText: "Amanda Tulling, customer",
            name: "Cassandra Warren",
            title: "Senior Developer, Square",
            img: "./assets/images/Star.svg",
        },
        {
            reviewsText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantiu libero ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate",
            imgCustomer: "./assets/images/Jack-McDogglas.png",
            altText: "Jack McDogglas, customer",
            name: "Jack McDogglas",
            title: "Key Account Manager, Gobona",
            img: "./assets/images/Star.svg",
        },
    ]);



    return (
        <section className="testimonial">
            <div className="white-box">
                <div className="container">
                    <div className="section-title">
                        <p className="title">Testimonial</p>
                        <h2>What Our Clients Says</h2>
                    </div>
                    <div className="testimonials-from-customers">
                        {
                            testimonials.map(testimonial => {
                                <TestimonialCustomer key={testimonial.name} reviewsText={testimonial.reviewsText} img={testimonial.img} imgCustomer={testimonial.imgCustomer} altText={testimonial.altText} name={testimonial.name} title={testimonial.title}/>
                            })
                        }
                    </div>
                </div>
            <a href="#"><button className="btn-dark btn btn-warning" type="button">All reviews<i className="fa-regular fa-arrow-up-right"></i></button></a>
        </div>
</section >

  )
}

export default TestimonialSection