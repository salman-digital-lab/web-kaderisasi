import { useEffect, useState } from 'react'
import cookies from 'js-cookie'

import axios from 'axios'

const ProfileModuleStudentCare = () => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL
    const baseURLVersion = process.env.NEXT_PUBLIC_BASE_URL_VERSION
    const userCookieName = process.env.NEXT_PUBLIC_KEY_COOKIES_USER

    const [studentCareData, setStudentCareData] = useState([])

    useEffect(async () => {
        const token = cookies.get(userCookieName)

        const getStudentCareData = async () => {
            const response = await axios.get(
                `${baseURL}/${baseURLVersion}/account/user/studentCares`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            return await response.data.data
        }
        try {
            const studentCareFetchData = getStudentCareData()
            setStudentCareData(studentCareFetchData)
        } catch (error) {
            enqueueSnackbar('Error getting region data', { variant: 'error' })
        }
    }, [])

    return (
        <div>
            <div className='p-4 flex flex-col justify-between border-2 bg-white cursor-default border-bmka-primary-blue rounded'>
                <p className='text-sm text-gray-400'>ID : 34f34ed2r443</p>
                <p className='text-sm text-gray-400'>13/2/2022</p>

                <div className='flex mt-4 justify-between'>
                    <div>
                        <h2 className='text-xl'>Masalah Diri Sendiri</h2>
                        <h4 className='text-bmka-primary-blue'>
                            Kesehatan Mental
                        </h4>
                    </div>
                    <div className='flex items-center bg-bmka-primary-blue rounded p-2'>
                        <h4 className='text-white'>Sedang di Tangani</h4>
                    </div>
                </div>
                <div
                    className='flex justify-between mt-4 border-bmka-accent-orange rounded border-2 p-2'
                    style={{ width: '21rem' }}
                >
                    <div>
                        <h4 className='text-bmka-accent-orange text-lg'>
                            Konselor
                        </h4>
                    </div>
                    <div className='flex flex-col justify-center text-gray-500'>
                        <div className='flex'>
                            <p className='text-sm w-28'>Penanganan :</p>
                            <p className='text-sm'>Langsung</p>
                        </div>
                        <div className='flex'>
                            <p className='text-sm w-28'>Jenis Kelamin :</p>
                            <p className='text-sm'>Perempuan</p>
                        </div>
                    </div>
                </div>

                <p className='mt-4'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    )
}

export default ProfileModuleStudentCare
