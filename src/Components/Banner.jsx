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
            <section>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                        <div className="absolute z-10 top-0">
                            <p>this is text</p>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </section>
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
            <section className="py-14">
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