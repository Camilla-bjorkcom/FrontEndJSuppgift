import React, { useEffect, useState } from 'react'
import Recentpost from './Recentpost'
import Categories from './Categories'




const Aside = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        getNews()
    }, [])

    const getNews = async () => {
        try {

            const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles`);

            if (result.status === 200) {
                const data = await result.json();
                setNews(data.slice(0, 4));
            }

        }

        catch (error) {
            console.error(error);
        }
    }


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