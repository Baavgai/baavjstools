export const permutations = xs => {
    const pass = (h, tail) =>
        tail.reduce((acc, x, i, xs) => [...acc, [[...h, x], [...xs.slice(0, i), ...xs.slice(i + 1)]]], []);
    let q = [[[], xs]];
    for (let i = 0; i < xs.length; i++) {
        q = q.reduce((acc, xs) => [...acc, ...pass(...xs)], []);
    }
    return q.map(([xs,_]) => xs);
};