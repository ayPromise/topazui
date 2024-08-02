import React, { MouseEventHandler } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

export type ItemProps = {
    title?: string;
    NestedDropDownMenu?: React.ReactElement;
    path?: string;
    action?: MouseEventHandler;
    isSeparated?: boolean;
};

type DefaultMenuListProps = {
    items: ItemProps[];
    customItemStyles?: string;
};

const DefaultMenuList: React.FC<DefaultMenuListProps> = ({ items, customItemStyles }) => {
    return (
        <ul>
            {items.map((item, index) => {
                const itemStyles = clsx("block w-full min-w-[130px] px-4 py-2 hover:bg-gray-400 hover:text-gray-text cursor-pointer first:rounded-t last:rounded-b",
                    {
                        "border-gray-300 border-b-2 border-t-2 first:border-t-0 last:border-b-0": item.isSeparated
                    },
                    customItemStyles
                )

                if (item.NestedDropDownMenu) {
                    const NestedDropDown = item.NestedDropDownMenu
                        ? React.cloneElement(item.NestedDropDownMenu, { key: `nested-${index}`, className: clsx(itemStyles) })
                        : null;

                    console.log(NestedDropDown)

                    return NestedDropDown
                }

                if (item.path)
                    return <Link key={item.path} className={itemStyles} href={item.path} >
                        {item.title}</Link>

                return <div key={item.title} className={itemStyles} onClick={item.action}>
                    {item.title}
                </div>
            })}
        </ul>
    );
};

export default DefaultMenuList;
