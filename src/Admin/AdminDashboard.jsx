import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import { FaInbox } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import Items from '../data/Items';
import { allitems as orders } from '../data/UserOrder';
import { allitems } from '../data/Items';
import { IoTodayOutline } from "react-icons/io5";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from 'recharts';

const AdminDashbord = () => {


    const totalRevenue = orders.reduce((total, order) => total + parseFloat(order.price.replace(/,/g, '')), 0);

    const data = [
        { name: "May", sales: 350 },
        { name: "Jun", sales: 600 },
        { name: "Jul", sales: 700 },
        { name: "Aug", sales: 650 },
        { name: "Sep", sales: 480 },
        { name: "Oct", sales: 520 },
        { name: "Nov", sales: 430 },
        { name: "Dec", sales: 950 },
    ];

    const pieData = [
        { name: 'First Time', value: 55 },
        { name: 'Return', value: 35 },
        { name: 'Others', value: 10 },
    ];
    const pieColors = ['#10b981', '#f59e0b', '#60a5fa'];

    const TopSellingProducts = allitems.filter(item => item.subtile === "Exclusive" || item.subtile === "Gaming").slice(0, 5); // Get top 5 exclusive products

    const LowStockProducts = allitems.filter(item => item.percent >= 20).slice(0, 5); // Get top 5 low stock products

    const RecentSales = allitems.filter(item => item.percent >= 15).slice(0, 5); // Get top 5 recent sales products


    return (
        <div>
            {/* Stats Section  */}
            <div className='pb-4'>
                <h1 className='text-3xl font-medium'>Dashboard</h1>
                <p className='text-md'>Your main content goes here…</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>

                <div className='bg-gray-800 text-white p-6 rounded-lg shadow-lg flex justify-between items-start'>
                    <div>
                        <h1 className='text-sm'>Total Revenue</h1>
                        <h1 className='text-2xl font-medium'>$ {totalRevenue ? Number(totalRevenue).toFixed(2) : "0.00"}</h1>
                    </div>
                    <div className='bg-green-200 text-white px-2 py-2 rounded-lg'>
                        <h1 className='text-green-600'><BiDollar /></h1>
                    </div>
                </div>

                <div className='bg-gray-800 text-white p-6 rounded-lg gap-16 shadow-lg flex justify-between items-start'>
                    <div>
                        <h1 className='text-sm'>Total Orders</h1>
                        <h1 className='text-2xl font-medium'>{orders.length}</h1>
                    </div>
                    <div className='bg-green-200 text-white px-2 py-2 rounded-lg'>
                        <h1 className='text-green-600'><IoCartOutline /></h1>
                    </div>
                </div>

                <div className='bg-gray-800 text-white p-6 rounded-lg gap-16 shadow-lg flex justify-between items-start'>
                    <div>
                        <h1 className='text-sm'>Total Products</h1>
                        <h1 className='text-2xl font-medium'>{Items.length}</h1>
                    </div>
                    <div className='bg-green-200 text-white px-2 py-2 rounded-lg'>
                        <h1 className='text-green-600'><FaInbox /></h1>
                    </div>
                </div>

                <div className='bg-gray-800 text-white p-6 rounded-lg gap-16 shadow-lg flex justify-between items-start'>
                    <div>
                        <h1 className='text-sm'>Total Customers</h1>
                        <h1 className='text-2xl font-medium'>4896</h1>
                    </div>
                    <div className='bg-green-200 text-white px-2 py-2 rounded-lg'>
                        <h1 className='text-green-600'><FaUsers /></h1>
                    </div>
                </div>
            </div>

            {/* Chart Section */}
            <div className='flex flex-wrap gap-4 mt-5 w-full'>
                <div className='flex-1 min-w-[320px] lg:w-3/5 border rounded-lg bg-white p-5 shadow '>
                    <div className='flex justify-between items-center border-b-2'>
                        <h1 className='text-xl font-medium mb-5'>Sales Overview</h1>
                        <select name="" id="" className='border-2 outline-none px-3 py-1 rounded-lg text-sm mb-5 cursor-pointer'>
                            <option name="" id="">This Year</option>
                            <option name="" id="">This Month</option>
                            <option name="" id="">This Week</option>
                        </select>
                    </div>
                    <ResponsiveContainer width="100%" height={300} className='mt-3'>
                        <BarChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="sales" fill="#cf5c0a" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className='flex-1 min-w-[320px] lg:w-2/5'>
                    <div className="bg-gray-100">
                        <div className="bg-white rounded-2xl shadow p-6">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold">Overall Information</h2>
                                <select className="border rounded-lg px-3 py-1 text-sm outline-none">
                                    <option>Last 6 Months</option>
                                    <option>This Month</option>
                                    <option>This Week</option>
                                </select>
                            </div>

                            {/* Main Section */}
                            <div className="flex flex-col lg:flex-row items-center justify-evenly">

                                {/* Circular Chart (Recharts Pie + Tooltip) */}
                                <div className="w-full max-w-[240px]">
                                    <ResponsiveContainer width="100%" height={220}>
                                        <PieChart>
                                            <Pie
                                                data={pieData}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={40}
                                                outerRadius={80}
                                                paddingAngle={4}
                                                dataKey="value"
                                                nameKey="name"
                                                label
                                            >
                                                {pieData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>

                                {/* Stats */}
                                <div className="flex gap-10 mt-6 lg:mt-0">
                                    <div>
                                        <h3 className="text-3xl font-bold">5.5K</h3>
                                        <p className="text-green-500">First Time</p>
                                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
                                            ↑ 25%
                                        </span>
                                    </div>
                                    <div className='bg-gray-300 w-[1px] h-20'></div>

                                    <div>
                                        <h3 className="text-3xl font-bold">3.5K</h3>
                                        <p className="text-yellow-500">Return</p>
                                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
                                            ↑ 21%
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Stats */}
                            <div className="flex justify-evenly items-center text-center mt-8 border-t pt-6">
                                <div>
                                    <h3 className="text-2xl font-bold">6987</h3>
                                    <p className="text-gray-500">Suppliers</p>
                                </div>
                                <div className='bg-gray-300 w-[1px] h-20'></div>
                                <div>
                                    <h3 className="text-2xl font-bold">4896</h3>
                                    <p className="text-gray-500">Customers</p>
                                </div>
                                <div className='bg-gray-300 w-[1px] h-20'></div>
                                <div>
                                    <h3 className="text-2xl font-bold">487</h3>
                                    <p className="text-gray-500">Orders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Selling Products */}
            <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-5'>
                <div className='p-7 border shadow rounded-lg bg-white'>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-medium'>Top Selling Products</h1>
                        <button className='border-[1px] border-gray-700 px-2 rounded-sm hover:bg-gray-600 hover:text-white flex items-center gap-1 text-xs'>
                            <IoTodayOutline /> Today
                        </button>
                    </div>

                    <div className='bg-gray-300 w-full h-[1px] my-5'></div>

                    <div>
                        {TopSellingProducts.map((item) => {

                            let color = "bg-red-600";

                            if (item.percent > 20) {
                                color = "bg-green-600";
                            } else if (item.percent > 15) {
                                color = "bg-yellow-500";
                            }

                            return (
                                <div key={item.id} className='flex items-center justify-between gap-4 mt-4'>

                                    <div className='flex items-center gap-3'>
                                        <img
                                            src={item.image}
                                            alt=""
                                            className='h-12 w-12 rounded-lg object-cover'
                                        />
                                        <div>
                                            <h1>{item.title}</h1>
                                            <p className='text-sm text-gray-500'>{item.subtitle}</p>
                                        </div>
                                    </div>

                                    <div className={`${color} px-2 py-1 rounded-md`}>
                                        <h1 className='text-xs text-white'>{item.percent}%</h1>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Low Stock Products */}
                <div className='p-7 border shadow rounded-lg bg-white'>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-medium'>Low Stock Products</h1>
                        <button className='underline text-blue-500 flex items-center gap-1 text-xs'>
                            View All
                        </button>
                    </div>
                    <div className='bg-gray-300 w-full h-[1px] my-5'></div>
                    <div>
                        <div>
                            {LowStockProducts.map((item) => (
                                <div key={item.id} className='flex items-center justify-between gap-4 mt-4'>
                                    <div className='flex items-center'>
                                        <img src={item.image} alt="" className='h-12 w-12 rounded-lg object-cover' />
                                        <div>
                                            <h1>{item.title}</h1>
                                            <p className='text-sm text-gray-500'>{item.subtile}</p>
                                        </div>
                                    </div>
                                    <div className='bg-red-600 px-2 py-1 rounded-md'>
                                        <h1 className='text-xs text-white'>{item.percent}%</h1>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>


                {/* Recent Sales */}
                <div className='p-7 border shadow rounded-lg bg-white'>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-medium'>Recent Sales</h1>
                        <button className='border-[1px] border-gray-700 px-2 rounded-sm hover:bg-gray-600 hover:text-white flex items-center gap-1 text-xs'>
                            <IoTodayOutline /> Week
                        </button>
                    </div>
                    <div className='bg-gray-300 w-full h-[1px] my-5'></div>
                    <div>
                        <div>
                            {RecentSales.map((item) => (
                                <div key={item.id} className='flex items-center justify-between gap-4 mt-4'>
                                    <div className='flex items-center'>
                                        <img src={item.image} alt="" className='h-12 w-12 rounded-lg object-cover' />
                                        <div>
                                            <h1>{item.title}</h1>
                                            <p className='text-sm text-gray-500'>{item.subtile}</p>
                                        </div>
                                    </div>
                                    <div className='bg-red-600 px-2 py-1 rounded-md'>
                                        <h1 className='text-xs text-white'>{item.percent}%</h1>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default AdminDashbord
