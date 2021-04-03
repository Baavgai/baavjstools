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
