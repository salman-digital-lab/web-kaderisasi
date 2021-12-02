import React from 'react'

import HandbookCheckbox from './checkbox'

const ProfileModuleContentHandBook = ({
    listChecklist,
    userChecklist,
    setUserChecklist,
}) => {
    return (
        <div>
            <div
                className='mb-10 rounded'
                style={{ backgroundColor: '#F4FAFC' }}
            >
                <div className='px-6 py-4 rounded bg-bmka-primary-blue'>
                    <h3 className='font-bold text-white'>Daftar Misi</h3>
                </div>
                <div className='p-4 flex flex-col gap-4'>
                    {listChecklist.map((item) => {
                        return (
                            <HandbookCheckbox
                                id={item.id}
                                value={false}
                                name={item.checklist_name}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProfileModuleContentHandBook
