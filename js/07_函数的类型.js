/*
函数的类型:
*/
/* 函数声明 */
function sum(x, y) {
    return x + y;
}
// sum(1, 2, 3);
// sum(1);
/* 函数表达式 */
var mySum = function (x, y) {
    return x + y;
};
// sum(1, 2, 3);
// sum(1);
/* 可选参数 */
function fn1(x, y) {
}
fn1(2);
function fn2(x) {
    if (x === void 0) { x = 'tom'; }
}
fn2();
// fn2(1)
/* 剩余参数 */
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var arr = [];
push(arr, 1, 2, 3);
