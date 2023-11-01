import React, { useState, useEffect } from 'react'
import ButtonDark from './Generics/ButtonDark'
import ProjectandCaseArticle from './ProjectandCaseArticle'

const ProjectandCaseSection = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles();
    
        }
        , [])

        const getArticles = async () => {
            try {
                const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles`);
                const data = await result.json();
                setArticles(data.slice(0,4));
            }
            catch (error) {
                console.error(error);
            }
        }

    return (
        <section className="projectandcase">
            <div className="container">
                <div className="section-title">
                    <div className="title">Project & Case Studies</div>
                    <h2>Let's Looks Our Global Projects</h2>
                </div>
                <div className="projects" >
                {
                    articles.map(article => (
                        <ProjectandCaseArticle key={article.id} title={article.title} imageUrl={article.imageUrl} />
                    ))
                }
                </div>
                <div className="btn-parent">
                    <ButtonDark text="All Recent Projects" url="services/All-recent-projects/" />
                </div>
            </div>
        </section>
    )
}
export default ProjectandCaseSection