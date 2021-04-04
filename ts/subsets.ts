export const subsets = <T>(xs: T[]) => {
  const found: T[][] = [];
  for(let i=2; i<=xs.length; i++) {
    for(let j=0; j<xs.length-i + 1; j++) {
      found.push(xs.slice(j,i + j));
    }
  }
  return found;
};
