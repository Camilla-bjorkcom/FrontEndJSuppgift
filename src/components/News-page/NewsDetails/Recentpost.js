import React from 'react'

const Recentpost = ({ title, published }) => {


    function formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    }

    const formattedDate = formatDate(published.split(' '))

    return (

        <div className='posts'>
            <h6>{title}</h6>
            <p>{formattedDate}</p>
        </div>

    )
}

export default Recentpost