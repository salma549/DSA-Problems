// Write a program to find remainder of two numbers without using modulus (%) operator

function remainderWithoutModulus(Dividend, Divisor){

    if(Divisor===0){

        return "Cannot Divide by Zero"

    }else if(Dividend<Divisor){
      
        return "Dividend is less than Divisor"

    }

    while(Dividend>Divisor){

        Dividend = Dividend-Divisor
    }

    return Dividend;

}

console.log(remainderWithoutModulus(15,4))