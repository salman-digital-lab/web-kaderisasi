import React from 'react'

import RegenerationFlowModuleTimelineContent from '../content'

const RegenerationFlowModuleTimelinePoint = ({
    title,
    number,
    description,
}) => {
    return (
        <div style={{ gridTemplateColumns: '1fr auto 1fr' }} className='grid'>
            <div>
                {number % 2 === 0 && (
                    <RegenerationFlowModuleTimelineContent
                        title={title}
                        description={description}
                    />
                )}
            </div>
            <div className='flex items-center justify-center'>
                <div className='w-12 h-12 flex items-center justify-center mx-4 bg-blue-400 text-white font-bold rounded-full'>
                    <p>{number <= 9 ? `0${number}` : number}</p>
                </div>
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
