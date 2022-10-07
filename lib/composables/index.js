export const isObject = (o) => o && typeof o === "object";

export const merge = (a, b) => {
    Object.entries(b).forEach(([k, v]) => {
        return a[k] = isObject(v) ? merge(a[k] || {}, v) : v
    });
    return a;
};