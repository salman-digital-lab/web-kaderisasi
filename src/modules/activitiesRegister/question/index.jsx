/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
import React from 'react'
import {
    FormInput,
    FormTextArea,
    FormSelect,
    FormRadio,
    FormCheckbox,
    FormScale,
} from '@components'

const Question = ({
    currentStep,
    maxStep,
    questionnaire,
    handleChange,
    answer,
    mulai,
    akhir,
}) => {
    if (currentStep === 1 || currentStep === maxStep) {
        return null
    }
    return (
        <div className='w-full mx-auto my-4 flex flex-col p-2 md:p-4 gap-4'>
            {
                /**
                 * Map every JSON questionaire to component
                 */
                questionnaire.data.map((item, index) => {
                    if (index >= mulai && index <= akhir) {
                        if (item.type === 'text' || item.type === 'number') {
                            return (
                                <FormInput
                                    key={index}
                                    type={item.type}
                                    placeholder={item.label}
                                    name={item.name}
                                    label={item.label}
                                    value={answer[item.name]}
                                    onChange={handleChange}
                                    required={item.required}
                                />
                            )
                        }
                        if (item.type === 'scale') {
                            return (
                                <FormScale
                                    key={index}
                                    type='range'
                                    placeholder={item.label}
                                    label={item.label}
                                    name={item.name}
                                    min={item.data[0].min}
                                    max={item.data[0].max}
                                    onChange={handleChange}
                                    required={item.required}
                                    value={answer[item.name]}
                                />
                            )
                        }
                        if (item.type === 'paragraph_text') {
                            return (
                                <FormTextArea
                                    key={index}
                                    name={index}
                                    label={item.question}
                                    value={answer[item.name]}
                                    required={item.required}
                                    onChange={handleChange}
                                />
                            )
                        }
                        if (item.type === 'radio') {
                            return (
                                <>
                                    <div>
                                        {item.data.map((element, index2) =>
                                            index2 === 0 ? (
                                                <FormRadio
                                                    key={index2}
                                                    type='radio'
                                                    name={item.name}
                                                    value={element.value}
                                                    onChange={handleChange}
                                                    label={item.label}
                                                    required={item.required}
                                                    checked={
                                                        answer[item.name] ===
                                                        element.value
                                                    }
                                                />
                                            ) : (
                                                <FormRadio
                                                    key={index2}
                                                    type='radio'
                                                    name={item.name}
                                                    value={element.value}
                                                    onChange={handleChange}
                                                    checked={
                                                        answer[item.name] ===
                                                        element.value
                                                    }
                                                />
                                            )
                                        )}
                                    </div>
                                </>
                            )
                        }
                        if (item.type === 'option') {
                            return (
                                <>
                                    <div className=''>
                                        {item.data.map((element, index2) =>
                                            index2 === 0 ? (
                                                <FormCheckbox
                                                    key={index2}
                                                    type='checkbox'
                                                    name={item.name}
                                                    value={element.value}
                                                    onChange={handleChange}
                                                    required={item.required}
                                                    label={item.label}
                                                    checked={
                                                        answer[
                                                            item.name
                                                        ].indexOf(
                                                            element.value
                                                        ) >= 0
                                                    }
                                                />
                                            ) : (
                                                <FormCheckbox
                                                    key={index2}
                                                    type='checkbox'
                                                    name={item.name}
                                                    value={element.value}
                                                    onChange={handleChange}
                                                    checked={
                                                        answer[
                                                            item.name
                                                        ].indexOf(
                                                            element.value
                                                        ) >= 0
                                                    }
                                                />
                                            )
                                        )}
                                    </div>
                                </>
                            )
                        }
                        if (item.type === 'dropdown') {
                            return (
                                <FormSelect
                                    key={index}
                                    name={item.name}
                                    label={item.label}
                                    onChange={handleChange}
                                    required={item.required}
                                >
                                    {item.data.map((element, indexOption) => (
                                        <option
                                            value={element.value}
                                            defaultValue={
                                                answer[item.name] ===
                                                element.value
                                            }
                                            key={indexOption}
                                        >
                                            {element.label}
                                        </option>
                                    ))}
                                </FormSelect>
                            )
                        }
                    }
                })
            }
        </div>
    )
}

export default Question
