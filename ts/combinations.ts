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
