import { useEffect } from "react";
import Banner from "./Banner";
import b2 from '../images/b2.jpg';
import b1 from '../images/b1.jpg';
import b3 from '../images/b3.jpg';
import b9 from '../images/b9.jpg';
import { Typewriter } from 'react-simple-typewriter'
const Slide = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <div>
            <section>
                <div className="carousel w-full">
                    {/* slide 1 */}
                    <div id="slide1" className="carousel-item pacifico relative w-full h-screen">
                        <img src={b2} className="w-full h-2/3 md:h-4/5 object-cover" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                        <div className="absolute z-10 top-16 left-5 md:left-20">
                            <div className="md:text-5xl lg:text-6xl text-white font-semibold mb-6">
                                <Typewriter
                                words={['Discover artisanal treasures']}
                                loop={5}
                                />
                            </div>
                            <p className="text-base md:text-4xl text-white font-medium mb-4">handcrafted for your soul</p>
                            <p className="text-sm md:text-2xl glass w-fit text-white p-2 md:p-3 rounded-md">Where every creation tells a story</p>
                        </div>
                    </div> 
                    {/* slide 2 */}
                    <div id="slide2" className="carousel-item relative w-full h-screen">
                        <img src={b1} className="w-full h-2/3 md:h-4/5 object-cover" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                        <div className="absolute z-10 md:top-60 lg:top-52 md:left-40 lg:left-52 text-[#4c75dd] shadow-2xl  lg:px-20 lg:py-12">
                            <div className="flex font-bold mb-6">
                                <p className="text-base md:text-3xl lg:text-5xl mb-4 pr-3">Let your imagination soar with</p>
                                <div className="text-base md:text-4xl lg:text-5xl text-yellow-200">
                                    <Typewriter
                                    words={['Onigiri Birds_']}
                                    loop={5}
                                    />
                                </div>
                            </div>
                            <div className="text-base md:text-4xl text-center font-medium mb-4">
                                <Typewriter
                                words={['Where creativity takes flight!']}
                                loop={0}
                                />
                            </div>
                        </div>
                    </div> 
                    {/* slide 3 */}
                    <div id="slide3" className="carousel-item relative w-full h-screen">
                        <img src={b3} className="w-full h-2/3 md:h-4/5 object-cover" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a> 
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                        <div className="absolute z-10 bottom-72 md:bottom-64 md:right-60 lg:right-96 pacifico text-lg md:text-2xl lg:text-4xl font-medium text-white -rotate-12">
                            <div className="text-center mb-4">
                                <Typewriter
                                words={['Write to your loved ones']}
                                loop={5}
                                />
                            </div>
                            <div className="text-center mb-4">
                                <Typewriter
                                words={['With our beautiful greeting cards !!']}
                                loop={5}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Slide;