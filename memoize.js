let cache = {};

function memoizeAddToEighty(n) {
    if (n in cache) {
        return cache[n];
    }

    cache[n] = n + 80;
    return cache[n];
}

memoizeAddToEighty(90);