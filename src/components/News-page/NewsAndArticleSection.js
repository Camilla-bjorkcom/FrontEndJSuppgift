import React, { useState, useEffect } from 'react'
import SectionTitle from '../Generics/SectionTitle'
import Articles from './Articles';


const NewsAndArticleSection = () => {

    
    const [articleshere, setArticleshere] = useState([]);

    useEffect(() => {
        getArticleshere();
    
        }
        , [])

        const getArticleshere = async () => {
            try {
                const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles`);
                const data = await result.json();
                setArticleshere(data);
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
            articleshere.map(articlehere => (
                <Articles key={articlehere.id} published={articlehere.published} category={articlehere.category} title={articlehere.title} altText={articlehere.altText} imageUrl={articlehere.imageUrl} content={articlehere.content} />
            ))
        }
        </div>

        </div>
        </section>
    )
}

export default NewsAndArticleSection