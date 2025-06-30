import { Link } from 'react-router-dom';

function Menu(){
    const menuItems = [
    { label: "About Me", icon: "/sticker.png", path: "/about"},
    { label: "Skills", icon: "/archer.png", path: "/skills"},
    { label: "Experiences", icon: "/party-card.png", path: "/experiences"},
    ];
    return (
        <>
        <div className="w-screen h-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/pink-grass.jpg')" }}
                />
                {/* Overlay untuk menggelapkan background */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/5" />
            </div>
            
            <div className="absolute flex flex-col justify-between 
            bg-[#FFF2EB]/85
            rounded-[2em]
            w-[70%] h-[70%] 
            top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            sm:w-[60%]
            md:w-[70%]" data-aos="fade-down">
                <div data-aos="fade-down">
                    <div className='mt-5'>
                        <Link to="/" className='inline-block ms-7 mb-8 sm:mb-0'>
                            <img src="/arrow-2 (2).png" className="w-[1.5em] hover:translate-y-1
                            sm:w-[1.7em]
                            md:w-[2.3em] cursor-pointer
                            " alt="Back" />
                        </Link>
                        <div className="flex items-center justify-center gap-4 px-4 flex-col md:flex-row">
                            <img className="w-[3.5em] md:w-[5em]" src="/char_walk_right.gif" alt="Walking character" />
                            
                            <div className="text-center self-middle md:self-end press_start w-auto text-[#b73c3c]
                                text-[0.9em] sm:text-[1.1em] md:text-[1.4em]
                                text-shadow-warm-pink2">
                                Where do we go?
                            </div>
                        </div>

                    </div>
                </div>
                <div className="px-10 flex flex-col md:flex-row justify-around md:justify-evenly mb-7 md:mb-30 md:mt-5">
                {menuItems.map(({ label, icon, path }) => (
                    <Link to={path} key={label} className='float-icon2 hover:translate-y-1'>
                        <div
                        key={label}
                        className=" bg-[#ffe8cd] rounded-[1em] my-2 py-3 px-4 flex items-center 
                                    md:block md:w-[10rem] md:pt-7 md:px-0 md:pb-0"
                        
                        >
                        <img src={icon} alt={label} className="w-[1.6em] 
                        md:mb-5 md:w-[2em] 
                        md:mx-auto" />
                        <h4
                            className="text-center text-[#d07a40] pixelify break-all ps-4 
                            sm:text-[1.1em]        
                            md:ps-0 md:mx-auto md:bg-[#ffd6ba] md:py-2 md:rounded-b-[1em] md:text-[1.3em]"
                        >
                            {label}
                        </h4>
                        </div>
                    </Link>
                ))}
                </div>

            </div>
        </div>
        </>
    );

}

export default Menu;


