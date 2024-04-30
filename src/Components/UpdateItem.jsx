import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../index.css';

const UpdateItem = () => {
    const loadedItem = useLoaderData();
    const { _id } = loadedItem;
    useEffect(() => {
        document.title = "Update Item";
    }, []);

    const handleUpdate = event => {
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
        const photo = form.photo.value;

        const updatedItem = { item_name, subcategory_Name, price, rating, customization, description, processing_time, stockStatus, photo}

        
        fetch(`http://localhost:5000/items/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0) {
                    toast.success("Item Updated successfully");
                }
                
            })


    }
    return (
        <div className="mx-auto bg py-6 md:py-16">
            <div className="text-center mb-10">
                <h1 className="mx-auto pacifico text-[#fcbb02] text-4xl font-bold animate__animated animate__backInRight">Update Art & Craft Item</h1>
            </div>
            {/* form start */}
            <div className="bg-[#fff8e3] p-4 md:p-20 w-4/5 md:w-2/3 mx-auto rounded-2xl">
                <form onSubmit={handleUpdate} className="pacifico text-[#02413c]">
                    {/*  row 1*/}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="item_name" defaultValue={loadedItem.item_name} placeholder="Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-0 md:ml-4">
                            <label className="label">Subcategory</label>
                            <select className="select select-bordered w-full" defaultValue={loadedItem.subcategory_Name} name="subcategory_Name">
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
                                <span className="label-text">Price (BDT)</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="price"defaultValue={loadedItem.price} placeholder="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-0 md:ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="rating" min="0" max="5" step="0.1" defaultValue={loadedItem.rating} placeholder="5.0" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-0 md:ml-4">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="customization" defaultValue={loadedItem.customization} placeholder="yes/no" className="input input-bordered w-full" />
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
                                    defaultValue={loadedItem.description}
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
                                <span className="label-text">Processing Time (Days)</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="processing_time" defaultValue={loadedItem.processing_time} placeholder="2 Working Days" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-0 md:ml-4">
                            <label className="label">Select a stock Status </label>
                            <select className="select select-bordered w-full" name="stockStatus" defaultValue={loadedItem.stockStatus}>
                                <option disabled selected>Stock Status</option>
                                <option value="In Stock">In Stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select>
                        </div>
                    </div>
                    
                    {/* form Photo url row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" defaultValue={loadedItem.photo} placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Item" className="btn btn-block bg-[#fcbb02]" />
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;