import React from 'react'
import { NextSeo } from 'next-seo'

const Head = ({ title }) => {
    const description = process.env.NEXT_PUBLIC_SEO_DESCRIPTION
    const titlePostfix = process.env.NEXT_PUBLIC_SEO_TITLE_POSTFIX

    const titleTemplate = `%s &#124; ${titlePostfix}`

    return (
        <NextSeo
            title={title}
            description={description}
            titleTemplate={titleTemplate}
        />
    )
}

Head.defautProps = {
    title: 'Oops!',
}

export default Head
