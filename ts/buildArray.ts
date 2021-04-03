export const buildArray = <T>(size: number, f: (idx: number) => T) => {
  const xs = new Array<T>(size);
  for (let i = 0; i < size; i++) { xs[i] = f(i); }
  return xs;
}
