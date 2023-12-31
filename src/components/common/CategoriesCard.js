import React from 'react'

const CategoriesCard = ({ data }) => {
    return (
        <>
            <div className={`${data?.bg} flex justify-between w-[190px] md:flex-1 pl-2 rounded-xl cursor-pointer hover:shadow-xl transition-all`}>
                <p className='self-center text-sm font-medium'>{data?.name}</p>
                <img src={data?.image} className='h-20 w-20 object-cover  self-end' />
            </div>
        </>
    )
}

export default CategoriesCard