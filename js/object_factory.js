//工厂模式
function createPerson(name,age,job){
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.showName = function(){
    return this.name;
  }
  return o;
}


var person1 = createPerson('wangyi',28,'IT');
var person2 = createPerson('baicai',18,'IT');

console.log(person1.showName());
console.log(person2.showName());
