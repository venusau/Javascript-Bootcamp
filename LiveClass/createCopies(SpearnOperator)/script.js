
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
const newArray=[...arr];//using the (...) -> spread operator 
console.log(newArray);
console.log(arr==newArray);


// ---------- Deep copy and Shallow Copy ------------------
const person={
    name:"vicky",
    class:"12",
    address:
    {
        street:"road 44",
        pincode:700129,
        houseNumber:"P-47"
    }
};

const copyPerson={
    ...person
};
copyPerson.address.pincode=700130;
console.log(person,"person");
console.log(copyPerson,"copy Person");
// this shallow copy 

const copyPerson2=JSON.parse(JSON.stringify(person));
copyPerson2.address.pincode=700129;
console.log(copyPerson2,"copy Person 2");
//deep copy 