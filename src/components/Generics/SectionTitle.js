import React from 'react'

const SectionTitle = ({title, subtitle}) => {
    return (
        <div className="section-title">
            <p className="title">{title}</p>
            <h2>{subtitle}</h2>
        </div>
    )
}

export default SectionTitle