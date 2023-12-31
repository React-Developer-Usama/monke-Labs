import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const menuList = [
        { name: 'Breakfast' },
        { name: 'Fresh vegetables' },
        { name: 'Sell With Us' },
        { name: 'About Us' },
        { name: 'Our Stories' },
        { name: 'Careers' },
    ]
    return (
        <>
            <footer className='bg-primary mt-7 md:mt-14 rounded-t-[150px] py-20 hidden lg:block'>
                <section className='layout flex justify-between flex-wrap '>
                    <div>
                        <h1 className='text-white font-semibold text-base'>Fresh Fruits & Vegetables</h1>
                        <div className='flex flex-col gap-y-2 mt-6'>
                            {menuList.map((item, index) => <Link to={'#'} className='text-sm text-white' key={index}>{item.name}</Link>)}
                        </div>
                    </div>
                    <div>
                        <h1 className='text-white font-semibold text-base'>Our Exclusive Bundles</h1>
                        <div className='flex flex-col gap-y-2 mt-6'>
                            {menuList.map((item, index) => <Link to={'#'} className='text-sm text-white' key={index}>{item.name}</Link>)}
                        </div>
                    </div>
                    <div>
                        <h1 className='text-white font-semibold text-base'>Our Organic Products</h1>
                        <div className='flex flex-col gap-y-2 mt-6'>
                            {menuList.map((item, index) => <Link to={'#'} className='text-sm text-white' key={index}>{item.name}</Link>)}
                        </div>
                    </div>
                    <div>
                        <h1 className='text-white font-semibold text-base'>Category</h1>
                        <div className='flex flex-col gap-y-2 mt-6'>
                            {menuList.map((item, index) => <Link to={'#'} className='text-sm text-white' key={index}>{item.name}</Link>)}
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer