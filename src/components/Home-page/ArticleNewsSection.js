import React, { useState, useEffect } from 'react'
import SectionTitle from '../Generics/SectionTitle'
import { Link } from 'react-router-dom'
import ArticleNewsArticle from './ArticleNewsArticle';


const ArticleNewsSection = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles();
    
        }
        , [])

        const getArticles = async () => {
            try {
                const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles`);
                const data = await result.json();
                setArticles(data.slice(0,3));
            }
            catch (error) {
                console.error(error);
            }
        }

  return (
     <section className="article-news">
    <div className="container">
        <div className="upper">
            <div className="section-title">
                <SectionTitle title="Article & News" subtitle="Get Every Single Article & News"/>
            </div>
            <div className="btn-parent">
                <Link to="/News"><button className="btn-outline btn btn-outline-dark" type="button">Browse Articles<i className="fa-regular fa-arrow-up-right"></i></button></Link>
            </div>
        </div>
        <div className="show-articles informative-text">

        {
            articles.map(article => (
                <ArticleNewsArticle key={article.id} published={article.published} category={article.category} title={article.title} altText={article.altText} imageUrl={article.imageUrl} content={article.content}/>
            ))
        }
        </div>
        <div className="carousel-dot">
            <div className="dot active">.</div>
            <div className="dot">.</div>
            <div className="dot">.</div>
            <div className="dot">.</div>
            <div className="dot">.</div>
        </div>
    </div>
</section>
  )
}

export default ArticleNewsSection