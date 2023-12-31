import React from 'react'
import Layout from '../../components/Layout'
import CreditCardIcon from '../../assets/images/cd.svg'
import PayPal from '../../assets/images/pp.svg'

import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <>
            <Layout>
                <main className='bg-bg py-10'>
                    <section className='layout lg:flex items-start'>
                        <section className='lg:flex-[2]'>
                            <h1 className='text-[15px] text-black font-medium'>Checkout</h1>
                            <section className='mt-3 w-full lg:max-w-[400px]'>
                                <h1 className='bg-primary px-2 text-white rounded-t-lg py-2 text-base font-semibold'>Address Details</h1>
                                <div className='mt-5'>
                                    <h3 className='text-black text-sm'>Select your address</h3>
                                    <div className='mt-5 flex flex-col gap-y-4'>
                                        <label className='flex p-4 rounded-md bg-white items-center gap-x-2 text-sm text-textColor'>
                                            <input type='radio' name='delivery' className='accent-primary h-5 w-5' />
                                            <span>XFFG+6XM, Peshawar, Khyber Pakistan</span>
                                        </label>
                                        <label className='flex p-4 rounded-md bg-white items-center gap-x-2 text-sm text-textColor'>
                                            <input type='radio' name='delivery' className='accent-primary h-5 w-5' />
                                            <span>XFFG+6XM, Peshawar, Khyber Pakistan</span>
                                        </label>
                                        <label className='flex p-4 rounded-md bg-white items-center gap-x-2 text-sm text-textColor'>
                                            <input type='radio' name='delivery' className='accent-primary h-5 w-5' />
                                            <span>XFFG+6XM, Peshawar, Khyber Pakistan</span>
                                        </label>
                                    </div>
                                </div>
                            </section>
                            <section className='mt-10  w-full lg:max-w-[400px]'>
                                <h1 className='bg-primary px-2 text-white rounded-t-lg py-2 text-base font-semibold'>Payment Method</h1>
                                <div className='mt-5'>
                                    <div className='mt-5 flex flex-col gap-y-4'>
                                        <label className='flex-between p-3 rounded-md bg-white max-w-[400px]  gap-x-2 text-sm text-textColor'>
                                            <div className='flex items-center gap-x-3'>
                                                <img src={CreditCardIcon} alt='' />
                                                <span>Debit/Credit card</span>
                                            </div>
                                            <input type='radio' name='Payment' className='accent-primary h-5 w-5' />
                                        </label>
                                        <label className='flex-between p-3 rounded-md bg-white max-w-[400px]  gap-x-2 text-sm text-textColor'>
                                            <div className='flex items-center gap-x-3'>
                                                <img src={PayPal} alt='' />
                                                <span>PayPal</span>
                                            </div>
                                            <input type='radio' name='Payment' className='accent-primary h-5 w-5' />
                                        </label>
                                    </div>
                                </div>
                            </section>
                        </section>
                        <section className='bg-white flex-1 lg:ml-5 mt-[35px]'>
                            <h1 className='bg-primary px-2 text-white rounded-t-lg py-2 text-base font-semibold'>Summary</h1>
                            <section className='bg-white mt-5 px-4 py-2 pb-6 flex flex-col gap-y-5'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-sm text-textColor'>Subtotal</p>
                                    <p className='text-sm text-textColor'>$563</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className='text-sm text-textColor'>VAT 15%</p>
                                    <p className='text-sm text-textColor'>$15</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className='text-sm text-textColor'>Shipping</p>
                                    <p className='text-sm text-textColor'>$03</p>
                                </div>
                                <div className='flex items-center justify-between border-t py-3'>
                                    <p className='text-sm text-textColor'>Total</p>
                                    <p className='text-sm text-textColor'>$400</p>
                                </div>
                                <Link to={'/order-complete'} className=' bg-primary flex justify-center items-center h-11 w-full mt-3 text-white rounded-full text-sm'>Place order now</Link>
                            </section>
                        </section>
                    </section>
                </main>
            </Layout>
        </>
    )
}

export default Index