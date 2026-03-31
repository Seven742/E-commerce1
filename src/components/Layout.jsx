import React from 'react'
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from './Footer'
import { SearchProvider } from './SearchContext';

const Layout = () => {
    return (
        <SearchProvider>
            {/* use for see Navbar all page */}
            <Navbar />
            <div className="pt-28">
                <Outlet />
            </div>
            <Footer />
        </SearchProvider>
    )
}

export default Layout