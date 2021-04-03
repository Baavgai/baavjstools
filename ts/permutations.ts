export const permutations = <T>(xs: T[])  => {
    const step = (h: T[], tail: T[]): [T[],T[]][] =>
        tail.reduce((acc, x, i, xs) => [...acc, [[...h, x], [...xs.slice(0, i), ...xs.slice(i + 1)]]], []);
    let q: Array<[T[],T[]]> = [[[], xs]];
    for (let i = 0; i < xs.length; i++) {
        q = q.reduce((acc, xs) => [...acc, ...step(...xs)], []);
    }
    return q.map(([xs,_]) => xs);
};