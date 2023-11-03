import React from 'react'
import img_showcase_lines from '../../assets/images/showcase-lines.png'
import img_showcaseimg from '../../assets/images/showcase-image.svg'
import ButtonYellow from '../Generics/ButtonYellow'
import ButtonOutlinedark from '../Generics/ButtonOutlinedark'


const ShowcaseSection = () => {
  return (
    <section className="showcase">
    <img src={img_showcase_lines} className="background-lines" alt=""/>
    <div className="container">
        <div className="content">
            <div className="slogan-showcase">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            </div>
            <div className="buttons-showcase">
                <ButtonYellow text="Get Consulting" url="/services/get-consulting" />
                <ButtonOutlinedark text="Learn More" url="/services/learn-more" />
            </div>
        </div>
        <img src={img_showcaseimg} alt="image of a man with a tablet"/>
    </div>
</section>
  )
}

export default ShowcaseSection