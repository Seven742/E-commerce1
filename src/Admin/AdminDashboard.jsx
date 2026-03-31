import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import { FaInbox } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import Items from '../data/Items';
import { allitems as orders } from '../data/UserOrder';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts';

const AdminDashbord = () => {

    const totalRevenue = orders.reduce((total, order) => total + parseFloat(order.price.replace(/,/g, '')), 0);

    const data = [
        { name: "May", sales: 450 },
        { name: "Jun", sales: 600 },
        { name: "Jul", sales: 700 },
        { name: "Aug", sales: 650 },
        { name: "Sep", sales: 480 },
        { name: "Oct", sales: 520 },
        { name: "Nov", sales: 430 },
        { name: "Dec", sales: 750 },
    ];
    return (
        <div>
            <div className='flex gap-5 flex-wrap'>
                <div className='bg-gray-800 text-white p-6 rounded-lg shadow-lg flex gap-16 justify-between items-start'>
                    <div>
                        <h1 className='text-sm'>Total Revenue</h1>
                        <h1 className='text-xl font-medium'>$ {totalRevenue ? Number(totalRevenue).toFixed(2) : "0.00"}</h1>
                    </div>
                    <div className='bg-green-200 text-white px-2 py-2 rounded-lg'>
                        <h1 className='text-green-600'><BiDollar /></h1>
                    </div>
                </div>

                <div className='bg-gray-800 text-white p-6 rounded-lg gap-16 shadow-lg flex justify-between items-start'>
                    <div>
                        <h1 className='text-sm'>Total Orders</h1>
                        <h1 className='text-xl font-medium'>{orders.length}</h1>
                    </div>
                    <div className='bg-green-200 text-white px-2 py-2 rounded-lg'>
                        <h1 className='text-green-600'><IoCartOutline /></h1>
                    </div>
                </div>

                <div className='bg-gray-800 text-white p-6 rounded-lg gap-16 shadow-lg flex justify-between items-start'>
                    <div>
                        <h1 className='text-sm'>Total Products</h1>
                        <h1 className='text-xl font-medium'>{Items.length}</h1>
                    </div>
                    <div className='bg-green-200 text-white px-2 py-2 rounded-lg'>
                        <h1 className='text-green-600'><FaInbox /></h1>
                    </div>
                </div>

                <div className='bg-gray-800 text-white p-6 rounded-lg gap-16 shadow-lg flex justify-between items-start'>
                    <div>
                        <h1 className='text-sm'>Total Customers</h1>
                        <h1 className='text-xl font-medium'>129</h1>
                    </div>
                    <div className='bg-green-200 text-white px-2 py-2 rounded-lg'>
                        <h1 className='text-green-600'><FaUsers /></h1>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-xl font-medium mt-10 mb-5'>Sales Overview</h1>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="sales" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default AdminDashbord
