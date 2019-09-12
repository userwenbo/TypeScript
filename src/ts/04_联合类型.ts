/* 
联合类型（Union Types）表示取值可以为多种类型中的一种。
*/
let x: string | number;
x = 'seven';
x = 7;
// x = true

// 访问联合类型的属性或方法
function getLength2(something: string | number): number {
  // return something.length;
  return 2
}
getLength2('abc')
getLength2(2)

function getString(something: string | number): string {
  return something.toString();
}

let myFavoriteNumber2: string | number;
myFavoriteNumber2 = 'seven';
console.log(myFavoriteNumber2.length); // 5
myFavoriteNumber2 = 7;
// console.log(myFavoriteNumber2.length);
