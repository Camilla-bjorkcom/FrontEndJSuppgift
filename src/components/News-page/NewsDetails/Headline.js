import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';



const Headline = ({ title, published, category, author }) => {

    function formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', })
    }
    const formattedDate = formatDate(published.split(' '));
    const location = useLocation();

    useEffect(() => {
        
    }, [location.pathname])



    return (
        <div className='headline'>
            <h2>{title}</h2>
            <div className='info-details'>
                <p>{formattedDate}</p>
                <div className='yellow-dot'>-</div>
                <p>{category}</p>
                <div className='yellow-dot'>-</div>
                <p>{author}</p>
            </div>

        </div>
    )
}

export default Headline