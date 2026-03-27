import React from 'react'

const Products = () => {
    return (
        <div>
            {/* Navbar */}
            <div className='flex justify-between'>
                <div>
                    <select className='cursor-pointer px-2 py-2 rounded-lg outline-none'>
                        <option value="apple">All Categories</option>
                        <option value="banana">Smart Phones</option>
                        <option value="orange">Smart Watches</option>
                        <option value="orange">Gaming Console</option>
                        <option value="orange">Laptop</option>
                        <option value="orange">Tablet</option>
                    </select>
                </div>
                <div>
                    <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg'>Add Product</button>
                </div>
            </div>
            {/* table Product */}
            <div className="p-6">
                <div className="bg-white shadow-lg rounded-xl overflow-hidden">

                    <table className="w-full text-sm text-left">

                        {/* Header */}
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="px-6 py-3">Product</th>
                                <th className="px-6 py-3">Category</th>
                                <th className="px-6 py-3">Price</th>
                                <th className="px-6 py-3">Stock</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3 text-center">Actions</th>
                            </tr>
                        </thead>

                        {/* Body */}
                        <tbody className="divide-y">

                            <tr className="hover:bg-gray-100 transition">
                                <td className="px-6 py-4 flex items-center gap-3">
                                    <img
                                        src="https://via.placeholder.com/40"
                                        className="w-10 h-10 rounded"
                                        alt=""
                                    />
                                    Phone
                                </td>

                                <td className="px-6 py-4">Smart Phones</td>
                                <td className="px-6 py-4 font-medium">$2</td>
                                <td className="px-6 py-4">50</td>

                                <td className="px-6 py-4">
                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                                        In Stock
                                    </span>
                                </td>

                                <td className="px-6 py-4 flex justify-center gap-2">
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs">
                                        Edit
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs">
                                        Delete
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Products
