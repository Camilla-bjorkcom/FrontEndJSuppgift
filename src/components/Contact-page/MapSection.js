import React from 'react'

const MapSection = () => {
  return (
    <section class="map">
            <div className="google-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7573.365228349609!2d18.05254789649599!3d59.33125094117946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d613f882d41%3A0x8e528d08d4d4641a!2sGoogle%2C%20Stockholm!5e0!3m2!1ssv!2sse!4v1696273594695!5m2!1ssv!2sse" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
    </section>
  )
}

export default MapSection