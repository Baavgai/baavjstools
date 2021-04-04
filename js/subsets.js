export const subsets = xs => {
  const found = [];
  for(let i=2; i<=xs.length; i++) {
    for(let j=0; j<xs.length-i + 1; j++) {
      found.push(xs.slice(j,i + j));
    }
  }
  return found;
};
