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

        if (username === "Seven" && password === "123456") {
            localStorage.setItem("admin", "true");
            navigate("/admin");
        } else {
            alert("Invalid login");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h2 className="text-2xl mb-4 font-bold">E-Commerce Management System</h2>
            <form onSubmit={handleLogin} className="px-6 pb-6 pt-2 flex flex-col bg-white border shadow-xl rounded">
                <img src={LogoKS} alt="" className="h-20 w-20 mx-auto" />
                <span className="text-sm text-gray-800">
                    Username
                </span>
                <input
                    type="username"
                    placeholder="username"
                    className="border px-4 py-2 outline-none w-80 mb-3 rounded-md"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <span className="text-sm text-gray-800">
                    Passsword
                </span>
                <input
                    type="password"
                    placeholder="Password"
                    className="border px-4 py-2 outline-none w-80 mb-3 rounded-md"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="bg-blue-600 mt-3 rounded-full hover:bg-blue-700 text-white px-4 py-2 w-full">
                    Login
                </button>
            </form>
        </div>
    );
};

export default AdminLogin;