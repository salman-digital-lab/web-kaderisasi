import React from 'react'

const PageWrapper = ({ children }) => {
    return (
        <>
            <div>
                <main>{children}</main>
            </div>
        </>
    )
}

export default PageWrapper
