import type {MutableRefObject, RefCallback} from "react";

type RefType<T> = MutableRefObject<T> | RefCallback<T> | null;

function setRef<T>(ref: RefType<T>, value: T): void {
    if (typeof ref === "function") {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
}

/**
 * Creates a ref that will forward its value to two other refs.
 */
export default function splitRef<T>(
    refA: RefType<T>,
    refB: RefType<T>,
): RefCallback<T> {
    return function (value: T) {
        setRef(refA, value);
        setRef(refB, value);
    };
}
