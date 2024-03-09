
const arr=[1,2,3,4,5];//abc@123//address
/* 1. Way 1
const arrCopy=[1,2,3,4,5];//abc@111--> address 
console.log(arr===arrCopy);//false
*/
//2. Way 2
/*
const newArray=[];


for (const item of arr ){
    newArray.push(item);
}
console.log(newArray);
console.log(arr==newArray);
*/
// Way 3 
const newArray=[...arr];//using the ... -> spread operator 
console.log(newArray);
console.log(arr==newArray);


// ---------- Deep copy and Shallow Copy ------------------