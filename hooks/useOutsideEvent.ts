import { useEffect } from "react";

const useOutsideEvent = (ref: React.RefObject<any>, event: () => void, nestedRefs: React.RefObject<any>[] = []) => {
    useEffect(() => {

        const handleClickOutside = (e: MouseEvent) => {
            const isOutside = (ref.current && !ref.current.contains(e.target as Node));

            const isClickedOnNestedRef = nestedRefs.length > 0 ? nestedRefs.some(nestedRef => nestedRef.current && nestedRef.current.contains(e.target as Node)) : true;

            if (isOutside && isClickedOnNestedRef) {
                event();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => { document.removeEventListener("mousedown", handleClickOutside) };
    }, [ref, nestedRefs]);
}

export default useOutsideEvent;
