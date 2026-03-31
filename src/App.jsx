import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Shop from './components/Shop'
import Oders from './components/Oders'
import Favorite from './components/Favorite'
import Layout from './components/Layout'
import AdminDashboard from './Admin/AdminDashboard'
import AdminLayout from './Admin/AdminLayout'
import ScrollToTop from './components/ScrollToTop'
import Products from './Admin/Products'
import Orders from './Admin/Orders'
import Users from './Admin/Users'
import Report from './Admin/Report'
import AdminLogin from './Admin/AdminLogin'
import ProtectedRoute from './Admin/ProtectedRoute'
import { SearchProvider } from './components/SearchContext'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/oders" element={<Oders />} />
          <Route path="/favorite" element={<Favorite />} />

        </Route>

        {/* <SearchProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/oders" element={<Oders />} />
              <Route path="/favorite" element={<Favorite />} />
            </Route>
          </Routes>
        </SearchProvider> */}


        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="users" element={<Users />} />
          <Route path="reports" element={<Report />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App