import React from 'react'
import ButtonDark from './Generics/ButtonDark'

const ProjectandCaseSection = () => {
  return (
    <section className="projectandcase">
    <div className="container">
        <div className="section-title">
            <div className="title">Project & Case Studies</div>
            <h2>Let’s Looks Our Global Projects</h2>
        </div>
        <div className="projects">
            <article>
                <img src="images/article-image-1.png" alt="A mans hands reading a business paper" />
                <h3>Grow your business</h3>
                <a href="#">Read More <i className="fa-regular fa-arrow-up-right"></i></a>
            </article>
            <article>
                <img src="images/article-image-2.png" alt="Pink apple product" />
                <h3>Why your client needs a responsive website </h3>
                <a href="#">Read More <i className="fa-regular fa-arrow-up-right"></i></a>
            </article>
            <article>
                <img src="images/article-image-3.png" alt="Desk with office supplies" />
                <h3>Educate your employees to get better results</h3>
                <a href="#">Read More <i className="fa-regular fa-arrow-up-right"></i></a>
            </article>
            <article>
                <img src="images/article-image-4.png" alt="Laptop with business intellegence insights" />
                <h3>Business Insights is a important piece of your business</h3>
                <a href="#">Read More <i className="fa-regular fa-arrow-up-right"></i></a>
            </article>
        </div>
        <div className="btn-parent">
            <ButtonDark text="All Recent Projects" url="services/All-recent-projects/"/>
        </div>
    </div>


</section>
  )
}

export default ProjectandCaseSection