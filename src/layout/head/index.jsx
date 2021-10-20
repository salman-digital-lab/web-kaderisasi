import React from 'react'
import { NextSeo } from 'next-seo'

const Head = ({ title }) => {
    const description = process.env.NEXT_PUBLIC_SEO_DESCRIPTION
    const titlePostfix = process.env.NEXT_PUBLIC_SEO_TITLE_POSTFIX

    const titleTemplate = `%s | ${titlePostfix}`

    return (
        <NextSeo
            title={title}
            description={description}
            titleTemplate={titleTemplate}
            additionalLinkTags={[
                { rel: 'shortcut icon', href: '/assets/favicon.png' },
            ]}
            openGraph={{
                description,
                type: 'website',
                url: 'https://kaderisasi.salmanitb.com/',
                title: `${title} | ${titlePostfix}`,
                images: [
                    {
                        width: 1129,
                        height: 465,
                        alt: 'Kaderisasi Salman ITB (BMKA)',
                        url: 'https://firebasestorage.googleapis.com/v0/b/data-center-production.appspot.com/o/image%2Fbanner_bmka.png?alt=media&token=0f2b44e4-85d7-4e4d-9c61-bea167f1e7ab',
                    },
                    {
                        url: 'https://firebasestorage.googleapis.com/v0/b/data-center-production.appspot.com/o/image%2Fbanner_bmka.png?alt=media&token=0f2b44e4-85d7-4e4d-9c61-bea167f1e7ab',
                    },
                ],
            }}
        />
    )
}

Head.defautProps = {
    title: 'Oops!',
}

export default Head
