import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import Image1 from "../assets/image1.png"
import Image2 from "../assets/image2.png"
import Image3 from "../assets/image3.png"
import { MdNavigateNext } from "react-icons/md";
import { FaPlay } from "react-icons/fa6";
import Item1 from "../assets/item1.png"
import Item2 from "../assets/item2.png"
import Item3 from "../assets/item3.png"
import Item4 from "../assets/item4.png"
import Item5 from "../assets/item5.png"
import banner2 from "../assets/Banner2.png"
import banner3 from "../assets/Banner3.png"
import { FiShoppingCart } from "react-icons/fi"
import { IoIosSearch } from "react-icons/io";
import poster from "../assets/Poster1.png"
import { TbPercentage } from "react-icons/tb";
import { allitems } from "../data/Items";
import { MdOutlineFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';
import slide5 from '../assets/slide5.png';
import { useContext } from "react";
import { SearchContext } from "./SearchContext";

const Homepage = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [favorites, setFavorites] = useState([]);
    const { search } = useContext(SearchContext);


    const handleFavorite = (item) => {
        const exist = favorites.find(f => f.id === item.id);

        if (exist) {
            setFavorites(favorites.filter(f => f.id !== item.id));
        } else {
            setFavorites([...favorites, item]);
        }
    };

    const filteredItems = allitems.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase())
    })


    const blogs = [
        {
            id: 1,
            title: "A Place of Silence",
            date: "10 June 2024",
            image: slide1
        },
        {
            id: 2,
            title: "How to create a Logo like a Pro",
            date: "10 June 2024",
            image: slide2
        },
        {
            id: 3,
            title: "Principles of Coldness",
            date: "10 June 2024",
            image: slide3
        },
        {
            id: 4,
            title: "Creative Design Thinking",
            date: "10 June 2024",
            image: slide4
        },
        {
            id: 5,
            title: "Minimalism in Modern UI",
            date: "10 June 2024",
            image: slide5
        }
    ];
    const visibleCards = 3;
    const totalSlides = blogs.length - visibleCards + 1;

    const items = [
        {
            id: 1,
            title: "Headphones",
            subtile: "Exclusive",
            image: Item1,
            path: "/shop",
        },
        {
            id: 2,
            title: "Smart Phones",
            subtile: "Exclusive",
            image: Item2,
            path: "/shop",
        },
        {
            id: 3,
            title: "Laptops",
            subtile: "Exclusive",
            image: Item3,
            path: "/shop",
        },
        {
            id: 4,
            title: "Smart Watches",
            subtile: "Exclusive",
            image: Item4,
            path: "/shop",
        },
        {
            id: 5,
            title: "Tablets",
            subtile: "Exclusive",
            image: Item5,
            path: "/shop",
        },
    ];


    const images = [
        Image1,
        Image2,
        Image3
    ]
    const [current, setCurrent] = useState(0)

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const navigate = useNavigate();
    return (
        <div>
            <div className='flex mx-20 px-20 bg-blue-950 rounded-[70px] h-[700px] text-white justify-center items-center'>
                <div className='flex flex-col gap-10'>
                    <h1 className='text-6xl font-bold'>Get <span className='text-blue-700'>Best Device</span> With Lowest Price.</h1>
                    <p className='text-lg pr-[160px]'>iPad is a line of tablet computers designed, developed and marketed by Apple Inc., which run the iOS and iPad OS mobile operating systems.  </p>
                    <div className='flex gap-14'>
                        <button className='flex items-center px-8 py-4 font-bold bg-blue-500 rounded-[100px] hover:bg-white hover:text-blue-950'>Explore Now <MdNavigateNext className='bg-black/15 rounded-[50%] text-3xl ml-5' /></button>
                        <button className="flex items-center group">
                            <div className="p-5 mr-5 transition bg-white rounded-full group-hover:bg-blue-600">
                                <FaPlay className="text-lg transition text-blue-950 group-hover:text-white" />
                            </div>
                            <span className="text-blue-500 transition group-hover:text-white">
                                Watch Promotion
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={Image1} alt="" />
                </div>
            </div>
            <div>
                <div className="grid justify-center grid-cols-1 grid-rows-1 gap-10 py-16 cursor-pointer px-20 sm:grid-cols-2 lg:grid-cols-5 ">
                    {items.map((item) => (
                        <div key={item.id} className="flex flex-col items-center">

                            {/* Circle background */}
                            <div className="flex items-center justify-center rounded-[50%] h-60 w-60 bg-blue-50">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="object-contain w-full rounded-[50%]"
                                />
                            </div>
                            {/* Label */}
                            <div onClick={() => navigate("/shop")}
                                className="px-10 font-bold py-4 transition-all hover:bg-blue-950 hover:text-white mt-[-20px] duration-300 ease-out bg-white rounded-full shadow hover:-translate-y-2 hover:shadow-lg">
                                <a href=""> {item.title}</a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className="flex gap-10 px-20">

                {/* LEFT CARD */}
                <div className="relative w-1/2 bg-blue-600 rounded-[40px] 
                  flex items-center px-16 py-20 
                  min-h-[480px] overflow-hidden">

                    {/* TEXT */}
                    <div className="z-10 max-w-sm text-white">
                        <p className="text-sm tracking-widest uppercase opacity-80">
                            TABLETS
                        </p>

                        <h1 className="mt-4 text-6xl font-bold leading-tight">
                            Apple <br /> iPad Air
                        </h1>

                        <p className="mt-6 max-w-xs text-[15px]  leading-7 text-white/80">
                            iPad is a line of tablet computers <br /> designed, developed and <br /> marketed by Apple Inc.,
                            which <br /> run the iOS br and iPad OS mobile <br /> operating systems.
                        </p>


                        <button className="flex items-center px-8 py-4 mt-10 font-semibold text-black transition bg-white rounded-full hover:bg-blue-950 hover:text-white">
                            Buy Now
                            <MdNavigateNext className="p-1 ml-4 text-2xl rounded-full bg-black/10" />
                        </button>
                    </div>

                    {/* IMAGE */}
                    <div className="absolute right-0 bottom-0 h-full w-[60%]">
                        <img
                            src={banner2}
                            alt="iPad"
                            className="object-contain w-full h-full drop-shadow-2xl"
                        />
                    </div>
                </div>


                {/* RIGHT CARD */}
                <div className="relative w-1/2 bg-blue-950 rounded-[40px] 
                  flex items-center px-16 py-20 
                  min-h-[480px] overflow-hidden">

                    {/* TEXT */}
                    <div className="z-10 max-w-sm text-white">
                        <p className="text-sm tracking-widest uppercase opacity-80">
                            SMART
                        </p>

                        <h1 className="mt-4 text-6xl font-bold leading-tight">
                            Apple <br /> Watch
                        </h1>

                        <p className="mt-6 leading-relaxed text-blue-200">
                            Apple Watch is a line of <br /> smartwatches produced by Apple <br /> Inc.
                            It incorporates fitness tracking <br /> and health-oriented capabilities.
                        </p>

                        <button className="flex items-center px-8 py-4 mt-10 font-semibold text-white transition bg-blue-600 rounded-full hover:bg-white hover:text-blue-950">
                            Buy Now
                            <MdNavigateNext className="p-1 ml-4 text-2xl rounded-full bg-black/20" />
                        </button>
                    </div>

                    {/* IMAGE */}
                    <div className="absolute right-0 bottom-0 h-full w-[60%]">
                        <img
                            src={banner3}
                            alt="Watch"
                            className="object-contain w-full h-full drop-shadow-2xl"
                        />
                    </div>
                </div>

            </div>
            {/* All items to sell */}
            <div className="grid justify-center grid-cols-1 py-16 cursor-pointer gap-11 px-32 sm:grid-cols-2 lg:grid-cols-4">
                {filteredItems.map((item) => (
                    <div
                        key={item.id}
                        className="relative rounded-[40px] p-8 flex flex-col border border-gray-300 justify-between hover:shadow-xl transition duration-300"
                    >
                        {/* Floating Icons */}
                        <div className="absolute flex flex-col gap-1 top-6 right-6">
                            <div onClick={() => handleFavorite(item)} className="p-1 text-gray-500 transition bg-white border border-gray-200 rounded-full shadow-sm hover:bg-blue-600 hover:text-white">
                                {favorites.some(f => f.id === item.id) ? (
                                    <MdOutlineFavorite className="text-lg text-red-500" />
                                ) : (
                                    <MdOutlineFavoriteBorder className="text-lg" />
                                )}
                            </div>
                            <div className="p-1 text-gray-500 transition bg-white border border-gray-200 rounded-full shadow-sm hover:text-white hover:bg-blue-600">
                                <IoIosSearch className="text-lg" />
                            </div>
                        </div>

                        {/* Image */}
                        <div className="flex justify-center mb-3">
                            <div className="relative group">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="object-contain w-48 h-48 transition duration-300 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 flex items-end mb-8 justify-center 
                                        opacity-0 group-hover:opacity-100 
                                         transition duration-300 rounded-lg">

                                    <button className="bg-blue-600 flex text-sm items-center gap-2 text-white px-5 py-2 rounded-full hover:bg-blue-800">
                                        <FiShoppingCart /> Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h1 className="text-xl font-semibold text-black">
                                {item.title}
                            </h1>

                            <p className="mt-1 text-gray-400">
                                {item.subtile}
                            </p>
                            {/* Stars (Static Example) */}
                            <div className="flex mt-1 text-lg text-yellow-400">
                                ★★★★☆
                            </div>
                            <h2 className="mt-2 text-xl ">
                                ${item.price}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
            {/* Button view all Product */}
            <div className='flex justify-center'>
                <button className="flex items-center justify-center px-8 py-5 font-semibold text-white transition bg-blue-500 rounded-full ">
                    Shop all Products
                    <MdNavigateNext className="p-1 ml-4 text-2xl rounded-full bg-black/20" />
                </button>
            </div>

            {/* Discount  */}
            <div className='flex justify-center gap-10 p-20 rounded-[50px] mt-14 mx-20 bg-sky-50'>
                <div>
                    <h5 className="inline-block px-3 py-1 text-sm font-semibold text-white rounded-md bg-blue-950">
                        DEAL OF THE DAY
                    </h5>

                    <h1 className='mt-10 text-5xl font-bold text-blue-950'>Get <span className='text-blue-600'> Virtual Reality</span>with </h1>
                    <h1 className='mt-5 text-5xl font-bold text-blue-950'>30% off.</h1>
                    <p className='mt-10 text-lg text-blue-950'>Virtual reality (VR) is a simulated experience that can be similar<br /> to or completely different from the real world. Applications of <br /> VR include  entertainment, education and business.  </p>
                    <div className='mt-10'>
                        <button className='flex items-center px-5 py-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-950'>
                            <div className='p-2 mr-5 text-xl text-blue-500 bg-white rounded-full'><TbPercentage /></div>
                            Get 30% OFF Now</button>
                    </div>
                </div>
                <div>
                    <img src={poster} alt="" />
                </div>
            </div>

            {/* Latest News */}
            <div className='flex items-center justify-between p-20'>
                <div>
                    <h1 className='text-4xl font-bold text-blue-600'><span className='text-blue-950'>Latest</span> News</h1>
                    <p className='mt-5 text-lg text-blue-950'>Get updated with the latest news of new technologies and gadgets  </p>
                </div>
                <div>
                    <button className='flex items-center border border-blue-600 border-solid px-6 py-4 font-bold  rounded-[100px] hover:bg-white hover:text-blue-950'>All News <MdNavigateNext className=' rounded-[50%] border text-blue-600 border-blue-600 text-3xl ml-5' /></button>
                </div>
            </div>


            <div className="px-16 pb-20">
                <div className="w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / 3)}%)`
                        }}
                    >
                        {blogs.map((blog) => (
                            <div key={blog.id} className="flex-shrink-0 w-1/3 px-4">
                                <div className="overflow-hidden rounded-3xl">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="object-cover w-full h-64"
                                    />
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-xl font-bold text-blue-950">
                                        {blog.title}
                                    </h2>
                                    <p className="text-sm text-blue-500">
                                        {blog.date}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center gap-3 mt-8">
                    {Array.from({ length: blogs.length - 3 + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition ${currentIndex === index
                                ? "bg-blue-600 scale-110"
                                : "bg-blue-300"
                                }`}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Homepage
