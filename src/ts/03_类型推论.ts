/* 
类型推论: TypeScript 会在没有明确的指定类型的时候推测出一个类型
*/

// let myFavoriteNumber = 'seven'; // 相当于: let myFavoriteNumber: string = 'seven'
// myFavoriteNumber = 7;

// 如果定义的时候没有赋值, 都会被推断成 any 类型
/* 问题: any类型可以使用任意属性和方法, 但它不行 */
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
myFavoriteNumber.toString()
// myFavoriteNumber.xxx
// myFavoriteNumber.test() 