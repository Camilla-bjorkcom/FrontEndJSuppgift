import React, { useState, useEffect } from 'react'
import ButtonDark from '../Generics/ButtonDark'
import ProjectandCaseArticle from './ProjectandCaseArticle'
import SectionTitle from '../Generics/SectionTitle'

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
                    <SectionTitle title="Project & Case Studies" subtitle="Let's Looks Our Global Projects"/>
                </div>
                <div className="projects" >
                {
                    articles.map(article => (
                        <ProjectandCaseArticle key={article.id} title={article.title} imageUrl={article.imageUrl} altText={article.altText} />
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