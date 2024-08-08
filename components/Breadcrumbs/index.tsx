import React, { Children, useState } from 'react';
import { tv } from 'tailwind-variants';
import { ChildrenAndStyles } from '@/types';
import LinkItem from './components/LinkItem';

type BreadcrumbsProps = {
    separator?: React.ReactNode;
    maxItems?: number;
} & ChildrenAndStyles



const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ children, className, separator = "/", maxItems }) => {

    const [showAll, setShowAll] = useState<boolean>(false)

    const breadcrumbsStyles = tv({
        base: "inline-flex items-center gap-2"
    })


    //@ts-ignore
    const childrenArray = (children && children.type === React.Fragment) ? Children.toArray(children.props.children) : Children.toArray(children)

    let maxBreadcrumbsLength: number = maxItems && !showAll ? maxItems : childrenArray.length


    const hideStyles = tv({
        base: 'cursor-pointer bg-gray-200 px-2 rounded'
    })

    return (
        <nav className={breadcrumbsStyles({ className })}>
            {/*Rendering all breadcrumbs links*/}
            {childrenArray.map((child, index) => {

                {/*Case with limitation to render primarily the first and the last link*/ }

                if (index === 0 || index === childrenArray.length - 1 || index < maxBreadcrumbsLength - 1 || showAll)
                    return <LinkItem key={index} childrenArray={childrenArray} separator={separator} index={index}>{child}</LinkItem>

                else if (index === maxBreadcrumbsLength - 1 && !showAll) {

                    {/*Case with dumping into limit*/ }

                    return (
                        <React.Fragment key={index}>
                            <div className={hideStyles()} onClick={() => setShowAll(true)}>...</div>
                            {index < childrenArray.length - 1 && <span className=''>{separator}</span>}
                        </React.Fragment>
                    );


                }
                return null;
            })}
        </nav>
    );
};




const HiddenTag = () => {

}

const Separator = () => {

}

export default Breadcrumbs
