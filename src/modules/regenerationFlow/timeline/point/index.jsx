import React from 'react'

import RegenerationFlowModuleTimelineContent from '../content'

const RegenerationFlowModuleTimelinePoint = ({
    title,
    number,
    description,
}) => {
    return (
        <div
            className='grid gap-16 items-center'
            style={{ gridTemplateColumns: '1fr auto 1fr' }}
        >
            <div>
                {number % 2 === 0 && (
                    <RegenerationFlowModuleTimelineContent
                        title={title}
                        description={description}
                    />
                )}
            </div>
            <div
                className='h-full grid grid-flow-row'
                style={{ gridTemplateRows: '1fr auto 1fr' }}
            >
                <div className='w-1 h-full mx-auto bg-bmka-accent-orange' />
                <div className='w-12 h-12 flex items-center justify-center my-4 bg-blue-400 text-white font-bold rounded-full'>
                    <p>{number <= 9 ? `0${number}` : number}</p>
                </div>
                <div className='w-1 h-full mx-auto bg-bmka-accent-orange' />
            </div>
            <div>
                {number % 2 !== 0 && (
                    <RegenerationFlowModuleTimelineContent
                        title={title}
                        description={description}
                    />
                )}
            </div>
        </div>
    )
}

export default RegenerationFlowModuleTimelinePoint
