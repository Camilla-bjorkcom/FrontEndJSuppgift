import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Headline from './Headline'
import NewsText from './NewsText'
import Aside from './Aside'
import { useArticles } from '../../../Contexts/ArticleContext'

const NewsDetail = () => {

  const { article, getArticle } = useArticles();
  const { id } = useParams();
  
  const location = useLocation();


  useEffect(() => {
    getArticle(id)
  }, [location.pathname])

  return article ? (
    <section className='news-details'>
      <div className='container'>
        <Headline title={article.title} category={article.category} author={article.author} published={article.published} />
        <NewsText imageUrl={article.imageUrl} text={article.content} />
        <Aside />
      </div>
    </section>
  )
    :
    (
      <div>No article found</div>
    )

}

export default NewsDetail