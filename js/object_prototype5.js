//稳妥构造函数，name只能通过方法showName访问到
function Person(name,age,job){
  var o = new Object();
  o.showName = function () {
      console.log(name);
  }
  return o;
}
