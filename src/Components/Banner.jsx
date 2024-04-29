import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
;
const Banner = () => {
    const loadedItems = useLoaderData();
    const [subs, setSubs] = useState([]);
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
    }, []);
    
    return (
        <div>
            <div className="pacifico w-8/12 mx-auto">
                <div className="text-center mb-10">
                    <h1 className="mx-auto pacifico text-[#02413c] text-3xl font-bold animate__animated animate__backInRight">Our Categories</h1>
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
        </div>
    );
};

export default Banner;