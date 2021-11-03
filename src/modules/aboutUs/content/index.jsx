/* eslint-disable react/no-array-index-key */

import React from 'react'

import { kegiatanTentangKamiJSON } from '@json'

import Card from '../card'

const AboutUsModuleContent = () => {
    return (
        <div className='w-full text-center'>
            <h3 className='font-bold'>
                Ada banyak kegiatan yang ada di BMKA salman ITB
            </h3>
            <div className='w-full flex flex-col gap-6 mt-8'>
                {kegiatanTentangKamiJSON.map((item, index) => {
                    return (
                        <Card key={index} number={index + 1} text={item.text} />
                    )
                })}
            </div>
        </div>
    )
}

export default AboutUsModuleContent
