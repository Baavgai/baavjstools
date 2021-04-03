export const range = (size: number) => {
  const xs = new Array<number>(size);
  for (let i = 0; i < size; i++) { xs[i] = i; }
  return xs;
}
