import React from 'react'
import Layout from '../../components/Layout'
import Banner from './Banner'
import Categories from './Categories'
import ProductListing from './ProductListing'
import { discount, most_popular, recommended_items } from '../../utils/products'
import Rider from '../../assets/images/ride.svg'
import DiscountImage from '../../assets/images/discount.png'
import Button from '../../components/common/Button'

const Index = () => {
    return (
        <>
            <Layout>
                <Banner />
                <section className='hidden md:flex layout rounded-xl bg-[#ffe8ee]  items-center justify-center mt-7 md:mt-14 gap-x-5 py-5'>
                    <p className='text-red-500 text-sm'>Special discount on this new year</p>
                    <span className='h-10 px-4 border border-dashed border-red-600 text-red-500 text-sm rounded-full flex justify-center items-center'>YEARSALE2024</span>
                    <p className='text-gray-500 text-sm'>use this coupon code in checkout</p>
                </section>
                <Categories />
                <ProductListing
                    title={'Recommended items'}
                    data={recommended_items}
                />
                <section className='layout rounded-xl bg-[#eaf9e6] flex items-center justify-center mt-7 md:mt-14 gap-x-5 py-5'>
                    <p className='text-green-500 text-sm'>Save an extra of 5% on every purchase of breakfast above $100</p>
                </section>
                <section className='mt-7 md:mt-14'>
                    <ProductListing
                        title={'Most popular'}
                        data={most_popular}
                    />
                </section>
                <section className='bg-primary mt-7 md:mt-14 py-10 lg:py-0'>
                    <section className='layout flex flex-col lg:flex-row text-center lg:text-left lg:justify-between items-center'>
                        <section className='w-full lg:max-w-[400px] flex flex-col gap-y-4 '>
                            <h1 className='text-2xl font-semibold text-white'>Join our newsletter for new offers and arrivals</h1>
                            <p className='text-sm text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            <div className='bg-white h-12 rounded-full items-center flex justify-between px-1 overflow-hidden'>
                                <input type='text' className='indent-3 text-sm flex-1' placeholder='Enter your email' />
                                <Button text='Subscribe' />
                            </div>
                        </section>
                        <img src={DiscountImage} alt='' className='hidden lg:block' />
                    </section>
                </section>
                <section className='mt-7 md:mt-14'>
                    <ProductListing
                        title={'Discount items'}
                        data={discount}
                    />
                </section>
                <section className='mt-7 md:mt-14 layout  flex-between'>
                    <div className='flex flex-col items-center text-center md:text-left md:items-start gap-y-2'>
                        <h3 className='text-3xl md:text-5xl font-black text-slate-800'>Become a rider</h3>
                        <p className='text14 text-slate-800'>More than 200k users are using MKL for daily breakfast shopping.</p>
                        <Button text={'Know more '} />
                    </div>
                    <img src={Rider} alt='' className='hidden md:block' />
                </section>
            </Layout>
        </>
    )
}

export default Index