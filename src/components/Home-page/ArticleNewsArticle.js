import React from 'react'

const ArticleNewsArticle = ({ imageUrl, altText, title, content, category, published}) => {
    function formatDate(dateString){
        return new Date(dateString).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
    }

    const formattedDate = formatDate(published.split(' '))
    
    return (
        <div className="article informative-text">
            <div className="img-and-date">
                <p className='date'>{formattedDate}</p>
                <img className="img-news" src={imageUrl} alt={altText} />
            </div>
            <p>{category}</p>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default ArticleNewsArticle