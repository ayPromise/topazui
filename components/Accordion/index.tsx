import React, { ComponentProps, ElementType, PropsWithChildren } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import AccordionProvider from './context/AccordionContext'
import Item from './components/Item'
import { tv } from 'tailwind-variants'

type AccordionCustomProps<E extends ElementType = ElementType> = {
    children: React.ReactNode;
    className?: string;
    multipleSelection: boolean;
    as?: E
}

type AccordionProps<E extends ElementType> = AccordionCustomProps<E> & Omit<ComponentProps<E>, keyof AccordionCustomProps<E>>

const defaultElementType = "div"

const AccordionComponent = <E extends ElementType = typeof defaultElementType>({ className, as: Component = defaultElementType as E, ...props }: AccordionProps<E>) => {

    const accordionStyles = tv({
        base: 'w-full overflow-hidden'
    })

    //@ts-ignore
    return <Component omponent className={accordionStyles({ className })} {...props} />
}

const Accordion = <E extends ElementType = typeof defaultElementType>({ ...props }: AccordionProps<E>) => {
    return <AccordionProvider multipleSelection={props.multipleSelection}>
        <AccordionComponent {...props} />
    </AccordionProvider>
}

export default Object.assign(Accordion, {
    Item: Item,
    Header: Header,
    Body: Body

})