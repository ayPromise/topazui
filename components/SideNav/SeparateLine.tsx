import clsx from 'clsx'
import React from 'react'

const SeparateLine = ({ lineStyles }: { lineStyles?: string }) => {
    return (
        <div className={clsx('w-full border-t-2 my-2', lineStyles)}></div>
    )
}

export default SeparateLine