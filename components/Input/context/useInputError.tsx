import { useContext } from "react"
import { InputContext } from "./InputContext"

const useInputError = () => {
    const context = useContext(InputContext);
    if (!context) {
        throw new Error('useInputError must be used within an InputProvider');
    }
    return context;
};

export default useInputError