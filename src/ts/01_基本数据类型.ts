/* 
原始(基本)数据类型
1. 布尔值: boolean
2. 数值: number
3. 字符串: string
4. 空值: void
*/

/* 1. 布尔值: boolean */
let isDone: boolean = false;
// isDone = 2
// isDone = new Boolean(1);
let createdByNewBoolean: Boolean = new Boolean(1);

/* 2. 数值: number */
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;


let myName: string = 'Tom';
let myAge: number = 25;


function fn(name: string): void {
  console.log('fn', name)
}
console.log(fn('tom'))

let u: undefined = undefined;
let n: null = null;

fn(null)
fn(undefined)

