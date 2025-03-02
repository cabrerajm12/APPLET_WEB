//string
let name = "Jm Cabrera";

//integer
let number = 15;

//boolean
let inCorrect = true;

//undefineds
let surname;

//null
let firstname = null;

//B. Arithmetic and Logical Operators
//addition
let x = 10;
let y = 10;

let sum = x + y;
let diff = x - y;
let prod = x * y;
let quo = x / y;

console.log("the sum is " + sum);
console.log("the difference is " + diff);
console.log("the product is " + prod);
console.log("the quotient is " + quo);

//logical

let num1 = 2;
let num2 = 4;

let result1 = num1 += 20;
let result2 = num1 -= 20;
let result3 = num1 *= 20;
let result4 = num1 /= 20;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

//C. Condition statements

// if statement
let tomorrow = new Date().getDate();
let greetings, greet;
if(tomorrow < 18){
greetings = "Have a nice day";
}
    console.log(greetings);

    //if else statement
    if (tomorrow > 15){
        greet = "good morning";
    }
    else{
        greet = "you too";
    }
    console.log(greet);

    // else if statement
    if (tomorrow > 15){
        variable = "hi guys";
    }else if(tomorrow < 15){
        variable = "welcome to my Github";
    }else{
        variable ="have a nice look";
    }
    console.log(variable);

    //switch statement
let week = 3;
let greeting;

switch(week){
    case 1:
        greeting = "hi guys welcome to my Github";
        break;
    case 2:
        greeting = "today we going to do the activity";
        break;
    case 3:
        greeting = "were going to finish the activity";
        break;    
}
console.log(greeting);

//loops
// for loop

for(let n=0; n < 10; n++ ){
    console.log(n);
}

//while loop
let n = 0;
while(n < 10){
    n++;
}
console.log("numbers are: " + n);

//do while loop

let i = 0;
do{
    console.log("number are:" + i);
    i++;
}while(i < 10);

//E. functional programming

//I. Determine a number if it is odd or even

function oddOrEven(num){
    return num % 3 === 0 ? "Even" : "Odd";
}
console.log(oddOrEven(21));
console.log(oddOrEven(12));

//II. Determine a number if it is prime number

function prime(number){

    let variable = true;
    if(number <= 1){
        variable = false;
    }
    for( let n = 2; n * n <= number; n++ ){
        check = false;
        break;
    }
if(variable){
    console.log(number + "is a prime number");
}else{
    console.log(number+" is not a prime number");
}
}
prime(10);
prime(5);

//III. Determine a string if it is a palindrome
function palin(pal) {
    let j = pal.length - 1;
    for( let n = 0; n < pal.length / 2; n++){
        if(pal[n] != pal[j]){
            return false;
        }
        j++;
    }
    return true;
}
let pal1 = "Jm Cabrera";
let pal2 = 2;
let pal3 = "Yanyan";

console.log(palin(pal1));
console.log(palin(pal2));
console.log(palin(pal3));
