import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { IoMdPricetags } from "react-icons/io";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { FaArrowDown } from "react-icons/fa";
const MyList = () => {

    const loadedItems = useLoaderData();
    const [items, setItems] = useState(loadedItems);
    
    useEffect(() => {
        document.title = "My List";
    }, []);

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/items/delete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )
                        }
                        const remaining = items.filter(item => item._id !== _id);
                        setItems(remaining);
                    })

            }
        })
    };

    const handleCustom = custom => {
        let filteredItems;
        if (custom === 'yes') {
            filteredItems = loadedItems.filter(item => item.customization === 'yes');
        } else if (custom === 'no') {
            filteredItems = loadedItems.filter(item => item.customization === 'no');
        } else if (custom === 'reset'){
            filteredItems = loadedItems; 
        }
        setItems(filteredItems);
    };

    return (
        <div className="bg-[#02413c] pt-12">
            <div className="text-center mb-10">
                    <h1 className="mx-auto pacifico text-[#fcbb02] text-4xl font-bold animate__animated animate__backInRight">My Art & Craft List</h1>
            </div>
            {/* filter */}
            <div className="flex ml-44 mb-6 pacifico">
                <label className="label border-2 p-2 border-[#fcbb02] bg-transparent border-r-0 text-[#fcbb02] rounded-l-lg">Filter</label>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="flex items-center gap-2 border-2 p-2 border-white bg-transparent  text-white rounded-r-lg">Customizable <FaArrowDown /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-32">
                        <li onClick={() => handleCustom('reset')} className="hover:bg-[#fcbb02] rounded-md">Reset</li>
                        <li onClick={() => handleCustom('yes')} className="hover:bg-[#fcbb02] rounded-md">Yes</li>
                        <li onClick={() => handleCustom('no')} className="hover:bg-[#fcbb02] rounded-md">No</li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-4/5 mx-auto">
                {
                    items.map(loadedItem => <div>
                            <div className="card w-96 glass">
                            <figure><img src={loadedItem.photo} alt="car!"/></figure>
                            <div className="card-body w-full pacifico">
                                <div className="items-right text-end">
                                    <p className="flex items-center gap-2 text-white">{loadedItem.rating}<FaStar /></p>
                                </div>
                                
                                <p className=" text-[#fcbb02] text-xl font-bold">{loadedItem.item_name}</p>
                                
                                <div className="flex justify-between mt-2 text-white text-sm">
                                    <p className="flex items-center gap-2"><MdOutlineDashboardCustomize /> Customizable: {loadedItem.customization}</p>
                                    <p>Stock: {loadedItem.stockStatus}</p>
                                </div>
                                
                                <p className="flex items-center gap-2 text-white text-3xl mt-3 mb-8"><IoMdPricetags/> {loadedItem.price} <span className="text-xs text-[#fcbb02]">BDT</span></p>
                                <hr />
                                <div className="card-actions justify-between mt-2">
                                <Link to={`/Update/${loadedItem._id}`}>
                                    <button className="btn flex gap-3 border-2 border-lime-500 bg-transparent text-white hover:bg-[#79797988]"><FiEdit/>Update</button>
                                </Link>
                                <button onClick={() => handleDelete(loadedItem._id)} className="btn flex gap-3 border-2 border-orange-700 bg-transparent text-white hover:bg-[#79797988]"><RiDeleteBin6Line />Delete</button>
                                </div>
                            </div>
                            </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyList;