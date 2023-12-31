import React from 'react'
import Heading from '../../components/common/Heading'
import ProductCard from '../../components/common/ProductCard'

const ProductListing = ({ title, data = [], filter = 'Filter' }) => {
    return (
        <>
            <section className='layout'>
                <div className='flex-between'>
                    <Heading text={title} />
                    <span role='button' className='text-primary font-medium'>{filter}</span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-7 md:gap-x-6 mt-5'>
                    {data.map((item, index) => <ProductCard item={item} key={index} />)}
                </div>
            </section>
        </>
    )
}

export default ProductListing