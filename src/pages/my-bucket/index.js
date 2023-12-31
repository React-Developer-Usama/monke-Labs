import React from 'react'
import Layout from '../../components/Layout'
import { most_popular, recommended_items } from '../../utils/products'
import Rider from '../../assets/images/ride.svg'
import Button from '../../components/common/Button'
import BuckerCard from './BuckerCard'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <>
            <Layout>
                <main className='bg-bg py-10'>
                    <section className='layout lg:flex'>
                        <section className='w-full lg:flex-[2]'>
                            <h1 className='text-[15px] text-black font-medium'>Cart</h1>
                            <section className='bg-white mt-5 overflow-y-auto scroll_hide py-2 px-4'>
                                <BuckerCard
                                    data={[most_popular[0], most_popular[1], recommended_items[3], recommended_items[1]]} />
                            </section>
                        </section>
                        <section className='w-full lg:flex-1 mt-10 lg:mt-0 lg:ml-5  '>
                            <h1 className='text-[15px] text-black font-medium'>Summary</h1>
                            <section className='bg-white mt-5 px-4 py-2 pb-6'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-sm text-textColor'>Cart subtotal</p>
                                    <p className='text-sm text-textColor'>$563</p>
                                </div>
                                <div className='flex flex-col gap-y-3 mt-5'>
                                    <p className='text-sm text-textColor'>Delivery</p>
                                    <div className='flex-between'>
                                        <label className='flex items-center gap-x-2 text-sm text-textColor'>
                                            <input type='radio' name='delivery' className='accent-primary h-5 w-5' />
                                            <span>Express delivery</span>
                                        </label>
                                        <p className='text-sm text-textColor'>$15</p>
                                    </div>
                                    <div className='flex-between'>
                                        <label className='flex items-center gap-x-2 text-sm text-textColor'>
                                            <input type='radio' name='delivery' className='accent-primary h-5 w-5' />
                                            <span>Regular delivery</span>
                                        </label>
                                        <p className='text-sm text-textColor'>$10</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between mt-5'>
                                    <p className='text-sm text-textColor'>Cart total</p>
                                    <p className='text-sm text-textColor'>$897</p>
                                </div>
                                <Link to={'/checkout'} className=' bg-primary flex justify-center items-center h-11 w-full mt-10 text-white rounded-full text-sm'>PROCEED TO CHECKOUT</Link>
                            </section>
                            <h4 className='text-black text-sm mt-5'>Coupon / Gift card</h4>
                            <section className='bg-white flex items-center rounded-full pr-1 overflow-hidden mt-2'>
                                <input type='text' placeholder='Enter code here' className='h-10 text-sm text-textColor flex-1 indent-4' />
                                <Button text='Apply' className='h-9 w-20 text-white' />
                            </section>
                        </section>
                    </section>
                </main>
            </Layout>
        </>
    )
}

export default Index