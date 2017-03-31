"use strict";
$('.card').addEventListener('click', () => {
    let bindInfo = 0;
    if (bindInfo) {
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
    } else {
        $('.card').className += ' vague';
        $('.bind').style.display = 'block';
    }
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

$('.but').addEventListener('click', () => {
    ajax({
        url: 'http://nbvcv.com/app/index.php?i=2&c=entry&do=GetVerifyCode&m=apus_coupon',
        method: 'POST',
        data: {
            phone_num: $('.iphone').value
        },
        success: function(res) {
            console.log(res);
            console.log($('.iphone').value);
        }
    });
});
$('.push').addEventListener('click',() => {
    ajax({
        url: 'http://nbvcv.com/app/index.php?i=2&c=entry&do=BindPhone&m=apus_coupon',
        method: 'POST',
        data: {
            verify_code: $('.verification').value
        },
        success: function(res) {
            console.log(res);
            if (JSON.parse(res.status_code === 200)) {
                $('.card').className += ' vague-del';
                $('.bind').style.display = 'none';
            }
        }
    });
});

