import React from 'react'
import Layout from '../../components/Layout'
import Success from '../../assets/images/success.png'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <>
            <Layout>
                <section className='layout'>
                    <div className='flex flex-col mb-20 lg:mb-0 justify-center items-center text-center gap-y-6 max-w-[600px] mx-auto'>
                        <img src={Success} alt='' />
                        <p className='text-sm text-gray-500'>Thank you for choosing our services! Your order has been successfully placed and is now being processed. We appreciate your trust in us and look forward to serving you.</p>
                        <Link to={'/'} className=' bg-primary flex justify-center items-center h-11 w-[200px] mt-3 text-white rounded-full text-sm'>Return Home</Link>
                    </div>

                </section>
            </Layout>
        </>
    )
}

export default Index