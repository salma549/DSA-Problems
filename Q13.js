// Write a program to find the Sum of Array Elements.

function sumArray(arr){

    let sum = 0

    for( let i = 0; i<arr.length; i++){

        sum = sum + arr[i]
    }

    return sum;


}

let array = [5,5,5,5,6]

console.log(`Sum of ${array} is: `, sumArray(array) )