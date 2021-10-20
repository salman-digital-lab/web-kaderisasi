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
                        width: 1011,
                        height: 465,
                        alt: 'Kaderisasi Salman ITB (BMKA)',
                        url: 'https://firebasestorage.googleapis.com/v0/b/data-center-production.appspot.com/o/image%2FBanner%20BMKA.png?alt=media&token=cf1ad030-3aba-4f12-a480-56455d6a9eae',
                    },
                    {
                        url: 'https://firebasestorage.googleapis.com/v0/b/data-center-production.appspot.com/o/image%2FBanner%20BMKA.png?alt=media&token=cf1ad030-3aba-4f12-a480-56455d6a9eae',
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
