/* 
函数的类型: 
*/

/* 函数声明 */
function sum(x: number, y: number): number {
  return x + y;
}

// sum(1, 2, 3);
// sum(1);

/* 函数表达式 */
let mySum = function (x: number, y: number): number {
  return x + y;
};
// sum(1, 2, 3);
// sum(1);

/* 可选参数 */
function fn1 (x: number, y?: string) {
  
}
fn1(2)
function fn2(x: string='tom') {
  
}
fn2()
// fn2(1)

/* 剩余参数 */
function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
      array.push(item);
  });
}

let arr: any = []
push(arr, 1, 2, 3);




