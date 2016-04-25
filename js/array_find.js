

var a = [123,46,7,34,7,98,543];

console.log(a);

var b = a.indexOf(7);

console.log(a,b);

var c = a.lastIndexOf(7);

console.log(a,c);


//查找对象 如果没找到返回-1 使用的是全等查找

var o = {name:'wangyi',age:28};
var o1 = {name:'baicai',age:29};
var os = [o,o1];

var index = os.indexOf(o);
console.log(os,index);
