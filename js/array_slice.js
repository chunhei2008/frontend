
var a = [1,3,5,67,78,46,9,45];

console.log(a);
var b =a.slice(2,4);  //截取开始到结束的位置

console.log(a,b);

var c = a.slice(-3,-2);

console.log(a,c);

var d = a.splice(2,1);   //从第几个位置开始删除多少个元素

console.log(a,d);

var e = a.splice(2,0,100,200);  //删除零个插入两个元素

console.log(a,e);

var f = a.splice(2,2,300,400);  //删除并插入两个元素

console.log(a,f);
