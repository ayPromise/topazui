import clsx from 'clsx'
import React from 'react'
import ListItem from './types/ListItem'
import SeparateLine from './SeparateLine';
import Link from 'next/link';

type SideNavProps = {
    logo?: React.ReactNode;
    title?: string;
    separatedFrom?: number | number[];
    items: ListItem[];
    customStyles?: SideNavCustomStyles;
    isOpen?: boolean;
}

const SideNav: React.FC<SideNavProps> = ({ items, logo, title, separatedFrom, customStyles, isOpen = true }) => {
    let targetLines = Array.isArray(separatedFrom) ? [...separatedFrom] : null

    function popNumber(targetLines: number[], num: number) {
        targetLines.filter(line => line !== num)
    }

    const sideBarStyles = clsx("fixed top-0 left-0 z-40 w-64 h-screen transition-transform  border-r-2",
        { "-translate-x-full": !isOpen }, customStyles?.sideBar)
    const contentContainer = clsx("h-full px-3 py-4 overflow-y-auto bg-white", customStyles?.contentContainer)
    const itemListStyles = clsx("space-y-2 font-medium")

    const itemStyle = clsx("flex-1 flex items-center justify-between p-2 text-gray-900 rounded-lg hover:bg-gray-100 cursor-pointer",
        customStyles?.item)
    const addContentStyle = clsx("inline-flex items-center justify-center px-3 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300")
    return (
        <aside id="sidebar" className={sideBarStyles} aria-label="Sidebar">
            <div className={contentContainer}>
                {logo && <Link href="/" className='ms-5 mb-3 flex gap-2'>
                    {logo}
                    <div className='text-xl font-bold flex items-center'>{title}</div>
                </Link>}
                <ul className={itemListStyles}>
                    {items.map((item, index) => (<li key={item.title?.toString()}>

                        {targetLines?.includes(index) && <>
                            {popNumber(targetLines, index)}
                            <SeparateLine lineStyles={customStyles?.separateLine} />
                        </>}

                        {separatedFrom === index && <SeparateLine lineStyles={customStyles?.separateLine} />}

                        {item.path && <Link href={item.path} className={itemStyle}>
                            <span className="ms-3 w-full"><div className='flex gap-2'>{item.icon} {item.title}</div></span>
                            {item.addContent && <span className={addContentStyle}>{item.addContent}</span>}
                        </Link>}

                        {item.action && <span className={itemStyle} onClick={item.action}>
                            <span className="ms-3 w-full">{item.icon} {item.title}</span>
                            {item.addContent && <span className={addContentStyle}>{item.addContent}</span>}
                        </span>}

                        {!item.action && !item.path && <span className={itemStyle}>
                            <span className="ms-3 w-full">{item.icon} {item.title}</span>
                            {item.addContent && <span className={addContentStyle}>{item.addContent}</span>}
                        </span>}
                    </li>))}
                </ul>
            </div>
        </aside >
    )
}

export default SideNav