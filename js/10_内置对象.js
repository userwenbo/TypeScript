/*
内置对象
1. ECMAScript 的内置对象: Boolean、Error、Date、RegExp 等。
2. DOM 和 BOM 的内置对象: Document、HTMLElement、Event、NodeList 等。
*/
var b = new Boolean(1);
var e = new Error('Error occurred');
var d = new Date();
var r = /[a-z]/;
var body = document.body;
var allDiv = document.querySelectorAll('div');
document.addEventListener('click', function (e) {
    // Do something
});
// Math.pow(10, '2');
document.addEventListener('click', function (e) {
    // console.log(e.targetCurrent);
});
