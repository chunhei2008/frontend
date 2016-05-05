//原型和构造函数混合模式
function Person(name,age,job){
  this.name = name;
  this.age = age;
  this.job = job;
}


Person.prototype.showName = function () {
  console.log(this.name);
}

var person1 = new Person('wangyi',26,'IT');
person1.showName();
