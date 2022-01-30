import React from 'react'

import { formatDate } from '@utils'
import { ActivityCard, Button, FormInput, FormSelect } from '@components'

const ProfileModuleContentActivities = ({
    userActivities,
    activityCategoryData,
}) => {
    console.log(userActivities)

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

            {userActivities?.length > 0 ? (
                <div
                    className='w-full grid gap-6 pt-6'
                    style={{
                        gridTemplateColumns:
                            'repeat(auto-fill, minmax(270px, 1fr))',
                    }}
                >
                    {userActivities?.map((item) => {
                        const {
                            name,
                            minimum_role,
                            slug,
                            created_at,
                            category_id,
                            banner_image,
                            register_end_date,
                        } = item

                        return (
                            <ActivityCard
                                key={slug}
                                name={name}
                                slug={slug}
                                role={minimum_role?.name}
                                categoryId={category_id}
                                banner={banner_image?.file}
                                createdAt={formatDate(created_at)}
                                activityCategoryData={activityCategoryData}
                                registerEndDate={formatDate(register_end_date)}
                                fullWidth
                            />
                        )
                    })}
                </div>
            ) : (
                <div className='w-full py-20 text-center'>
                    <p>Tidak ada kegiatan</p>
                </div>
            )}
        </div>
    )
}

export default ProfileModuleContentActivities
