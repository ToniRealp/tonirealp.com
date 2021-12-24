import { useIntersection } from "react-use";
import { MutableRefObject, useState } from "react";

const useHasIntersected = (reference: MutableRefObject<any>) => {
    const [intersected, setIntersected] = useState(false);
    const intersection = useIntersection(reference, {
        root: null,
        rootMargin: "0px",
        threshold: 1,
    });

    if (intersection?.isIntersecting && !intersected) {
        setIntersected(true);
    }

    return intersected;
};

export default useHasIntersected;
