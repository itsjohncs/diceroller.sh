import {useRef} from "react";

import shallowEquals from "./shallowEquals";

/**
 * Returns the same object each time as long as they're equal.
 */
export default function useStableObject<
    T extends Record<string, any> | undefined | null,
>(obj: T): T {
    const ref = useRef<T>(obj);
    if (!shallowEquals(obj, ref.current)) {
        ref.current = obj;
    }
    return ref.current;
}
