import React from 'react'
import UserOder from '../data/UserOrder'

const Orders
    = () => {
        return (
            <div>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-xl font-medium'>Status</h1>
                        <div className='flex items-center justify-center gap-4 mt-2'>
                            <h1 className='border hover:bg-gray-800 hover:text-white border-black px-3 py-1  rounded-md cursor-pointer'>All</h1>
                            <h1 className='border hover:bg-gray-800 hover:text-white border-black px-3 py-1 rounded-md cursor-pointer'>Pending</h1>
                            <h1 className='border hover:bg-gray-800 hover:text-white border-black px-3 py-1 rounded-md cursor-pointer'>Shipped</h1>
                            <h1 className='border hover:bg-gray-800 hover:text-white border-black px-3 py-1 rounded-md cursor-pointer'>Delivered</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-medium'>Date Range</h1>
                        <div className='flex items-center gap-4 mt-2'>
                            <select name="" id="" className=' px-3 py-1 rounded-md cursor-pointer outline-none'>
                                <option value="">Last 7 Days</option>
                                <option value="">Last 30 Days</option>
                                <option value="">Last 90 Days</option>
                            </select>
                            <h1 className='border py-1 hover:bg-gray-800 hover:text-white border-black px-3 rounded-md cursor-pointer'>All Month</h1>
                            <select name="" id="" className='bg-white px-3 py-1 rounded-md cursor-pointer outline-none'>
                                <option value="">More</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='p-6'>
                    <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
                        <table className='w-full text-sm text-left'>
                            <thead className='bg-gray-800 text-white'>
                                <tr>
                                    <th className='px-6 py-3'>OrderID</th>
                                    <th className='px-6 py-3'>Customer</th>
                                    <th className='px-6 py-3'>Product</th>
                                    <th className='px-6 py-3'>Total</th>
                                    <th className='px-6 py-3'>Status</th>
                                    <th className='px-6 py-3 text-center'>Date</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y'>
                                {UserOder.map((item) => (
                                    <tr key={item.id} className='hover:bg-gray-100 transition'>
                                        <td className='px-6 py-4'>{item.OrderID}</td>
                                        <td className='px-6 py-4'>{item.CustomerName}</td>
                                        <td className='px-6 py-4'>{item.Product}</td>
                                        <td className='px-6 py-4 font-medium'>${item.price}</td>
                                        <td className='px-6 py-4 '>
                                            <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs'>
                                                Delivered
                                            </span>
                                        </td>
                                        <td className='px-6 py-4 text-center'>
                                            {item.Date}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

export default Orders
