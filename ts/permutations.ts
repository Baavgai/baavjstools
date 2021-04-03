export const permutations = <T>(domain: T[]) => {
  const step = (h: T[], tail: T[]): [T[], T[]][] =>
    tail.reduce((acc: [T[], T[]][], x: T, i: number, xs: T[]): [T[], T[]][] =>
      [...acc, [[...h, x], [...xs.slice(0, i), ...xs.slice(i + 1)]]], []);

  let q: [T[], T[]][] = [[[], domain]];
  for (let i = 0; i < domain.length; i++) {
    q = q.reduce((acc, [h, tail]) => [...acc, ...step(h, tail)], [] as [T[], T[]][]);
  }
  return q.map(([xs, _]) => xs);
};
