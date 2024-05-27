function isObject(value: unknown): value is {[k: string]: unknown} {
    return typeof value === "object" && value !== null;
}

function shallowEquals<A, B extends A>(a: A, b: B): boolean;
function shallowEquals<B, A extends B>(a: A, b: B): boolean;
function shallowEquals(a: unknown, b: unknown): boolean {
    // This is mostly just meant to allow a or b to be null and for things to
    // work out.
    if (!isObject(a) || !isObject(b)) {
        return a === b;
    }

    const keys = Object.keys(a);

    if (keys.length !== Object.keys(b).length) {
        return false;
    }

    for (const k of keys) {
        if (!Object.prototype.hasOwnProperty.call(b, k) || a[k] !== b[k]) {
            return false;
        }
    }

    return true;
}

export default shallowEquals;
