import React from "react";
import { tv } from "tailwind-variants";

type LinkItemProps = {
    children: React.ReactNode;
    separator: React.ReactNode;
    childrenArray: React.ReactNode[];
    index: number;
}
const LinkItem: React.FC<LinkItemProps> = ({ children, separator, childrenArray, index }) => {

    const itemStyles = tv({
        base: 'text-sm font-medium text-gray-700 hover:text-blue-600 last:pointer-events-none'
    })

    return <>
        {React.isValidElement(children) ?
            React.cloneElement(children as React.ReactElement, { className: itemStyles({ className: children.props.className }) })
            :
            children
        }
        {index < childrenArray.length - 1 && <span>{separator}</span>}
    </>
}

export default LinkItem;