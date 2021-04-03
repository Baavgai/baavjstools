export const permutations = domain => {
    const step = (h, tail) =>
        tail.reduce((acc, x, i, xs) => [...acc, [[...h, x], [...xs.slice(0, i), ...xs.slice(i + 1)]]], []);
    let q = [[[], domain]];
    for (let i = 0; i < domain.length; i++) {
        q = q.reduce((acc, xs) => [...acc, ...step(...xs)], []);
    }
    return q.map(([xs,_]) => xs);
};