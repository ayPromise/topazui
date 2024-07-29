import React, { MouseEventHandler } from 'react';
import clsx from 'clsx';

export type ItemProps = {
    title?: string;
    NestedDropDownMenu?: React.ReactElement;
    path?: string;
    action?: MouseEventHandler;
    isSeparated?: boolean;
};

type DefaultMenuListProps = {
    items: ItemProps[];
};

const DefaultMenuList: React.FC<DefaultMenuListProps> = ({ items }) => {
    return (
        <ul className='bg-gray-200 shadow-2xl rounded text-sm text-black'>
            {items.map((item, index) => {
                const itemStyles = clsx("block w-full px-4 py-2 hover:bg-gray-400 hover:text-gray-text cursor-pointer first:rounded-t last:rounded-b",
                    {
                        "py-3 border-gray-300 border-b-2 border-t-2 first:border-t-0 last:border-b-0": item.isSeparated
                    }
                )

                if (item.NestedDropDownMenu) {
                    const NestedDropDown = item.NestedDropDownMenu
                        ? React.cloneElement(item.NestedDropDownMenu, { key: `nested-${index}`, className: clsx(itemStyles, item.NestedDropDownMenu.props.className) })
                        : null;

                    return NestedDropDown
                }

                if (item.path)
                    return <a key={item.path} className={itemStyles} href={item.path} >
                        {item.title}</a>

                return <div key={item.title} className={itemStyles} onClick={item.action}>
                    {item.title}
                </div>
            })}
        </ul>
    );
};

export default DefaultMenuList;
