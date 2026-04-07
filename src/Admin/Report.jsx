import React from 'react'

const Report = () => {
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
                        <h1 className='text-2xl font-medium'>$56,789</h1>
                    </div>

                </div>

                <div className='bg-gray-800 text-white p-6 rounded-lg gap-16 shadow-lg flex justify-between items-start'>
                    <div>
                        <h1 className='text-sm'>Total Orders</h1>
                        <h1 className='text-2xl font-medium'>1234</h1>
                    </div>

                </div>

                <div className='bg-gray-800 text-white p-6 rounded-lg gap-16 shadow-lg flex justify-between items-start'>
                    <div>
                        <h1 className='text-sm'>Total Products</h1>
                        <h1 className='text-2xl font-medium'>567</h1>
                    </div>

                </div>

                <div className='bg-gray-800 text-white p-6 rounded-lg gap-16 shadow-lg flex justify-between items-start'>
                    <div>
                        <h1 className='text-sm'>Total Customers</h1>
                        <h1 className='text-2xl font-medium'>4896</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Report
