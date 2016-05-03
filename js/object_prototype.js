//原型连模式
function Person(){

}
Person.prototype.name = 'wangyi';
Person.prototype.age = 28;
Person.prototype.job = 'IT';
Person.prototype.showName = function () {
  return this.name;
}

/*
简单原型
Person.prototype = {
    construct:Person,   //有副作用
    name : 'wangyi',
    age:28,
    job:'IT',
    showName: function(){
    return this.name;
  }
}
*/



var person1 = new Person();
person1.name = 'baicai';
var person2 = new Person();

console.log(person1.showName());
console.log(person2.showName());
