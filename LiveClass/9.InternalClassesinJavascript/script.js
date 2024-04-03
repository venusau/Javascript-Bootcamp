let obj={
    name:"Vicky",
    class:9,
    rollNumber:12
};
console.log(obj.name, obj.rollNumber);

// ---------- Basic Class Oject -------------------
/*
Object is a base object class
Every Object in js is derived from Oject class (Arrays, Functions, Objects ) 
*/

// Object

// If  I want to have Key-value pairs

const keyValuePairs=Object.entries(obj);
console.log(keyValuePairs);

// If you only want keys 
const onlyKeys=Object.keys(obj);
console.log(onlyKeys);

// If you want only Values 
const onlyValues=Object.values(obj);
console.log(onlyValues);

// 