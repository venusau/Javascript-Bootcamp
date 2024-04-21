

class Person {
  name;
  age;
  constructor (name, age, country="India"){
    this.name=name;
    this.oldage= age;
    this.country=country;

  }

  //  METHODS
  canwalk(){
    console.log("hello... I can walk ", this.name)
  }
}

const vickyPerson= new Person("vicky", 22,);
console.log(vickyPerson);
vickyPerson.canwalk();

const arunPerson= new Person("arun", 25,"America");
console.log(arunPerson);
arunPerson.canwalk();
const utkarshPerson= new Person("utkarsh", 35);
console.log(utkarshPerson);
utkarshPerson.canwalk();
const basuPerson= new Person("basu", 16, "Italy");
console.log(basuPerson);
basuPerson.canwalk();