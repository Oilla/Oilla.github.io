import { Link } from "react-router-dom";
import { useState } from 'react';


function Experiences(){
        const [currentIndex, setCurrentIndex] = useState(0);
        const eventData = [
        {
            title: "Part of The Lost Nemo Staff Team",
            subtitle: "September 2022 - Present",
            description: "The Lost Nemo is an Unofficial Community & Legal Marketplace Discord for Growtopia that has over 500k members. Started as a Guardian then got promoted to Moderator in 2023, and now a Community Manager of the server since September 2023.",
            image: "/event-holder.jpg",
        },
        {
            title: "Part of HMTI SCU 2023/2024",
            subtitle: "October 2023 - October 2024",
            description: "Was a part of Himpunan Mahasiswa Teknik Informatika as Internal Role, ensured every member to be comfortable to each other and to be a good team.",
            image: "/event-holder.jpg",
        },
        {
            title: "Teaching Assistant of Fundamental Programming",
            subtitle: "September 2024 - December 2024",
            description: "Teaching and guiding students about the fundamentals of programming, using C Language.",
            image: "/event-holder.jpg",
        },
        {
            title: "Part of HMTI SCU 2024/2025",
            subtitle: "October 2024 - Present",
            description: "Is still a part of Himpunan Mahasiswa Teknik Informatika as Secretary Role, ensuring every event proposal, event report, and event to be a success.",
            image: "/event-holder.jpg",
        },
        {
            title: "Teaching Assistant of Applied Math",
            subtitle: "March 2025 - Present",
            description: "Teaching and guiding students about applied math, calculus 1 and 2. Learned about Integral, Derivative, Matrices, and Vectors.",
            image: "/event-holder.jpg",
        },
        ];
        
        const goPrev = () => {
            setCurrentIndex((prev) => (prev === 0 ? eventData.length - 1 : prev - 1));
        };

        const goNext = () => {
            setCurrentIndex((prev) => (prev === eventData.length - 1 ? 0 : prev + 1));
        };

        const { title, subtitle, description, image } = eventData[currentIndex];
        


    return(
    <>
        <div className="w-screen h-screen overflow-y-scroll">
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/moving.gif')" }}
                />
                {/* Overlay untuk menggelapkan background */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/5" />
            </div>

            <div className='flex flex-col justify-between bg-[#FFF2EB] py-5 rounded-[2em] w-[80%] mx-auto my-20' data-aos='fade-up'>
                <div className="flex">
                    <Link to="/about" className='inline-block ms-7 mb-8 sm:mb-0'>
                        <img src="/arrow-2 (2).png" className="w-[1.5em] hover:translate-y-1
                        sm:w-[1.7em]
                        md:w-[2.3em] cursor-pointer
                        " alt="Back" />
                    </Link>
                </div>
                <div data-aos="fade-up">
                    <div className="flex justify-center items-center gap-3 mb-4">
                        <img className="w-[1.4em] animate-bounce" src="/party-card.png" alt="" />
                        <h2 className='press_start text-[#a32d4f] text-center text-[0.8em] lg:text-[1.4em] animate-bounce'>Experiences</h2>
                        <img className="w-[1.4em] animate-bounce" src="/party-card.png" alt="" />
                    </div>
                    <p className='pixelify text-[#a32d4f] text-center text-[1em] mb-10 md:text-[1.1em]'>Check out my experiences!</p>
                
                    <div className="relative">
                        {/* Panah kiri */}
                        <button
                            onClick={goPrev}
                            className="ms-3 md:ms-10 absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#fff2eb] text-[#a32d4f] px-2 py-1 rounded-full "
                        >
                            <img className="w-[1.5em]" src="/arrow-left.png" alt="" />
                        </button>

                        {/* Konten */}
                        <div className="md:mx-25 mx-10 my-5 flex flex-col md:flex-row items-center">
                            <div className="w-[15em] h-[10em] overflow-hidden rounded-xl mb-5 
                            sm:w-[20em] sm:h-[12em]
                            md:mx-5">
                                <img src={image} alt={title} className="object-cover w-full h-full" />
                            </div>

                            <div className="w-[70%] md:w-[50%]">
                                <h2 className="press_start_normal text-center text-[#a32d4f] text-[0.8em] md:text-left md:text-[1em] lg:text-[1.4em]">
                                    {title}
                                </h2>
                                <h4 className="pixelify_normal text-center md:text-left text-[#a32d4f] text-[0.8em] md:text-[1.2em]">
                                    {subtitle}
                                </h4>
                                <p className="pixelify-justify text-[0.8em] md:text-[1.1em]">
                                    {description}
                                </p>
                            </div>
                        </div>

                        {/* Panah kanan */}
                        <button
                            onClick={goNext}
                            className="me-3 md:me-10 absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#fff2eb] text-[#a32d4f] px-2 py-1 rounded-full cursor-pointer"
                        >
                            <img className="w-[1.5em]" src="/arrow.png" alt="" />
                        </button>
                        </div>

                    <hr className='mb-10 w-[80%] mx-auto text-[#a32d4f] opacity-30
                    '/>
                    <div className='mx-10'>
                        <div className='press_start text-[#a32d4f] text-center text-[0.8em] lg:text-[1.2em]'>Contact Me!</div>
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

    </>
    );
}

export default Experiences

