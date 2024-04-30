import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { IoMdPricetags } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import '../index.css';
const Details = () => {

    const loadedItem = useLoaderData();

    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <div className="mx-auto bg py-6 md:py-16 h-auto md:min-h-screen">
            <div className="mx-auto w-11/12 md:w-4/5">
                <div className="rounded-3xl bg-[#fff8e3] ">
                    <div className="w-full h-1/2 md:h-svh rounded-t-3xl">
                        <img src={loadedItem.photo} className="w-full h-1/2 md:h-svh object-cover rounded-t-3xl" />
                    </div>
                    <div className="pacifico p-5 md:p-10 flex flex-col gap-5">
                        <p className="text-[#5b9004] text-lg md:text-4xl font-bold">{loadedItem.item_name}</p>
                        <p className="text-[#02413c] text-base font-bold">Category: {loadedItem.subcategory_Name}</p>
                        <hr className="border-1 border-[#5b9004]"/>
                        <div className="fle flex-col md:flex-row  md:justify-between">
                            <p className="rounded-lg mb-3 md:mb-0 py-3 px-6 bg-[#5b9004] text-[#fcbb02] flex gap-2 justify-center items-center"><IoMdPricetags/>Price: {loadedItem.price} BDT</p>
                            <p className="rounded-lg mb-3 md:mb-0 py-3 px-6 bg-[#5b9004] text-[#fcbb02] flex gap-2 justify-center items-center">Rating: {loadedItem.rating} <FaStar /></p>
                            <p className="rounded-lg  mb-3 md:mb-0 py-3 px-6 bg-[#5b9004] text-[#fcbb02] flex gap-2 justify-center items-center"><MdOutlineDashboardCustomize /> Customizable: {loadedItem.customization}</p>
                        </div>
                        <div className="">
                            <p className="text-[#02413c] text-lg font-bold mb-4 flex gap-2 items-center"><FaRegClock /> {loadedItem.processing_time } <span>working days</span></p>
                            <p className="text-[#02413c] text-lg font-bold">Stock: {loadedItem.stockStatus}</p>
                        </div>
                        <hr className="border-1 border-[#5b9004]"/>
                        <div>
                            <p className="text-yellow-500 text-lg font-bold mb-3">Description:</p>
                            <p className="text-[#02413c] text-lg font-bold">{loadedItem.description}</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 justify-end mt-3">
                            <p>Uploaded By:</p>
                            <p>{loadedItem.user_name}</p>
                            <p>{loadedItem.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;