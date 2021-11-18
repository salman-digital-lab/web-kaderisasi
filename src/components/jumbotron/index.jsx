import React from 'react'

import { ComponentWrapper } from '@components'

const Jumbotron = ({ children }) => {
    return (
        <div className='w-full bg-bmka-primary-blue pt-40 pb-10'>
            <ComponentWrapper>{children}</ComponentWrapper>
        </div>
    )
}

export default Jumbotron
