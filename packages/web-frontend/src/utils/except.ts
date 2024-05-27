import type {Except} from "type-fest";

function except<T, K extends readonly (keyof T)[]>(
    obj: T,
    keys: K,
): Except<T, K[number]> {
    const newObj = {...obj};
    for (const k of keys) {
        delete newObj[k];
    }
    return newObj as unknown as Except<T, K[number]>;
}

export default except;
