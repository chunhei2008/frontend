//常用于对已经存在的类添加新的方法，如给数组添加新方法   寄生构造函数模式
function Person(name,age,job){
   var o = new Object();
   o.name = name;
   o.age = age;
   o.job = job;
   o.showName = function(){
     console.log(this.name);
   }
   return o;
}
