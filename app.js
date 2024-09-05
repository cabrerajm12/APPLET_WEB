//Data types 

let name = "JM";
let number = 12;
let isDefault = false;
//undefined
let nickname;
//null
let surname = null;


//arithmetic and logical operators 
let x = 2;
let y = 5;
//addtion 
let result1 = x + y;
console.log(result1);
//subtraction
let result2 = x - y;
console.log(result2);
//multiplcation
let result3 = x * y;
console.log(result3);
//division
let result4 = x / y;
console.log(result4);
//logical

let num1 = 4;
num1 += 6;
console.log(num1);

let num2 = 4;
num2 -= 6;
console.log(num2);
 

let num3 = 4;
num3 *= 6;
console.log(num3);


let num4 = 4;
num4 /= 6;
console.log(num4);

//conditional statements
// if statements
let today = new Date() ;
let greetings;
if(today < 10) {
   greetings = "HI goodmorning";
}
console.log(greetings);

if(today < 10) {
    greet = "HI ";
 } 
 else if (today > 9){
    greet = "hello";

 }
 console.log(greet);

 if(today < 7) {
    gr = "how are you ";
 } 
 else if (today > 9){
    gr = "im fine thankyou";

 } else {
    gr = "im not okay";
 }
 console.log(gr);

 // switch 

 let date = 5;