import React, { createContext, useEffect, useState } from 'react'

type InputContextType = {
    error: boolean;
    setError: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InputContext = createContext<InputContextType | null>(null)

export const InputProvider = ({ children, error }: { children: React.ReactNode; error: boolean }) => {
    const [isError, setError] = useState<boolean>(error)

    useEffect(() => {
        setError(error);
    }, [error]);

    return (
        <InputContext.Provider value={{ error: isError, setError }}>{children}</InputContext.Provider>
    )
}

export default InputProvider