let squarememo = function () {
    let cache = {};
    return (num) => {
        if (num in cache) {
            console.log('result from cache')
            return cache[num]
        } else {
            for (i = 0; i < 1000000; i++) { }
            let square = num * num;
            cache[num] = square;
            return square;
        }
    }
}

getSquare = squarememo();

console.time('Case1')
console.log(getSquare(97845))
console.timeEnd('Case1')
console.time('Case2')
console.log(getSquare(97845))
console.timeEnd('Case2')
console.time('Case3')
console.log(getSquare(97845))
console.timeEnd('Case3')
console.time('Case4')
console.log(getSquare(97845))
console.timeEnd('Case4')