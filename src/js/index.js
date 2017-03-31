"use strict";
function $ (selector) {
    if (document.querySelectorAll(selector).length === 1) {
        return document.querySelector(selector);
    } else {
        return document.querySelectorAll(selector);
    }
};





var ajax = function (conf) {
    var method = conf.method;
    var url = conf.url;
    var success = conf.success;
    var data = conf.data;
    var xhr = new XMLHttpRequest();

    xhr.open(method, url, true);

    if (method == 'GET' || method == 'get') {
        xhr.send(null);
    } else if (method == 'POST' || method == 'post') {
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            success(JSON.parse(xhr.responseText));
        }
    };
    
};
$(".card").addEventListener('click', () => {
    //有坑 会动态改变 要在改变之前写入容器
    let length = $('.cards').length;
    let arr = $('.cards');
    for(let i = 0; i < length; i++) {
        arr[i].className += ' float'+i;
    }
    setTimeout(() => {
        let button = document.createElement('button');
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        div1.className = 'two';
        div2.className = 'three';
        button.className = 'receive';
        button.innerHTML = '立即领取';
        $('.card').appendChild(div1);
        $('.card').appendChild(div2);
        $('.card').appendChild(button);
    },800)
    
});




var countdown = 3;//一共三组
var i = 0;
let imgs = $(".imgs");
function animate() {
    visible(imgs[i]);
    visible(imgs[i + 1]);
    i = i + 2;    
}

function visible(elem) {
    elem.className = 'img-animation';
}

var flag = setInterval(function () {
    animate();
    countdown = countdown - 1;
    if (countdown == 0) {
        clearInterval(flag);
    }
}, 200)




ajax({
    url: '',
    method: 'POST',
    success: function(res) {

    }
})
