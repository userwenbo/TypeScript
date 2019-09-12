/*
类型断言(Type Assertion): 可以用来手动指定一个值的类型
语法:
    <类型>值
    值 as 类型  tsx中只能用这种方式
*/
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
