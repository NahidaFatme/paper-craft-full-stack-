import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
const AllItems = () => {

    const loadedItems = useLoaderData();

    useEffect(() => {
        document.title = "All craft items";
    }, []);
    return (
        <div className="mx-auto bg-[#02413c] py-6 md:py-16 min-h-screen">
            <div>
                <div className="text-center mb-10">
                    <h1 className="mx-auto pacifico text-[#fcbb02] text-4xl font-bold animate__animated animate__backInRight">All Art & Craft Items</h1>
                </div>
                <div className="overflow-x-auto w-4/5 mx-auto">
                    <table className="table border-2 border-[#fcbb02] pacifico">
                        {/* head */}
                        <thead className="text-[#fcbb02] text-lg">
                        <tr>
                            <th>Item Name</th>
                            <th>Subcategory</th>
                            <th>Price</th>
                            <th>Stock Status</th>
                            <th>Details</th>
                        </tr>
                        </thead>
                        <tbody className="text-white">
                        {/* row 1 */}
                        {
                            loadedItems.map(item => <tr key={item._id}>
                                                    <td>{item.item_name}</td>
                                                    <td>{item.subcategory_Name}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.stockStatus}</td>
                                                    <td><button className="btn bg-transparent text-[#d4807d] border-none text-base font-semibold hover:bg-[#9797974e]"> <TbListDetails /> View Details</button></td>
                                                </tr> )
                        }
                        </tbody>
                    </table>
                    </div>
            </div>
        </div>
    );
};

export default AllItems;