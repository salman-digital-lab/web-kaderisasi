import React from 'react'

const activitiesRegister = ({ slug }) => {
    console.log(slug)
    return <h1>test</h1>
}

export async function getServerSideProps(ctx) {
    const { slug } = ctx.params
    return {
        props: { slug }, // will be passed to the page component as props
    }
}

export default activitiesRegister
