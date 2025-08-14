//  Write a program to find GCD (Greatest Common Divisor) or HCF (Highest Common Factor) of two numbers is the largest number that divides both of them using recursion. 


function GCD(a,b){

    if(b===0){

        return a;
    }

  else{

      return GCD(b,a%b)
  }

}

let num1 = 150

let num2 = 35


console.log(GCD(num1, num2))