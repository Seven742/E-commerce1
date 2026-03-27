import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import LogoKS from '../assets/LogoKS.png'
import { IoMdSearch } from "react-icons/io";
import User from '../assets/User.png'
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdDashboardCustomize, MdCategory } from "react-icons/md";
import { BsBox } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { BiSolidReport } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";


const AdminLayout = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("admin");
        navigate("/admin/login");
    };
    return (
        <div className="flex min-h-screen">

            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white">
                <div className='flex items-center ml-7 py-4'>
                    <img className='h-10 w-10 rounded-full' src={LogoKS} alt="" />
                    <h1 className="ml-2 text-xl font-bold">E-Commerce</h1>
                </div>

                <div className=''>
                    <ul>
                        <NavLink to="/admin" end>
                            {/* ប្រើ end ជាញឹកញាប់សម្រាប់ main navigation menu ដើម្បី active link ត្រឹមត្រូវ */}
                            {({ isActive }) => (
                                <li className={`px-8 flex items-center gap-3 py-3 cursor-pointer 
                             ${isActive ? "bg-gray-900 " : "hover:bg-gray-900"}
                             `}>
                                    <MdDashboardCustomize className='text-lg' />
                                    Dashboard
                                </li>
                            )}
                        </NavLink>
                        <NavLink to="/admin/categories">
                            {({ isActive }) => (
                                <li className={`px-8 flex items-center gap-3 py-3 cursor-pointer 
                             ${isActive ? "bg-gray-900 " : "hover:bg-gray-900"}
                             `}>
                                    <MdCategory className='text-lg' />
                                    Categories
                                </li>
                            )}
                        </NavLink>
                        <NavLink to="/admin/Products">
                            {({ isActive }) => (
                                <li className={`px-8 flex items-center py-3 gap-3 cursor-pointer 
                             ${isActive ? "bg-gray-900 " : "hover:bg-gray-900"}
                             `}>
                                    <BsBox className='text-lg' />
                                    Products
                                </li>
                            )}
                        </NavLink>
                        <NavLink to="/admin/Orders">
                            {({ isActive }) => (
                                <li className={`px-8 flex items-center py-3 gap-3 cursor-pointer 
                             ${isActive ? "bg-gray-900 " : "hover:bg-gray-900"}
                             `}>
                                    <IoCartOutline className='text-lg' />
                                    Orders
                                </li>
                            )}
                        </NavLink>
                        <NavLink to="/admin/Reports">
                            {({ isActive }) => (
                                <li className={`px-8 flex items-center py-3 gap-3 cursor-pointer 
                             ${isActive ? "bg-gray-900 " : "hover:bg-gray-900"}
                             `}>
                                    <BiSolidReport className='text-lg' />
                                    Reports
                                </li>
                            )}
                        </NavLink>
                        <NavLink to="/admin/Users">
                            {({ isActive }) => (
                                <li className={`px-8 flex items-center py-3 gap-3 cursor-pointer 
                             ${isActive ? "bg-gray-900 " : "hover:bg-gray-900"}
                             `}>
                                    <IoSettings className='text-lg' />
                                    Setting
                                </li>
                            )}
                        </NavLink>
                    </ul>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col flex-1">

                {/* Top Navbar */}
                <div className='bg-gray-900 text-white flex justify-between items-center px-3 py-4'>

                    {/* Search */}
                    <div className="relative">
                        <IoMdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-3 py-2 rounded-xl text-black w-64 outline-none"
                        />
                    </div>

                    {/* Account */}
                    <div className='flex items-center gap-2'>
                        <div className='border rounded-full p-2 mr-3 group hover:bg-white cursor-pointer'>
                            <IoMdNotificationsOutline className='text-2xl group-hover:text-gray-900' />
                        </div>
                        <img src={User} alt="" className='h-10 w-10 rounded-full' />
                        <div>
                            <h1>Admin</h1>
                            <h1 className='text-xs'>Administrator</h1>
                        </div>
                        <div>
                            <button onClick={handleLogout} className='bg-red-600 hover:bg-red-700 flex items-center gap-2 rounded-xl px-5 py-2'>
                                <FaSignOutAlt />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 bg-gray-100 flex-1">
                    <Outlet />
                </div>

            </div>

        </div>
    )
}

export default AdminLayout