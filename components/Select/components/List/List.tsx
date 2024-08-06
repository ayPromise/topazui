import { ChildrenAndStyles } from '@/types'
import React from 'react'

const List = ({ children, className }: ChildrenAndStyles) => {
    return (
        <div className='flex gap-4'>{children}</div>
    )
}

List.displayName = 'list'

export default List