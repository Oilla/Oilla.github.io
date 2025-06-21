import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function About() {
    const data = [
      {
        title: "Interests",
        items: [
          ["Codes", "Design & Art", "Dogs","Pixel-based Graphic Games"],
          ["/questioning.png", "/love.png", "/love.png","/games.png"]
        ],
      },
      {
        title: "Hobbies",
        items: [
          ["Programming", "Gaming", "Designing", "Listening to music & playing music"],
          ["/games.png", "/questioning.png", "/love.png", "/love.png"]
        ],
      },
    ];
  return (<>
    <div className="w-screen h-screen overflow-y-scroll">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
            <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/moving.gif')" }}
            />
            {/* Overlay untuk menggelapkan background */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/5" />
        </div>


        <div className='flex flex-col justify-between bg-[#FFF2EB] py-5 rounded-[2em] w-[80%] mx-auto my-20
        md:flex-row'  data-aos="fade-up">
          <div className="flex flex-col">
            <Link to="/menu" className='inline-block ms-7 mb-8 sm:mb-0'>
                <img src="/arrow-2 (2).png" className="w-[1.5em] hover:translate-y-1
                sm:w-[1.7em]
                md:w-[2.3em] cursor-pointer
                " alt="Back" />
            </Link>

            <div className='md:mt-10 md:ms-3'>
              <Avatar className="justify-center mb-5 mx-auto" alt="Darlene" src="src/assets/profile.jpg" 
                sx={{
                  width: {
                    xs: 140, // layar kecil
                    sm: 170,
                    md: 180,
                    lg: 200, // layar besar
                  },
                  height: {
                    xs: 140,
                    sm: 170,
                    md: 180,
                    lg: 200,
                  },
                }}/>
                <h3 className='text-center press_start text-[#a32d4f] w-[70%] mx-auto text-[0.8em]
                sm:text-[1em]
                '>Darlene Angelina Christy</h3>  

                  <table className="mx-auto mt-3 text-left text-[#a32d4f] text-sm sm:text-base pixelify-left">
                <tbody>
                  <tr>
                    <td className="font-bold pr-4">HP</td>
                    <td className='pr-4'>:</td>
                    <td> 100%</td>
                  </tr>
                  <tr>
                    <td className="font-bold pr-4">Class</td>
                    <td className='pr-4'>:</td>
                    <td> Student</td>
                  </tr>
                  <tr>
                    <td className="font-bold pr-4">Status</td>
                    <td className='pr-4'>:</td>
                    <td> Busy</td>
                  </tr>
                </tbody>
              </table>

              <div className='flex flex-col  mt-10  justify-evenly '>
                <Link to="/skills" className='mx-auto'>
                  <button className='text-[0.8em] bg-[#ec6666] text-[#FFF2EB] px-10 py-1 mb-3 rounded-xl pixelify
                  sm:text-[1em]
                  md:text-[1.2em]
                  hover:translate-y-1
                  hover:bg-[#bc5656] 
                  float-icon2
                  cursor-pointer
                  '>Skills</button>
                </Link>
                
                <Link to="/experiences" className='mx-auto'>
                  <button className='text-[0.8em] bg-[#ec6666] text-[#FFF2EB] px-10 py-1 mb-3 rounded-xl pixelify
                  sm:text-[1em]
                  md:text-[1.2em]
                  hover:translate-y-1
                  hover:bg-[#bc5656] 
                  float-icon2
                  cursor-pointer
                  '>Experiences</button>
                </Link>
              </div>
            </div>
          </div>


          <hr className='mb-10 mt-5 w-[65%] mx-auto text-[#a32d4f] opacity-30
          md:hidden '/>

          <div className='w-60% mx-15 sm:w-[80%] sm:mt-10 md:w-[60%] md:ms-0 md:me-19'>
            <div className="flex justify-center items-center gap-3 mb-4">
              <img className="w-[1.4em] animate-bounce" src="/sticker.png" alt="" />
              <h2 className='press_start text-[#a32d4f] text-[0.8em] lg:text-[1.4em] animate-bounce'>About Me</h2>
              <img className="w-[1.4em] animate-bounce" src="/sticker.png" alt="" />
            </div>
            <p className='text-[#b96a34] pixelify-justify text-[0.9em] lg:text-[1.1em]'>
              Hello! My name is Darlene Angelina Christy and I am a student in Soegijapranata Catholic University (SCU), Semarang. Most people call me as Wen or Wen-wen, but you can also call me Darlene. 
              <br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit id architecto explicabo laudantium harum eligendi, suscipit, vitae blanditiis perferendis dicta a exercitationem quam aperiam, nam enim aliquid nemo. Alias voluptatum quos explicabo ullam fugiat officiis animi voluptatibus, esse unde molestias accusamus vel itaque illo placeat veritatis facere saepe iste fuga sed nihil obcaecati delectus modi qui. Beatae optio, suscipit quibusdam enim nostrum illum repellat et saepe pariatur, accusantium accusamus laudantium nisi. Facilis totam necessitatibus quas? Perferendis quos quam repudiandae, mollitia eligendi nobis aperiam maiores sapiente minima magnam eos suscipit asperiores et praesentium facere voluptatum unde quae pariatur distinctio. Temporibus, dicta!
            </p>
            
            <hr className='my-10 w-[100%] mx-auto text-[#a32d4f] opacity-30
            '/>

            <div className="flex flex-col lg:flex-row justify-between md:gap-5">
              {data.map((section) => (
                <div key={section.title} className="mb-10 md:mb-0">
                  <h2 className="text-center mx-auto press_start text-[#a32d4f] text-[0.8em] mb-4 lg:text-[1.1em]
                  bg-[#ffd6ba] py-1 rounded-[8px]
                  ">
                    {section.title}
                  </h2>
                  <ul>
                    {section.items[0].map((item, idx) => (
                      <div key={item} className="flex items-center gap-2 mb-2">
                        <img
                          src={section.items[1][idx]}
                          alt={item}
                          className="w-[1.6em] md:w-[2em] md:mb-0"
                        />
                        <li className="my-1 list-none pixelify-left text-[#b96a34] lg:text-[1.1em]">{item}</li>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <hr className='m-10 md:my-10 mt-0 w-[100%] mx-auto text-[#a32d4f] opacity-30
            '/>
      
            <div>
              <div className='press_start text-[#a32d4f] text-center text-[0.8em] lg:text-[1.1em]'>Contact Me!</div>
              <div className='flex flex-col justify-around md:flex-row my-2'>
                <div className='w-auto flex items-center gap-2 my-2'>
                  
                  <img src="/mail.png" alt="" className='w-[1.6em] md:w-[2em] md:mb-0' />
                  <p className='pixelify-left text-[#b96a34] lg:text-[1.1em]'>Email : 123@gmail.com</p>

                </div>
                <div className='w-auto flex items-center gap-2 my-2'>
                  <img src="/smartphone.png" alt="" className='w-[1.6em] md:w-[2em] md:mb-0'/>
                  <p className='pixelify-left text-[#b96a34] lg:text-[1.1em]'>Phone : 1234-5678-90</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </>);
}

export default About;
