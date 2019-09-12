/* 
任意值（any）用来表示允许赋值为任意类型
    任意值的变量
    任意值的属性和方法
在任意值上访问任何属性都是允许的
也允许调用任何方法
*/

// let a: string = 'abcd'
let a: any = 'abcd'
a = 3

let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

let anyThing2: any = 'Tom';
anyThing2.setName('Jerry');
anyThing2.setName('Jerry').sayHello();
anyThing2.myName.setFirstName('Cat');

let something;
something = 'seven';
something = 7;

// something.setName('Tom');