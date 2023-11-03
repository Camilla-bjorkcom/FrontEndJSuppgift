import React, { useState } from 'react'
import TestimonialCustomer from './TestimonialCustomer';
import starImg from '../../assets/images/Star.svg';
import CassandraWarrenImg from 'C:/IT kurser/Kurser/Webbutveckling-dotnet/javaScript-Frontend/FrontEndJSuppgift/src/assets/images/Cassandra-Warren.png';
import AmandaTullingImg from 'C:/IT kurser/Kurser/Webbutveckling-dotnet/javaScript-Frontend/FrontEndJSuppgift/src/assets/images/Amanda-Tulling.png';
import JackMcDogglasImg from 'C:/IT kurser/Kurser/Webbutveckling-dotnet/javaScript-Frontend/FrontEndJSuppgift/src/assets/images/Jack-McDogglas.png';
import { Link } from 'react-router-dom';
import SectionTitle from '../Generics/SectionTitle';



const TestimonialSection = () => {

    const [testimonials, SetTestimonial] = useState([

        {
            id: 1,
            reviewsText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantiu libero ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate",
            imgCustomer: CassandraWarrenImg,
            altText: "Cassandra Warren, customer",
            name: "Cassandra Warren",
            title: "Business Manager, Dorfus",
            imgUrl: starImg
        },
        {
            id: 2,
            reviewsText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantiu libero ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate",
            imgCustomer: AmandaTullingImg,
            altText: "Amanda Tulling, customer",
            name: "Amanda Tulling",
            title: "Senior Developer, Square",
            imgUrl: starImg
        },
        {
            id: 3,
            reviewsText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantiu libero ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate",
            imgCustomer: JackMcDogglasImg,
            altText: "Jack McDogglas, customer",
            name: "Jack McDogglas",
            title: "Key Account Manager, Gobona",
            imgUrl: starImg
        },
    ]);
   
    return (
        <section className="testimonial">
            <div className="white-box">
                <div className="container">
                    <div className="section-title">
                    <SectionTitle title="Testimonial" subtitle="What Our Clients Says"/>
                    </div>
                    <div className="testimonials-from-customers">
                        {
                            testimonials.map(testimonial => (
                                <TestimonialCustomer key={testimonial.id} reviewsText={testimonial.reviewsText} imgUrl={testimonial.imgUrl} imgCustomer={testimonial.imgCustomer} altText={testimonial.altText} name={testimonial.name} title={testimonial.title}/>
                            ))
                        }
                    </div>
                </div>
            <Link to="/reviews"><button className="btn-dark btn btn-warning" type="button">All reviews<i className="fa-regular fa-arrow-up-right"></i></button></Link>
        </div>
</section >

  )
}

export default TestimonialSection