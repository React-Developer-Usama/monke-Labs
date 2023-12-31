import React from 'react'
import Home from '../pages/Home'
import MyBucket from '../pages/my-bucket'
import Checkout from '../pages/checkout'
import OrderComplete from '../pages/order-complete'
import ProductDetails from '../pages/product-detail'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/my-bucket" element={<MyBucket />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/order-complete" element={<OrderComplete />} />
                    <Route path="/product-details/:slug/:code" element={<ProductDetails />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Index