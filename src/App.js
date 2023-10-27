
import './assets/scss/style.scss';
import Contact from './views/Contact';
import Home from './views/Home';
import News from './views/News';
import NotFound from './views/NotFound';
import NewsDetails from './views/NewsDetails'


function App() {
  return (
    <div className="wrapper">
      <Home />
      <Contact />
      <News />
      <NewsDetails />
      <NotFound />
    </div>
  );
}

export default App;
