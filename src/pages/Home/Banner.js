import React from 'react'
import BannerImage from '../../assets/images/banner.png'
import Button from '../../components/common/Button'

const Banner = () => {
    return (
        <>
            <section className='bg-bg relative h-[450px] hidden md:block'>
                <img src={BannerImage} alt='' className='h-[450px] -top-3 object-contain -z-0 absolute right-0 object-right w-full' />
                <section className='layout flex flex-col gap-y-3 justify-center h-full relative z-10'>
                    <h1 className='text-black text-3xl font-semibold'>Meat dish with vegetables</h1>
                    <p className='max-w-[450px] text-base text-slate-700 font-medium'>Other healthy fruits and berries include cherries, grapes, grapefruit </p>
                    <Button
                        text={'Order now'}
                    />
                </section>
            </section>
        </>
    )
}

export default Banner