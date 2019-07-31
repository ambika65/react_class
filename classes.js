class Human {
   gender= 'female';
  
  printGender=()=>{  /* when using EC7 (next generation javascript we make use of arrow function*/
    console.log(this.gender);
  }
}
class Person extends Human{ //extend keyword is must for using other class objects
  constructor(){
    super(); //using super for inheritance is mandatory
    this.name="maxwell";
    this.gender="male";
  }


  printMyName()
  {
  console.log(this.name);
  }
}
const person = new Person();
person.printMyName();
person.printGender();
