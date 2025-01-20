// let user1="Ramya";
// let user2="saismitha";
// let user3="sai nikhil";
// let user4="rahul";
// let user5="Prabhas";
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);
// let users=["Ramya","sai smitha","sai nikhil","rahul","prabhas","guna"];
// console.log(users[0]);
// for(let i=0; i<users.length;i++){
//     console.log(users[i]);
// }
// let users=["Ramya","sai smitha","sai nikhil","rahul","prabhas","guna"];
// users.map((user)=>{
//     console.log(user);
// })
// let users=["Ramya","sai smitha","sai nikhil","rahul","prabhas","guna"];
// let x = users.forEach((user)=>{
//     return user;
// });
// console.log(x);
// let userDetails={
//     name:"sathvika",
//     age:21,
//     company:"Amazon",
//     sal:1234567890,
//     details:function(){
//         return `My name is ${this.name} and i am working in ${this.company}`
//     }

// };
// console.log(userDetails);
// console.log(userDetails.name);
// console.log(userDetails.details());
// let userDetails=[
//     {
//         name:"ramya",
//         city:"guntur"
//     },
//     {
//         name:"sai nikhil",
//         city:"karimnagar"
//     },
//     {
//         name:"sathvika",
//         city:"warangal"
//     },
//     {
//         name:"guna",
//         city:"mangapet"
//     },
//     {
//         name:"gemini",
//         city:"hyd"
//     }
// ];
// userDetails.map((x)=>{
//     console.log(x.name);
// })
let userDetails={
    name:"sam",
    age:23,
    city:"hyd"

};
console.log(userDetails);
let x=JSON.stringify(userDetails);
console.log("JSON object "+x);
let y=JSON.parse(x);
console.log(y);