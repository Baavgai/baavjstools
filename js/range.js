export const range = size => {
    const xs = new Array(size);
    for (let i = 0; i < size; i++) {
        xs[i] = i;
    }
    return xs;
};
