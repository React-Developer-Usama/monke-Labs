import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../components/Layout'
import { discount, most_popular, recommended_items } from '../../utils/products'
import Heading from '../../components/common/Heading'
import Star from '../../assets/images/Star.svg'
import PlusIcon from '../../assets/images/plus.svg'
import MinusIcon from '../../assets/images/minus.svg'
import WishListIcon from '../../assets/images/wishlist.svg'
import Button from '../../components/common/Button'
import ProductListing from '../Home/ProductListing'

const Index = () => {
    const params = useParams()
    const [quantity, setQuantity] = useState(2)
    const [getProduct, setGetProduct] = useState()

    useEffect(() => {
        const allproducts = [...recommended_items, ...most_popular, ...discount]
        setGetProduct(allproducts.filter(item => item.code == params.code)[0])
    }, [params])
    return (
        <>
            <Layout>
                <section className='layout mt-7 md:mt-14'>
                    <div>
                        <Heading text={getProduct?.name} />
                        <p className='text-textColor text-lg'>By Steak house</p>
                        <div className='flex  mt-3 items-center gap-x-1'>
                            <img src={Star} alt='' />
                            <span className='text-sm text-black font-medium'>4.4</span>
                        </div>
                    </div>
                    <section className='flex gap-y-4 md:gap-y-0 flex-col md:flex-row mt-7 md:mt-14 justify-between'>
                        <div className='sm:w-[200px] md:w-[500px] relative'>
                            {getProduct?.discount && <span className='bg-primary absolute top-3 left-3 text-white flex px-2 rounded-sm text-xs'>{getProduct?.discount}%</span>}
                            <img src={getProduct?.image} className={`md:h-[400px] w-full object-cover rounded-2xl`} />
                        </div>
                        <div className='sm:min-w-[100px] sm:ml-8 lg:ml-0 md:min-w-[400px]'>
                            <div className='flex items-center gap-x-2'>
                                <span className={`${getProduct?.discount ? 'line-through text-lg' : 'text-2xl'} font-medium `}><font className='text-primary'>$</font>{getProduct?.price}</span>
                                <p className='text-primary text-2xl'>{getProduct?.discountPrice}</p>
                            </div>
                            <p className='text-green-500 text-sm mt-1'>in stock</p>
                            <div className='mt-7 md:mt-14'>
                                <p className='text-slate-800 text-sm mt-1'>Sizing : 2ml</p>
                                <p className='text-slate-800 text-sm mt-1'>Brand : Healthy food</p>
                                <p className='text-slate-800 text-sm mt-1'>Category : Food</p>
                            </div>
                            <div className='mt-7 md:mt-14 flex items-center mb-3'>
                                <img src={MinusIcon} role='button' alt='' onClick={() => setQuantity(quantity - 1)} />
                                <p className='text-sm text-textColor w-10 text-center'>{quantity}</p>
                                <img src={PlusIcon} role='button' alt='' onClick={() => setQuantity(quantity + 1)} />
                            </div>
                            <Button text={'Add to cart'} />
                            <div className='py-6 border-b'>
                                <div className='flex items-center gap-x-3' role='button'>
                                    <img src={WishListIcon} alt='' />
                                    <p className='text-slate-800 text-sm'>Add to wishlist</p>
                                </div>
                            </div>
                        </div>

                    </section>
                    <div className='mt-7 md:mt-14'>
                        <Heading text={'Description'} />
                        <p className='text-textColor text-base '>
                            Indulge in the mouthwatering delight of a perfectly grilled beef steak generously topped with a ric
                            Indulge in the mouthwatering delight of a perfectly grilled beef steak generously topped  with a ric
                            Indulge in the mouthwatering delight of a perfectly grilled beef steak generously topped
                        </p>
                    </div>
                </section>
                <section className='mt-7 md:mt-14'>
                    <ProductListing
                        filter=''
                        title={'Related products'}
                        data={[discount[0], recommended_items[1], most_popular[1], discount[3],]}
                    />
                </section>

            </Layout>
        </>
    )
}

export default Index