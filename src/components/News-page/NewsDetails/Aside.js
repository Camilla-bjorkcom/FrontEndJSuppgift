import React, { useEffect, useState } from 'react'
import Recentpost from './Recentpost'
import Categories from './Categories'
import { useArticles } from '../../../Contexts/ArticleContext';



const Aside = () => {
    
  const { news, getNews } = useArticles();

    useEffect(() => {
        getNews()
    }, [])

    return (
        <div className='aside'>
            <form>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="type to search...." />
            </form>

            <div className='recentposts'>
                <h3>Recent Posts</h3>
                {
                    news.map(newss => (
                        <Recentpost key={newss.id} title={newss.title} published={newss.published} />
                    ))
                }
            </div>

            <Categories />

        </div>
    )
}

export default Aside