/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react'

import HandbookCheckbox from './checkbox'

const ProfileModuleContentHandBook = ({
    token,
    listChecklist,
    userChecklist,
    setUserChecklist,
}) => {
    const isChecklisted = (id) => {
        const filteredChecklist = userChecklist.filter((item) => item.id === id)

        return filteredChecklist.length > 0
    }

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
                                key={item.id}
                                token={token}
                                name={item.checklist_name}
                                userChecklist={userChecklist}
                                value={isChecklisted(item.id)}
                                setUserChecklist={setUserChecklist}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProfileModuleContentHandBook
