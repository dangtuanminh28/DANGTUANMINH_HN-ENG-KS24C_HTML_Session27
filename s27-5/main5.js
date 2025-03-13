function splitArray(arr, parts) {
    let res = [];
    let len = arr.length;
    let base = 0;
    while (len >= parts) {
        len = len - parts;
        base = base + 1;
    }
    let extra = arr.length;
    while (extra >= parts) {
        extra = extra - parts;
    }
    let start = 0;
    let i = 0;
    while (i < parts) {
        let size = base;
        if (i < extra) {
            size = size + 1;
        }
        res.push(arr.slice(start, start + size));
        start = start + size;
        i = i + 1;
    }

    return res;
}
let arr = [];
let i = 0;
let total = +prompt("Nhập số phần tử:");
while (i < total) {
    let num = +prompt("Nhập phần tử " + (i + 1) + ":");
    arr.push(num);
    i = i + 1;
}

let parts = +prompt("Nhập số mảng con:");
let result = splitArray(arr, parts);
console.log("Mảng sau khi tách:", result);