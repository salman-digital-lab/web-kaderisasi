import React from 'react'

const FooterTitle = ({ children }) => {
    return (
        <div className='flex pb-6'>
            <p className='pb-2 text-white font-bold border-b-2 border-bmka-accent-orange'>
                {children}
            </p>
        </div>
    )
}

export default FooterTitle
