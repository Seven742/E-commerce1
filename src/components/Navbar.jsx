import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi"
import { MdFavoriteBorder, MdOutlineNavigateNext } from "react-icons/md"
import { IoMdSearch, IoIosLaptop } from "react-icons/io"
import LogoKS from '../assets/LogoKS.png'
import { FiWatch } from "react-icons/fi";
import { ImHeadphones } from "react-icons/im";
import { GiSmartphone } from "react-icons/gi";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaTabletAlt } from "react-icons/fa";
import Poster from '../assets/Poster.png'
import { GrFormNextLink } from "react-icons/gr";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [shop, setShop] = useState(false);
    const [categories, setCategories] = useState(false);
    const [find, setFind] = useState(false);
    const [page, setpage] = useState(false);

    const handlpage = () => {
        setShop(false)
        setCategories(false)
        setFind(false)
        setpage(true)
    }

    const handleShop = () => {
        setShop(true)
        setCategories(false)
        setFind(false)
        setpage(false)
    }

    const handleCategories = () => {
        setCategories(true)
        setShop(false)
        setFind(false)
        setpage(false)
    }

    const handlfind = () => {
        setShop(false)
        setCategories(false)
        setFind(true)
        setpage(false)
    }
    return (
        <div>
            <div className="grid grid-cols-[auto_1fr_auto] text-gray-600 items-center px-20 py-1 fixed top-0 left-0 w-full z-50 bg-white shadow-md">

                {/* Logo (LEFT) */}
                <h1 className="text-xl font-bold pr-9">
                    <img className='w-20 h-20 bg-cover' src={LogoKS} alt="" />
                </h1>
                <div></div>

                {/* RIGHT SIDE: Menu + Search + Icons */}
                <div className="flex items-center gap-8">

                    {/* Menu */}
                    <ul className="flex items-center gap-6 font-medium">

                        <li><Link to="/">Home</Link></li>


                        <div>
                            <button onMouseEnter={handleShop}> <li><Link to="/shop">Shop</Link></li></button>

                            {shop && (
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 bg-white rounded-3xl shadow-2xl py-4 px-5 z-50"
                                    onMouseLeave={() => setShop(false)}
                                >
                                    <div className="flex gap-4">

                                        {/* Card 1 */}
                                        <div className="bg-white gap-3 w-52 p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300">
                                            <h1 className='text-lg font-bold'>Shop by Brand</h1>

                                            <div className='flex flex-col justify-start gap-2'>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <MdOutlineNavigateNext className="text-xl group-hover:scale-125 transition-transform  text-gray-500 group-hover:text-blue-600 " />
                                                    <p className="text-gray-800">Apple</p>
                                                </a>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <MdOutlineNavigateNext className="text-xl text-gray-500 group-hover:text-blue-600 transition-transform group-hover:scale-125" />
                                                    <p className="text-gray-800">Sony</p>
                                                </a>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <MdOutlineNavigateNext className="text-xl text-gray-500 group-hover:text-blue-600 transition-transform group-hover:scale-125" />
                                                    <p className="text-gray-800">Samsung</p>
                                                </a>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <MdOutlineNavigateNext className="text-xl text-gray-500 group-hover:text-blue-600 transition-transform group-hover:scale-125" />
                                                    <p className="text-gray-800">Conon</p>
                                                </a>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <MdOutlineNavigateNext className="text-xl text-gray-500 group-hover:text-blue-600 transition-transform group-hover:scale-125" />
                                                    <p className="text-gray-800">Huawei</p>
                                                </a>
                                            </div>
                                        </div>

                                        {/* Card 2 */}
                                        <div className="bg-white gap-3 w-52 p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300">
                                            <h1 className='text-lg font-bold'>Shop by Price</h1>

                                            <div className='flex flex-col justify-start gap-2'>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <p className="text-gray-800">Under $50</p>
                                                </a>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <p className="text-gray-800">$50 - $100</p>
                                                </a>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <p className="text-gray-800">$100 - $200</p>
                                                </a>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <p className="text-gray-800">$200 - $500</p>
                                                </a>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <p className="text-gray-800">Over $500</p>
                                                </a>
                                            </div>
                                        </div>

                                        {/* Card 3 */}
                                        <div className="bg-white gap-3 w-52 p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300">
                                            <h1 className='text-lg font-bold'>Categories</h1>

                                            <div className='flex flex-col justify-start gap-2'>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <MdOutlineNavigateNext className="text-xl text-gray-500 group-hover:text-blue-600 transition-transform group-hover:scale-125" />
                                                    <p className="text-gray-800">Head Phones</p>
                                                </a>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <MdOutlineNavigateNext className="text-xl text-gray-500 group-hover:text-blue-600 transition-transform group-hover:scale-125" />
                                                    <p className="text-gray-800">Smart Phones</p>
                                                </a>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <MdOutlineNavigateNext className="text-xl text-gray-500 group-hover:text-blue-600 transition-transform group-hover:scale-125" />
                                                    <p className="text-gray-800">Laptops</p>
                                                </a>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <MdOutlineNavigateNext className="text-xl text-gray-500 group-hover:text-blue-600 transition-transform group-hover:scale-125" />
                                                    <p className="text-gray-800">Smart Watches</p>
                                                </a>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <MdOutlineNavigateNext className="text-xl text-gray-500 group-hover:text-blue-600 transition-transform group-hover:scale-125" />
                                                    <p className="text-gray-800">Tablets</p>
                                                </a>
                                            </div>
                                        </div>

                                        {/* Card 4 */}
                                        <div className="bg-white gap-3 w-52 p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300">
                                            <h1 className='text-lg font-bold'>Shop by Color</h1>

                                            <div className='flex flex-col justify-start gap-2'>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <div className='h-5 group-hover:scale-125 transition-transform duration-300 w-5 bg-black rounded-full'></div>
                                                    {/* group-hover:scale-125 use this for make hover bigger 
                                                    transition-transform use this for enables smooth animation
                                                    duration-300 use this for animation speed (300ms) */}
                                                    <p className="text-gray-800">Black</p>
                                                </a>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <div className='h-5 group-hover:scale-125 transition-transform duration-300 w-5 bg-stone-400 rounded-full'></div>
                                                    <p className="text-gray-800">Silver</p>
                                                </a>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <div className='h-5 group-hover:scale-125 transition-transform duration-300 w-5 border-2 bg-white rounded-full'></div>
                                                    <p className="text-gray-800">White</p>
                                                </a>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <div className='h-5 group-hover:scale-125 transition-transform duration-300 w-5 bg-red-600 rounded-full'></div>
                                                    <p className="text-gray-800">Red</p>
                                                </a>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <div className='h-5 group-hover:scale-125 transition-transform duration-300 w-5 bg-blue-600 rounded-full'></div>
                                                    <p className="text-gray-800">Blue</p>
                                                </a>
                                            </div>
                                        </div>

                                        {/* Card 5 */}
                                        <div className="bg-white gap-3 w-52 p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300">
                                            <h1 className='text-lg font-bold'>Shop by Brand</h1>

                                            <div className='flex flex-col justify-start gap-2'>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <MdOutlineNavigateNext className="text-xl text-gray-500 group-hover:text-blue-600 transition-transform group-hover:scale-125" />
                                                    <p className="text-gray-800">Her</p>
                                                </a>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <MdOutlineNavigateNext className="text-xl text-gray-500 group-hover:text-blue-600 transition-transform group-hover:scale-125" />
                                                    <p className="text-gray-800">Him</p>
                                                </a>
                                                <a href="#" className="flex items-center gap-3 group">
                                                    <MdOutlineNavigateNext className="text-xl text-gray-500 group-hover:text-blue-600 transition-transform group-hover:scale-125" />
                                                    <p className="text-gray-800">Gift</p>
                                                </a>
                                            </div>
                                        </div>

                                        {/* Card 6 */}
                                        <div className="bg-white w-52 p-6 rounded-2xl flex flex-col items-center text-center  transition-all duration-300">
                                            <img src={Poster} alt="" className='rounded-lg' />
                                        </div>

                                    </div>
                                </div>
                            )}
                        </div>



                        <div>
                            <button onMouseEnter={handleCategories}><li><Link >Categories</Link></li></button>

                            {categories && (
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 bg-white rounded-3xl shadow-2xl py-4 px-5 z-50"
                                    onMouseLeave={() => setCategories(false)}
                                >
                                    <div className="flex gap-4">

                                        {/* Card 1 */}
                                        <div className="bg-white border border-gray-100 w-52 p-6 rounded-2xl flex flex-col items-center text-center hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                                            <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-2xl mb-4 hover:scale-110 transition-transform">
                                                <FiWatch className="text-6xl text-blue-600" />
                                            </div>
                                            <h3 className="font-semibold text-gray-800 text-lg mb-1">Smart Watch</h3>
                                            <p className="text-gray-500 text-sm mb-5">Premium fitness & style</p>
                                            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-8 py-3 rounded-full transition-all w-full">
                                                Explore Now
                                            </button>
                                        </div>

                                        {/* Card 2 */}
                                        <div className="bg-white border border-gray-100 w-52 p-6 rounded-2xl flex flex-col items-center text-center hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                                            <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-2xl mb-4 hover:scale-110 transition-transform">
                                                <ImHeadphones className="text-6xl text-blue-600" />
                                            </div>
                                            <h3 className="font-semibold text-gray-800 text-lg mb-1">HeadPhones</h3>
                                            <p className="text-gray-500 text-sm mb-5">Premium fitness & style</p>
                                            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-8 py-3 rounded-full transition-all w-full">
                                                Explore Now
                                            </button>
                                        </div>

                                        {/* Card 3 */}
                                        <div className="bg-white border border-gray-100 w-52 p-6 rounded-2xl flex flex-col items-center text-center hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                                            <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-2xl mb-4 hover:scale-110 transition-transform">
                                                <GiSmartphone className="text-6xl text-blue-600" />
                                            </div>
                                            <h3 className="font-semibold text-gray-800 text-lg mb-1">Smart Phones</h3>
                                            <p className="text-gray-500 text-sm mb-5">Premium fitness & style</p>
                                            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-8 py-3 rounded-full transition-all w-full">
                                                Explore Now
                                            </button>
                                        </div>

                                        {/* Card 4 */}
                                        <div className="bg-white border border-gray-100 w-52 p-6 rounded-2xl flex flex-col items-center text-center hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                                            <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-2xl mb-4 hover:scale-110 transition-transform">
                                                <IoIosLaptop className="text-6xl text-blue-600" />
                                            </div>
                                            <h3 className="font-semibold text-gray-800 text-lg mb-1">laptops</h3>
                                            <p className="text-gray-500 text-sm mb-5">Premium fitness & style</p>
                                            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-8 py-3 rounded-full transition-all w-full">
                                                Explore Now
                                            </button>
                                        </div>

                                        {/* Card 5 */}
                                        <div className="bg-white border border-gray-100 w-52 p-6 rounded-2xl flex flex-col items-center text-center hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                                            <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-2xl mb-4 hover:scale-110 transition-transform">
                                                <IoGameControllerOutline className="text-6xl text-blue-600" />
                                            </div>
                                            <h3 className="font-semibold text-gray-800 text-lg mb-1">Gaming Console</h3>
                                            <p className="text-gray-500 text-sm mb-5">Premium fitness & style</p>
                                            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-8 py-3 rounded-full transition-all w-full">
                                                Explore Now
                                            </button>
                                        </div>

                                        {/* Card 6 */}
                                        <div className="bg-white border border-gray-100 w-52 p-6 rounded-2xl flex flex-col items-center text-center hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                                            <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-2xl mb-4 hover:scale-110 transition-transform">
                                                <FaTabletAlt className="text-6xl text-blue-600" />
                                            </div>
                                            <h3 className="font-semibold text-gray-800 text-lg mb-1">Tablets</h3>
                                            <p className="text-gray-500 text-sm mb-5">Premium fitness & style</p>
                                            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-8 py-3 rounded-full transition-all w-full">
                                                Explore Now
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Categories Dropdown */}
                        <li className="relative group lg:hidden">

                            {/* Button */}
                            <button
                                onClick={() => setOpen(!open)}
                                className="flex items-center gap-1"
                            >
                                ...
                            </button>

                            {/* Dropdown */}
                            <div
                                className={`
            absolute left-0 mt-2 w-44 bg-white shadow-lg rounded
            transition-all duration-300
            lg:opacity-0 lg:invisible lg:translate-y-2
            lg:group-hover:opacity-100 
            lg:group-hover:visible 
            lg:group-hover:translate-y-0

            ${open ? "opacity-100 visible translate-y-0"
                                        : "opacity-0 invisible -translate-y-2"}

            lg:block
          `}
                            >
                                <Link className="block px-4 py-2 hover:bg-gray-100">
                                    Quick find
                                </Link>
                                <Link className="block px-4 py-2 hover:bg-gray-100">
                                    Pages
                                </Link>
                            </div>

                        </li>

                        <div>
                            <button onMouseEnter={handlfind}><li><Link >Quick find </Link></li></button>

                            {find && (
                                <div
                                    className="absolute  top-full mt-2 bg-white rounded-3xl shadow-2xl py-4 px-5 z-50"
                                    onMouseLeave={() => setFind(false)}
                                >
                                    <div className="flex gap-4">

                                        {/* Card 1 */}
                                        <div className="bg-white p-1 w-40 rounded-2xl flex flex-col items-start text-center transition-all duration-300">
                                            <h1 className='text-xl font-bold'>Categories</h1>

                                            <ul className='flex flex-col gap-1 items-start mt-3'>
                                                <li className='text-md transition-all duration-300 hover:translate-x-2 hover:text-blue-600'><a href="">Smart Watches</a></li>
                                                <li className='text-md transition-all duration-300 hover:translate-x-2 hover:text-blue-600'><a href="">Smart Phones</a></li>
                                                <li className='text-md transition-all duration-300 hover:translate-x-2 hover:text-blue-600'><a href="">Tablets</a></li>
                                                <li className='text-md transition-all duration-300 hover:translate-x-2 hover:text-blue-600'><a href="">HeandPhones</a></li>
                                                <li className='text-md transition-all duration-300 hover:translate-x-2 hover:text-blue-600'><a href="">Custom</a></li>
                                                <li className='text-md transition-all duration-300 hover:translate-x-2 hover:text-blue-600'><a href="">More</a></li>
                                            </ul>
                                        </div>

                                        <div class=" flex">
                                            <div class="w-[1px] bg-gray-200 h-full"></div>
                                        </div>
                                        {/* Card 2 */}
                                        <div className="bg-white p1 w-40 rounded-2xl flex flex-col items-start text-center transition-all duration-300">
                                            <h1 className='text-xl font-bold'>Tags</h1>

                                            <ul className='flex flex-col items-start gap-1 mt-3'>
                                                <li className='text-md transition-all duration-300 hover:translate-x-2 hover:text-blue-600'><a href="">5G</a></li>
                                                <li className='text-md transition-all duration-300 hover:translate-x-2 hover:text-blue-600'><a href="">Wifi</a></li>
                                                <li className='text-md transition-all duration-300 hover:translate-x-2 hover:text-blue-600'><a href="">Game</a></li>
                                                <li className='text-md transition-all duration-300 hover:translate-x-2 hover:text-blue-600'><a href="">Combo</a></li>
                                                <li className='text-md transition-all duration-300 hover:translate-x-2 hover:text-blue-600'><a href="">Silver</a></li>
                                                <li className='text-md transition-all duration-300 hover:translate-x-2 hover:text-blue-600'><a href="">White</a></li>
                                            </ul>
                                        </div>


                                    </div>
                                </div>
                            )}
                        </div>

                        <div>
                            <button onMouseEnter={handlpage}><li><Link >Quick find </Link></li></button>

                            {page && (
                                <div
                                    className="absolute  top-full mt-2 bg-white rounded-3xl shadow-2xl py-4 px-5 z-50"
                                    onMouseLeave={() => setpage(false)}
                                >
                                    <div className="flex gap-4">

                                        {/* Card 1 */}
                                        <div className="bg-white px-2 w-40 rounded-2xl flex flex-col items-start text-center   transition-all duration-300">
                                            <h1 className='text-xl font-bold'>Categories</h1>

                                            <ul className='flex flex-col gap-1 items-start mt-3'>
                                                <li className='text-md transition-all duration-300 hover:translate-x-2 hover:text-blue-600'><a href="">Blog</a></li>
                                                <li className='text-md transition-all duration-300 hover:translate-x-2 hover:text-blue-600'><a href="">About</a></li>
                                                <li className='text-md transition-all duration-300 hover:translate-x-2 hover:text-blue-600'><a href="">FAQ</a></li>
                                                <div className='flex items-center justify-between'>
                                                    <li className='text-md transition-all duration-300 hover:translate-x-2 hover:text-blue-600'><a href="">Dropdown</a></li>
                                                    <GrFormNextLink className='text-lg mt-1 ml-10' />
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </ul>

                    {/* Search */}
                    <div className="flex items-center px-5 py-3 bg-white rounded-3xl border">
                        <IoMdSearch className="text-xl text-gray-500 mr-2" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="ml-2 bg-transparent outline-none"
                        />
                    </div>

                    {/* Icons */}
                    <div className='flex items-center gap-2'>
                        <li className='list-none bg-gray-100 p-3 cursor-pointer rounded-full'><Link to="/oders">
                            <FiShoppingCart className="text-2xl " />
                        </Link>
                        </li>
                        <li className='list-none bg-gray-100 p-3 cursor-pointer rounded-full'><Link to="/favorite">
                            <MdFavoriteBorder className="text-2xl " />
                        </Link>
                        </li>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar