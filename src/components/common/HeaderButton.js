import React from 'react'

const HeaderButton = ({ src, className, count, size = 'h-5 w-5' }) => {
    return (
        <>
            <button className={`header_btns  ${className}`}>
                <img src={src} alt='' className={size} />
                {count && <span className='absolute -top-1 -right-0 text-xs bg-primary inline-flex w-4 h-4 rounded-full text-white justify-center items-center '>{count}</span>}
            </button>
        </>
    )
}

export default HeaderButton