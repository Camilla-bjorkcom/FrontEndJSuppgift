import React, { useEffect } from 'react'
import Recentpost from './Recentpost'
import Categories from './Categories'
import { useArticles } from '../../../Contexts/ArticleContext';
import img_search from '../../../assets/images/magnifying-glass-solid.svg'
import { Link } from 'react-router-dom';



const Aside = () => {
    
  const { news, getNews } = useArticles();

    useEffect(() => {
        getNews(true)
    }, [])

    return (
        <div className='aside'>
            <form>             
                <Link to="#"><img src={img_search}/></Link>
                <input type="search" placeholder="type to search...." />
            </form>

            <div className='recentposts'>
                <h5>Recent Posts</h5>
                {
                    news.map(article => (
                        <Recentpost key={article.id} id={article.id} title={article.title} published={article.published} />
                    ))
                }
            </div>

            <Categories />

        </div>
    )
}

export default Aside