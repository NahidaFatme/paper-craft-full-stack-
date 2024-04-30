import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DarkMode from "./DarkMode";
import { IoIosPaperPlane } from "react-icons/io";
import '../index.css';
const Navbar = () => {

    const { user, logOut, loading } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    const handleLogout = () => {
        logOut()
        .then(() => {
            toast.success("Logout successful");
          })
        .catch(error => {
            toast.error(error.message);
          });
    };

    return (
        <div className="bg">
            <div className="navbar px-4 md:px-12 lg:px-24 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-40 bg-zinc-100">
                            <li className=" hover:text-yellow-500"><Link to="/">Home</Link></li>
                            <li className=" hover:text-yellow-500"><Link to="/AllItems">All Items</Link></li>
                            <li className=" hover:text-yellow-500"><Link to="/AddItem">Add Item</Link></li>
                            <li className=" hover:text-yellow-500"><Link to={`/MyList/${user?.email}`}>My List</Link></li>
                        </ul>
                    </div>
                    <div className="">
                        <a className="pacifico flex justify-center items-center gap-2 text-base lg:text-2xl font-extrabold text-white">
                            <span><IoIosPaperPlane /></span>
                            Paper Craft
                        </a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex justify-between text-white pacifico text-base gap-4">
                        <li className=" hover:text-yellow-500"><Link to="/">Home</Link></li>
                        <li className=" hover:text-yellow-500"><Link to="/AllItems">All Items</Link></li>
                        <li className=" hover:text-yellow-500"><Link to="/AddItem">Add Item</Link></li>
                        <li className=" hover:text-yellow-500"><Link to={`/MyList/${user?.email}`}>My List</Link></li>
                    </ul>
                </div>
                <div className="navbar-end pacifico">
                    <div className="text-white mr-10">
                    <DarkMode></DarkMode>
                    </div>
                    {
                        user ? <div className="dropdown dropdown-hover">
                            <label tabIndex={0} role="buttton" className="btn btn-ghost btn-circle">
                                <div className="w-12 rounded-full border-4 border-[#fcbb02]" title= {user.displayName}> 
                                    <img src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} className="rounded-full" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-[#6f6e6ebb] text-[#fcbb02] rounded-lg w-24 ">
                                <li className="hover:text-white">
                                    <button onClick={handleLogout} className="">Logout</button>    
                                </li>
                            </ul>
                        </div>
                        :
                        <div className="flex gap-4">
                            <Link to="/Login" className="flex flex-col lg:flex-row gap-2 lg:gap-0" >
                            <a className="btn bg-transparent text-[#fcbb02] border-3 border-[#fcbb02] text-base lg:text-base font-semibold hover:bg-[#9797974e]"> Login</a>
                            </Link>
                            <Link to="/Registration" className="flex flex-col lg:flex-row gap-2 lg:gap-0" >
                            <a className="btn bg-transparent text-[#fcbb02] border-3 border-[#fcbb02] text-base lg:text-base font-semibold hover:bg-[#9797974e]"> Registration</a>
                            </Link>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;