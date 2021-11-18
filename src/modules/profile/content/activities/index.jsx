import React from 'react'

import { Button, FormInput, FormSelect } from '@components'

const ProfileModuleContentActivities = ({
    userActivities,
    activityCategoryData,
}) => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <FormSelect value=''>
                    <option value=''>Semua</option>
                    {activityCategoryData.map((item) => {
                        return <option>{item.name}</option>
                    })}
                </FormSelect>
                <form className='flex gap-2'>
                    <FormInput placeholder='Cari Kegiatan' />
                    <Button variant='secondary'>Cari</Button>
                </form>
            </div>
            <div>
                {userActivities.length > 0 ? (
                    <div />
                ) : (
                    <div className='w-full py-20 text-center'>
                        <p>Tidak ada kegiatan</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfileModuleContentActivities
