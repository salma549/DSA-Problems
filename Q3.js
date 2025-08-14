// Write a program to Generate Odd Numbers


const N = 10

function generateLessthanNOdd(){

    let oddNumbers = []

    for(let i=1; i<N; i+=2){

        oddNumbers.push(i)

    }

    return oddNumbers;

}

console.log(`Even numbers less than ${N}`, generateLessthanNOdd(N))