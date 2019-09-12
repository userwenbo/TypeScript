/* 
在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型
接口: 在面向对象的语言中, 是n个行为的抽象/描述, 但没有实现, 由类去实现
      在TS中, 接口也可以包含状态的描述
接口类型的对象
    多/少了一些属性是不允许的
*/

/* 简单例子 */

interface Person {
  readonly id: number;  // 必须在声明时赋值, 且后面不能再修改
  name: string;
  age: number;
  sex?: string; // 可选属性
}

let tom: Person = {
  id: 12,
  name: 'Tom',
  age: 25,
  // sex: '男',
};
// tom.id = 23