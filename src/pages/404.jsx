/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-pascal-case */

import React from 'react'

import { PageWrapper } from '@layout'
import { _404Module } from '@modules'

const _404 = () => {
    return (
        <PageWrapper title='Oops!'>
            <_404Module />
        </PageWrapper>
    )
}

export default _404
