import React from 'react'

import { Button, FormInput, FormSelect } from '@components'

const ProfileModuleContentActivities = ({ activityCategoryData }) => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h3 className='font-bold'>Kegiatan</h3>
                <form className='flex gap-2'>
                    <FormInput placeholder='Cari Kegiatan' />
                    <Button variant='secondary'>Cari</Button>
                </form>
            </div>
            <div className='mt-6 max-w-xs'>
                <FormSelect value=''>
                    <option value=''>Semua</option>
                    {activityCategoryData.map((item) => {
                        return <option>{item.name}</option>
                    })}
                </FormSelect>
            </div>
        </div>
    )
}

export default ProfileModuleContentActivities
