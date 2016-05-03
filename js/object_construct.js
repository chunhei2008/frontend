//构造函数模式创建对象


function Person(name,age,job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.showName = function(){
    return this.name
  }
}

var person1 = new Person('wangyi',28,'IT');
var person2 = new Person('baicai',18,'IT');

console.log(person1.showName());
console.log(person2.showName());
