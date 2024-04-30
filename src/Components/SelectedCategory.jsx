import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { IoMdPricetags } from "react-icons/io";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { MdOutlineInventory2 } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { TbCurrencyTaka } from "react-icons/tb";
import { TbListDetails } from "react-icons/tb";
import '../index.css';
const SelectedCategory = () => {
    useEffect(() => {
        document.title = "Selected Category Section";
    }, []);
    const loadedItems = useLoaderData();
    return (
        <div className="bg h-svh pt-12">
            <div className="text-center mb-10">
                <h1 className="mx-auto pacifico text-[#fcbb02] text-3xl font-bold animate__animated animate__backInRight">
                 Showing Items of Selected Category</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-4/5 mx-auto">
                {
                    loadedItems.map(loadedItem => <div> 
                        <div className="card w-72 glass">
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
                                <div className=" w-full mt-2">
                                    <Link to={`/Details/${loadedItem._id}`}>
                                        <button className="btn w-full flex gap-3 border-2 border-lime-500 bg-transparent text-white hover:bg-[#79797988]"><TbListDetails /> View Details</button>
                                    </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default SelectedCategory;