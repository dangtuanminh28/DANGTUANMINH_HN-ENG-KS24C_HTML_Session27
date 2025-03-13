let arr = [];
let h = +prompt("Nhập số phần tử trong mảng:");

if (h > 0 && Number.isInteger(h)) {
    let i = 0;
    while (i < h) {
        arr[i] = +prompt(`Nhập phần tử thứ ${i + 1}:`);
        i++;
    }
    console.log("Mảng đã được nhập thành công!");
} else {
    console.log("Số phần tử không hợp lệ!");
}

function arrArithmeticProgression(arr) {
    let d = arr[1] - arr[0];
    let i = 1;
    while (i < arr.length - 1) {
        if (arr[i + 1] - arr[i] !== d) {
            console.log("Mảng không phải là cấp số cộng!");
            return;
        }
        i++;
    }
    console.log("Mảng là cấp số cộng!");
}

if (arr.length >= 2) {
    arrArithmeticProgression(arr);
} else {
    console.log("Mảng không đủ phần tử để kiểm tra!");
}