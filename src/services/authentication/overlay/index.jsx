import React from 'react'
import { motion } from 'framer-motion'

import { BMKAFullVerticalColorIcon } from '@assets'

const AuthenticationOverlay = () => {
    return (
        <div
            style={{ zIndex: 999 }}
            className='fixed w-full h-full flex flex-col items-center justify-center'
        >
            <div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='w-40 mx-auto'
                >
                    <BMKAFullVerticalColorIcon />
                </motion.div>
            </div>
        </div>
    )
}

export default AuthenticationOverlay
