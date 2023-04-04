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

            return await response.data.data.data
        }
        try {
            const studentCareFetchData = await getStudentCareData()
            setStudentCareData(studentCareFetchData)
        } catch (error) {
            enqueueSnackbar('Error getting region data', { variant: 'error' })
        }
    }, [])

    return (
        <div className='flex flex-col gap-3'>
            {studentCareData
                ? studentCareData.map((item) => (
                      <div
                          key={item.id}
                          className='p-4 flex flex-col justify-between border-2 bg-white cursor-default border-bmka-primary-blue rounded'
                      >
                          <p className='text-sm text-gray-400'>
                              ID : {item.id}
                          </p>
                          <p className='text-sm text-gray-400'>
                              {item.created_at}
                          </p>

                          <div className='flex mt-4 justify-between'>
                              <div>
                                  <h2 className='text-xl'>
                                      Masalah {item.problem_owner}
                                  </h2>
                                  <h4 className='text-bmka-primary-blue'>
                                      {item.problem_category}
                                  </h4>
                              </div>
                              <div className='flex items-center bg-bmka-primary-blue rounded p-2'>
                                  <h4 className='text-white'>
                                      {item.status_handling}
                                  </h4>
                              </div>
                          </div>
                          <div>
                                <div className='flex'>
                                    <h3 className='text-md w-20 text-red-400 font-semibold'>
                                        Deskripsi : 
                                    </h3>
                                    <p className='text-md w-52 text-red-400'>
                                        {item.problem_category_desk}
                                    </p>
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
                                      <p className='text-sm w-28'>
                                          Nama :
                                      </p>
                                      <p className='text-sm'>
                                          {item.counselor_name}
                                      </p>
                                  </div>
                                  <div className='flex'>
                                      <p className='text-sm w-28'>
                                          Penanganan :
                                      </p>
                                      <p className='text-sm'>
                                          {item.technical_handling}
                                      </p>
                                  </div>
                                  <div className='flex'>
                                      <p className='text-sm w-28'>
                                          Jenis Kelamin :
                                      </p>
                                      <p className='text-sm'>
                                          {item.counselor_gender}
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))
                : null}
        </div>
    )
}

export default ProfileModuleStudentCare
