import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoKS from '../assets/LogoKS.png'

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // if already login → go admin
    useEffect(() => {
        const isAdmin = localStorage.getItem("admin");
        if (isAdmin) {
            navigate("/admin");
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "Seven@gmail.com" && password === "123456") {
            localStorage.setItem("admin", "true");
            navigate("/admin");
        } else {
            alert("Invalid login");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <form onSubmit={handleLogin} className="px-6 pb-6 pt-2 flex flex-col bg-white border shadow-xl rounded">
                <img src={LogoKS} alt="" className="h-20 w-20 mx-auto" />

                <h1 className="text-xl text-center mb-7">Sign in to your account</h1>
                <span className="text-md  text-gray-800">
                    Email address
                </span>
                <input
                    type="email"
                    placeholder="name@example.com"
                    className="border mt-1 px-2 py-1 outline-none w-80 mb-3 rounded-md"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <div className="mt-1">
                    <span className="text-md  text-gray-800">
                        Password
                    </span>
                    <span>
                        <a href="#" className="text-sm text-blue-600  hover:underline float-right">
                            Forgot Password?
                        </a>
                    </span>
                </div>
                <input
                    type="password"
                    placeholder="Password"
                    className="border mt-1 px-2 py-1 outline-none w-80 mb-3 rounded-md"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div className="flex items-center gap-1">
                    <input type="checkbox" className="mt-[4px]" />
                    <h1 className="text-sm">Remember me</h1>
                </div>

                <button className="bg-blue-600 mt-3 rounded-md hover:bg-blue-700 text-white px-4 py-2 w-full">
                    Sign in
                </button>

                <h1 className="text-sm text-center mt-4">
                    Don't have an account?{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        Sign up
                    </a>
                </h1>
            </form>
        </div>
    );
};

export default AdminLogin;