// n is the index of the number we want to return in the sequence
function fibonacci(n) {
    if (n < 2) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(3);