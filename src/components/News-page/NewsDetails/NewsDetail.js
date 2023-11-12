import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Headline from './Headline'
import NewsText from './NewsText'
import Aside from './Aside'

const NewsDetail = () => {
  const [news, setNews] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    getNews()
  }, [])

  const getNews = async () => {

    try {
      if (id !== undefined) {
        const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);


        if (result.status === 200)
          setNews(await result.json());
      }
    }
    catch (error) {
      console.error(error);
    }
  }

  return news ? (
    <section className='news-details'>
      <div className='container'>
        <Headline title={news.title} category={news.category} author={news.author} published={news.published} />
        <NewsText imageUrl={news.imageUrl} text={news.content} />
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