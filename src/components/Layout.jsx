import React from 'react'
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from './Footer'

const Layout = () => {
    return (
        <div>
            {/* use for see Navbar all page */}
            <Navbar />
            <div className="pt-28">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout