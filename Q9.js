//  Write a program that prints the numbers from 1 to 100 and for multiples of '3' print "Fizz" instead of the number and for the multiples of '5' print "Buzz".


function FizzBuzz(){

    for( let i=0; i<=100; i++){
        if(i%3===0 && i%5===0){
            console.log("FizzBuzz")
        }else if(i%3===0){
            console.log("Fizz")

        }else if(i%5===0){
            console.log("Buzz")

        }else{
            console.log(i)
        }
    }

}

FizzBuzz()