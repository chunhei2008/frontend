
var time = new Date();

console.log(time,time.valueOf());

var time1 = +new Date();

console.log(time1);

var time2 = new Date(Date.parse("2016-04-27 21:38:19"));

console.log(time2);

console.log(Date.now());

console.log(new Date().toLocaleTimeString());
