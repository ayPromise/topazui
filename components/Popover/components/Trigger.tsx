import React from 'react'

type TriggerProps = {
    children: React.ReactNode;
    className?: string;
}

const Trigger: React.FC<TriggerProps> = ({ children, className }) => {
    return (
        <div className={className}>{children}</div>
    )
}

Trigger.displayName = 'trigger'

export default Trigger