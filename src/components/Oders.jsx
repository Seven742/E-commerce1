import React from 'react'
import { MdHome, MdNavigateNext, MdFavoriteBorder } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi"
import { allitems } from "../data/Items";
import { MdOutlineFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';

const Oders = () => {
    const [favorites, setFavorites] = useState([]);


    const handleFavorite = (item) => {
        const exist = favorites.find(f => f.id === item.id);

        if (exist) {
            setFavorites(favorites.filter(f => f.id !== item.id));
        } else {
            setFavorites([...favorites, item]);
        }
    };
    return (
        <div>
            <div className="px-28 flex items-center relative">
                <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 transform -translate-y-1/2"></div>
                <div className="flex gap-3 items-center px-6 py-3 rounded-full border border-gray-200 bg-white/90 relative z-10 text-gray-500">
                    <MdHome /> <MdNavigateNext /> Cart
                </div>
            </div>

            <div className='flex flex-col justify-center items-center px-10 gap-5 py-10'>
                <FiShoppingCart className='text-[200px] text-gray-200' />
                <h1 className='text-3xl font-bold'>Looks like your cart is empty!</h1>
                <p className='text-black/60 text-lg'>Time to start your shopping</p>

            </div>

            <div className='border mx-24 rounded-3xl'>
                <h1 className='text-xl p-10'>You may be interested in ...
                    <div className='bg-gray-300 mt-3 h-[1px] w-full'></div>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-20 pb-10 pt-5">
                    {
                        allitems.slice(0, 4).map((item, index) => (
                            <div
                                key={item.id}
                                className="relative rounded-[40px] p-8 flex flex-col items-start border border-gray-300 hover:shadow-xl transition duration-300"
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
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="object-contain w-48 h-48"
                                    />
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
                        ))
                    }
                </div>
            </div>

            <div className='flex justify-center mt-14 mb-20'>
                <a href="/shop"><button className='bg-blue-600 text-white px-8 hover:bg-blue-900 font-bold rounded-full py-3'>Return to shop</button></a>
            </div>
        </div>
    )
}

export default Oders