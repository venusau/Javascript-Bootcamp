// console.log("hey there");
// var maths=100;
// var physics=60;
// var sum=maths+physics;
// console.log(sum);

// //variable ------------------------------------- naming 
// // In modern js we use let and const 
// // do not use var 
// // camel case , snake caseing and pascal casing 
// // in old js -> before es6 -> ecma script version 6 
// //modern js -> es6 and after 
// //in modern js let and const are introduced . before that we only had var 
// const pi= 3.14
// // i cannot change the constant variable 
// //canst abd; const variable must be initialised as well in the same line of declaration 
// let math=28 ;
// math =82 ;
// console.log("maths marks :", math);
// //so basically with let  ->  we can update the variable but with const  ->   we cannot 

// //var -> we can also update like let 
// let score=310;

// let str1="The score is 290";
// var str2="the score is 290 ";
// const str3=`the score is ${score} `;
// //i'll not be writting the score everytime , so for that i'll be usind ${} and the string should be enclosed 
// // withing -> `-----` -> backticks 
// //{} inside we can keep anything javascript 


// console.log(str1)
// console.log(str2)
// console.log(str3)

// // -=------ data types ------------

// // 1. numbers
// let grades = 9.5;
// let num =100 ;
// // 2. bigInt

// var bigInt= 1325346344634;

// // 3. string
// var name = "vicky"; 
// var nm = 'vicky';
// var n= `name ${nm}`;

// // NOTE: there is no character support in js , instead it's about strings 

// // 4. boolean 
// const isSunHot=true;

// // 4. Null 

// const isHeLying = null ;

// console.log("isHeLying :", isHeLying);

// 5. undefined 

// let myVar;
// let myVar2= undefined ;
// console.log("myVar: ", myVar);// undefined is the default value of a variable , but this is not good practice in js 
// console.log("myVar2: ", myVar2);// this should also not to be done as a developer 

// 6. OBJECTS(Arrays, Objects, Functions ) :
// ojects : stores key value pairs and it can also store objects inside it like this 

// const myVicky= {
//     name:"Vicky",
//     age:20,
//     rollNo:36,
//     address : {
//         pincode:700129,
//         street:"Vivekananda sarani ",
//         district: "north 24 parganas"
//     },
//     subjects :["maths", "physics", "english"]
// };
// // for the key address : --> there is a whole object as value 
// // a key can also take arrays where the key subjects ---> stores all the subjects in form of arrays 

// console.log(myVicky);

// const array = [1,2,3,4,5];// this is also a special type of object too 
// console.log(array);
// // and same goes for arrays too ----> it aalso store anything --> it can also store arrays and also objects 
// console.log(array[3]);
//for accessing the elements in the array 

// -----------------------------------------------------------------------------
//  this can also be done coz like python there is no strictness of the variable data type 
// var abc = 1 ;

// console.log("1.", abc);

// abc ="taj mahal";

// console.log("2.", abc);

//  abc = true ;

// console.log("3.", abc);

// // But this is nopt applicable coz the type is const -> constant not a var or a let type 

// // const ab= 1 ;
// // console.log("1.", ab);

// // ab="taj mahal";

// // console.log("2.", ab);

// //  ab= true ;

// // console.log("3.", ab);

// // ----- typeof keyword ------
// typeOf=typeof abc ;
// console.log(typeof abc );
// console.log(typeOf );

// let num1=1;
// console.log(typeof num1);
// let variable;
// console.log(typeof variable);
// variable=null ;
// console.log(typeof variable);// object --> it is a bug 
// it should habve been null but it's object which is a bug 

// ---------------- Primitive and Non Primitve data types ------------

// Primitive (data created in the stack memory )\
// 1. int
// 2. BIgInt 
// 3. Boolean 
// 4. null 
// 5. undefined 
// 6. String // string is not stored in stack but still it's a primitive type coz of String pool 

//Non primitive (data stored in the HEAP)
// 1. arrays 
// 2. Functions 
// 3. Objects 


// ---------- Coercion (conversion )------------

//--------------- Rule 1. in programming languages the + operator has two meaning -----------------------
// 1.math addition
// 2. String concatenation ( adding two strings )

// with String -> + always mean concatenation 
// NOTE: String + Anything is always a String 
console.log("abc"+"de");//"abcde"
console.log("1"+"hello");//"1hello"
console.log(1+"1");//"11"
console.log(""+[1,2,3,4,5]);//"1,2,3,4,5" --> special case 
console.log(""+{})//"[object Object]" -->special case 
console.log("abc"+true);//"abctrue"
console.log("abc"+null);//"abcnull"
console.log("abc"+undefined);//"abcundefined"

// ------------------ Rule 2. String to integer-------------

let str = "12";
console.log(+str);//it should not be done but it will give output as integer using  + --> operator 
//  but you should refrain from this syntax

console.log(Number(str));// it should be done instead of + operator using Number() 
console.log(parseInt(str));// you can use parseInt() too . We will be talking about redix in future
str ="12as";
console.log(Number(str));//NaN --> not a number --> it cannot be converted into a number 

// -------------- Rule 3. String with (*, /, -, %) -------------------

const mult= "3"*"3";
const divide="6"/"3";
const minus = "3"-"1";
const modulus="103"%"50";
console.log(mult,'mult');//9
console.log(divide,'divide');//2
console.log(minus,',minus');//2
console.log(modulus,'modulus');//3