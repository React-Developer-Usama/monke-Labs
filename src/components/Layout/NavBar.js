import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../assets/images/home.svg'
import User from '../../assets/images/user.svg'
import Wishlist from '../../assets/images/wishlist.svg'
import Cart from '../../assets/images/trolley2.svg'
import Search from '../../assets/images/search.svg'

const NavBar = () => {
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
            <nav className='my-8 hidden lg:flex layout '>
                <section className='border border-primary cursor-pointer group h-12 max-w px-14 z-20 relative flex items-center'>
                    <p className='text-sm text-primary'>All categories</p>
                    <section className='absolute top-full left-0 w-full flex flex-col border gap-1-3 px-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible duration-150 group-hover:translate-y-0 py-5 bg-white shadow-2xl translate-y-10 transition-all'>
                        {menuList.map((item, index) => <Link to={'#'} className='text-sm text-slate-700 border-b py-2' key={index}>{item.name}</Link>)}
                    </section>
                </section>
                <div className='flex items-center gap-x-10 justify-center flex-1'>
                    {menuList.map((item, index) => <Link to={'#'} className='text-sm text-slate-700' key={index}>{item.name}</Link>)}
                </div>
            </nav>
            <section className='flex bg-white w-full h-12 justify-around items-center fixed bottom-0 z-50 rounded-t-2xl md:hidden shadow-2xl'>
                <Link to='/'>
                    <img src={Home} alt='' className='h-6' />
                </Link>
                <Link to='/my-bucket'>
                    <img src={Cart} alt='' className='h-6' />
                </Link>
                <Link to='#' className='bg-black h-10 w-10 rounded-full shadow-2xl flex justify-center items-center'>
                    <img src={Search} alt='' className='h-6' />
                </Link>
                <Link to='/'>
                    <img src={Wishlist} alt='' className='h-6' />
                </Link>
                <Link to='/'>
                    <img src={User} alt='' className='h-6' />
                </Link>
            </section>
        </>
    )
}

export default NavBar