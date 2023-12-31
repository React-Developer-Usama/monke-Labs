import React, { useState } from 'react'
import PlusIcon from '../../assets/images/plus.svg'
import MinusIcon from '../../assets/images/minus.svg'
import CrossIcon from '../../assets/images/cross.svg'

const BuckerCard = ({ data = [] }) => {
    const [quantity, setQuantity] = useState(2)
    return (
        <>
            <section className='w-[600px] lg:w-full'>
                <table className='w-full table'>
                    <thead>
                        <tr>
                            <td className='font-normal text-textColor text-sm py-2'>Item name</td>
                            <td className='font-normal text-textColor text-sm py-2'>Price</td>
                            <td className='font-normal text-textColor text-sm py-2'>Quantity</td>
                            <td className='font-normal text-textColor text-sm py-2'>Subtotal</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item, index) => <tr key={index}>
                            <td className='font-normal text-black text-xs py-2 w-[300px]'>
                                <div className='flex items-center gap-x-2'>
                                    <img src={item?.image} alt='' className='w-14 h-14 rounded-xl object-cover' />
                                    <p>{item?.name}</p>
                                </div>
                            </td>
                            <td className='font-normal text-primary text-xs py-2'>${item?.price}</td>
                            <td className='font-medium text-textColor text-xs py-2'>
                                <div className='flex items-center'>
                                    <img src={MinusIcon} role='button' className='w-6' alt='' onClick={() => setQuantity(quantity - 1)} />
                                    <p className='text-sm text-textColor w-10 text-center'>{quantity}</p>
                                    <img src={PlusIcon} role='button' className='w-6' alt='' onClick={() => setQuantity(quantity + 1)} />
                                </div>
                            </td>
                            <td className='font-normal text-primary text-xs py-2'>
                                <div className='flex items-center gap-x-4'>
                                    <p>${quantity * item?.price}</p>
                                    <img src={CrossIcon} alt='' role='button' />
                                </div>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>

            </section>
        </>
    )
}

export default BuckerCard