import React from 'react'

import { ComponentWrapper } from '@components'

const CardCarousell = ({ title, children }) => {
    return (
        <>
            <div className='w-full grid gap-6'>
                <ComponentWrapper>
                    <div>
                        <h2 className='font-bold'>{title}</h2>
                    </div>
                </ComponentWrapper>
                <div
                    className='w-full overflow-x-scroll'
                    style={{
                        scrollBehavior: 'smooth',
                        scrollbarWidth: 'none',
                    }}
                >
                    <ComponentWrapper>
                        <div className='w-min flex gap-6'>{children}</div>
                    </ComponentWrapper>
                </div>
            </div>
            <style jsx>{`
                ::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </>
    )
}

export default CardCarousell
