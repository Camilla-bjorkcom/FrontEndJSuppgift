import React from 'react'
import img_showcaseLines from '../../assets/images/showcase-lines.png'

const ConnectSection = () => {
    return (
        <section className="connect">
            <img src={img_showcaseLines} className="background-lines" alt="" />
            <div className="container">
                <div className="headline">
                    <p>Home Contact</p>
                    <h1>Let's Connect</h1>
                </div>
            </div>
        </section>
    )
}

export default ConnectSection