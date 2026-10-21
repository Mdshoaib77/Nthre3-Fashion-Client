// Cart items used to be keyed only by size (cartData[itemId][size] = qty).
// To support the same product/size having different colors as separate
// cart line items, we now key by a composite "size__color" string when a
// color is selected, and fall back to the plain size (unchanged) when
// there's no color — this keeps old cart data / colorless products working
// exactly as before.

export const SEPARATOR = "__"

export const buildCartKey = (size, color) => {
    if (!color) return size
    return `${size}${SEPARATOR}${color}`
}

// Splits a composite key back into { size, color }. For legacy/plain keys
// (no separator), color will be an empty string.
export const parseCartKey = (key) => {
    if (!key || !key.includes(SEPARATOR)) {
        return { size: key, color: "" }
    }
    const [size, ...rest] = key.split(SEPARATOR)
    return { size, color: rest.join(SEPARATOR) }
}
