/* 
访问修饰符: public private 和 protected
*/

class Animal {
  public name: string;
  // private name: string;

  public constructor(name: string) {
      this.name = name;
  }

  sayHi(): string {
    return `My name is ${this.name}`;
  }
}

class Cat extends Animal {
  constructor(name: string) {
      super(name);
      console.log(this.name); // 如果是private不可以访问
  }
}

let an: Animal = new Animal('Jack');
console.log(an.name); // Jack
an.name = 'Tom';
console.log(an.name); // Tom
console.log(an.sayHi()); // My name is Jack

