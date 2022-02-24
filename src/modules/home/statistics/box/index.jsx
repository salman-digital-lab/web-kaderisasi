import React, { useEffect, useRef } from 'react'
// import { animate } from 'framer-motion'

const Box = ({ number, title }) => {
    //animation
    function Counter({ from, to }) {
        const ref = useRef()

        useEffect(() => {
            // const controls = animate(from, to, {
            //     duration: 5,
            //     onUpdate(value) {
            //         //remove .0 from number
            //         ref.current.textContent = value.toFixed(0)
            //     },
            // })
            // return () => controls.stop()
        }, [from, to])

        return (
            <p
                className='text-3xl text-bmka-accent-orange font-extrabold'
                ref={ref}
            >
                {number}
            </p>
        )
    }
    return (
        <div className='text-center p-8'>
            <Counter from={0} to={number} />
            <p>{title}</p>
        </div>
    )
}

export default Box
