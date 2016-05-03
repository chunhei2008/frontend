
function showColor(){
  console.log(this.color);
}

var o = {color:'red'};
var o2 = {color:'green'};

showColor.call(o);
showColor.apply(o);

showColor.call(o2);
showColor.apply(o2);


function sum(a,b){
  console.log(a+b);
}

sum.apply(this,[1,2]);
sum.call(this,1,2);
