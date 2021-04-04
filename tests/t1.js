import { permutations } from '../js/permutations.js';

import { range } from '../ts/range.ts';
import { subsets } from '../ts/subsets.ts';

const domain = range(4);
console.log({
  domain,
  permutations: permutations(domain),
  subsets: subsets(domain)
});
