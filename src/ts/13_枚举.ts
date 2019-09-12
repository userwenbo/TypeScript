/* 
枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
枚举使用 enum 关键字来定义：
*/
// enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

// console.log(Days["Sun"] === 0); // true
// console.log(Days["Mon"] === 1); // true
// console.log(Days["Tue"] === 2); // true
// console.log(Days["Sat"] === 6); // true

// console.log(Days[0] === "Sun"); // true
// console.log(Days[1] === "Mon"); // true
// console.log(Days[2] === "Tue"); // true
// console.log(Days[6] === "Sat"); // true

enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 7); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

enum Color {Red, Green, Blue = "blue".length};
// enum Color {Red = "red".length, Green, Blue}; // 如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错

