import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import News from './views/News';
import NewsDetails from './views/NewsDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Contact />} />
        <Route path='/' element={<News />} />
        <Route path='/' element={<NewsDetails />} />
        <Route path='/' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


