import React from 'react'
import { Link } from 'react-router-dom'

const Recentpost = ({ title, published, id }) => {

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