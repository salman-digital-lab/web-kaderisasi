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
                questionnaire.map((item, index) => {
                    const inputProps = {
                        key: index,
                        name: item.name,
                        label: item.label,
                        onChange: handleChange,
                        required: item.required,
                        placeholder: item.label,
                        value: answer[item.name],
                        type: item.type,
                    }
                    if (index >= mulai && index <= akhir) {
                        if (item.type === 'text' || item.type === 'number') {
                            delete inputProps.type
                            return <FormInput {...inputProps} type='text' />
                        }
                        if (item.type === 'scale') {
                            delete inputProps.type
                            return (
                                <FormScale
                                    type='range'
                                    min={item.data[0].min}
                                    max={item.data[0].max}
                                    {...inputProps}
                                />
                            )
                        }
                        if (item.type === 'paragraph_text') {
                            return <FormTextArea {...inputProps} />
                        }
                        if (item.type === 'radio') {
                            delete inputProps.key
                            delete inputProps.value
                            delete inputProps.placeholder
                            delete inputProps.label
                            return (
                                <>
                                    <div>
                                        {item.data.map((element, index2) =>
                                            index2 === 0 ? (
                                                <FormRadio
                                                    key={index2}
                                                    value={element.value}
                                                    checked={
                                                        answer[item.name] ===
                                                        element.value
                                                    }
                                                    label={item.label}
                                                    {...inputProps}
                                                />
                                            ) : (
                                                <FormRadio
                                                    key={index2}
                                                    value={element.value}
                                                    {...inputProps}
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
                            delete inputProps.key
                            delete inputProps.value
                            delete inputProps.type
                            delete inputProps.placeholder
                            delete inputProps.label
                            delete inputProps.required
                            return (
                                <>
                                    <div className=''>
                                        {item.data.map((element, index2) =>
                                            index2 === 0 ? (
                                                <FormCheckbox
                                                    key={index2}
                                                    type='checkbox'
                                                    value={element.value}
                                                    label={item.label}
                                                    {...inputProps}
                                                    required={item.required}
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
                                                    value={element.value}
                                                    {...inputProps}
                                                    required={item.required}
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
                            delete inputProps.value
                            delete inputProps.type
                            delete inputProps.placeholder
                            return (
                                <FormSelect
                                    {...inputProps}
                                    defaultValue={answer[item.name]}
                                >
                                    <option
                                        disabled
                                        defaultValue
                                        hidden
                                        value=''
                                    >
                                        {item.label}
                                    </option>

                                    {item.data.map((element, indexOption) => (
                                        <option
                                            value={element.value}
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
