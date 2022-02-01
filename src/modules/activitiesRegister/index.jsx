/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */

import React, { useState } from 'react'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'
import axios from 'axios'
import { zustandStore } from '@services'

import { ComponentWrapper, Jumbotron, Button } from '@components'
import ProgressBar from './progressBar'
import FirstStep from './firstStep'
import FinalStep from './finalStep'
import Question from './question'

const ActivitesRegister = ({
    status,
    message,
    questionnaire,
    length,
    answers,
}) => {
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
    const maxPerPage = Math.ceil(length / 3)
    const maxStep = maxPerPage + 2
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL

    const [input, setInput] = useState({
        currentStep: 1,
        maxStep,
        mulai: 0,
        akhir: 2,
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

            //  if answer props exist, use answer to init answer
            if (answers) {
                answers.forEach((answer) => {
                    initAnswer[answer.id_name] = answer.answer
                })
            } else {
                questionnaire.map((item) => {
                    if (item.type === 'scale') {
                        const maxScale = parseInt(item.data[0].max, 10)
                        initAnswer[item.name] = maxScale / 2
                    } else if (item.type === 'dropdown') {
                        initAnswer[item.name] = item.data[0].value
                    } else if (item.type === 'checkbox') {
                        initAnswer[item.name] = []
                    } else {
                        initAnswer[item.name] = ''
                    }
                })
            }

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
            let newArray = [...input.answer[name], value]
            if (input.answer[name].includes(value)) {
                newArray = newArray.filter((target) => target !== value)
            }
            setInput({
                ...input,
                checkbox: newArray,
                answer: { ...input.answer, [name]: newArray },
            })
        } else if (type === 'range') {
            document.getElementById('scala').innerHTML = value
            setInput({
                ...input,
                answer: { ...input.answer, [name]: parseInt(value, 10) },
            })
        } else {
            setInput({
                ...input,
                answer: { ...input.answer, [name]: value },
            })
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
     * Function to parse number string answer to number
     */
    const parseAnswer = () => {
        const { answer } = input
        const newAnswer = {}
        Object.keys(answer).map((key) => {
            // check if type of question is number
            if (
                questionnaire.find((item) => item.name === key).type ===
                'number'
            ) {
                newAnswer[key] = parseFloat(answer[key])
            } else {
                newAnswer[key] = answer[key]
            }
        })
        return newAnswer
    }

    /**
     * Function to submit form answer
     */
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (input.currentStep === maxStep - 1) {
            const answer = parseAnswer()
            enqueueSnackbar('Mengirim data . . .', {
                variant: 'info',
            })
            await axios
                .post(
                    `${baseURL}/v1/activity/${slug}/register/submit`,
                    {
                        ...answer,
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
                    enqueueSnackbar(error.response.data.status, {
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
        const { answer } = input
        let empty = false

        console.log(empty)

        // get input element inside form
        const inputs = document?.querySelectorAll('input')
        // loop over input elements
        inputs.forEach((input) => {
            // check if input is empty and if input has required attribute
            if (input.value === '' && input.hasAttribute('required')) {
                // add class to input
                empty = true
            }
        })

        console.log(empty)

        // get radio element inside form
        const radios = document?.querySelectorAll('input[type=radio]')
        // loop over radio elements
        radios.forEach((radio) => {
            //get name of radio
            const name = radio.getAttribute('name')
            // check if answer radio is empty
            if (answer[name] === '' && radio.hasAttribute('required')) {
                empty = true
            }
        })

        // get checkbox based on name
        const checkboxes = document?.querySelectorAll('input[type=checkbox]')

        // make sure there is at least one checkbox checked
        checkboxes.forEach((checkbox) => {
            // get name of checkbox
            const name = checkbox.getAttribute('name')
            // check if answer checkbox is empty
            if (answer[name] === '' && checkbox.hasAttribute('required')) {
                empty = true
            }

            //remove attribute if atleast one checkbox is checked
            if (answer[name].length > 0) {
                checkbox.removeAttribute('required')
            }
        })

        if (empty === false && input.currentStep !== maxStep - 1) {
            next()
        } else {
            enqueueSnackbar('Silahkan isi form yang dibutuhkan', {
                variant: 'error',
            })
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
            {Object.keys(input.answer).length === 0 && length > 0 && setName()}
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
                <div className='w-full mt-5'>
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
                                    questionaire={length}
                                />
                                <Question
                                    currentStep={input.currentStep}
                                    maxStep={input.maxStep}
                                    handleChange={handleChange}
                                    questionnaire={questionnaire}
                                    mulai={input.mulai}
                                    akhir={input.akhir}
                                    answer={input.answer}
                                    length={length}
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
                                    {input.currentStep === maxStep - 1 &&
                                        length > 0 && (
                                            <Button
                                                type='submit'
                                                variant='secondary'
                                                onClick={checkform}
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
