/*
原始(基本)数据类型
1. 布尔值: boolean
2. 数值: number
3. 字符串: string
4. 空值: void
*/
/* 1. 布尔值: boolean */
var isDone = false;
// isDone = 2
// isDone = new Boolean(1);
var createdByNewBoolean = new Boolean(1);
/* 2. 数值: number */
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
var myName = 'Tom';
var myAge = 25;
function fn(name) {
    console.log('fn', name);
}
console.log(fn('tom'));
var u = undefined;
var n = null;
fn(null);
fn(undefined);
