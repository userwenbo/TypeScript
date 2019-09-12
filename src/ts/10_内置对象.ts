/* 
内置对象
1. ECMAScript 的内置对象: Boolean、Error、Date、RegExp 等。
2. DOM 和 BOM 的内置对象: Document、HTMLElement、Event、NodeList 等。
*/

let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;

let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  // Do something
});

// Math.pow(10, '2');

document.addEventListener('click', function(e) {
  // console.log(e.targetCurrent);
});



