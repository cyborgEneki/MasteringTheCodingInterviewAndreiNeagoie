function memoizeAddToEighty() {
    let cache = {};

    return function(n) {
        if (n in cache) {
            return cache[n];
        }

        console.log('long time');
        cache[n] = n + 80;
        return cache[n];
    }
}

const memoized = memoizeAddToEighty();

console.log('first', memoizeAddToEighty(90));
console.log('second', memoizeAddToEighty(90));