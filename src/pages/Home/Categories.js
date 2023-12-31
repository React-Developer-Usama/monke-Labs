import React from 'react'
import Categories3 from '../../assets/images/categories3.png'
import Categories4 from '../../assets/images/categories4.png'
import Categories1 from '../../assets/images/categories1.png'
import Categories2 from '../../assets/images/categories2.png'
import Categories5 from '../../assets/images/categories5.png'
import Heading from '../../components/common/Heading'
import CategoriesCard from '../../components/common/CategoriesCard'

const Categories = () => {
    const categorieslist = [
        { name: 'Salad', bg: 'bg-[#eaf9e6]', image: Categories3 },
        { name: 'Steak', bg: 'bg-[#ffe8ee]', image: Categories4 },
        { name: 'Chicken', bg: 'bg-[#FFEEE8]', image: Categories1 },
        { name: 'Fish', bg: 'bg-[#eaf9e6]', image: Categories2 },
        { name: 'Beef', bg: 'bg-[#ffe8ee]', image: Categories5 },
    ]
    return (
        <>
            <section className='layout mt-5 md:mt-14'>
                <div className='flex items-center justify-between'>
                    <Heading text='Categories' />
                    <span role='button' className='text-primary font-medium'>See all</span>
                </div>
                <section className='overflow-x-scroll  scroll_hide'>
                    <div className='flex gap-x-4 py-4 md:py-8 w-[990px] lg:w-full'>
                        {categorieslist?.map((item, index) => <CategoriesCard data={item} key={index} />)}
                    </div>
                </section>
            </section>
        </>
    )
}

export default Categories