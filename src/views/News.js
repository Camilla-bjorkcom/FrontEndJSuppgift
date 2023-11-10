import React from 'react'
import Header from '../components/Generics/Header'
import NewsSection from '../components/News-page/NewsSection'
import NewsAndArticleSection from '../components/News-page/NewsAndArticleSection'

const News = () => {
  return (
    <>
    <Header />
    <main>
      <NewsSection />
      <NewsAndArticleSection />
    </main>
    </>
  )
}

export default News