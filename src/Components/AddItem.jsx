import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../index.css';
const AddItem = () => {

    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    useEffect(() => {
        document.title = "Add new item";
    }, []);

    const handleAddItem = event => {
        event.preventDefault();

        const form = event.target;

        const item_name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const description = form.description.value;
        const processing_time = form.processing_time.value;
        const stockStatus = form.stockStatus.value;
        const user_name = form.user_name.value;
        const email = form.email.value;
        const photo = form.photo.value;

        const newItem = { item_name, subcategory_Name, price, rating, customization, description, processing_time, stockStatus, user_name, email, photo}

        console.log(newItem);

        // send data to the server
        fetch('http://localhost:5000/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    toast.success("Item added successfully");
                }
                
            })
    }

    return (
        <div className="mx-auto bg py-6 md:py-16">
            <div className="text-center mb-10">
                <h1 className="mx-auto pacifico text-[#fcbb02] text-4xl font-bold animate__animated animate__backInRight">Add New Craft Item</h1>
            </div>
            {/* form start */}
            <div className="bg-[#fff8e3] p-5 md:p-20 w-4/5 md:w-2/3 mx-auto rounded-2xl">
                <form onSubmit={handleAddItem} className="pacifico text-[#02413c]">
                    {/*  row 1*/}
                    <div className="flex flex-col md:flex-row mb-8">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="item_name" placeholder="Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-0 md:ml-4">
                            <label className="label">Subcategory</label>
                            <select className="select select-bordered w-full" name="subcategory_Name">
                                <option disabled selected>Select One</option>
                                <option value="Card Making">Card Making</option>
                                <option value="Scrapbooking">Scrapbooking</option>
                                <option value="Paper Quilling & origami">Paper Quilling & origami</option>
                                <option value="Glass Painting">Glass Painting</option>
                                <option value="Lampworking">Lampworking</option>
                                <option value="Glass Dying & Staining">Glass Dying & Staining</option>
                            </select>
                        </div>
                    </div>
                    {/* row 2*/}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price: BDT</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="price" placeholder="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-0 md:ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="rating" min="0" max="5" step="0.1" placeholder="5.0" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-0 md:ml-4">
                            <label className="label">
                                <span className="label-text">Customization-</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="customization" placeholder="yes/no" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* row 3*/}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text">Item Description</span>
                            </label>
                            <label className="input-group">
                                <textarea
                                    name="description"
                                    placeholder="Write something about the product....."
                                    className="input input-bordered w-full resize-none"
                                    style={{ minHeight: '7rem' }}
                                ></textarea>
                            </label>
                        </div>
                    </div>

                    {/* row 4*/}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Processing Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="processing_time" placeholder="2 Working Days" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-0 md:ml-4">
                            <label className="label">Select a stock Status </label>
                            <select className="select select-bordered w-full" name="stockStatus">
                                <option disabled selected>Stock Status</option>
                                <option value="In Stock">In Stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select>
                        </div>
                    </div>
                    {/* row 5*/}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="user_name" value={user.displayName}  className="input input-bordered w-full" />
                            </label>
                        </div>
                        
                        <div className="form-control md:w-1/2 ml-0 md:ml-4">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" value={user.email} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Photo url row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Item" className="btn btn-block bg-[#fcbb02]" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;