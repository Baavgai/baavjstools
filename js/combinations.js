export const combinations = domain => {
  let q = [[[], domain]];
  for (let i = 0; i < domain.length; i++) {
    q = q.reduce((acc, [h, t]) =>
      t.length === 0
        ? [...acc, [h, t]]
        : [...acc, [[...h, t[0]], t.slice(1)], [h, t.slice(1)]
        ], []);
  }
  return q.map(([xs, _]) => xs).filter(xs => xs.length !== 0);
};


/*
export const combinations = xs => {
    const found = [];
    function loop(acc, i) {
        if (i >= xs.length) {
            found.push(acc);
        } else {
            loop(acc, i + 1);
            loop([...acc, xs[i]], i + 1);
        }
    }
    loop([],0);
    return found.filter(x => x.length!==0);
};
*/