console.log(10);
console.log(20);
setTimeout(()=>{
    console.log(30);
},5000)
setInterval(()=>{
    document.writeln("MRU");
    console.log(30);
},100)
console.log(40);
console.log(50);
let p1=new Promise((resolve,reject)=>{});
console.log(p1);
let p2=new Promise((resolve,reject)=>{
    resolve("Success");
});
p2
.then((response)=>console.log(response))
.catch((error)=>console.log(error))
.finally(()=>console.log("finally for both"))
console.log(p2);
let p3=new Promise((resolve,reject)=>{
    reject("Failure");

});
console.log(p3);




