// ---------Parsing in js -------------
// let a = 12;
// we can write this is in two steps
// Example 1. 
// let a;//declaration
// a=12;//assignment
/*
1. parsing pahse 
2. execution phase
*/
// console.log(a);
// Example 2. 
// console.log(a);
// var a =12;
// it will not throw an error coz parsing phase declares the a wiht default value undefined 
// ----------------Hoisting --------------------------
/*
variable declaration and function declaration 
in js hoisting means declaration is brought on top of the file 
*/
/*
whenever executor sees a function it creates the 
1. fec-> execution context 
2. wait for the answer to come after execution 
*/
/*
return keyword destroys the first executor context 
return the value to the next eEC
*/
/*
const result = sum (1,2);
console.log(result);
console.log(a);
function sum(a,b){
    return a+b;
};
var a= 99;
// Answer: 3, undefined
*/

// ---------------Bqsic operations (assignment, operator )--------------
/*
console.log(1+20);
console.log(Math.pow(2,3));
// modulus --%
console.log(101%3);

// comparision ------------
console.log(1>2);
console.log(1<2);
console.log(1>=2);
console.log(1<=2);
console.log(1==2);//false
console.log(1!=2);

// ===, !==  they check the type also 
console.log(1===2);//false
console.log(1!==2);//true
console.log(1=="1");//true
console.log(1==="1");//false
*/
/*
// -----------------Basic programming ----------------
// 1. Conditions
condition=true 
if (condition==true){
    //run this portion 
}
else{
    //run this portion 
}
// -----------ternery operator -------------
(condition)?console.log("on true"):console.log("on false");

// -------- switch case operator --------
const a= 1;
switch (a){
    case 1:
        console.log("on case 1 ");
        break;
    case 2:
        console.log("on case 2 ");
        break;
    default:
        console.log("neither case 1 or 2 ");
        break;
}
*/
/*
// ----------------------------------Loops ---------------------------------
let arr=[1,2,3,4,5,6];

// for loop
for (let i =0; i<arr.length;i++)
{
    console.log(arr[i]);
}

//while loop
let i=0;
while (i<arr.length){
    console.log(arr[i]);
    i++;
}

// for in loop--> keys 

// for in loop is for the objects({}, []) and it's properties.(oject keys )
const obj={
    name:"vicky",
    age:20,
    address:"kolkata"
}
for (const key in obj){
    const value=obj[key]
    console.log(key," : ",value);
}
for (const key in obj){
    const value=obj[key]
    console.log(key+" : "+value);
}
const array=[12,43,65,87,9]
for (const key in array){
    const value=array[key]
    console.log(key," : ",value);
}

// for of loop --> values 

//iterable objects -> arrays are by default iterable objects 
// if your onject has symbol -> Symbol.iterator then it is iterable
// Objects are not iterable by default so (for of) loop will not work on them  
for(const items of array){
    console.log(items,"for of loop");
}
*/
// ----------------------Advanced parts of variable -----------------------
let name ="abcd";
var a= 12;
function abc(){
    var a=99;
}
abc();
