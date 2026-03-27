import React from 'react'
import { MdHome, MdNavigateNext, MdFavoriteBorder } from "react-icons/md";


const Favorite = () => {
    return (
        <div>
            <div className="px-28 flex items-center relative">
                <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 transform -translate-y-1/2"></div>
                <div className="flex gap-3 items-center px-6 py-3 rounded-full border border-gray-200 bg-white/90 relative z-10 text-gray-500">
                    <MdHome /> <MdNavigateNext /> Wishlist
                </div>
            </div>

            <div className='flex flex-col justify-center items-center px-10 gap-5 py-10'>
                <MdFavoriteBorder className='text-[200px] text-gray-200' />
                <h1 className='text-3xl font-bold'>Your wishlist is currently empty</h1>
                <p className='text-black/60 text-lg'>You don't have any products in the list yet, You will find a lot of interesting products on our </p>
                <a href="/shop"><button className='bg-blue-600 text-white px-6 hover:bg-blue-900 font-bold rounded-full py-2'>Return to shop</button></a>
            </div>
        </div>
    )
}

export default Favorite