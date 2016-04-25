var a = [1,2,3,10,4,5,76,0];

console.log(a);

a.reverse();

console.log(a);

a.sort();

console.log(a);

a.sort(compare);

console.log(a);

/*
自定义排序参数
*/
function compare(a,b){
  if(a>b){
    return 1;
  }else if(a<b){
    return -1;
  }else{
    return 0;
  }
}
