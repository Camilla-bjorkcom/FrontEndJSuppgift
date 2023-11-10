import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const NewsDetail = () => {
const [news, setNews] = useState(null)
    const {id} = useParams()

    useEffect (() => {
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
    <div className='container'>
    <div>{news.id}</div>
    <div>{news.title}</div>
    <div>{news.content}</div>
    <div>{news.author}</div>
    <div>{news.published}</div>
    <div>{news.category}</div>
    <div><img src={news.imageUrl}/></div>
    </div>
  )
  :
  (
    <div>No article found</div>
  )
}

export default NewsDetail