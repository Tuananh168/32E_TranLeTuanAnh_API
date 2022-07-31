// ------------ GET : Lấy dữ liệu từ server về -----------
// console.log(axios)

function layDanhSachSanPhamApi() {
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/Product/GetAll', //Đường dẫn backend cung cấp
        method: 'GET', // method backend cung cấp
    })

    // Xử lý thành công.
    promise.then(function(result) {
        console.log(result.data);
        renderTable(result.data);
    })


    // Xử lý thất bại.
    promise.catch(function(err) {
        console.log(err)
    })


}

// Gọi hàm dữ liệu khi trang web vừa load xong
window.onload = function() {
    layDanhSachSanPhamApi();
}

//---------------POST : Thêm dữ liệu ---------------------

document.querySelector('#btnCreate').onclick = function() {
    var item = new Product();

    item.id = document.querySelector('#productID').value;
    item.name = document.querySelector('#productName').value;
    item.price = document.querySelector('#productPrice').value;
    item.img = document.querySelector('#productImage').value;
    item.type = document.querySelector('#productType').value;
    item.description = document.querySelector('#productDescription').value;


    var valid = true;


    // Kiểm tra rỗng :
    valid &= kiemTraRong(item.id, '#thongBaoID', 'ID') & kiemTraRong(item.name, '#thongBaoName', 'Name') & kiemTraRong(item.price, '#thongBaoPrice', 'Giá tiền') & kiemTraRong(item.img, '#thongBaoImage', 'Link hình ảnh') & kiemTraRong(item.description, '#thongBaoDescription', 'Mô tả')

    if (!valid) {
        return;
    }

    // Kiểm tra ký tự :
    valid &= kiemTraTatCaSo(item.id, '#thongBaoID', 'ID') & kiemTraTatCaSo(item.price, '#thongBaoPrice', 'Giá tiền');


    if (!valid) {
        return;
    }

    var promise = axios({
        url: 'http://svcy.myclass.vn/api/Product/CreateProduct',
        method: 'POST',
        data: item // Dữ liệu gửi đi.
    });

    // Xử lý thành công
    promise.then(function(result) {
        console.log(result.data);
        layDanhSachSanPhamApi();
    })

    // Xử lý thất bại
    promise.catch(function(error) {
        console.log(error);
    })
}



// tạo hàm renderTable

function renderTable(arrProduct) {
    var html = '';
    for (index = 0; index < arrProduct.length; index++) {
        var item = arrProduct[index];
        html += `
        <tr>
        <td>${item.id}</td>
        <td><img src="${item.img}" class="w-25"></td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.description}</td>
        <td>${item.type}</td>
        <td>
        <button class="btn btn-primary mr-2" onclick="chinhSua('${item.id}')">Edit</button>
        <button class="btn btn-danger" onclick="xoaItem('${item.id}')">Delete</button>
        </td>
        </tr>`
        document.querySelector('#tableDanhSach').innerHTML = html;
    }
}


// ------------ DEL : Xóa dữ liệu ---------------

function xoaItem(idClick) {
    // alert(idClick)

    var promise = axios({
        url: 'http://svcy.myclass.vn/api/Product/DeleteProduct/' + idClick,
        method: 'DELETE',
    })

    // Xử lý thành công.
    promise.then(function(result) {
        console.log(result.data);
        layDanhSachSanPhamApi();
    })

    // Xử lý thất bại
    promise.catch(function(error) {
        console.log(error);
    })

}

// ------------- Chỉnh sửa dữ liệu -------------

function chinhSua(idClick) {
    // alert(idClick);

    var promise = axios({
        url: 'http://svcy.myclass.vn/api/Product/GetById/' + idClick,
        method: 'GET'

    });
    // Xử lý thành công
    promise.then(function(result) {
        var item = result.data;

        // Đưa đến các thẻ để chỉnh sửa
        document.querySelector('#productID').value = item.id;
        document.querySelector('#productName').value = item.name;
        document.querySelector('#productPrice').value = item.price;
        document.querySelector('#productImage').value = item.img;
        document.querySelector('#productType').value = item.type;
        document.querySelector('#productDescription').value = item.description;

        // Khóa thẻ ID lại :
        document.querySelector('#productID').disabled = true;
    })

    // Xử lý thất bại
    promise.catch(function(error) {
        console.log(error)
    })
}

// ------------- PUT : cập nhật dữ liệu ----------------

document.querySelector('#btnUpdate').onclick = function() {
    var itemUpdate = new Product();

    itemUpdate.id = document.querySelector('#productID').value;
    itemUpdate.name = document.querySelector('#productName').value;
    itemUpdate.price = document.querySelector('#productPrice').value;
    itemUpdate.img = document.querySelector('#productImage').value;
    itemUpdate.type = document.querySelector('#productType').value;
    itemUpdate.description = document.querySelector('#productDescription').value;



    var valid = true;


    // Kiểm tra rỗng :
    valid &= kiemTraRong(itemUpdate.id, '#thongBaoID', 'ID') & kiemTraRong(itemUpdate.name, '#thongBaoName', 'Name') & kiemTraRong(itemUpdate.price, '#thongBaoPrice', 'Giá tiền') & kiemTraRong(itemUpdate.img, '#thongBaoImage', 'Link hình ảnh') & kiemTraRong(itemUpdate.description, '#thongBaoDescription', 'Mô tả')

    if (!valid) {
        return;
    }

    // Kiểm tra ký tự :
    valid &= kiemTraTatCaSo(itemUpdate.id, '#thongBaoID', 'ID') & kiemTraTatCaSo(itemUpdate.price, '#thongBaoPrice', 'Giá tiền');


    if (!valid) {
        return;
    }

    // Call API

    var promise = axios({
        url: 'http://svcy.myclass.vn/api/Product/UpdateProduct/' + itemUpdate.id,
        method: 'PUT',
        data: itemUpdate
    })

    // Xử lý thành công:
    promise.then(function(result) {
        console.log(result.data)
        layDanhSachSanPhamApi();
    })

    document.querySelector('#productID').disabled = false;

    promise.catch(function(error) {
        console.log(error)
    })
}


// --------------- Search : Tìm kiếm item ----------------

document.querySelector('#btnSearch').onclick = function() {
    var infoItem = document.querySelector('#searchItem').value;
    console.log(infoItem)
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/Product/SearchByName?name=' + infoItem,
        method: 'GET'
    });

    // Xử lý thành công :
    promise.then(function(result) {
        console.log(result.data);
        renderTable(result.data);
        //layDanhSachSanPhamApi()
    })

    promise.catch(function(error) {
        // console.log(error);
        alert('Không tìm thấy!')
    })

}