let menu = `
1. Cộng hai số 
2. Trừ hai số
3. Nhân hai số
4. Chia hai số
5. Thoát
Mời bạn nhập lựa chọn:`;
let num1, num2;
let loop = true;
let choice;
while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            num1 = +prompt("Mời bạn nhập số thứ nhất:");
            num2 = +prompt("Mời bạn nhập số thứ hai:");
            alert(sum(num1, num2));
            break;
        case 2:
            num1 = +prompt("Mời bạn nhập số thứ nhất:");
            num2 = +prompt("Mời bạn nhập số thứ hai:");
            alert(sub(num1, num2));
            break;
        case 3:
            num1 = +prompt("Mời bạn nhập số thứ nhất:");
            num2 = +prompt("Mời bạn nhập số thứ hai:");
            alert(mul(num1, num2));
            break;
        case 4:
            num1 = +prompt("Mời bạn nhập số thứ nhất:");
            num2 = +prompt("Mời bạn nhập số thứ hai:");
            alert(div(num1, num2));
            break;
        case 5:
            alert('Hẹn gặp lại');
            loop = false;
            break;
        default:
            alert('Lựa chọn không hợp lệ');
            break;
    }
}

function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}