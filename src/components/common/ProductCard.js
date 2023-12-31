import React from 'react'
import WishlistIcon from '../../assets/images/wishlist.svg'
import { Link } from 'react-router-dom'
const ProductCard = ({ item }) => {
    return (
        <>
            <section className='rounded-[20px] relative overflow-hidden bg-white shadow-2xl group  hover:shadow-xl cursor-pointer transition-all'>
                {item?.discount && <span className='bg-primary absolute top-3 left-3 text-white flex px-2 rounded-sm text-xs'>{item?.discount}%</span>}
                <div className='overflow-hidden'>
                    <Link to={`/product-details/${item?.slug}/${item?.code}`}>
                        <img src={item?.image} className={`${!item?.discount && 'group-hover:scale-110'} h-[172px] w-full md:h-56 object-cover  transition-all`} />
                    </Link>
                </div>
                <div className='px-3.5 h-20 my-3 flex flex-col justify-between'>
                    <Link to={`/product-details/${item?.slug}/${item?.code}`}><p className='text14 line-clamp-2'>{item?.name}</p></Link>
                    <div className='flex-between'>
                        <div className='flex items-center gap-x-2'>
                            <span className={`${item?.discount ? 'line-through text-sm' : 'text14'} `}><font className='text-primary'>$</font>{item?.price}</span>
                            <p className='text-primary text14'>{item?.discountPrice}</p>
                        </div>
                        <img role='button' src={WishlistIcon} alt='' />
                    </div>

                </div>
            </section>
        </>
    )
}

export default ProductCard