import React from 'react'
import img_showcaseLines from '../../assets/images/showcase-lines.png'



const NewsSection = () => {

  return (
        <section className="wrapper">
            <img src={img_showcaseLines} className="background-lines" alt="" />
            <div className="container">
                <div className="headline">
                    <p>Home News</p>
                    <h1>News & Articles</h1>
                </div>
            </div>
        </section>
    )
}

export default NewsSection