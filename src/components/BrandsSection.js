import React from 'react'
import img_paperz_logo from '../assets/images/Logo-1.svg'
import img_dorfus_logo from '../assets/images/Logo-2.svg'
import img_martino_logo from '../assets/images/Logo-3.svg'
import img_square_logo from '../assets/images/Logo-4.svg'
import img_gobona_logo from '../assets/images/Logo-5.svg'

const BrandsSection = () => {
  return (
    <section className="brands">
            <div className="container">
                <div className="img-brands">
                    <img src={img_paperz_logo} alt="Paperz-logo" />
                    <img src={img_dorfus_logo} alt="Dorfus-logo" />
                    <img src={img_martino_logo} alt="Martino-logo" />
                    <img src={img_square_logo} alt="Square-logo" />
                    <img src={img_gobona_logo} alt="Gobona-logo" />
                </div>
            </div>
        </section>
  )
}

export default BrandsSection