const Data = [{
    "imgUrl": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2210778813076/O1CN01wZxLMA1YarEo4fnjL_!!2210778813076.jpg_580x580q90.jpg_.webp",
    "proName": "BXYHTD格子不规律牛仔外套",
    "proPrice": "66",
    "proComm": "1"
},
{
    "imgUrl": "https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/2215222329159/O1CN01dywCVd2HWsVUvCvC7_!!2215222329159.jpg_580x580q90.jpg_.webp",
    "proName": "承前国风原创马面裙",
    "proPrice": "89",
    "proComm": "9.7"
},
{
    "imgUrl": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/3922918009/O1CN013ZW64D292B1xlVoNh_!!3922918009.jpg_580x580q90.jpg_.webp",
    "proName": "脏脏鞋九代巴黎老爹女 ",
    "proPrice": "65",
    "proComm": "1.3"
},
{
    "imgUrl": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/673904224/O1CN013CEjl91h4dvFaWxPX_!!673904224.png_580x580q90.jpg_.webp",
    "proName": " 999纯银招财貔貅手链 ",
    "proPrice": "149",
    "proComm": "1.1"
},
{
    "imgUrl": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2762822865/O1CN01BizSib1X2DeQC9dmr_!!2762822865.jpg_580x580q90.jpg_.webp",
    "proName": "欧韩站春夏丝印增高轻薄鞋 ",
    "proPrice": "750",
    "proComm": "0.3"
},
{
    "imgUrl": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/89802198/O1CN01iiEPyX1S6jOblnqO4_!!89802198.jpg_580x580q90.jpg_.webp",
    "proName": " 汉如初知木冉汉服女外披吊带裙 ",
    "proPrice": "199",
    "proComm": "3.3"
},
{
    "imgUrl": "https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/89802198/O1CN01ExzLCT1S6jTKOHchI_!!89802198.jpg_580x580q90.jpg_.webp",
    "proName": "一叶知秋原创改良汉服女新中式马面裙",
    "proPrice": "19.9",
    "proComm": "1.2"
},
{
    "imgUrl": "https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2208272142345/O1CN011evTA51TC3hMm1zde_!!0-item_pic.jpg_580x580q90.jpg_.webp",
    "proName": "玉术原创汉服女刺绣",
    "proPrice": "45",
    "proComm": "0.6"
},
{
    "imgUrl": "https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/2215110594693/O1CN015ObCuB1kXRfhkEC6T_!!0-item_pic.jpg_580x580q90.jpg_.webp",
    "proName": "黑头仪电动吸黑头神器",
    "proPrice": "207",
    "proComm": "0.3"
},
{
    "imgUrl": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/897609396/O1CN01jODjUC2JHQKKlo75x_!!0-item_pic.jpg_580x580q90.jpg_.webp",
    "proName": "罗马仕柃电充电宝",
    "proPrice": "199",
    "proComm": "7.2"
}
];
// 获取商品所在div
var shop = document.getElementById("box");
// 所在ul
let aul = document.querySelector("ul")
for (var i = 0; i < Data.length; i++) {
    // 创造li标签进行渲染
    var oli = document.createElement("li");
    // 获取数据中每个商品的下标
    var data = Data[i];
    // 数据渲染
    oli.innerHTML += `
        <div class="pro_img">
            <img src="${data.imgUrl}" width="150" height="150">
        </div>
        <h3 class="pro_name"><a rel="nofollow" href="#">${data.proName}</a></h3>
        <p class="pro_price">${data.proPrice}元</p>
        <p class="pro_rank">${data.proComm}万人好评</p>
        <div class="add_btn" onclick="addToCart(${i})">加入购物车</div>
    `;
    aul.appendChild(oli);
}

var cartItems = []; // 购物车商品列表

// 将商品添加到购物车
function addToCart(index) {
    var data = Data[index];
    // 添加 count 属性，用于记录商品数量
    data.count = 1;
    cartItems.push(data);
    renderCart();
}

// 渲染购物车
function renderCart() {
    var oCar = document.getElementById("cart");
    oCar.innerHTML = ""; // 清空购物车内容

    cartItems.forEach(function (item, index) {
        // 创建表示购物车中商品的新div元素
        var oDiv = document.createElement("div");
        oDiv.className = "row hid";

        // 设置新div的内容
        oDiv.innerHTML = `
        <div class="check left">
            <i class="i_check" onclick="itemCheck(this)">√</i>
        </div>
        <div class="img left">
            <img src="${item.imgUrl}" width="80" height="80">
        </div>
        <div class="name left">
            <span>${item.proName}</span>
        </div>
        <div class="price left">
            <span>${item.proPrice}元</span>
        </div>
        <div class="item_count_i">
            <div class="num_count">
                <div class="count_d" onclick="decreaseCount(${index})">-</div>
                <div class="c_num">${item.count}</div>
                <div class="count_i" onclick="increaseCount(${index})">+</div>
            </div>
        </div>
        <div class="subtotal left">
            <span>${(parseFloat(item.proPrice) * item.count).toFixed(2)}元</span>
        </div>
        <div class="ctrl left">
            <a rel="nofollow" href="#" onclick="del(${index})">删除</a>
        </div>
    `;
        // 将新的div元素添加到购物车中
        oCar.appendChild(oDiv);
    });

    amount(); // 更新总金额
}

// 删除购物车中的商品
function del(index) {
    var result = confirm("确定删除吗?");
    if (result) {
        cartItems.splice(index, 1);
        renderCart();
    }
}

// 商品数量减少
function decreaseCount(index) {
    if (cartItems[index].count > 1) {
        cartItems[index].count--;
        renderCart();
    }
}

// 商品数量增加
function increaseCount(index) {
    cartItems[index].count++;
    renderCart();
}

// 计算总金额
function amount() {
    var totalPrice = 0;
    cartItems.forEach(function (item) {
        totalPrice += parseFloat(item.proPrice) * item.count;
    });
    // 更新总金额显示
    document.getElementById('pay_amout').innerText = totalPrice.toFixed(2) + "元";
}


// 商品全选事件
function checkAll() {
    var chooseAll = document.querySelector('.check');
    var checkboxes = document.querySelectorAll('.i_check');
    if (chooseAll.classList.contains("select2")) {
        chooseAll.classList.remove("select2"); // 如果已经选中，则移除选中样式
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].classList.remove("select2"); // 取消所有单选框的选中状态
        }
    } else {
        chooseAll.classList.add("select2"); // 如果未选中，则添加选中样式
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].classList.add("select2"); // 设置所有单选框为选中状态
        }
    }
    amount(); // 更新总金额
}

// 商品单选事件
function itemCheck(checkbox) {
    if (checkbox.classList.contains("select2")) {
        checkbox.classList.remove("select2"); // 如果已经选中，则移除选中样式
    } else {
        checkbox.classList.add("select2"); // 如果未选中，则添加选中样式
    }

    // 检查全选状态
    var chooseAll = document.querySelector('i');
    var allChecked = true;
    var checkboxes = document.querySelectorAll('.i_check');
    for (var i = 0; i < checkboxes.length; i++) {
        if (!checkboxes[i].classList.contains('select2')) {
            allChecked = false;
            break;
        }
    }

    if (allChecked) {
        chooseAll.classList.add('select2');
    } else {
        chooseAll.classList.remove('select2');
    }
    amount(); // 更新总金额
}
