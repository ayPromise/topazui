import React from 'react'
import { tv } from 'tailwind-variants'

const SeparateLine = ({ className }: { className?: string }) => {
    const lineStyles = tv({
        base: 'w-full bg-gray-200 min-h-[2px] border-0 rounded'
    })
    return (
        <hr className={lineStyles({ className })}></hr>
    )
}

SeparateLine.displayName = 'separateLine'

export default SeparateLine