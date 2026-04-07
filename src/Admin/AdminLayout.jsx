import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import LogoKS from '../assets/LogoKS.png'
import User from '../assets/User.png'
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdDashboardCustomize, MdCategory } from "react-icons/md";
import { BsBox } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { BiSolidReport } from "react-icons/bi";
import { LuPanelLeftClose } from "react-icons/lu";
import { useState } from 'react';
import { IoLogOutOutline } from "react-icons/io5";
import '../App.css';
import { MdPersonAddAlt1 } from "react-icons/md";

// https://themewagon.github.io/inapp/inventory.html


const AdminLayout = () => {

    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleLogout = () => {
        localStorage.removeItem("admin");
        navigate("/admin/login");
    };
    return (
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar */}
            <div className="bg-gray-800 text-white sticky top-0 h-screen overflow-y-auto no-scrollbar" style={{ width: isSidebarOpen ? "250px" : "80px", transition: "width 0.3s" }}>
                <div className='border-b-2 border-gray-700'>
                    <div className='flex items-center ml-7 h-[72px]'>
                        <img className='h-8 w-8 rounded-full' src={LogoKS} alt="" />
                        {isSidebarOpen && <h1 className='ml-3 text-lg font-medium'>E-commerce</h1>}
                    </div>

                </div>
                <div >
                    <ul>
                        <h1 className='ml-8 py-2 text-sm'> {isSidebarOpen && "Main"}</h1>
                        <NavLink to="/admin" end>
                            {/* ប្រើ end ជាញឹកញាប់សម្រាប់ main navigation menu ដើម្បី active link ត្រឹមត្រូវ */}
                            {({ isActive }) => (
                                <li className={`px-8 flex items-center gap-3 h-12 cursor-pointer 
                             ${isActive ? "bg-gray-900 " : "hover:bg-gray-900"}
                             `}>
                                    <MdDashboardCustomize className='text-lg' />
                                    {isSidebarOpen && "Dashboard"}
                                </li>
                            )}
                        </NavLink>
                        <NavLink to="/admin/Products">
                            {({ isActive }) => (
                                <li className={`px-8 flex items-center h-12 gap-3 cursor-pointer 
                             ${isActive ? "bg-gray-900 " : "hover:bg-gray-900"}
                             `}>
                                    <BsBox className='text-lg' />
                                    {isSidebarOpen && "Products"}
                                </li>
                            )}
                        </NavLink>
                        <NavLink to="/admin/Orders">
                            {({ isActive }) => (
                                <li className={`px-8 flex items-center h-12 gap-3 cursor-pointer 
                             ${isActive ? "bg-gray-900 " : "hover:bg-gray-900"}
                             `}>
                                    <IoCartOutline className='text-lg' />
                                    {isSidebarOpen && "Orders"}
                                </li>
                            )}
                        </NavLink>
                        <NavLink to="/admin/Reports">
                            {({ isActive }) => (
                                <li className={`px-8 flex items-center h-12 gap-3 cursor-pointer 
                             ${isActive ? "bg-gray-900 " : "hover:bg-gray-900"}
                             `}>
                                    <BiSolidReport className='text-lg' />
                                    {isSidebarOpen && "Reports"}
                                </li>
                            )}
                        </NavLink>
                        <h1 className='ml-8 py-2 text-sm mt-5'>{isSidebarOpen && "Account"}</h1>
                        <NavLink to="/admin/login" onClick={handleLogout}>
                            <li className={`px-8 flex items-center h-12 gap-3 cursor-pointer hover:bg-gray-900`}>
                                <IoLogOutOutline className='text-lg text-white' />
                                {isSidebarOpen && "Logout"}
                            </li>
                        </NavLink>
                        <NavLink to="/admin/login" onClick={handleLogout}>
                            <li className={`px-8 flex items-center h-12 gap-3 cursor-pointer hover:bg-gray-900`}>
                                <MdPersonAddAlt1 className='text-lg text-white' />
                                {isSidebarOpen && "Sign Up"}
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col flex-1 h-screen overflow-hidden" style={{ transition: "all 0.3s ease-in-out" }}>

                {/* Top Navbar */}
                <div className='sticky top-0 bg-gray-900 text-white flex justify-between items-center px-3 py-4 z-40 shadow-md'>

                    {/* Search */}
                    <button className="relative cursor-pointer hover:bg-gray-600 bg-gray-700 flex items-center rounded-lg px-2 py-2" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <LuPanelLeftClose className="text-white text-lg" />
                    </button>

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
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 bg-gray-100 flex-1 overflow-y-auto hide-scrollbar">
                    <Outlet />
                </div>

            </div>

        </div>
    )
}

export default AdminLayout