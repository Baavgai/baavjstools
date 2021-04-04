export const combinations = <T>(domain: T[]) => {
  let q: [T[], T[]][] = [[[], domain]];
  for (let i = 0; i < domain.length; i++) {
    q = q.reduce((acc, [h, t]) =>
      t.length === 0
        ? [...acc, [h, t]]
        : [...acc, [[...h, t[0]], t.slice(1)], [h, t.slice(1)]
        ], [] as [T[], T[]][]);
  }
  return q.map(([xs, _]) => xs).filter(xs => xs.length !== 0);
};

/*
export const combinations = <T>(domain: T[]) => {
  let q: [T[], T[]][] = [[[], domain]];
  for (let i = 0; i < domain.length; i++) {
    q = q.reduce((acc, [h, t]) =>
      t.length === 0
        ? [...acc, [h, t]]
        : [...acc, [[...h, t[0]], t.slice(1)], [h, t.slice(1)]
        ], [] as [T[], T[]][]);
  }

  return q.map(([xs, _]) => xs).filter(xs => xs.length !== 0);
};

export const combinations = <T>(domain: T[]) => {
  let q: [T[], T[]][] = [[[], domain]];
  let swap = true;
  while (swap) {
    const len = q.length;
    q = q.reduce((acc, [h, t]) =>
      t.length === 0
        ? [...acc, [h, t]]
        : [...acc, [[...h, t[0]], t.slice(1)], [h, t.slice(1)]
        ], [] as [T[], T[]][]);
      swap = len !== q.length;
  }

  return q;
};

export const combinations = <T>(domain: T[]) => {
  const found: T[][] = [];
  function loop(acc: T[], i: number) {
      if (i >= domain.length) {
          found.push(acc);
      } else {
          loop(acc, i + 1);
          loop([...acc, domain[i]], i + 1);
      }
  }
  loop([],0);
  return found.filter(x => x.length!==0);
};

*/