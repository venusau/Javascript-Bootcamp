// ----------------SCoping (scope)------------------
// 1. the JS file is global itself 
// WE have Gec for executing this 
// For functions we create a new execution context FEC(functional execution context )

// 2. Scope of var => global and Functional. (EC-> execution context)
// example 1
/*
var a=12;
console.log(a);//12

if(true){
    console.log(a,'inside if block ');//12
}
console.log(a);//12
*/
// example 2
/*
var a=12;
if (true){
    var a=99;
    console.log(a,'answer 1');//99
}
console.log(a,'answer 2');//99
*/

// example 3

// return keyword 
// 1.return the value to the next EC
// destroy the topmost EC
/*
var a =12;
console.log(a,"answer 1");//12
function abc(){
    var a=99;
    console.log(a,"answer 2");//99
    return 100;
}
console.log(abc(),"answer 3");//100
console.log(a,"answer 4");//12 
*/
// example 4
// JS will add return by itself with value undefined 
var a =12;
console.log(a,"answer 1");//12
function abc(){
    var a=99;
    console.log(a,"answer 2");//99
}
console.log(abc(),"answer 3");//100
console.log(a,"answer 4");//12 