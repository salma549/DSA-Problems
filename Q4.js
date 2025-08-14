// Write Program to generate N Even Numbers

const N = 10

function generateNEven(N){

    let evenNumbers= []

    for(let i=0; evenNumbers.length<N; i+=2){

        evenNumbers.push(i)
    }

    return evenNumbers;

}


console.log(`${N} Even Numbers:`, generateNEven(N))