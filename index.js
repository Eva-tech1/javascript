//using variables
var name="Eva Wangui"; //string data type
console.log(name);
//using let is used when you want to restrain variable in a given scope
let job ="A PLP student";
console.log(job);
//constant this are variables that dont change
const PI=3.14152; //number data type -floating number ie decimal or fraction
console.log(PI);
var age=23;//integer data type- whole number
//camelCase
 var firtName;
 //snakeCase
 var last_name;
 //boolean data types true or false {0 for false} {1 for true}
 var success= true;
 //null data type-empty or unknown value
 var balance= null;
 //undefined data type
 var last_name;
 console.log(last_name);
 //arithmetics
 // + addition
 // - subtraction
 // / division
 // ++ increment
 // -- decrement reduces value by 1
 // * multiplication
 // ** exponentiation
 // % remainder
 let x = 10;
 let y = 5;
 console.log(x+y);
 console.log(x-y);
 console.log(x/y);
 console.log(x++);

 //assignment operator
 // equal =
 //addition +=
 //remainder %=
 // division /=

 //comparison operators
 // equal ==
 //not equal !=
 //strict equal ==== checks value and data type
 //not strict equal !==
 //greater than>
 //less than<
 //greater than or equal to =>
 //less than or equal to =<
 
 var z = 5;
 var w = 7;
 console.log(z !==w);

 //arrays
 var cars =['BMW', 'MAZDA', 'AUDI', 'VOLVO'];
 //position starts from index 0
 cars[2]='Mercedes';
 cars.push ("Nissan");// adds element at the end
 cars.unshift("ford")// adds element at the beginning
 cars.pop();//removes last element
 cars.shift();//removes first element
console.log(cars[2]);
//conditional statements
var cash=500;
if(cash>1000){
  console.log("You have enough airtime");
}else if(cash==500){
 console.log ("You can buy something else");
}else{
  console.log("You have inssuficient balance");
}
///dictionary
var country = {"Kenya":"Nairobi", "USA": "Washington DC", "UK" : "London", "Australia" : "Sydney", "Canada" : "Toronto"};
console.log(country.Kenya);
console.log(country['Kenya']);







