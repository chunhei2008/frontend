/*
 支持这种高级写法
*/
var a = 10;
switch (true) {
    case a < 0:
        console.log('a < 0');
        break;
    case a >= 0 && a < 10:
        console.log('a>=0 && a< 10');
        break;
    case a == 10:
        console.log('a==10');
        break;
    default:
        console.log('a>10');
}
