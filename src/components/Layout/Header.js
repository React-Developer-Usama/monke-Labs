import React, { useState, useRef, Fragment } from "react";
import HeartIcon from '../../assets/images/heart.svg'
import SearchIcon from '../../assets/images/search.svg'
import Wishlist from '../../assets/images/wishlist.svg'
import User from '../../assets/images/user.svg'
import Cart from '../../assets/images/trolley.svg'
import Logo from '../../assets/images/logo.png'
import LocationIcon from '../../assets/images/location.svg'
import CrossIcon from '../../assets/images/cross.svg'
import HeaderButton from '../common/HeaderButton'
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <>
            <header className='top_header'>
                <p>We</p>
                <img src={HeartIcon} alt='' />
                <p>healthy food</p>
            </header>
            <section className='layout flex  my-4  items-center justify-between'>
                <Link to='/'>
                    <img src={Logo} alt='' className='h-10 md:h-24' />
                </Link>
                <div className='w-[150px] p-2 border hidden lg:flex items-center gap-x-2'>
                    <img src={LocationIcon} alt='' className='h-6' />
                    <div>
                        <p className='text-gray-700 text-[10px]'>Your Location</p>
                        <span className='text-blue-500 text-xs'>Pakistan</span>
                    </div>
                </div>
                <div className='hidden lg:flex header_search flex-shrink-0'>
                    <input type='text' placeholder='Search' className='header_search_input' />
                    <button className='header_search_btn'>
                        <img src={SearchIcon} alt='' />
                    </button>
                </div>
                <div className='flex items-center gap-x-6'>
                    <Link to='/my-bucket'>
                        <HeaderButton
                            src={Cart}
                            className='bg-[#e74b1b25] hidden lg:flex'
                            count={'7'}
                        />

                    </Link>


                    <HeaderButton
                        src={Wishlist}
                        size='h-6 w-6'
                        count={'4'}
                        className={'hidden lg:flex'}
                    />
                    <HeaderButton
                        src={User}
                        className='md:border'
                        size={'h-4 w-4 md:h-5 md:w-5'}
                    />
                </div>
            </section>

        </>
    )
}

export default Header