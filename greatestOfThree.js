//  Write a program to find the largest number among three numbers.

// Find Greatest of Three Numbers using IF ELSE


let num1=8;
let num2=9;
let num3=15;
let greatest;
console.log(`Greatest of Three Numbers ${num1} ${num2} ${num3}`)
if (num1>num2 && num1>num3){
    greatest=num1;
}else if(num2>num1 && num2>num3)
    greatest=num2

else{
    greatest=num3
}
console.log(greatest)


/* output : Greatest of Three Numbers 8 9 15
                         15*/
                         

// Find Greatest of Three Numbers Using Ternary

 num1=8;
 num2=9;
 num3=2
greatest;
console.log(`Greatest of Three Numbers ${num1} ${num2} ${num3}`)
greatest=num1>num2 ? num1 : (num2>num3 ? num2 : num3)
console.log(greatest)

/* output:
Greatest of Three Numbers 8 9 2
9
*/

function greatestOfThreeNumbers() {
    return num1>num2&& num1>num3 ? num1 : (num2>num3&&num2>num1 ? num2 : num3)
 }
 
  num1 = 5
  num2 = 8
  num3=9
 
 console.log(`Greatest of ${num1},${num2},${num3} is :`,greatestOfThreeNumbers(num1,num2,num3))

 // output: Greatest of 5,8,9 is : 9



 num1=-100;
 num2=50;
 num3=-500;
 let greatest;
console.log(`Greatest of Three Numbers ${num1} ${num2} ${num3}`)

greatest = num1>num2 && num1> num3?num1 : (num2>num3 ? num2 : num3)
console.log(greatest)

//Greatest of Three Numbers -100 50 -500
//50
