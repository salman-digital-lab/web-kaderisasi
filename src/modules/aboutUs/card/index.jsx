import React from 'react'

const AboutUsModuleCard = ({ number, text }) => {
    return (
        <div className='w-full flex items-center gap-4 shadow-level-1 rounded p-4'>
            <div>
                <p className='text-3xl text-bmka-primary-blue font-bold'>
                    {number}
                </p>
            </div>
            <div className='w-full text-left'>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default AboutUsModuleCard
