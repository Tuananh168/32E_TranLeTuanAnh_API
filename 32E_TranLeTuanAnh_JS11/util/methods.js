// Kiểm tra tài khoản số .
function kiemTraTatCaSo(value, selectorError, name) {
    var regexLetter = /^[0-9]+$/;
    if (regexLetter.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' tất cả là số !';
    document.querySelector(selectorError).style.display = 'block';
    return false;
}

// Kiểm tra hàm rỗng
function kiemTraRong(value, selectorError, name) {
    if (value.trim() !== '') {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' không được bỏ trống';
    document.querySelector(selectorError).style.display = 'block';
    return false;
}

// Kiểm tra tất cả ký tự
function kiemTraTatCaKyTu(value, selectorError, name) {
    regexLetter = /^[A-Z a-z]+$/;
    if (regexLetter.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' tất cả là chữ';
    document.querySelector(selectorError).style.display = 'block';
    return false;
}

// Kiểm tra email hợp lệ
function kiemTraEmail(value, selectorError, name) {
    regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;

    if (regexEmail.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' không đúng định dạng';
    document.querySelector(selectorError).style.display = 'block';
    return false;
}

// Kiểm tra tiền lương .
function kiemTraLuongCoBan(value, selectorError, name, minMoney, maxMoney) {
    if (value < minMoney || value > maxMoney) {
        document.querySelector(selectorError).innerHTML = name + ' từ ' + minMoney + ' đến ' + maxMoney;
        document.querySelector(selectorError).style.display = 'block';
        return false
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;
}

// Kiểm tra độ dài.
function kiemTraDoDai(value, selectorError, name, minLength, maxLength) {
    var Number = value.length;
    if (Number < minLength || Number > maxLength) {
        document.querySelector(selectorError).innerHTML = name + ' từ ' + minLength + ' đến ' + maxLength + ' ký tự';
        document.querySelector(selectorError).style.display = 'block';
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;
}

// Kiểm tra ký tự mật khẩu .
function kiemTraKyTu(value, selectorError, name) {
    regexLetter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (regexLetter.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' phải ít nhất 1 ký tự số , 1 ký tự in hoa , 1 ký tự đặc biệt';
    document.querySelector(selectorError).style.display = 'block';
    return false;
}

// Kiểm tra giờ làm
function kiemTraGioLam(value, selectorError, name, minHour, maxHour) {
    if (value < minHour || value > maxHour) {
        document.querySelector(selectorError).innerHTML = name + ' từ ' + minHour + ' đến ' + maxHour + ' giờ';
        document.querySelector(selectorError).style.display = 'block';
        return false
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;
}

// Kiểm tra ngày.
function kiemTraNgay(value, selectorError, name) {
    var regexDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;


    if (regexDate.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' không đúng định dạng ngày !';
    document.querySelector(selectorError).style.display = 'block';
    return false;
}