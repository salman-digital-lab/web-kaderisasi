import React from 'react'

import { Button, FormInput, FormSelect } from '@components'

const ProfileModuleContentActivities = ({
    userActivities,
    activityCategoryData,
}) => {
    return (
        <div>
            <div className='flex flex-col-reverse gap-6 justify-between items-center sm:flex-row'>
                <div className='w-full block sm:hidden'>
                    <FormSelect value='' fullWidth>
                        <option value=''>Semua</option>
                        {activityCategoryData.map((item) => {
                            return <option>{item.name}</option>
                        })}
                    </FormSelect>
                </div>

                {/* Responsive */}
                <div className='hidden sm:block'>
                    <FormSelect value=''>
                        <option value=''>Semua</option>
                        {activityCategoryData.map((item) => {
                            return <option>{item.name}</option>
                        })}
                    </FormSelect>
                </div>

                <form className='hidden gap-2 sm:flex'>
                    <FormInput placeholder='Cari Kegiatan' />
                    <Button variant='secondary'>Cari</Button>
                </form>

                {/* Responsive */}
                <form className='w-full flex gap-2 sm:hidden'>
                    <FormInput placeholder='Cari Kegiatan' fullWidth />
                    <Button variant='secondary'>Cari</Button>
                </form>
            </div>
            <div>
                {/* {userActivities.length > 0 ? (
                    <div />
                ) : (
                    <div className='w-full py-20 text-center'>
                        <p>Tidak ada kegiatan</p>
                    </div>
                )} */}
            </div>
        </div>
    )
}

export default ProfileModuleContentActivities
