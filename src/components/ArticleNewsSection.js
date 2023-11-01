import React from 'react'

const ArticleNewsSection = () => {
  return (
     <section className="article-news">
    <div className="container">
        <div className="upper">
            <div className="section-title">
                <p className="title">
                    Article & News
                </p>
                <h2>Get Every Single Article & News</h2>
            </div>
            <div className="btn-parent">
                <a href="#"><button className="btn-outline btn btn-outline-dark" type="button">Browse
                        Articles<i className="fa-regular fa-arrow-up-right"></i></button></a>
            </div>
        </div>
        <div className="show-articles informative-text">
            <div className="article">
                <div className="img-and-date">
                    <img className="date" src="images/Date-1.png" alt="Date 25/3" />
                    <img className="img-news" src="images/news-img-1.png" alt="Woman smiling in an office"/>
                </div>
                <p>Business</p>
                <h3>How To Use Digitalization
                    In The Classroom</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>
            <div className="article informative-text">
                <div className="img-and-date">
                    <img className="date" src="images/Date-2.png" alt="Date 17/3"/>
                    <img className="img-news" src="images/news-img-2.png" alt="Screen showing text"/>
                </div>
                <p>Business</p>
                <h3>How To Implement Chat GPT
                    In Your Projects</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>
            <div className="article informative-text">
                <div className="img-and-date">
                    <img className="date" src="images/Date-3.png" alt="Date 13/3"/>
                    <img className="img-news" src="images/news-img-3.png" alt="books lying on eachother and an iphone on top"/>
                </div>
                <p>Business</p>
                <h3>The Guide To Support
                    Modern CSS Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>
        </div>
        <div className="carousel-dot">
            <div className="dot active">.</div>
            <div className="dot">.</div>
            <div className="dot">.</div>
            <div className="dot">.</div>
            <div className="dot">.</div>
        </div>
    </div>
</section>
  )
}

export default ArticleNewsSection