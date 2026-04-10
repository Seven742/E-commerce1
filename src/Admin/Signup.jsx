import React from 'react'
import LogoKS from '../assets/LogoKS.png'

const Signup = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <form className="px-6 pb-6 pt-2 flex flex-col bg-white border shadow-xl rounded">
                <img src={LogoKS} alt="" className="h-20 w-20 mx-auto" />

                <h1 className="text-xl text-center mb-7">Create your account</h1>

                <span className="text-md  text-gray-800">
                    Full Name
                </span>
                <input
                    type="text"
                    placeholder="Seven"
                    className="border mt-1 px-2 py-1 outline-none w-80 mb-3 rounded-md"

                />
                <span className="text-md  text-gray-800">
                    Email address
                </span>
                <input
                    type="email"
                    placeholder="name@example.com"
                    className="border mt-1 px-2 py-1 outline-none w-80 mb-3 rounded-md"

                />
                <span className="text-md  text-gray-800">
                    Password
                </span>

                <input
                    type="password"
                    placeholder="Password"
                    className="border mt-1 px-2 py-1 outline-none w-80 mb-3 rounded-md"

                />
                <span className="text-md  text-gray-800">
                    Confirm password
                </span>

                <input
                    type="password"
                    placeholder="Repeat password"
                    className="border mt-1 px-2 py-1 outline-none w-80 mb-3 rounded-md"

                />

                <div className="flex items-center gap-1">
                    <input type="checkbox" className="mt-[4px]" />
                    <h1 className="text-sm">I agree to the <a href="#" className=" hover:underline hover:text-blue-600">Terms</a> and <a href="#" className=" hover:underline hover:text-blue-600">Privacy Policy</a></h1>
                </div>

                <button className="bg-blue-600 mt-3 rounded-md hover:bg-blue-700 text-white px-4 py-2 w-full">
                    Sign in
                </button>

                <h1 className="text-sm text-center mt-4">
                    Already have an account?{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        Sign in
                    </a>
                </h1>
            </form>
        </div>
    )
}

export default Signup
