/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */

import React, { useState } from 'react'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'
import axios from 'axios'
import { zustandStore } from '@services'

import { ComponentWrapper, Jumbotron, Link, Button } from '@components'
import ProgressBar from './progressBar'
import FirstStep from './firstStep'
import FinalStep from './finalStep'
import Question from './question'

const ActivitesRegister = ({ status, message, questionnaire }) => {
    // console.log(questionnaire)
    const state = {
        user: zustandStore((state) => state.user),
    }
    const { enqueueSnackbar } = useSnackbar()

    const displayMessage =
        message === 'E_INVALID_JWT_TOKEN: jwt must be provided'
            ? 'Silahkan login terlebih dahulu'
            : message

    const router = useRouter()
    const { slug } = router.query
    const maxPerPage = Math.ceil(questionnaire.data.length / 3)
    const maxStep = maxPerPage + 2
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL

    const [input, setInput] = useState({
        currentStep: 1,
        maxStep,
        mulai: 0,
        akhir: 2,
        checkbox: [],
        answer: {},
    })

    if (status === 'FAILED') {
        enqueueSnackbar(displayMessage, {
            variant: 'error',
        })
    }

    /**
     * Function to set name & default value
     */
    const setName = () => {
        if (Object.keys(input.answer) <= 0) {
            const initAnswer = {}
            questionnaire.data.map((item) => {
                if (item.type === 'scale') {
                    const maxScale = parseInt(item.data[0].Max, 10)
                    initAnswer[item.name] = maxScale / 2
                } else if (item.type === 'dropdown') {
                    initAnswer[item.name] = item.data[0].value
                } else {
                    initAnswer[item.name] = ''
                }
            })
            setInput({
                ...input,
                answer: { ...initAnswer },
            })
        }
    }
    /**
     * Function to handle change value in form
     */
    const handleChange = (event) => {
        const { value } = event.target
        const { type } = event.target
        const { name } = event.target

        if (type === 'checkbox') {
            let newArray = [...input.checkbox, value]
            if (input.checkbox.includes(value)) {
                newArray = newArray.filter((target) => target !== value)
            }
            setInput({
                ...input,
                checkbox: newArray,
                answer: { ...input.answer, [name]: newArray },
            })
        } else {
            if (type === 'range') {
                document.getElementById('scala').innerHTML = value
            }
            setInput({ ...input, answer: { ...input.answer, [name]: value } })
        }
    }

    /**
     * Function to increment step
     */
    const next = () => {
        const currentStep = input.currentStep + 1
        const mulai = currentStep > 2 ? input.mulai + 3 : 0
        const akhir = currentStep > 2 ? input.akhir + 3 : 2
        setInput({
            ...input,
            currentStep,
            mulai,
            akhir,
        })
    }

    /**
     * Function to submit form answer
     */
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (input.currentStep === maxStep - 1) {
            const { answer } = input
            enqueueSnackbar('Mengirim data . . .', {
                variant: 'info',
            })

            await axios
                .post(
                    `${baseURL}/v1/activity/register/submit/${slug}`,
                    {
                        answer,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${state.user.token}`,
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                        },
                    }
                )
                .then((res) => {
                    enqueueSnackbar(res.data.message, {
                        variant: 'success',
                    })

                    next()
                })
                .catch((error) => {
                    enqueueSnackbar(error.data.message, {
                        variant: 'error',
                    })
                })
        }
    }

    /**
     * Function to decrement step
     */
    const prev = () => {
        const currentStep = input.currentStep - 1
        const mulai = input.mulai - 3
        const akhir = input.akhir - 3
        setInput({
            ...input,
            currentStep,
            mulai,
            akhir,
        })
    }

    /**
     * Function to validate required form is filled or not
     */
    const checkform = () => {
        let empty = 0
        // get all the inputs within the submitted form
        const inputs = document.getElementsByTagName('input')
        for (let i = 0; i < inputs.length; i += 1) {
            // only validate the inputs that have the required attribute
            if (inputs[i].hasAttribute('required')) {
                if (inputs[i].value === '') {
                    // found an empty field that is required
                    empty += 1
                }
            }
        }
        if (empty === 0) {
            next()
        }
    }

    /**
     * push back to previous page
     */
    const backToPage = () => {
        router.push(`/activities/${slug}`)
    }

    return (
        <>
            {Object.keys(input.answer).length === 0 && setName()}
            {console.log(input.answer)}
            <Jumbotron>
                <h1 className='w-5/6 mx-auto md:w-full text-center text-white px-1 md:px-5 text-3xl md:text-4xl'>
                    Form Pendaftaran
                </h1>
                <p className='text-center text-white mt-4'>
                    Isi kuesioner berikut sebagai syarat untuk mengikuti
                    kegiatan dengan benar dan lengkap.
                </p>
            </Jumbotron>
            <ComponentWrapper>
                <div className='w-full'>
                    {status === 'FAILED' ? (
                        <div className='w-3/4 md:w-1/3 mx-auto flex flex-col gap-6 text-center rounded-lg shadow-lg p-6 my-10'>
                            <h3 className='font-bold text-bmka-primary-blue'>
                                Oops!
                            </h3>
                            <p>{displayMessage}</p>
                            <div>
                                <Button
                                    onClick={backToPage}
                                    variant='secondary'
                                >
                                    Kembali
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className='-mt-10 flex flex-col shadow-lg rounded-md bg-white p-4 mx-auto my-10 w-10/12 md:w-9/12 lg:w-6/12'>
                            <ProgressBar
                                currentStep={input.currentStep}
                                maxStep={maxStep}
                            />
                            <form className='' onSubmit={handleSubmit}>
                                <FirstStep
                                    currentStep={input.currentStep}
                                    questionaire={questionnaire.length}
                                />
                                <Question
                                    currentStep={input.currentStep}
                                    maxStep={input.maxStep}
                                    handleChange={handleChange}
                                    questionnaire={questionnaire}
                                    mulai={input.mulai}
                                    akhir={input.akhir}
                                    answer={input.answer}
                                />
                                <FinalStep
                                    currentStep={input.currentStep}
                                    maxStep={maxStep}
                                />
                                <div className='flex justify-around my-4 '>
                                    {input.currentStep > 1 &&
                                        input.currentStep < maxStep && (
                                            <Button
                                                type='button'
                                                onClick={prev}
                                                className='border border-bmka-primary-blue'
                                                textClassName='text-bmka-primary-blue'
                                            >
                                                Kembali
                                            </Button>
                                        )}
                                    {input.currentStep < maxStep - 1 &&
                                        input.currentStep >= 1 && (
                                            <Button
                                                type='button'
                                                variant='secondary'
                                                onClick={checkform}
                                            >
                                                Lanjut
                                            </Button>
                                        )}
                                    {input.currentStep === maxStep - 1 && (
                                        <Button
                                            type='submit'
                                            variant='secondary'
                                        >
                                            Kirim Kuesioner
                                        </Button>
                                    )}
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </ComponentWrapper>
        </>
    )
}

export default ActivitesRegister
