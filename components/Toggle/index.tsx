import React, { useState } from 'react'
import { tv } from 'tailwind-variants'
import Label from '../Label'
import { ChildrenAndStyles } from '@/types'

type ToggleProps = {
    id: string;
    value: any;
    containerStyles?: string;
    variant: 'blue' | 'red' | 'yellow' | 'green' | 'indigo' | 'purple' | 'pink'
    active?: boolean
} & ChildrenAndStyles

const Toggle: React.FC<ToggleProps> = ({ children, className, id, value, containerStyles, variant, active = false }) => {
    const [isActive, setIsActive] = useState<boolean>(active)
    const toggleStyles = tv({
        base: "relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all cursor-pointer",
        variants: {
            variant: {
                blue: 'peer-checked:bg-blue-solid peer-focus:ring-blue-300',
                red: 'peer-checked:bg-red-solid peer-focus:ring-red-300',
                yellow: 'peer-checked:bg-yellow-solid peer-focus:ring-yellow-300',
                green: 'peer-checked:bg-green-solid peer-focus:ring-green-300',
                indigo: 'peer-checked:bg-indigo-solid peer-focus:ring-indigo-300',
                purple: 'peer-checked:bg-purple-solid peer-focus:ring-purple-300',
                pink: 'peer-checked:bg-pink-solid peer-focus:ring-pink-300',
            },
            isActive: {
                true: 'peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white ',
                false: ''
            }
        },
    })

    const labelStyles = tv({
        base: 'inline-flex gap-3 items-center cursor-pointer select-none'
    })


    return <Label htmlFor={id} className={labelStyles({ className: containerStyles })} onClick={() => setIsActive(!active)}>
        <input type="checkbox" className="sr-only peer" id={id} />
        <div className={toggleStyles({ className, variant, isActive })} />
        {children}
    </Label>
}

export default Toggle