import './assets/scss/index.scss';
import Contact from './views/Contact';
import Home from './views/Home';
import News from './views/News';
import NotFound from './views/NotFound';
import NewsDetails from './views/NewsDetails';
import { Routes, Route } from 'react-router-dom';
import { ArticleProvider } from './Contexts/ArticleContext';
import AutoScrollToTop from './components/Generics/AutoScrollToTop';
import ScrolltoTopBtn from './components/Generics/ScrolltoTopBtn';


function App() {
  return (
    <ArticleProvider>
      <AutoScrollToTop />
      <ScrolltoTopBtn />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/:id' element={<NewsDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ArticleProvider>
  );
}


export default App;
