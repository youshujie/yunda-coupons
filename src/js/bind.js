"use strict";
function $ (selector) {
    if (document.querySelectorAll(selector).length === 1) {
        return document.querySelector(selector);
    } else {
        return document.querySelectorAll(selector);
    }
};
// console.log($('.cards'));
// console.log( $('.cards').length)
$(".card").addEventListener('click', () => {
	//有坑 会动态改变 要在改变之前写入容器
	let length = $('.cards').length;
	let arr = $('.cards');
	for(let i = 0; i < length; i++) {
		arr[i].className = 'float';
	}
});