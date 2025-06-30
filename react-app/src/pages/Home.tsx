// import SearchIcon from '@mui/icons-material/Search';
import TypewriterText from '../functions/typewriter';
import Multityping from '../functions/multityping';
import { Link } from 'react-router-dom';
function Home() {
  return (
  <>
    <div className="w-screen h-screen overflow-hidden">

      
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat" data-aos="fade-in"
        style={{ backgroundImage: "url('/pink-grass.jpg')" }}
      >
        
        <TypewriterText text="Darlene Angelina Christy" />
        <Multityping texts={['Pixel Lover', 'Game Enthusiast', 'Web Developer']} />

        {/* CONTOH RESPONSIF:
              text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2.2rem]
        */}

        <Link to={'/menu'} className=''>
          <button className='absolute top-4/7 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          bg-amber-50 border-2 border-amber-50 rounded-[1em]
          shadow-lg shadow-inherit
          px-[5em] py-[0.2em] 
          sm:text-[1.2em]
          md:text-[1.4em]
          lg:text-[1.6em]
          pixelify text-[1em] text-[#d28888]
          cursor-pointer hover:bg-[#FFF2EB] hover:-translate-y-5'>Start</button>
        </Link>
      </div>
    </div>

      

  </>
  );
}

export default Home;
