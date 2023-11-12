import React, { useState, useEffect } from 'react'
import SectionTitle from '../Generics/SectionTitle'
import Articles from './Articles';
import Pagination from '../Generics/Pagination';


const NewsAndArticleSection = () => {


    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles();

    }
        , [])

    const getArticles = async () => {
        try {
            const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles`);
            const data = await result.json();
            setArticles(data);
        }
        catch (error) {
            console.error(error);
        }
    }


    return (
        <section className='newsandarticle'>
            <div className='container'>
                <div className='section-title'>
                    <SectionTitle subtitle="Our News And Articles" />
                </div>

                <div className='show-articles informative-text'>
                    {
                        articles.map(article => (
                            <Articles key={article.id} id={article.id} published={article.published} category={article.category} title={article.title} altText={article.altText} imageUrl={article.imageUrl} content={article.content} />
                        ))
                    }
                </div>

                <Pagination />
            </div>
        </section>
    )
}

export default NewsAndArticleSection