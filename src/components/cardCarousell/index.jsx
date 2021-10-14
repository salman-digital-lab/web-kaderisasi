import React from 'react'

import { ComponentWrapper } from '@components'

const CardCarousell = ({ children }) => {
    return (
        <div>
            <ComponentWrapper>
                <div>{children}</div>
            </ComponentWrapper>
        </div>
    )
}

export default CardCarousell
