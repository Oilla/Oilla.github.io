import { Link } from 'react-router-dom';

function Skills(){
    const skills = [
    {
        name: "Python",
        level: "4",
        icon: "/web-development.png",
        description: "Knows how to use Python for beginners, is still learning how to use it.",
    },
    {
        name: "Art Design",
        level: "8",
        icon: "/pixel-art.png",
        description: "Being able to sketch and design random stuff with traditional drawing style.",
    },
    {
        name: "UI/UX Design",
        level: "8",
        icon: "/pixel-art (1).png",
        description: "Intermediate knowledge of user interface design principles.",
    },
    {
        name: "CSS",
        level: "8",
        icon: "/mixing-table.png",
        description: "Understands how to use CSS for styling web pages.",
    },
    {
        name: "TypeScript",
        level: "6",
        icon: "/marriage.png",
        description: "Using TS for better scalability and type safety.",
    },
    {
        name: "Play Music",
        level: "5",
        icon: "/grand-piano.png",
        description: "Knows the basic and intermediate level of playing piano",
    },
    ];

    return(<>
        <div className="w-screen h-screen overflow-y-scroll">
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/moving2.gif')" }}
                />
                {/* Overlay untuk menggelapkan background */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/5" />
            </div>


            <div className='flex flex-col justify-between bg-[#FFF2EB] py-5 rounded-[2em] w-[80%] mx-auto my-20' data-aos="fade-up">
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
                    <img className="w-[1.4em] animate-bounce" src="/archer.png" alt="" />
                    <h2 className='press_start text-[#a32d4f] text-center text-[0.8em] lg:text-[1.4em] animate-bounce'>Skills</h2>
                    <img className="w-[1.4em] animate-bounce" src="/archer.png" alt="" />
                </div>
                <p className='pixelify text-[#a32d4f] text-center text-[1em] mb-10'>Check out my skills!</p>
                <div className='mx-10 md:mx-20'>
                    <div className="bg-[#fff2ec] p-6 rounded-[2em]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
                            {skills.map((skill, idx) => (
                            <div
                                key={idx}
                                className="flex bg-[#ffd6ba] rounded-lg shadow-md hover:-translate-y-2"
                                
                            >
                                {/* Icon */}
                                <div className="bg-[#ffe8cd] flex items-center justify-center p-4 w-[30%]">
                                <img src={skill.icon} alt={`${skill.name} icon`} className="w-10" />
                                </div>

                                {/* Content */}
                                <div className="p-4 w-[70%]">
                                <h3 className="font-bold text-md press_start text-[0.6em] text-left text-[#df5900] mb-2
                                sm:text-[0.7em]
                                md:text-[0.8em]
                                ">{skill.name}</h3>
                                <h4 className="font-semibold text-sm mb-1 pixelify-left text-[#e87325]">Level: {skill.level}/10</h4>
                                <p className="text-[0.8em] leading-snug pixelify-left text-[#b96a34]
                                sm:text-[0.8em]
                                md:text-[0.9em]
                                ">{skill.description}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                        <h2 className='pixelify text-[#a32d4f] text-center text-[1em] mt-10'>More coming soon...</h2>
                    </div>
                </div>
            
                <hr className='mb-10 w-[80%] mx-auto text-[#a32d4f] opacity-30
                '/>
                <div className='mx-10'>
                    <div className='press_start text-[#a32d4f] text-center text-[0.8em] lg:text-[1.3em]'>Contact Me!</div>
                    <div className='flex flex-col justify-around md:flex-row my-2'>
                        <div className='w-auto flex items-center gap-2 my-2'>
                        
                        <img src="/mail.png" alt="" className='w-[1.6em] md:w-[2em] md:mb-0' />
                        <p className='pixelify-left text-[#b96a34] lg:text-[1.1em]'>Email : darleneangelina16@gmail.com</p>

                        </div>
                        <div className='w-auto flex items-center gap-2 my-2'>
                        <img src="/smartphone.png" alt="" className='w-[1.6em] md:w-[2em] md:mb-0'/>
                        <p className='pixelify-left text-[#b96a34] lg:text-[1.1em]'>Phone : +62 858-6600-8586</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>);
}

export default Skills