
import './assets/scss/index.scss';
import Contact from './views/Contact';
import Home from './views/Home';
import News from './views/News';
import NotFound from './views/NotFound';
import NewsDetails from './views/NewsDetails';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='news' element={<News />} />
      <Route path='newsdetails' element={<NewsDetails />} />
      <Route path='*' element={<NotFound />} />
    </Routes>

  );
}
// <Route path='details/:id' element={<NotFound />} />

<div className="wrapper">

</div>

export default App;
