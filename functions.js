// function demo(){
//     console.log("function without parameters");

// }
// demo();
// function userDetails(name,age,city){
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }
// userDetails("sathvika",20,"Warangal");
// -----function expression------
// let x= function(){
//     console.log("Function expression is executing");

// };
// x();
//-----IIFE----
// (function(){
//     console.log("IIFE");
// }) ();
//--arrow function---
// function demo(){
//     console.log("Hello");

// }
// demo();
// let x=(a,b)=>console.log(a+b);
// x(5,5);

// let x=_=>{console.log("Hi");
//         console.log("hello");
//         console.log("bye");}
//     x();

function printStarPattern(rows, cols) {
    let pattern = "";
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        pattern += "* "; 
      }
      pattern += "\n";
    }
    console.log(pattern);
  }
  printStarPattern(5, 5);

  function printTrianglePattern(rows) {
    let pattern = "";
    for (let i = 1; i <= rows; i++) { 
      for (let j = 1; j <= i; j++) { 
        pattern += "* ";
      }
      pattern += "\n"; 
    }
    console.log(pattern);
  }
  
  printTrianglePattern(5); 
  function printDiagonalPattern(size) {
    let pattern = "";
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (i === j || i + j === size - 1) { 
          pattern += "* ";
        } else {
          pattern += "  "; 
        }
      }
      pattern += "\n";
    }
    console.log(pattern);
  }
  
  
  printDiagonalPattern(5); 
  
  