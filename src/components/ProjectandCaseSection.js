import React, { useState, useEffect } from 'react'
import ButtonDark from './Generics/ButtonDark'
import ProjectandCaseArticle from './ProjectandCaseArticle'

const ProjectandCaseSection = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {

        const getArticle = async (id) => {
            try {
                const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);
                const data = await result.json();
                setArticles(data);
                const params = new URLSearchParams(window.location.search);
                const id = params.get('id');
            }
            catch (error) {
                console.error(error);
            }

            articles = await getArticle(id);
        }
    }
        , [])

    return (
        <section className="projectandcase">
            <div className="container">
                <div className="section-title">
                    <div className="title">Project & Case Studies</div>
                    <h2>Let's Looks Our Global Projects</h2>
                </div>
                {
                    articles.map(article => (
                        <ProjectandCaseArticle key={article.id} title={article.title} imageUrl={article.imageUrl} />
                    ))
                }
                <div className="btn-parent">
                    <ButtonDark text="All Recent Projects" url="services/All-recent-projects/" />
                </div>
            </div>
        </section>
    )
}
// content={article.content} author={article.author} published={article.published} category={article.category} 
export default ProjectandCaseSection