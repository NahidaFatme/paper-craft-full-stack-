import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { MdOutlineInventory2 } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { TbCurrencyTaka } from "react-icons/tb";
import { TbListDetails } from "react-icons/tb";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { MdConnectWithoutContact } from "react-icons/md";
import 'animate.css';
import Slide from "./Slide";
import p1 from '../images/p1.jpg';
import p2 from '../images/p2.jpg';
import p3 from '../images/p3.jpg';

const Banner = () => {
    const [subs, setSubs] = useState([]);
    const [loadedItems, setLoadedItems] = useState([]);
    useEffect(() => {
        fetch('https://paper-craft-server.vercel.app/subcategory')
            .then(res => res.json())
            .then(data => {
                console.log("Fetched data:", data); 
                setSubs(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

            fetch('https://paper-craft-server.vercel.app/items')
            .then(res => res.json())
            .then(data => {
                console.log("Fetched data:", data); 
                const firstSixItems = data.slice(0, 6);
                setLoadedItems(firstSixItems);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <Slide></Slide>
            <section>
                <div className="text-center mb-10">
                    <h1 className="mx-auto pacifico text-3xl font-bold animate__animated animate__backInRight">
                        Art & Craft Items </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-11/12 lg:w-8/12 mx-auto">
                    {
                        loadedItems.map(loadedItem => <div>                    
                            <div className="card w-full md:w-60 lg:w-80 glass bg-[#02413c]">
                                    <figure><img src={loadedItem.photo} alt="car!"/></figure>
                                <div className="card-body w-full pacifico">
                                    <div className="flex gap-8 md:gap-20 lg:gap-28 justify-center items-center">
                                        <p className="flex items-center gap-2 text-white">{loadedItem.rating}<FaRegStar /></p>
                                        <p className="flex items-center gap-1 text-white text-2xl ">{loadedItem.price} <TbCurrencyTaka /></p>
                                    </div>
                                    
                                    <p className=" text-[#fcbb02] text-xl font-bold">{loadedItem.item_name}</p>
                                    
                                    <div className="justify-between mt-2 text-white text-sm">
                                        <p className="flex gap-2 items-center"><TbCategory /> {loadedItem.subcategory_Name}</p>
                                        <p className="flex items-center gap-2"><FaRegEdit /> Customizable: {loadedItem.customization}</p>
                                        <p className="flex gap-2 items-center"><MdOutlineInventory2 /> {loadedItem.stockStatus}</p>
                                    </div>
                                    <div className="my-4">
                                        <p className="text-xs text-white">{loadedItem.description}</p>
                                    </div>
                                    <hr />
                                    <div className=" w-full mt-2 ">
                                        <Link to={`/Details/${loadedItem._id}`}>
                                            <button className="btn w-full flex gap-3 border-2 border-lime-500 bg-transparent text-white hover:bg-[#79797988]"><TbListDetails /> View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </section>
            <section className="mt-24">
                <div className="text-center mb-0 md:mb-10">
                    <h1 className="mx-auto pacifico text-3xl font-bold animate__animated animate__backInRight">
                        Our Services </h1>
                </div>
                <div className="w-full mx-auto">
                    <div className='animate__animated animate__backInLeft animate__delay-1s flex flex-col  md:flex-row lg:flex-row gap-10 lg:gap-16 text-3xl font-semibold text-[#0f413dd7] justify-center items-center mt-12 md:mt-14 lg:mt-56'>
                    <div className='p-3 md:p-6 w-48 lg:w-72 glass bg-[#fcbb02] rounded-lg flex justify-center items-center gap-3'>
                        <MdConnectWithoutContact  className='text-5xl'/>
                        <div>
                            <p className='text-left'>800+ </p>
                            <p className='text-base text-white'>Clients Served</p>
                        </div>
                    </div>
                    <div className='p-3 md:p-6 w-48 lg:w-72 glass bg-[#fcbb02] rounded-lg flex justify-center items-center gap-3'>
                        <GiFamilyHouse className='text-5xl' />
                        <div>
                            <p className='text-left '>2000+</p>
                            <p className='text-base  text-white'>Art & Craft Items</p>
                        </div>
                    </div>
                    <div className='p-3 md:p-6 w-48 lg:w-72 glass bg-[#fcbb02] rounded-lg flex justify-center items-center gap-3'>
                        <FaUserClock className='text-5xl' />
                        <div>
                            <p className='text-left '>5 Day </p>
                            <p className='text-base  text-white'> Delivery Servce</p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="py-6 md:py-24">
                <div className=" pacifico w-5/6 lg:w-8/12 mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="mx-auto pacifico text-3xl font-bold animate__animated animate__backInRight">Our Categories</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {
                            subs.map(sub => <Link to={`/SelectedCategory/${sub.subcategory_Name}`} className="grid grid-cols-3">
                                <div className="bg-red-200 w-60 lg:w-72 h-full p-4 lg:p-6 rounded-xl">
                                    <img src={sub.photo} alt="" />
                                    <p className="text-center pt-6 text-xl">{sub.subcategory_Name}</p>
                                </div>
                            </Link> ) 
                        }
                    </div>
                </div>
            </section>
            <section className="my-24">
                <div className="text-center mb-10">
                    <h1 className="mx-auto pacifico text-3xl font-bold animate__animated animate__backInRight">
                        Meet the Makers !!
                     </h1>
                </div>
                <div className="w-full md:w-11/12 lg:w-4/5 mx-auto">
                    {/* person 1 */}
                    <div className="flex flex-col md:flex-row  justify-center items-center gap-12 pacifico">
                        <div className="relative w-4/5 md:w-1/2">
                            <img src={p1} className="bg-red-200 p-6 lg:w-96 h-[400px] md:h-[600px]" />
                            <div className="absolute -bottom-6 md:-bottom-10 left-4 md:left-10 z-10 w-52 md:w-96 h-[400px] md:h-[600px] border-2 border-red-200"></div>
                        </div>
                        <div className="w-4/5 md:w-1/2">
                            <h2 className="md:text-3xl lg:text-5xl font-bold pb-7">Benjamin Craftwell</h2>
                            <p className="md:text-xl lg:text-2xl font- pb-12">Scrapbook Maker</p>
                            <p className="text-justify md:text-base lg:text-xl">Hi, I'm Benjamin Craftwell, a passionate scrapbook artist. With delicate hands and a creative mind, I transform memories into timeless treasures. Each page tells a story, blending colors, textures, and photos into captivating tales. Let me craft your memories into beautiful keepsakes to cherish forever.</p>
                        </div>
                    </div>
                    {/* person 2 */}
                    <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-28 pacifico mt-12 md:mt-0">
                        <div className="relative w-4/5 md:w-1/2">
                            <img src={p2} className="bg-red-200 p-6 w-96 h-[400px] md:h-[600px]" />
                            <div className="absolute -bottom-6 md:-bottom-10 left-4 md:left-10 z-10 w-52 md:w-96 h-[400px] md:h-[600px] border-2 border-red-200"></div>
                        </div>
                        <div className="w-4/5 md:w-1/2">
                            <h2 className="md:text-3xl lg:text-5xl= font-bold pb-7">Emily Glassart</h2>
                            <p className="md:text-xl lg:text-2xl font- pb-12">Origami & craft painter</p>
                            <p className="text-justify md:text-base lg:text-xl">Hello, I'm Emily Glassart, a dedicated glass painter. With every stroke of my brush, I bring ordinary glass to life, infusing it with vibrant colors and intricate designs. From elegant vases to stunning stained glass windows, let me illuminate your world with the magic of glass art that adds a touch of elegance and brilliance to any space.</p>
                        </div>
                    </div>
                    {/* person 3 */}
                    <div className="flex flex-col md:flex-row  justify-center items-center gap-12 pacifico mt-12 md:mt-0">
                        <div className="relative w-4/5 md:w-1/2">
                            <img src={p3} className="bg-red-200 p-6 w-96 h-[400px] md:h-[600px]" />
                            <div className="absolute -bottom-6 md:-bottom-10 left-4 md:left-10 z-10 w-52 md:w-96 h-[400px] md:h-[600px] border-2 border-red-200"></div>
                        </div>
                        <div className="w-4/5 md:w-1/2">
                            <h2 className="md:text-3xl lg:text-5xl font-bold pb-7">Olivia Origami</h2>
                            <p className="md:text-xl lg:text-2xl font- pb-12">Glass Staining & Painter</p>
                            <p className="text-justify md:text-base lg:text-xl">Greetings! I'm Olivia Origami, an avid lover of paper and the art of origami. With nimble fingers and a passion for creativity, I fold and shape paper into intricate masterpieces that captivate the eye and inspire wonder. From graceful cranes to intricate flowers, let me bring the beauty of origami into your life with my delicate craftsmanship and attention to detail.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;