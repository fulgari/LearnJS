function dedup(arr) {
    let map = {}
    arr.forEach(element => {
        if(!map[element]) {
            map[element] = element
        }
    });
    return Object.values(map)
}

let a1 = [null, null, undefined, NaN, 1, 'aa', NaN, Symbol('s')]
console.log(dedup(a1))