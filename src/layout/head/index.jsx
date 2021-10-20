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
                        url: 'https://gitlab.com/raflyfahrezi/web-kaderisasi-salman-itb/-/raw/main/public/assets/banner.png',
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
