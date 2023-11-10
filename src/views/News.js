import React from 'react'
import Header from '../components/Generics/Header'
import NewsSection from '../components/News-page/NewsSection'
import NewsAndArticleSection from '../components/News-page/NewsAndArticleSection'
import NewsletterSection from '../components/Home-page/NewsletterSection'
import Footer from '../components/Generics/Footer'

const News = () => {
  return (
    <>
    <Header />
    <main>
      <NewsSection />
      <NewsAndArticleSection />
      <NewsletterSection />
    </main>
    <Footer />
    </>
  )
}

export default News