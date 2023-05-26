const numbers = [10,18,25,30,49,66];
//numbers.forEach(function(number, i){
  //  console.log(number, i);
//}
//)

//--------map()---------------

//const even = numbers.map(function(number){
  //  if(number%2===0){
   //     number=`${number} is even`;
   // }else{
   //     number=`${number} is not even`;
   // }
   //return number;
//})
//console.log(even);

//----------reduce()------------

//const sum = numbers.reduce(function(total, num){
//return (total+num);
//}, 0) 
//console.log(sum/numbers.length);

//-----------------filter()-------------------

//const result = numbers.filter(function(number){
  //  return number > 25;

//}); 
//console.log(result);

//--------------object------------


//const person={
   // firstName:"Alexandar", 
   // lastName:"Stoyanov", 
  //  age:"21", 
   // fullName: function() {
  //      return this.firstName + " " + this.lastName;
   // },
  //  yearOfBirth: function(){ 
    //    return new Date().getFullYear() - this.age
        
   // }
//}

///console.log(person.yearOfBirth())

//-----------class--------------

//class User{
    //constructor(firstName,lastName,age){
//this.firstName = firstName;
    //    this.lastName = lastName;
   //     this.age= age;
   // }
    //fullName() {
  //  return this.firstName + " " + this.lastName;
//}
//yearOfBirth(){ 
  //  return new Date().getFullYear() - this.age
    
//}
//}
//let person = new User( "Alexandar", "Stoyanov", "21") 
//console.log(person.fullName())



let text = document.getElementById("change").textContent;
let symbol = "e";
let times = 0;

for(i = 0 ; i < text.length; i++) {
  const letter = text.charAt(i);

  if (letter === symbol) {
      times++;
  }
}
console.log(times);