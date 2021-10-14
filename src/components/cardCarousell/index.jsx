import React, { useRef, useEffect, Children } from 'react'

import { ComponentWrapper } from '@components'

import Header from './header'

const CardCarousell = ({ title, children }) => {
    const CardCarousellBoxRef = useRef()
    const CardCarousellContentRef = useRef()

    const getChildrenLength = Children.toArray(children).length

    const getSizePerCard = () => {
        const sizePerCard =
            CardCarousellBoxRef.current.scrollWidth / getChildrenLength

        return sizePerCard
    }

    const getCurrentPosition = () => {
        const currentPositions = CardCarousellContentRef.current.scrollLeft

        return currentPositions
    }

    const previousOnClickHandler = () => {
        CardCarousellContentRef.current.scrollLeft =
            getCurrentPosition() - getSizePerCard()
    }

    const nextOnClickHandler = () => {
        CardCarousellContentRef.current.scrollLeft =
            getCurrentPosition() + getSizePerCard()
    }

    useEffect(() => {
        if (CardCarousellContentRef.current) {
            CardCarousellContentRef.current.scrollLeft = 0
        }
    }, [children])

    return (
        <>
            <div className='w-full grid gap-6'>
                <ComponentWrapper>
                    <Header
                        title={title}
                        nextHandler={nextOnClickHandler}
                        previousHandler={previousOnClickHandler}
                    />
                </ComponentWrapper>
                <div
                    ref={CardCarousellContentRef}
                    className='w-full overflow-x-scroll'
                    style={{
                        scrollBehavior: 'smooth',
                        scrollbarWidth: 'none',
                    }}
                >
                    <ComponentWrapper>
                        <div
                            ref={CardCarousellBoxRef}
                            className='w-min flex gap-6'
                        >
                            {children}
                        </div>
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
