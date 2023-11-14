import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useArticles } from '../../../Contexts/ArticleContext';

const Recentpost = ({ title, published, id }) => {

    // const {article, getArticle} = useArticles();

    // useEffect(() => {
    //      getArticle(id) 

    // }, [])



    function formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    }

    const formattedDate = formatDate(published.split(' '))

    return (

        <div className='posts'>
            <Link to={`/news/${id}`}><h6>{title}</h6>
            <p>{formattedDate}</p></Link>
        </div>

    )
}

export default Recentpost