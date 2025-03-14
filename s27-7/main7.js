let arr = [];
let num = +prompt("Nhập số phần tử của mảng:");
if (num > 0 && !Number.isNaN(num)) {
    for (let i = 0; i < num; i = i + 1) {
        let element = +prompt("Nhập phần tử:");
        if (!isNaN(element) && !Number.isNaN(element)) {
            arr.push(element);
        } else {
            console.log("Không hợp lệ!");
            i = i - 1;
        }
    }
    console.log(findNumber(arr));
} else {
    console.log("Không hợp lệ!");
}
function findNumber(arr) {
    for (let i = 1; i < arr.length; i = i + 1) {
        if (arr[i] !== arr[i - 1] + 1) {
            return arr[i - 1] + 1;
        }
    }
    return "Không có số bị thiếu";
}