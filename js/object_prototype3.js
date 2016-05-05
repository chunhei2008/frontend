//简单构造函数原型模式
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    if (typeof this.showName != 'function') {
    //这里不能直接使用原型字面量
        Person.prototype.showName = function() {
            console.log(this.name);
        }
    }
}


var person1 = new Person('wangyi',26,'IT');
person1.showName();
