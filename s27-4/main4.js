let loop = true;
let menu = `
1. Nhập danh sách số nguyên
2. Tính trung bình cộng
3. Tìm số chẵn lớn nhất
4. Tìm số lẻ nhỏ nhất
5. Thoát
Mời bạn nhập lựa chọn:`;
let numbers = [];
while (loop) {
    let choice = +prompt(menu);
    switch (choice) {
        case 1:
            numbers = [];
            let num = +prompt("Nhập số lượng số nguyên:");
            if (num > 0 && Number.isInteger(num)) {
                for (let i = 0; i < num; i++) {
                    let value = +prompt(`Nhập số nguyên thứ ${i + 1}:`);
                    if (Number.isInteger(value)) {
                        numbers.push(value);
                    } else {
                        console.log("Dữ liệu không hợp lệ!");
                        i--;
                    }
                }
                console.log("Thêm danh sách số nguyên thành công!");
            } else {
                console.log("Số lượng không hợp lệ!");
            }
            break;
        case 2:
            if (numbers.length === 0) {
                console.log("Danh sách trống, không thể tính trung bình!");
            } else {
                let sum = 0;
                for (let i = 0; i < numbers.length; i++) {
                    sum += numbers[i];
                }
                let avg = sum / numbers.length;
                console.log("Trung bình cộng: " + avg);
            }
            break;
        case 3:
            if (numbers.length === 0) {
                console.log("Danh sách trống, không có số chẵn!");
            } else {
                let maxEven = null;
                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i] % 2 === 0) {
                        if (maxEven === null || numbers[i] > maxEven) {
                            maxEven = numbers[i];
                        }
                    }
                }
                if (maxEven === null) {
                    console.log("Không có số chẵn!");
                } else {
                    console.log("Số chẵn lớn nhất: " + maxEven);
                }
            }
            break;
        case 4:
            if (numbers.length === 0) {
                console.log("Danh sách trống, không có số lẻ!");
            } else {
                let minOdd = null;
                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i] % 2 !== 0) {
                        if (minOdd === null || numbers[i] < minOdd) {
                            minOdd = numbers[i];
                        }
                    }
                }
                if (minOdd === null) {
                    console.log("Không có số lẻ!");
                } else {
                    console.log("Số lẻ nhỏ nhất: " + minOdd);
                }
            }
            break;
        case 5:
            console.log("Kết thúc chương trình!");
            loop = false;
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
            break;
    }
}