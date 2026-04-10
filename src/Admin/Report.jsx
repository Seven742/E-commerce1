import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Legend,
    Area
} from "recharts";
import { useState } from 'react';
import Items from '../data/Items.js';

const initialData = [
    { name: "Jan", thisYear: 42000, lastYear: 38000 },
    { name: "Feb", thisYear: 53000, lastYear: 45000 },
    { name: "Mar", thisYear: 49000, lastYear: 47000 },
    { name: "Apr", thisYear: 61000, lastYear: 56000 },
    { name: "May", thisYear: 72000, lastYear: 65000 },
    { name: "Jun", thisYear: 69000, lastYear: 63000 },
    { name: "Jul", thisYear: 74000, lastYear: 68000 },
    { name: "Aug", thisYear: 82000, lastYear: 70000 },
    { name: "Sep", thisYear: 78000, lastYear: 69000 },
    { name: "Oct", thisYear: 86000, lastYear: 75000 },
    { name: "Nov", thisYear: 91000, lastYear: 80000 },
    { name: "Dec", thisYear: 97000, lastYear: 84000 }
];

const Report = () => {

    const [data, setData] = useState(initialData);
    const [showThisYearOnly, setShowThisYearOnly] = useState(false);

    const randomizeData = () => {
        const newData = data.map(item => ({
            ...item,
            thisYear: Math.floor(Math.random() * 60000 + 40000),
            lastYear: Math.floor(Math.random() * 60000 + 35000)
        }));
        setData(newData);
    };

    const TopProducts = Items.sort((a, b) => b.sold - a.sold).slice(0, 5);

    return (
        <div>
            <div className='pb-4'>
                <h1 className='text-3xl font-medium'>Reports</h1>
                <p className='text-md'>View your inventory analytics and reports</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>

                <div className='bg-gray-800 text-white p-6 rounded-lg shadow-lg flex justify-between items-start'>
                    <div>
                        <h1 className='text-sm'>Total Revenue</h1>
                        <h1 className='text-2xl font-medium'>$ 45,231</h1>
                        <p className='text-green-500 text-sm mt-1'>
                            +5% since last month
                        </p>
                    </div>

                </div>

                <div className='bg-gray-800 text-white p-6 rounded-lg gap-16 shadow-lg flex justify-between items-start'>
                    <div>
                        <h1 className='text-sm'>Products Sold</h1>
                        <h1 className='text-2xl font-medium'>1,234</h1>
                        <p className='text-green-500 text-sm mt-1'>
                            +22% since last month
                        </p>

                    </div>

                </div>

                <div className='bg-gray-800 text-white p-6 rounded-lg gap-16 shadow-lg flex justify-between items-start'>
                    <div>
                        <h1 className='text-sm'>Low Stock Items</h1>
                        <h1 className='text-2xl font-medium'>25</h1>
                        <p className='text-red-500 text-sm mt-1'>
                            +10% since last month
                        </p>
                    </div>

                </div>

                <div className='bg-gray-800 text-white p-6 rounded-lg gap-16 shadow-lg flex justify-between items-start'>
                    <div>
                        <h1 className='text-sm'>Out of Stock</h1>
                        <h1 className='text-2xl font-medium'>7</h1>
                        <p className='text-red-500 text-sm mt-1'>
                            +18% since last month
                        </p>
                    </div>

                </div>
            </div>

            <div className="bg-white shadow rounded-xl p-6 mt-5">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Sales Overview</h2>

                    <div className="flex gap-3">
                        <button
                            onClick={randomizeData}
                            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                        >
                            Randomize Data
                        </button>

                        <button
                            onClick={() => setShowThisYearOnly(!showThisYearOnly)}
                            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                        >
                            {showThisYearOnly ? "Show Both" : "Show This Year Only"}
                        </button>
                    </div>
                </div>

                {/* Chart */}
                <div className="w-full h-[400px]">
                    <ResponsiveContainer>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="name" />
                            <YAxis />

                            <Tooltip />
                            <Legend />

                            {/* Gradient area */}
                            <Area
                                type="monotone"
                                dataKey="thisYear"
                                stroke="#f97316"
                                fill="#f97316"
                                fillOpacity={0.1}
                            />

                            <Line
                                type="monotone"
                                dataKey="thisYear"
                                stroke="#f97316"
                                strokeWidth={3}
                                dot={{ r: 4 }}
                            />

                            {!showThisYearOnly && (
                                <>
                                    <Area
                                        type="monotone"
                                        dataKey="lastYear"
                                        stroke="#16a34a"
                                        fill="#16a34a"
                                        fillOpacity={0.1}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="lastYear"
                                        stroke="#16a34a"
                                        strokeWidth={3}
                                        dot={{ r: 4 }}
                                    />
                                </>
                            )}
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Footer */}
                <div className="text-right mt-4">
                    <button className="text-gray-500 hover:underline">
                        View detailed report
                    </button>
                </div>
            </div>

            {/* Top Products */}
            <div className="bg-white shadow rounded-xl p-6 mt-5">
                <h2 className="text-xl font-semibold mb-6">Top Products</h2>
                {/* Top products content would go here */}
                {
                    TopProducts.map((product, index) => (
                        <div key={index} className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-4">
                                <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                                <div>
                                    <h3 className="text-md font-medium">{product.title}</h3>
                                    <p className="text-sm text-gray-500">120 sold</p>
                                </div>
                            </div>
                            <p className="text-md font-medium">${product.price}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Report
