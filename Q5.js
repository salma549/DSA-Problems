// Write Program to generate N Odd Numbers

const N = 10

function generateNOdd(N){

    let oddNumbers= []

    for(let i=1;oddNumbers.length<N; i+=2){

       oddNumbers.push(i)
    }

    return oddNumbers;

}


console.log(`${N} Odd Numbers:`, generateNOdd(N))