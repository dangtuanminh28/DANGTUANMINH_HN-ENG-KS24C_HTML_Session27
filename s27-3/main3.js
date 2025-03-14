let loop = true;
let choice;
let menu = `
1. Tính diện tích hình tròn
2. Tính chu vi hình tròn
3. Tính diện tích hình chữ nhật
4. Tính chu vi hình chữ nhật
5. Thoát
Mời bạn nhập lựa chọn:`;
while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let radius = +prompt("Nhập bán kính:");
            if (radius > 0 && Number.isFinite(radius)) {
                let acreage = 3.14 * radius * radius;
                console.log("Diện tích: " + acreage);
            } else {
                console.log("Bán kính không hợp lệ!");
            }
            break;
        case 2:
            let radius1 = +prompt("Nhập bán kính:");
            if (radius1 > 0 && Number.isFinite(radius1)) {
                let perimeter = 2 * 3.14 * radius1;
                console.log("Chu vi: " + perimeter);
            } else {
                console.log("Bán kính không hợp lệ!");
            }
            break;
        case 3:
            let length = +prompt("Nhập chiều dài:");
            let width = +prompt("Nhập chiều rộng:");
            if (length > 0 && width > 0 && Number.isFinite(length) && Number.isFinite(width)) {
                let acreage2 = length * width;
                console.log("Diện tích: " + acreage2);
            } else {
                console.log("Kích thước không hợp lệ!");
            }
            break;
        case 4:
            let length2 = +prompt("Nhập chiều dài:");
            let width2 = +prompt("Nhập chiều rộng:");
            if (length2 > 0 && width2 > 0 && Number.isFinite(length2) && Number.isFinite(width2)) {
                let perimeter2 = 2 * (length2 + width2);
                console.log("Chu vi: " + perimeter2);
            } else {
                console.log("Kích thước không hợp lệ!");
            }
            break;
        case 5:
            console.log("Kết thúc chương trình!");
            loop = false;
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
            break;
    }
} 