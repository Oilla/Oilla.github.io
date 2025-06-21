import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Skills from './pages/Skills';
import NotFound from './pages/NotFound';
import Experiences from './pages/Experiences';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
  AOS.init({
    duration: 800, // durasi animasi (ms)
    once: true,
        // animasi hanya sekali
  });
    setTimeout(() => {
    AOS.refresh();
  }, 100);
}, []);

  return (
    <div>
      {/* <div className='p-4 justify-end flex'>
          <Link to="/" className='mr-4'>Home</Link> 
          <Link to="/about" className='mr-4 bg-amber-50 px-3 py-1'>About</Link>
          
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
