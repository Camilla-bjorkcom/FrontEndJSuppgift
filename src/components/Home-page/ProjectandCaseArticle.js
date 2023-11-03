import React from 'react'
import { Link } from 'react-router-dom'


const ProjectandCaseArticle = ({ title, imageUrl, altText }) => {

    return (
        <>
            <article>
                <img src={imageUrl} alt={altText} />
                <h3>{title}</h3>
                <Link to="/">Read More <i className="fa-regular fa-arrow-up-right"></i></Link>
            </article>
        </>
    )
}

export default ProjectandCaseArticle


