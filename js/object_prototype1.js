function Person(){


}

Person.prototype = {
  construct:Person,
  name:'wangyi',
  age:28,
  job:'IT',
  friends:['maomao','xiaowu'],  //引用类型在原型中共享的副作用
  showName:function(){
    return this.name;
  }
}

var person1 = new Person();
var person2 = new Person();

person2.friends.push('xiaoliuzi');
person2.job = 'YOUXI';
console.log(person1.friends);
console.log(person1.job);
