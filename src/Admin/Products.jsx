import React from 'react'
import { createPortal } from 'react-dom'
import { useState } from 'react'
import { allitems } from '../data/Items'
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";

function Modal({ isOpen, children }) {
    if (!isOpen) return null
    return createPortal(
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-2">
            <div className="w-full max-w-lg bg-white rounded-xl shadow-lg overflow-visible">
                {children}
            </div>
        </div>,
        document.body
    )
}

const Products = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [category, setCategory] = useState('all');
    const [form, setForm] = useState({
        title: '',
        shortDescription: '',
        brief: '',
        price: '',
        discountPrice: '',
        category: '',
        stock: '',
        image: null,
    })

    const [imagePreview, setImagePreview] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleImage = (e) => {
        const file = e.target.files?.[0]
        if (!file) return
        setForm((prev) => ({ ...prev, image: file }))
        setImagePreview(URL.createObjectURL(file))
    }

    const resetForm = () => {
        setForm({ title: '', shortDescription: '', brief: '', price: '', discountPrice: '', category: '', stock: '', image: null })
        setImagePreview(null)
    }

    const handleSaveDraft = (e) => {
        e.preventDefault()
        console.log('Save draft:', form)
        setIsOpen(false)
        resetForm()
    }

    const handleAddProduct = (e) => {
        e.preventDefault()
        console.log('Add product:', form)
        setIsOpen(false)
        resetForm()
    }

    const filteredItems =
        category === "all"
            ? allitems
            : allitems.filter(item => item.subtile === category);

    return (
        <div>
            <div className='pb-4'>
                <h1 className='text-2xl font-medium'>Products</h1>
                <p>Manage your products here.</p>
            </div>
            <div className='flex justify-between items-center gap-4 mb-4'>
                <div>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className='cursor-pointer px-3 py-2 rounded-lg border outline-none'
                    >
                        <option value='all'>All Categories</option>
                        <option value='Gaming'>Gaming</option>
                        <option value='Smart Watches'>Smart Watches</option>
                        <option value='Premium Sets'>Premium Sets</option>
                        <option value='Laptops'>Laptops</option>
                        <option value='Exclusive'>Exclusive</option>
                        <option value='Tablet'>Tablet</option>
                    </select>
                    <input type="text" placeholder='Search products...' className='ml-2 px-3 py-2 rounded-lg border outline-none' />
                </div>
                <button onClick={() => setIsOpen(true)} className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg'>Add Product</button>
            </div>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <form className='bg-white p-4 rounded-xl' onSubmit={handleAddProduct}>
                    <div className='flex items-start justify-between gap-2'>
                        <h2 className='text-xl font-bold'>Add New Product</h2>
                        <button type='button' onClick={() => { setIsOpen(false); resetForm() }} className='text-gray-400 hover:text-gray-600 text-xl font-bold'>×</button>
                    </div>

                    <div className='grid grid-cols-1 gap-4 mt-1'>
                        <div>
                            <label className='block text-sm font-medium text-gray-700'>Product Title</label>
                            <input name='title' value={form.title} onChange={handleChange} required className='w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' placeholder='Product Title' />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700'>Category</label>
                            <input name='category' value={form.category} onChange={handleChange} className='w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' placeholder='e.g. Smartphones' />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700'>Product Brief</label>
                            <textarea name='brief' value={form.brief} onChange={handleChange} className='w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400' rows='2' placeholder='Write your product brief...' />
                        </div>

                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <label className='block text-sm font-medium text-gray-700'>Price</label>
                                <div className='relative mt-1'>
                                    <span className='absolute left-2 top-1/2 -translate-y-1/2 bg-green-100 text-green-700 px-2 rounded'>$
                                    </span>
                                    <input name='price' value={form.price} onChange={handleChange} type='number' className='w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400' placeholder='0' />
                                </div>
                            </div>

                            <div>
                                <label className='block text-sm font-medium text-gray-700'>Discount Price</label>
                                <div className='relative mt-1'>
                                    <span className='absolute left-2 top-1/2 -translate-y-1/2 bg-pink-100 text-pink-700 px-2 rounded'>$</span>
                                    <input name='discountPrice' value={form.discountPrice} onChange={handleChange} type='number' className='w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400' placeholder='0' />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className='mt-1 flex flex-col items-center justify-center h-40 border-2 border-dashed border-blue-300 rounded-lg cursor-pointer text-gray-500 hover:border-blue-400'>
                                <input type='file' accept='image/png, image/jpeg' onChange={handleImage} className='hidden' />
                                <div className='text-center'>
                                    <p className='text-'>Drag & drop image to upload 1200*800px size </p>
                                    <p className='text-xs text-gray-400'>required in PNG or JPG format only.</p>
                                    {imagePreview && <img src={imagePreview} alt='preview' className='mt-3 max-h-20 object-cover rounded' />}
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className='mt-6 flex justify-end gap-3'>
                        <button type='button' onClick={handleSaveDraft} className='px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50'>Save Draft</button>
                        <button type='submit' className='px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>Add Product</button>
                    </div>
                </form>
            </Modal>

            <div className='p-6'>
                <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
                    <table className='w-full text-sm text-left'>
                        <thead className='bg-gray-800 text-white'>
                            <tr>
                                <th className='px-6 py-3'>Product</th>
                                <th className='px-6 py-3'>Category</th>
                                <th className='px-6 py-3'>Price</th>
                                <th className='px-6 py-3'>Stock</th>
                                <th className='px-6 py-3'>Status</th>
                                <th className='px-6 py-3 text-center'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y'>
                            {filteredItems.map((item) => (
                                <tr key={item.id} className='hover:bg-gray-100 transition'>
                                    <td className='px-6 py-4 flex items-center gap-3'>
                                        <img src={item.image} className='w-10 h-10 rounded' alt='' />
                                        {item.title}
                                    </td>
                                    <td className='px-6 py-4'>{item.subtile}</td>
                                    <td className='px-6 py-4 font-medium'>${item.price}</td>
                                    <td className='px-6 py-4'>50</td>
                                    <td className='px-6 py-4'>
                                        <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs'>
                                            In Stock
                                        </span>
                                    </td>
                                    <td className='px-6 py-4 '>
                                        <div className='flex items-center justify-center gap-2 text-md'>
                                            <button className='hover:text-red-600'><TbEdit /></button>
                                            <button className='text-red-600 hover:text-red-700'><RiDeleteBin6Line /></button>
                                        </div>
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

export default Products
