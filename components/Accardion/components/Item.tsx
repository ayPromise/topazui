import React from 'react'
import ItemProvider from '../context/ItemContext'
import { tv } from 'tailwind-variants';

type ItemProps = {
    children: React.ReactNode
    className?: string;
    defaultOpen?: boolean
}

const ItemComponent = ({ children, className }: ItemProps) => {
    const itemStyles = tv({ base: 'first:rounded-t-xl last:rounded-b-xl border' })
    return <div className={itemStyles({ className })}>{children}</div>

}

const Item = (props: ItemProps) => {
    return (
        <ItemProvider defaultOpen={props.defaultOpen || false}>
            <ItemComponent {...props} />
        </ItemProvider>
    )
}

export default Item