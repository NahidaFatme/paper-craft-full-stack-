import { FaHotel } from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosPaperPlane } from "react-icons/io";
import Lottie from "lottie-react";
import Grass from '../assets/Grass.json';
const Footer = () => {
    return (
        <div className="bg">
            <div className="mt-16 md:mt-24 lg:mt-0">
                    <Lottie animationData={Grass} />
            </div>
            <div className="relative pacifico bg-[#02413c] glass text-white">
            <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                <div className="md:max-w-md lg:col-span-2">
                    <a
                    href="/"
                    aria-label="Go home"
                    title="Company"
                    className="inline-flex items-center"
                    >
                    <IoIosPaperPlane className="text-3xl"/>
                    <span className="text-yellow-500 ml-2 text-xl font-bold tracking-wide text-black-100 uppercase">
                        Paper Craft
                    </span>
                    </a>
                    <div className="mt-4 lg:max-w-sm">
                    <p className="text-sm text-deep-purple-50">
                        Welcome to "PaperCraft Haven," your ultimate destination for exquisite paper art and craft supplies! Dive into a world of creativity where every fold, cut, and design tells a unique story. 
                    </p>
                    <p className="mt-4 text-sm text-deep-purple-50">
                        From elegant origami creations to intricately designed greeting cards and scrapbooks, our curated collection offers a diverse range of paper crafts to ignite your imagination
                    </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                    <div>
                    <p className="font-semibold tracking-wide text-teal-accent-400">
                        Category
                    </p>
                    <ul className="mt-2 space-y-2">
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Card Making
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Scrapbooking
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Paper Quilling & origami
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Glass Painting
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Lampworking
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Glass Dying & Staining
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div>
                    <p className="font-semibold tracking-wide text-teal-accent-400">
                        Contact
                    </p>
                    <ul className="mt-2 space-y-2">
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            +021468465

                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            papercraft@gmail.com
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div>
                    <p className="font-semibold tracking-wide text-teal-accent-400">
                        Delivery On
                    </p>
                    <ul className="mt-2 space-y-2">
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Dhaka
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Barishal
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Chottogram
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Shylhet
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Rajshahi
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div>
                    <p className="font-semibold tracking-wide text-teal-accent-400">
                        Social Links
                    </p>
                    <ul className="mt-2 space-y-2 text-4xl">
                        <li className="text-blue-400">
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            <FaFacebookSquare />
                        </a>
                        </li>
                        <li className="text-red-400">
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            <FaInstagramSquare />
                        </a>
                        </li>
                        <li className="text-blue-800">
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            <FaLinkedin />
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
                <p className="text-sm text-black-100">
                    © Copyright 2024 Paper Craft Inc. All rights reserved.
                </p>
                <div className="flex items-center mt-4 space-x-4 sm:mt-0 text-black">
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;