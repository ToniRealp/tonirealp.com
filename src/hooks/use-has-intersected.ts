import { useIntersection } from "react-use";
import { MutableRefObject, useState } from "react";

const useHasIntersected = (reference: MutableRefObject<any>, applicationHasLoaded:boolean) => {
    const [intersected, setIntersected] = useState(false);
    const intersection = useIntersection(reference, {
        root: null,
        rootMargin: "0px",
        threshold: 1,
    });

    if (intersection?.isIntersecting && !intersected && applicationHasLoaded) {
        setIntersected(true);
    }

    return intersected;
};

export default useHasIntersected;
