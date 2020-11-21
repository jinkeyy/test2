let khongTrung = (array1, array2) => {
    let c = []
    for (let i = 0; i < array1.length; i++) {
        c.push(array1[i])
    }
    for (let i = 0; i < array2.length; i++) {
        let temp = 0;
        for (let j = 0; j < c.length; j++) {
            if (array2[i] == c[j]) {
                temp++;
            }
        }
        if (temp == 0) {
            c.push(array2[i])
        }
    }
    return c
}
let a = [1, 2, "abc"]
let b = [1, 3, "b"]
console.log((khongTrung(a, b)))