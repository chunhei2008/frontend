/*
null
undefined
bool
number
string
都是基本的数据类型
object 为复合的数据类型，传递值的时候是传递内存地址的复制
js中传值都是使用复制的方式传递
*/
function f(a){
  var length = a.length;
  a[length] = 'ddd';
}

var a = [
  'aaa','bbb','ccc'
]
console.log(typeof(a));
console.log(a);
f(a);
console.log(a);


function f1(a){
  a.name = 'wangyi';
}


var o = {
  age:26
}

console.log(o);
f1(o);
console.log(o);
