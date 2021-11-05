import React from 'react'
import {
    Button,
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
    console.log(questionnaire)
    if (currentStep === 1 || currentStep === maxStep) {
        return null
    }
    return (
        <div className='w-10/12 md:w-10/12 mx-auto my-4 flex flex-col p-4'>
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
                                </>
                            )
                        }
                        if (item.type === 'option') {
                            return (
                                <>
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
                                                    answer[item.name].indexOf(
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
                                                    answer[item.name].indexOf(
                                                        element.value
                                                    ) >= 0
                                                }
                                            />
                                        )
                                    )}
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
