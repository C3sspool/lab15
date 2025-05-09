import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './components/Head/Head';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import News from './pages/News';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Head />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<News />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;