import { useEffect } from "react"

const useOutsideEvent = (ref: React.RefObject<HTMLDivElement>, event: () => void) => {
    useEffect(() => {

        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node))
                event()
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => { document.removeEventListener("mousedown", handleClickOutside) }
    }, [])
}

export default useOutsideEvent