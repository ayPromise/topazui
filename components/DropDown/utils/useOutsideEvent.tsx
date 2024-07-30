import { useEffect } from "react";

const useOutsideEvent = (ref: React.RefObject<HTMLDivElement>, event: () => void, nestedRefs: React.RefObject<HTMLDivElement>[] = []) => {
    useEffect(() => {

        const handleClickOutside = (e: MouseEvent) => {
            const isOutside = (ref.current && !ref.current.contains(e.target as Node));

            const isClickedOnNestedRef = nestedRefs.some(nestedRef => nestedRef.current && nestedRef.current.contains(e.target as Node))
            if (isOutside && isClickedOnNestedRef) {
                event();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => { document.removeEventListener("mousedown", handleClickOutside) };
    }, [ref, nestedRefs]);
}

export default useOutsideEvent;
