
// Functions are first class citizens 


// -------------normal function vs arrow function ---------------------------
/*
function sum(a,b){
    return a+b;
}
const sum2= function(a,b){
    return a+b;
}
const sum3=(a,b) =>{
    return a+b;
}
const result=sum(1,2);
const result2=sum2(20,1)
const result3=sum3(20,3)
console.log(result,result2,result3)
*/

// -------------------try vs catch ---------------------------
// throw -> Only used with Errors
/*
function sum(a,b){
    try{
    const c = a+b;
    // google call -> calling the google server to store a c 
    // Mocking the google error 
    throw new Error("Not Reachable");
    return c;
}
catch (error){
    // handle the error
    alert("something went wrong");
}
finally{
console.log("finally");
}
};
const result = sum(1,2);
console.log(result,"result");
*/

// ---------------------- Dangerous parts of the functions --------------------------
/*
function abc(a,b){
    console.log(a,b);
};
abc(1,3);
abc(() =>{console.log('a')}, function(){console.log('b')} );
// A function can pass functions


function abcd(){
    function sum(){
        console.log("I'm not a result I'm just a function");
    }
    return sum;
}
const result = abcd(); // Call abcd to get the inner function sum
console.log(result); // This will log the function definition of sum

// a function can return a function 
*/
// -------------------------Higher order Function -----------------------------------
// 1. A function that takes a function as parameter.
// 2. A function that returns a function as value.
/*
function abc(a,b){
    console.log(a,b);
};
abc(1,3);
abc(() =>{console.log('a')}, function(){console.log('b')} );
// A function can pass functions


function abcd(){
    function sum(){
        console.log("I'm not a result I'm just a function");
    }
    return sum;
}
const result = abcd(); // Call abcd to get the inner function sum
console.log(result); // This will log the function definition of sum

// These are also HOF
*/
/*
function spaceship(left, right, command){
    if (command ==="left"){
        left();
    }
    else if (command==="right"){
        right();
    }
    else{
        console.log("Invalid command");
    }
}

function alienLeft(){
    console.log("MF ML");
};
function alienRight(){
    console.log("MF MR");
};
spaceship(alienLeft,alienRight,"left");

function humanLeft(){
    console.log("ML");
};
function humanRight(){
    console.log("MR");
};
spaceship(humanLeft,humanRight,"right");
spaceship(humanLeft,humanRight,"destroy");
*///HOF

// ------------------------- call back functions ----------------------------
// any function that you give to a 
//  humanRight, humanLeft -> call back functions 


abc();//this will raise an error 
var abc=()=>{
    console.log("hello")
}

abc();//but this will not 