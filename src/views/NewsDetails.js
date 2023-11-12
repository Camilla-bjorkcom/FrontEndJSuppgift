import React from 'react'
import NewsDetail from '../components/News-page/NewsDetails/NewsDetail'
import Header from '../components/Generics/Header'
import NewsSection from '../components/News-page/NewsSection'
import Footer from '../components/Generics/Footer'
import ArticleNewsSection from '../components/Home-page/ArticleNewsSection'

const NewsDetails = () => {
  return (
    <>
    <Header />
    <main>
    <NewsSection />
    <NewsDetail />
    <ArticleNewsSection />
    </main>
    <Footer />
    </>
  )
}

export default NewsDetails