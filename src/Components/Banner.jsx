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
const Banner = () => {
    const [subs, setSubs] = useState([]);
    const [loadedItems, setLoadedItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/subcategory')
            .then(res => res.json())
            .then(data => {
                console.log("Fetched data:", data); 
                setSubs(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

            fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => {
                console.log("Fetched data:", data); 
                setLoadedItems(data);
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-8/12 mx-auto">
                    {
                        loadedItems.map(loadedItem => <div>                    
                            <div className="card w-80 glass bg-[#02413c]">
                                    <figure><img src={loadedItem.photo} alt="car!"/></figure>
                                <div className="card-body w-full pacifico">
                                    <div className="flex gap-28 justify-center items-center">
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
                <div className="text-center mb-10">
                    <h1 className="mx-auto pacifico text-3xl font-bold animate__animated animate__backInRight">
                        Our Services </h1>
                </div>
                <div>
                    <div className='animate__animated animate__backInLeft animate__delay-1s flex flex-col  md:flex-row lg:flex-row gap-16 text-3xl font-semibold text-[#0f413dd7] justify-center md:mt-14 mt-56'>
                    <div className='p-6 w-72 glass bg-[#fcbb02] rounded-lg flex justify-center items-center gap-3'>
                        <MdConnectWithoutContact  className='text-5xl'/>
                        <div>
                            <p className='text-left'>800+ </p>
                            <p className='text-base text-white'>Clients Served</p>
                        </div>
                    </div>
                    <div className='p-6 w-72 glass bg-[#fcbb02] rounded-lg flex justify-center items-center gap-3'>
                        <GiFamilyHouse className='text-5xl' />
                        <div>
                            <p className='text-left '>2000+</p>
                            <p className='text-base  text-white'>Art & Craft Items</p>
                        </div>
                    </div>
                    <div className='p-6 w-72 glass bg-[#fcbb02] rounded-lg flex justify-center items-center gap-3'>
                        <FaUserClock className='text-5xl' />
                        <div>
                            <p className='text-left '>5 Day </p>
                            <p className='text-base  text-white'> Delivery Servce</p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="py-24">
                <div className=" pacifico w-8/12 mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="mx-auto pacifico text-3xl font-bold animate__animated animate__backInRight">Our Categories</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {
                            subs.map(sub => <Link to={`/SelectedCategory/${sub.subcategory_Name}`} className="grid grid-cols-3">
                                <div className="bg-red-200 w-72 h-full p-6 rounded-xl">
                                    <img src={sub.photo} alt="" />
                                    <p className="text-center pt-6 text-xl">{sub.subcategory_Name}</p>
                                </div>
                            </Link> ) 
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;