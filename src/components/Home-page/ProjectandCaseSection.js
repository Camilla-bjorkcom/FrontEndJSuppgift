import React, { useState, useEffect } from 'react'
import ButtonDark from '../Generics/ButtonDark'
import ProjectandCaseArticle from './ProjectandCaseArticle'
import SectionTitle from '../Generics/SectionTitle'
import { useArticles } from '../../Contexts/ArticleContext'

const ProjectandCaseSection = () => {

    const { news, getNews} = useArticles();

    useEffect(() => {
        getNews(true);
    
        }
        , [])


    return (
        <section className="projectandcase">
            <div className="container">
                <div className="section-title">
                    <SectionTitle title="Project & Case Studies" subtitle="Let's Looks Our Global Projects"/>
                </div>
                <div className="projects" >
                {
                    news.map(article => (
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