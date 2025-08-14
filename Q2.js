// Write a program to Generate Even Numbers


const N = 10

function generateLessthanNEven(N){

    let evenNumbers = []

    for(let i=0; i<N; i+=2){

        evenNumbers.push(i)
    }

     return evenNumbers;

}

console.log(`Even numbers less than ${N}`, generateLessthanNEven(N))