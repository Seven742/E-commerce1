import React, { useState, useContext } from "react";
import { MdHome, MdNavigateNext, MdFavoriteBorder, MdArrowDropDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { allitems } from "../data/Items";
import { SearchContext } from "./SearchContext";

const Shop = () => {
    const [showCount, setShowCount] = useState(8);
    const { search } = useContext(SearchContext);

    const filteredItems = allitems.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div>
            <div className="px-28 flex items-center relative">
                <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 transform -translate-y-1/2"></div>
                <div className="flex gap-3 items-center px-6 py-3 rounded-full border border-gray-200 bg-white/90 relative z-10 text-gray-500">
                    <MdHome /> <MdNavigateNext /> Products
                </div>
            </div>
            <h1 className="px-28 mt-5 py-3 text-3xl text-blue-950 font-bold">Shop</h1>

            {/* Controls */}
            <div className="px-28 items-center py-3 flex justify-between">
                <div>
                    <p>Showing 1–{Math.min(showCount, allitems.length)} of {allitems.length} results</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <select
                            value={showCount}
                            onChange={(e) => setShowCount(Number(e.target.value))}
                            className="border rounded-full border-gray-300 px-7 py-3 focus:outline-none appearance-none"
                        >
                            <option value={8}>8 Products</option>
                            <option value={16}>16 Products</option>
                            <option value={32}>32 Products</option>
                            <option value={48}>48 Products</option>
                            <option value={64}>64 Products</option>
                            <option value={128}>128 Products</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                            <MdArrowDropDown className="text-gray-500" />
                        </div>
                    </div>
                    <div className="relative">
                        <select
                            className="border border-gray-300 rounded-full px-7 py-3 focus:outline-none appearance-none"
                            defaultValue="Default"
                        >
                            <option>Default</option>
                            <option>Popular</option>
                            <option>Top Rated</option>
                            <option>Relevance</option>
                            <option>Sort by latest</option>
                            <option>Sort by oldest</option>
                            <option>Price low to high</option>
                            <option>Price high to low</option>
                            <option>Highest Discount</option>
                            <option>Lowest Discount</option>
                            <option>Alphabetically, A-Z</option>
                            <option>Alphabetically, Z-A</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                            <MdArrowDropDown className="text-gray-500" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Product  */}
            <div className="grid justify-center grid-cols-1 py-10 cursor-pointer gap-11 px-28 sm:grid-cols-2 lg:grid-cols-4">
                {filteredItems.slice(0, showCount).map((item) => (
                    <div
                        key={item.id}
                        className="relative rounded-[40px] p-8 flex flex-col border border-gray-300 justify-between hover:shadow-xl transition duration-300"
                    >
                        <div className="absolute flex flex-col gap-2 top-6 right-6">
                            <div className="p-1 text-gray-500 transition bg-white border border-gray-200 rounded-full shadow-sm hover:bg-blue-600 hover:text-white">
                                <MdFavoriteBorder className="text-lg" />
                            </div>
                            <div className="p-1 text-gray-500 transition bg-white border border-gray-200 rounded-full shadow-sm hover:text-white hover:bg-blue-600">
                                <IoIosSearch className="text-lg" />
                            </div>
                        </div>

                        <div className="flex justify-center mb-3">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="object-contain w-48 h-48"
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold text-black">{item.title}</h1>
                            <p className="mt-1 text-gray-400">{item.subtile}</p>
                            <div className="flex mt-1 text-lg text-yellow-400">★★★★☆</div>
                            <h2 className="mt-2 text-xl">${item.price}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;
