/*
数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
*/
var person = ['Tom', 25];
var person2;
person2[1] = 25;
person2[0] = 'Tom';
// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：
var person3;
person3 = ['Tom', 25];
person3.push('male');
// person3.push(true);
