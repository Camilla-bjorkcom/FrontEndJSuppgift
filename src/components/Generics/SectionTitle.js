import React from 'react'

const SectionTitle = ({title, subtitle}) => {
    return (
        <>
            <p className="title">{title}</p>
            <h2>{subtitle}</h2>
        </>
    )
}

export default SectionTitle