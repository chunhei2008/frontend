var t = {
  a : true,
    b : false,
    c : "",
    d : "1",
    e : "1.1",
    f : "1aaa",
    g : "aaa1",
    h : {a:10},
    i : [1,2]
  };

for(k in t){
  console.log(t[k],Number(t[k]),parseInt(t[k]),parseFloat(t[k]));
}
